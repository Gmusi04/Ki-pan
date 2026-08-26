import Image from "next/image";

export type PhotoKind =
  | "concha"
  | "bread"
  | "coffee"
  | "wheat"
  | "interior"
  | "table"
  | "juice"
  | "storefront";

const icons: Record<PhotoKind, string> = {
  concha:
    "M12 3c-4 0-7 3-7 7 0 4 3 8 7 8s7-4 7-8c0-4-3-7-7-7Zm0 2c1.5 1.2 2.4 2.7 2.7 4.5M12 5c-1.5 1.2-2.4 2.7-2.7 4.5M6.3 11.2c1.9-.5 3.8-.5 5.7 0 1.9-.5 3.8-.5 5.7 0",
  bread:
    "M4 12c0-3.5 3-6 8-6s8 2.5 8 6-3 8-8 8-8-4.5-8-8Zm2.5-1.5c2 .8 3 .8 5.5 0m-2 0c2 .8 3 .8 5.5 0",
  coffee:
    "M5 9h11v5a5 5 0 0 1-5 5H9a4 4 0 0 1-4-4V9Zm11 1.5h1.5a2.5 2.5 0 0 1 0 5H16M8 5.5c0-.8.6-1 .6-1.8M12 5.5c0-.8.6-1 .6-1.8",
  wheat:
    "M12 21V6m0 0-2.5-2M12 6l2.5-2M12 9l-2.8-1.6M12 9l2.8-1.6M12 13l-2.8-1.6M12 13l2.8-1.6M12 17l-2.8-1.6M12 17l2.8-1.6",
  interior: "M4 20V9l8-5 8 5v11M4 20h16M9 20v-6h6v6M9 12h.01M15 12h.01",
  table: "M3 9h18M5 9l1 11h12l1-11M9 9V6a3 3 0 0 1 6 0v3",
  juice: "M8 3h8l-1 4H9L8 3Zm1 4-1 13.5A1.5 1.5 0 0 0 9.5 22h5a1.5 1.5 0 0 0 1.5-1.5L15 7M8 12h8",
  storefront: "M4 10V6l2-3h12l2 3v4M4 10h16M4 10l1 10h14l1-10M9 20v-5a3 3 0 0 1 6 0v5",
};

const labels: Record<PhotoKind, string> = {
  concha: "Concha",
  bread: "Pan",
  coffee: "Café",
  wheat: "Panadería",
  interior: "Interior",
  table: "Mesa",
  juice: "Bebida",
  storefront: "Fachada",
};

function Placeholder({
  label,
  kind,
  className,
}: {
  label: string;
  kind: PhotoKind;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-end overflow-hidden bg-gradient-to-br from-[#e8d3b3] via-[#dcc09a] to-[#c99a6c] ${className ?? ""}`}
    >
      <div className="grain-overlay" />
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <svg
          viewBox="0 0 24 24"
          className="h-16 w-16 md:h-24 md:w-24"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={icons[kind]} />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col gap-0.5 bg-[var(--color-ink)]/85 px-3 py-2 text-[var(--color-cream)]">
        <div className="flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.14em] md:text-xs">
          <span>Foto real pendiente</span>
          <span className="opacity-70">{labels[kind]}</span>
        </div>
        <p className="truncate text-[10px] normal-case tracking-normal text-[var(--color-cream)]/70">
          {label}
        </p>
      </div>
    </div>
  );
}

export function PhotoView({
  exists,
  src,
  alt,
  label,
  kind = "bread",
  className,
  priority,
  sizes,
}: {
  exists: boolean;
  src: string;
  alt: string;
  label?: string;
  kind?: PhotoKind;
  className?: string;
  priority?: boolean;
  sizes?: string;
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
  return <Placeholder label={label ?? alt} kind={kind} className={className} />;
}
