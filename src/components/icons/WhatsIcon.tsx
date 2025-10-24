// components/icons/WhatsIcon.tsx
export function WhatsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* balão + cauda + contorno geral */}
      <path d="M3.5 20.5l1.2-4.3A8.5 8.5 0 1 1 20.8 7.1 8.5 8.5 0 0 1 8.9 20.4l-4.4 1.2z" />
      {/* “phone ticks” internos — pensados pra legibilidade em 16–20px */}
      <path d="M16.2 12.6c-.2-.5-.7-.8-1.2-.9-.5-.1-1 .2-1.3.6-.3.5-.7 1.2-.8 1.3-.2.2-.5.3-.8.2-1-.3-1.9-.9-2.6-1.6S7.9 10.6 7.6 9.6c-.1-.3 0-.6.2-.8.1-.1.9-.5 1.3-.8.4-.3.6-.8.6-1.3-.1-.5-.5-1-.9-1.2-.4-.2-.9-.2-1.3 0-.9.5-1.6 1.4-1.8 2.4-.2 1 .1 2.2.8 3.4.9 1.5 2.2 2.8 3.7 3.7 1.2.7 2.4 1 3.4.8 1-.2 1.8-.9 2.4-1.8.2-.4.2-.9 0-1.4z" />
    </svg>
  );
}
