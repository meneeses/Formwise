// components/badge.tsx
export default function Badge({ children }: { children: React.ReactNode }) {
return (
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs opacity-80">
{children}
</span>
);
}