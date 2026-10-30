import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useUI } from "@/context/UIContext";
import { BRAND, NAV, NAV_GROUPS } from "@/mocks/brand";

const INSTITUTIONAL = [
  { label: "Contato", to: "/contato" },
  { label: "Dúvidas frequentes", to: "/duvidas" },
];

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const { openCart, openSearch, count } = useUI();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setShopOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setShopOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  const solid = scrolled || !overlay || shopOpen;
  const tone = solid ? "text-foreground-950" : "text-background-50";
  const iconBtn =
    "w-10 h-10 flex items-center justify-center cursor-pointer transition-opacity duration-200 hover:opacity-60";

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-[34px] z-50 transition-colors duration-300 ${
          solid
            ? "bg-background-50/97 backdrop-blur border-b border-background-200"
            : "bg-gradient-to-b from-black/45 via-black/15 to-transparent"
        } ${tone}`}
        onMouseLeave={() => setShopOpen(false)}
      >
        <div className="shell h-[62px] md:h-[82px] flex items-center justify-between gap-4">
          {/* Esquerda — menu mobile + assinatura da marca */}
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
              className="flex flex-col leading-none transition-opacity duration-200 hover:opacity-70"
              aria-label={`${BRAND.name} — início`}
            >
              <span className="font-display text-[19px] md:text-[24px] tracking-[0.28em] whitespace-nowrap">
                {BRAND.name}
              </span>
              <span className="hidden md:block mt-1 text-[8.5px] tracking-[0.3em] uppercase opacity-60 whitespace-nowrap">
                {BRAND.line}
              </span>
            </Link>
          </div>

          {/* Centro — navegação sempre visível no desktop */}
          <nav className="hidden md:flex items-center justify-center gap-8" aria-label="Principal">
            {NAV.map((n) =>
              n.label === "Loja" ? (
                <button
                  key={n.label}
                  onClick={() => setShopOpen((v) => !v)}
                  onMouseEnter={() => setShopOpen(true)}
                  className={`nav-link flex items-center gap-1.5 cursor-pointer ${
                    shopOpen ? "active" : ""
                  }`}
                  aria-expanded={shopOpen}
                  aria-haspopup="true"
                >
                  {n.label}
                  <i
                    className={`ri-arrow-down-s-line text-[13px] transition-transform duration-200 ${
                      shopOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
              ) : (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  onMouseEnter={() => setShopOpen(false)}
                >
                  {n.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Direita — busca + sacola */}
          <div className="flex items-center justify-end gap-4 md:gap-6 flex-1">
            <button
              onClick={openSearch}
              className="hidden md:inline-flex text-[12px] tracking-[0.18em] uppercase cursor-pointer transition-opacity duration-200 hover:opacity-60"
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

        {/* Mega menu */}
        <div
          className={`hidden md:block absolute left-0 right-0 top-full bg-background-50 border-b border-background-200 overflow-hidden transition-all duration-300 ${
            shopOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
        >
          <div className="shell py-9 grid grid-cols-12 gap-8">
            {NAV_GROUPS.map((group) => (
              <div key={group.title} className="col-span-2">
                <p className="eyebrow mb-4">{group.title}</p>
                <ul className="space-y-2.5">
                  {group.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="text-[14px] text-foreground-700 transition-colors duration-200 hover:text-primary-600"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-3 col-start-10">
              <Link to="/colecao/linho" className="group block cursor-pointer">
                <div className="w-full aspect-[4/3] overflow-hidden bg-secondary-100">
                  <img
                    src="https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20a%20man%20in%20a%20beige%20linen%20shirt%20and%20trousers%20in%20a%20sunlit%20stone%20courtyard%2C%20old%20money%20summer%20style%2C%20warm%20soft%20light%2C%20wide%20composition&width=900&height=675&seq=trama-mega-linho&orientation=landscape"
                    alt="Coleção de linho"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 eyebrow !text-accent-700">Coleção de linho</p>
                <p className="mt-1 text-[14px] text-foreground-950 flex items-center gap-2">
                  Ver as peças
                  <i className="ri-arrow-right-line text-[13px] transition-transform duration-300 group-hover:translate-x-1"></i>
                </p>
              </Link>
            </div>
          </div>

          <div className="border-t border-background-200">
            <div className="shell py-4 flex items-center justify-between gap-6">
              <div className="flex flex-wrap gap-6 text-[11px] tracking-[0.16em] uppercase">
                <Link to="/novidades" className="text-foreground-600 hover:text-primary-600 transition-colors">
                  Novidades
                </Link>
                <Link to="/colecao/mais-vendidos" className="text-foreground-600 hover:text-primary-600 transition-colors">
                  Mais vendidos
                </Link>
                <Link to="/looks" className="text-foreground-600 hover:text-primary-600 transition-colors">
                  Combinações de looks
                </Link>
              </div>
              <Link to="/looks" className="text-[11px] tracking-[0.16em] uppercase text-accent-700">
                Ver todos os looks
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
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

        <div className="h-[calc(100%-62px)] overflow-y-auto">
          <nav className="shell py-6" aria-label="Mobile">
            {NAV.filter((n) => n.label !== "Loja").map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="block py-3.5 font-display text-[22px] text-foreground-950 border-b border-background-200"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="shell pb-10">
            {NAV_GROUPS.map((group) => (
              <div key={group.title} className="mb-7">
                <p className="eyebrow mb-3">{group.title}</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {group.links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="py-2 text-[13px] text-foreground-700"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-t border-background-200 pt-5 flex flex-col gap-3">
              {INSTITUTIONAL.map((n) => (
                <Link key={n.to} to={n.to} className="text-[13px] tracking-[0.14em] uppercase text-foreground-600">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}