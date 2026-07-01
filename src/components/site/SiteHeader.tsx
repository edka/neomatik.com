import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/music", label: "Music" },
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
  { to: "/press-kit", label: "Press Kit" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-[0.18em] text-foreground uppercase"
          onClick={() => setOpen(false)}
        >
          Neomatik
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-foreground md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-current transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline glass md:hidden">
          <nav className="container-x flex flex-col py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-2xl tracking-tight text-foreground"
                activeProps={{ className: "text-violet" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
