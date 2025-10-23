"use client";
import Image from "next/image";

type Props = {
  phone: string;
  message?: string;
  iconSrc?: string;
  size?: number; // tamanho do ícone em px (default 80)
};

export default function WhatsAppFAB({
  phone,
  message = "Olá! Vim do site Formwise Studio 😊",
  iconSrc = "/whatsapp.png",
  size = 80,
}: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="
        fixed z-50 print:hidden
        right-4 bottom-[calc(env(safe-area-inset-bottom)+16px)]
        md:right-6 md:bottom-[calc(env(safe-area-inset-bottom)+24px)]
        transition-transform hover:-translate-y-0.5 active:scale-95
      "
      style={{ width: size, height: size }}
    >
      <Image
        src={iconSrc}
        alt="WhatsApp"
        width={size}
        height={size}
        priority
      />
    </a>
  );
}
