"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Badge from "./badge";
import type { Template } from "@/lib/data";

export default function TemplateCard({ t }: { t: Template }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="card overflow-hidden"
    >
      <Link href={`/templates/${t.slug}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={t.thumb} alt={`${t.title} thumbnail`} className="h-44 w-full object-cover" />
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold leading-tight">
              <Link href={`/templates/${t.slug}`}>{t.title}</Link>
            </h3>
            <p className="mt-1 text-sm text-[rgb(var(--muted))]">{t.category}</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold">R$ {t.price}</div>
            <div className="text-xs opacity-70">licença única</div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {t.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <Link className="btn btn-primary mt-4 w-full justify-center" href={`/templates/${t.slug}`}>
          Ver detalhes
        </Link>
      </div>
    </motion.article>
  );
}
