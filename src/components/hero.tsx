// components/hero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center">
      {/* fundo sutil */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-fade-mask" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 pt-16 md:grid-cols-2 md:pt-20 pb-24">
        {/* coluna esquerda: texto/cta */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Sites{" "}
            <span className="text-[rgb(var(--accent))]/90">minimalistas</span>{" "}
            que destacam seu negócio.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.35 }}
            className="mt-4 max-w-2xl text-[rgb(var(--muted))]"
          >
            Escolha um template, envie seu conteúdo e publique com velocidade e
            qualidade. Visual limpo, performance e responsividade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.35 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link href="/templates" className="btn btn-primary">
              Ver templates
            </Link>
            <Link href="/como-funciona" className="btn">
              Como funciona
            </Link>
          </motion.div>
        </div>

        {/* coluna direita: mock da página (uma imagem única) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative"
        >
          <div className="card overflow-hidden p-0">
            {/* barra de “navegador” */}
            <div className="flex items-center gap-2 border-b border-[rgb(var(--line)/0.08)] px-4 py-2">
              <span className="inline-block size-2.5 rounded-full bg-red-400/80" />
              <span className="inline-block size-2.5 rounded-full bg-yellow-400/80" />
              <span className="inline-block size-2.5 rounded-full bg-green-400/80" />
              <div className="ml-3 h-6 flex-1 rounded-md bg-[rgb(var(--fg)/0.05)] dark:bg-white/10" />
            </div>
            {/* imagem do “site” */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/site-exemplo.png"
              alt="Prévia de um site moderno"
              className="block w-full max-h-[460px] object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="absolute inset-x-0 bottom-6 flex justify-center"
      >
        <a
          href="#templates"
          className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm
                     ring-1 ring-[rgb(var(--fg)/0.12)] hover:ring-[rgb(var(--fg)/0.2)]
                     bg-[rgb(var(--fg)/0.04)] dark:bg-white/5 transition"
          aria-label="Rolar para templates"
        >
          <span>Explorar</span>
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            aria-hidden="true"
          >
            ⬇️
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
