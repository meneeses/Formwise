"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Props = {
  phone: string;                
  defaultMsg?: string;           
  iconSrc?: string;              
  remember?: boolean;            
};

type Lead = { name: string; email: string; phone: string };

const STORAGE_KEY = "fw_whats_lead_v1";

export default function WhatsAppMini({
  phone,
  defaultMsg = "Olá! Vim do site Formwise Studio 😊",
  iconSrc = "/whatsapp.png",
  remember = true,
}: Props) {
  const [open, setOpen] = useState(false);
  const [lead, setLead] = useState<Lead>({ name: "", email: "", phone: "" });
  const [touched, setTouched] = useState<{ [K in keyof Lead]?: boolean }>({});

  // carrega do storage
  useEffect(() => {
    if (!remember) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Lead;
        setLead({
          name: parsed.name ?? "",
          email: parsed.email ?? "",
          phone: parsed.phone ?? "",
        });
      }
    } catch {}
  }, [remember]);

  // validações simples
  const emailOk = useMemo(() => {
    if (!lead.email) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email.trim());
  }, [lead.email]);

  const phoneDigits = useMemo(() => lead.phone.replace(/\D+/g, ""), [lead.phone]);
  const phoneOk = phoneDigits.length >= 10; // DDD + número (BR ~10/11)

  const nameOk = lead.name.trim().length >= 2;

  const formOk = nameOk && emailOk && phoneOk;

  function set<K extends keyof Lead>(key: K, value: Lead[K]) {
    setLead((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formOk) return;

    // salva
    if (remember) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(lead));
      } catch {}
    }

    // compõe mensagem
    const page = typeof window !== "undefined" ? window.location.href : "";
    const msg =
      `${defaultMsg}\n\n` +
      `*Nome:* ${lead.name}\n` +
      `*E-mail:* ${lead.email}\n` +
      `*Telefone:* ${lead.phone}\n` +
      `*Página:* ${page}`;

    const href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      {/* FAB */}
      <button
        type="button"
        aria-label={open ? "Fechar chat do WhatsApp" : "Abrir chat do WhatsApp"}
        onClick={() => setOpen((v) => !v)}
        className="
          fixed z-50 print:hidden
          right-4 bottom-[calc(env(safe-area-inset-bottom)+16px)]
          md:right-6 md:bottom-[calc(env(safe-area-inset-bottom)+24px)]
          transition-transform hover:-translate-y-0.5 active:scale-95
        "
        style={{ width: 72, height: 72 }}
      >
        <Image
          src={iconSrc}
          alt="WhatsApp"
          width={72}
          height={72}
          className="block object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,.18)]"
          priority
        />
      </button>

      {/* Mini-chat */}
      {open && (
        <div
          className="
            fixed z-50 print:hidden
            right-4 bottom-[calc(env(safe-area-inset-bottom)+96px)]
            md:right-6 md:bottom-[calc(env(safe-area-inset-bottom)+108px)]
            w-[min(92vw,360px)]
          "
        >
          <div className="rounded-2xl border border-[rgb(var(--line)/0.10)] bg-[rgb(var(--bg))] shadow-xl">
            <div className="flex items-center justify-between gap-2 border-b border-[rgb(var(--line)/0.08)] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[rgb(var(--brand))]/10 text-[rgb(var(--brand))]">💬</span>
                <div className="text-sm font-medium">Fale com a Formwise</div>
              </div>
              <button
                className="rounded-md px-2 py-1 text-sm text-[rgb(var(--muted))] hover:bg-[rgb(var(--fg)/0.06)] dark:hover:bg-white/10 transition"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <div>
                <label className="text-xs text-[rgb(var(--muted))]">Nome</label>
                <input
                  value={lead.name}
                  onChange={(e) => set("name", e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  className="mt-1 w-full rounded-xl border border-[rgb(var(--line)/0.12)] bg-transparent px-3 py-2 outline-none focus:border-[rgb(var(--line)/0.28)]"
                  placeholder="Como quer ser chamado(a)?"
                  required
                />
                {touched.name && !nameOk && (
                  <p className="mt-1 text-xs text-red-500">Digite seu nome.</p>
                )}
              </div>

              <div>
                <label className="text-xs text-[rgb(var(--muted))]">Telefone (WhatsApp)</label>
                <input
                  value={lead.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                  inputMode="tel"
                  className="mt-1 w-full rounded-xl border border-[rgb(var(--line)/0.12)] bg-transparent px-3 py-2 outline-none focus:border-[rgb(var(--line)/0.28)]"
                  placeholder="(11) 91234-5678"
                  required
                />
                {touched.phone && !phoneOk && (
                  <p className="mt-1 text-xs text-red-500">Digite um número válido (com DDD).</p>
                )}
              </div>

              <div>
                <label className="text-xs text-[rgb(var(--muted))]">E-mail</label>
                <input
                  value={lead.email}
                  onChange={(e) => set("email", e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  type="email"
                  className="mt-1 w-full rounded-xl border border-[rgb(var(--line)/0.12)] bg-transparent px-3 py-2 outline-none focus:border-[rgb(var(--line)/0.28)]"
                  placeholder="seu@email.com"
                  required
                />
                {touched.email && !emailOk && (
                  <p className="mt-1 text-xs text-red-500">E-mail inválido.</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!formOk}
                className="
                  btn btn-primary w-full justify-center
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                Enviar e abrir WhatsApp
              </button>

              <p className="text-[11px] text-[rgb(var(--muted))]">
                Ao enviar, abriremos uma conversa no WhatsApp com seus dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
