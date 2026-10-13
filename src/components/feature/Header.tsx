import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUI } from "@/context/UIContext";
import { BRAND, NAV } from "@/mocks/brand";

const INSTITUTIONAL = [
  { label: "Contato", to: "/contato" },
  { label: "Dúvidas frequentes", to: "/duvidas" },
];

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openCart, openSearch, count } = useUI();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev || "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  const solid = scrolled || !overlay;
  const tone = solid ? "text-foreground-950" : "text-background-50";
  const iconBtn = "w-10 h-10 flex items-center justify-center cursor-pointer transition-opacity duration-200 hover:opacity-60";

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-[34px] z-50 transition-colors duration-500 ${
          solid
            ? "bg-background-100/95 backdrop-blur border-b border-background-300"
            : "bg-gradient-to-b from-black/40 via-black/15 to-transparent"
        } ${tone}`}
      >
        <div className="shell h-[62px] md:h-[82px] flex items-center justify-between gap-4">
          {/* Left — wordmark + mobile menu */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button
              className={`md:hidden ${iconBtn} -ml-2`}
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
            >
              <i className="ri-menu-line text-[20px]"></i>
            </button>
            <Link
              to="/"
              className="font-display text-[19px] md:text-[24px] tracking-[0.28em] whitespace-nowrap transition-opacity duration-200 hover:opacity-70"
              aria-label={`${BRAND.name} — início`}
            >
              {BRAND.name}
            </Link>
          </div>

          {/* Center — categories always visible on desktop */}
          <nav className="hidden md:flex items-center justify-center gap-9" aria-label="Principal">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `nav-link text-[12px] tracking-[0.18em] uppercase whitespace-nowrap ${
                    isActive ? "active" : ""
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          {/* Right — search + bag */}
          <div className="flex items-center justify-end gap-4 md:gap-6 flex-1">
            <button
              onClick={openSearch}
              className={`hidden md:inline-flex text-[12px] tracking-[0.18em] uppercase cursor-pointer transition-opacity duration-200 hover:opacity-60`}
              aria-label="Buscar"
            >
              Buscar
            </button>
            <button onClick={openSearch} className={`md:hidden ${iconBtn}`} aria-label="Buscar">
              <i className="ri-search-line text-[18px]"></i>
            </button>
            <button onClick={openCart} className={`relative ${iconBtn} -mr-2`} aria-label="Sacola">
              <i className="ri-shopping-bag-line text-[18px]"></i>
              {count > 0 && (
                <span className="absolute top-1 right-1 min-w-[16px] h-4 px-1 rounded-full bg-primary-600 text-background-50 text-[10px] flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-[59] bg-background-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="shell h-[62px] flex items-center justify-between border-b border-background-200">
          <span className="font-display text-[19px] tracking-[0.28em]">{BRAND.name}</span>
          <button onClick={() => setOpen(false)} className={`${iconBtn} -mr-2`} aria-label="Fechar menu">
            <i className="ri-close-line text-[20px]"></i>
          </button>
        </div>
        <nav className="shell py-8 flex flex-col" aria-label="Mobile">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="py-4 font-display text-2xl text-foreground-950 border-b border-background-200"
            >
              {n.label}
            </Link>
          ))}
          {INSTITUTIONAL.map((n) => (
            <Link key={n.to} to={n.to} className="py-4 text-[13px] tracking-[0.16em] uppercase text-foreground-600">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}