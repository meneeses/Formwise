"use client";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation"; // preserva o locale

export default function Hero() {
  const t = useTranslations("Hero");

  const title = t.rich("headline", {
    accent: (chunks) => (
      <span className="text-[rgb(var(--accent))]/90">{chunks}</span>
    )
  });

  return (
    <section className="relative min-h-[100svh] flex items-center">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-fade-mask" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 pt-16 md:grid-cols-2 md:pt-20 pb-24">
        {/* Esquerda */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08, duration: 0.35 }}
            className="mt-4 max-w-2xl text-[rgb(var(--muted))]"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.14, duration: 0.35 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link href="/templates" className="btn btn-primary">
              {t("ctaTemplates")}
            </Link>
            <Link href="/how-it-works" className="btn">
              {t("ctaHow")}
            </Link>
          </motion.div>
        </div>

        {/* Direita */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative"
        >
          <div className="card overflow-hidden p-0">
            <div className="flex items-center gap-2 border-b border-[rgb(var(--line)/0.08)] px-4 py-2">
              <span className="inline-block size-2.5 rounded-full bg-red-400/80" />
              <span className="inline-block size-2.5 rounded-full bg-yellow-400/80" />
              <span className="inline-block size-2.5 rounded-full bg-green-400/80" />
              <div className="ml-3 h-6 flex-1 rounded-md bg-[rgb(var(--fg)/0.05)] dark:bg-white/10" />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/site-exemplo.png"
              alt={t("imageAlt")}
              className="block w-full max-h-[460px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
