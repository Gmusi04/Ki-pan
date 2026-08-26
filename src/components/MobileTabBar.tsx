import { site } from "@/data/site";

const items = [
  { href: "#menu", label: "Menú", icon: "M4 6h16M4 12h16M4 18h16" },
  { href: site.mapsHref, label: "Llegar", icon: "M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", external: true },
  { href: site.phoneHref, label: "Llamar", icon: "M6 3h3l1.5 5-2 1.5a12 12 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2C10.5 21 3 13.5 3 5a2 2 0 0 1 2-2Z" },
];

export function MobileTabBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-line)] bg-[var(--color-cream)]/95 backdrop-blur-md md:hidden">
      <div className="flex items-stretch justify-around">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[var(--color-ink)]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d={item.icon} />
            </svg>
            <span className="text-[11px]">{item.label}</span>
          </a>
        ))}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
