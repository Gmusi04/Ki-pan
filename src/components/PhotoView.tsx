import Image from "next/image";

export type PhotoKind =
  | "bottle"
  | "detail"
  | "lifestyle"
  | "packaging"
  | "flatlay"
  | "spray";

const icons: Record<PhotoKind, string> = {
  bottle:
    "M10 3h4M10.5 3v2.6c0 .5-.3.9-.7 1.2C8.7 7.7 8 9 8 10.8V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8.2c0-1.8-.7-3.1-1.8-4-.4-.3-.7-.7-.7-1.2V3M9.5 13.5h5",
  detail:
    "M12 3v3.5M9 8h6l1 2.5H8L9 8Zm-1 2.5h8V19a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-8.5Z",
  lifestyle:
    "M12 12.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-6.5 8c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5",
  packaging:
    "M4 8.5 12 4l8 4.5-8 4.5-8-4.5Zm0 0V17l8 4.5m0-8.5v8.5m0-8.5 8-4.5V17l-8 4.5",
  flatlay:
    "M4.5 4.5h15v15h-15v-15Zm3.5 3.5h2v2h-2v-2Zm5.5 0h2v2h-2v-2ZM8 13.5h2v2H8v-2Zm5.5 0h2v2h-2v-2Z",
  spray:
    "M12 3v2.5M9.3 4.3l1.1 1.6M14.7 4.3l-1.1 1.6M7.5 9c-1.7 1-2.8 2.9-2.8 5A7.3 7.3 0 0 0 12 21a7.3 7.3 0 0 0 7.3-7c0-2.1-1.1-4-2.8-5l-4.5-3-4.5 3Z",
};

const labels: Record<PhotoKind, string> = {
  bottle: "Frasco",
  detail: "Detalle",
  lifestyle: "Estilo de vida",
  packaging: "Empaque",
  flatlay: "Flat lay",
  spray: "Aplicación",
};

const DEFAULT_TINT: [string, string, string] = ["#0d211a", "#173328", "#24493a"];

function Placeholder({
  label,
  kind,
  className,
  tint,
  quiet,
}: {
  label: string;
  kind: PhotoKind;
  className?: string;
  tint?: [string, string, string];
  quiet?: boolean;
}) {
  const [from, via, to] = tint ?? DEFAULT_TINT;
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-end overflow-hidden ${className ?? ""}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${via}, ${to})` }}
    >
      <div className="grain-overlay" />
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <svg
          viewBox="0 0 24 24"
          className="h-14 w-14 md:h-20 md:w-20"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={icons[kind]} />
        </svg>
      </div>
      {!quiet && (
        <div className="relative z-10 flex flex-col gap-0.5 bg-[var(--color-ink)]/90 px-3 py-2 text-[var(--color-cream)]">
          <div className="flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.14em] md:text-xs">
            <span>Foto pendiente</span>
            <span className="opacity-70">{labels[kind]}</span>
          </div>
          <p className="truncate text-[10px] normal-case tracking-normal text-[var(--color-cream)]/70">
            {label}
          </p>
        </div>
      )}
    </div>
  );
}

export function PhotoView({
  exists,
  src,
  alt,
  label,
  kind = "bottle",
  className,
  priority,
  sizes,
  tint,
  quiet,
}: {
  exists: boolean;
  src: string;
  alt: string;
  label?: string;
  kind?: PhotoKind;
  className?: string;
  priority?: boolean;
  sizes?: string;
  tint?: [string, string, string];
  quiet?: boolean;
}) {
  if (exists) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "100vw"}
        className={`object-cover ${className ?? ""}`}
      />
    );
  }
  return <Placeholder label={label ?? alt} kind={kind} className={className} tint={tint} quiet={quiet} />;
}
