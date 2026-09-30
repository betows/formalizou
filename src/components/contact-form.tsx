"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { ArrowButton } from "@/components/arrow-button";
import { SERVICE_OPTIONS, STATES, whatsappLink } from "@/lib/site";

type Variant = "compact" | "full";

type Fields = {
  nome: string;
  telefone: string;
  email: string;
  estado: string;
  cidade: string;
  servico: string;
};

const empty: Fields = {
  nome: "",
  telefone: "",
  email: "",
  estado: "",
  cidade: "",
  servico: "",
};

function validate(fields: Fields, variant: Variant) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (fields.nome.trim().length < 2) errors.nome = "Informe seu nome.";
  const digits = fields.telefone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 11) {
    errors.telefone = "Informe um telefone com DDD.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Informe um e-mail válido.";
  }
  if (variant === "full") {
    if (!fields.estado) errors.estado = "Escolha o estado.";
    if (fields.cidade.trim().length < 2) errors.cidade = "Informe a cidade.";
    if (!fields.servico) errors.servico = "Escolha um assunto.";
  }
  return errors;
}

function messageFor(fields: Fields, variant: Variant) {
  const lines = [
    "Olá, Formalizou! Quero falar com um especialista.",
    `Nome: ${fields.nome.trim()}`,
    `Telefone: ${fields.telefone.trim()}`,
    `E-mail: ${fields.email.trim()}`,
  ];
  if (variant === "full") {
    lines.push(`Estado: ${fields.estado}`, `Cidade: ${fields.cidade.trim()}`, `Interesse: ${fields.servico}`);
  } else {
    lines.push("Interesse: Abertura de empresa");
  }
  return lines.join("\n");
}

export function ContactForm({
  variant,
  idPrefix,
}: {
  variant: Variant;
  idPrefix: string;
}) {
  const reactId = useId();
  const base = `${idPrefix}-${reactId}`;
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [link, setLink] = useState<string | null>(null);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields, variant);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    const href = whatsappLink(messageFor(fields, variant));
    setLink(href);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  if (link) {
    return (
      <div className="rounded-2xl bg-cream p-5 text-ink">
        <p className="font-display text-2xl text-ink">Mensagem pronta.</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Abrimos o WhatsApp com os seus dados. Se a janela não apareceu, use o botão abaixo.
        </p>
        <ArrowButton href={link} className="mt-4">
          Continuar no WhatsApp
        </ArrowButton>
        <button
          type="button"
          className="mt-3 block text-sm text-ink-soft underline"
          onClick={() => {
            setLink(null);
            setFields(empty);
          }}
        >
          Enviar outro contato
        </button>
      </div>
    );
  }

  const compact = variant === "compact";
  const inputClass = compact
    ? "w-full rounded-xl border border-line bg-cream px-3 py-2 text-sm text-ink outline-none placeholder:text-ink-soft/70"
    : "w-full rounded-xl border border-line bg-cream px-3.5 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/70";

  return (
    <form onSubmit={onSubmit} noValidate className={compact ? "grid gap-2" : "grid gap-3"}>
      <Field label="Nome" id={`${base}-nome`} error={errors.nome} compact={compact}>
        <input
          id={`${base}-nome`}
          name="nome"
          autoComplete="name"
          value={fields.nome}
          onChange={(event) => update("nome", event.target.value)}
          className={inputClass}
          placeholder="Seu nome"
        />
      </Field>
      <Field label="Telefone" id={`${base}-telefone`} error={errors.telefone} compact={compact}>
        <input
          id={`${base}-telefone`}
          name="telefone"
          autoComplete="tel"
          inputMode="tel"
          value={fields.telefone}
          onChange={(event) => update("telefone", event.target.value)}
          className={inputClass}
          placeholder="(48) 99999-0000"
        />
      </Field>
      <Field label="E-mail" id={`${base}-email`} error={errors.email} compact={compact}>
        <input
          id={`${base}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={(event) => update("email", event.target.value)}
          className={inputClass}
          placeholder="voce@empresa.com"
        />
      </Field>
      {variant === "full" ? (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Estado" id={`${base}-estado`} error={errors.estado}>
              <select
                id={`${base}-estado`}
                name="estado"
                value={fields.estado}
                onChange={(event) => update("estado", event.target.value)}
                className={inputClass}
              >
                <option value="">Selecione</option>
                {STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Cidade" id={`${base}-cidade`} error={errors.cidade}>
              <input
                id={`${base}-cidade`}
                name="cidade"
                autoComplete="address-level2"
                value={fields.cidade}
                onChange={(event) => update("cidade", event.target.value)}
                className={inputClass}
                placeholder="Sua cidade"
              />
            </Field>
          </div>
          <Field label="Serviço" id={`${base}-servico`} error={errors.servico}>
            <select
              id={`${base}-servico`}
              name="servico"
              value={fields.servico}
              onChange={(event) => update("servico", event.target.value)}
              className={inputClass}
            >
              <option value="">O que você precisa?</option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </>
      ) : null}
      <ArrowButton type="submit" className="mt-1 w-full justify-between">
        {variant === "compact" ? "Solicitar contato" : "Chamar no WhatsApp"}
      </ArrowButton>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  compact = false,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  compact?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={id} className={`grid text-sm ${compact ? "gap-1" : "gap-1.5"}`}>
      <span className="font-medium">{label}</span>
      {children}
      {error ? <span className="text-xs font-medium text-ink">{error}</span> : null}
    </label>
  );
}
