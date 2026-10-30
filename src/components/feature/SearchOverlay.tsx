import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useUI } from "@/context/UIContext";
import { products } from "@/mocks/products";
import { COLLECTION_META, VIRTUAL_COLLECTIONS } from "@/mocks/brand";

const CATEGORY_LINKS = [
  ...COLLECTION_META.slice(0, 6).map((c) => ({ label: c.title, to: `/colecao/${c.slug}` })),
  ...VIRTUAL_COLLECTIONS.filter((c) => c.slug !== "mais-vendidos").map((c) => ({
    label: c.title,
    to: `/colecao/${c.slug}`,
  })),
];

export default function SearchOverlay() {
  const { searchOpen, closeSearch } = useUI();
  const [q, setQ] = useState("");
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (searchOpen) {
      setMounted(true);
      const t = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(t);
    }
    setVisible(false);
    const t = setTimeout(() => setMounted(false), 260);
    return () => clearTimeout(t);
  }, [searchOpen]);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(s) ||
        p.categoryLabel.toLowerCase().includes(s) ||
        p.type.toLowerCase().includes(s) ||
        p.fabric.toLowerCase().includes(s) ||
        p.colors.some((c) => c.name.toLowerCase().includes(s))
    );
  }, [q]);

  const money = (n: number) => `R$ ${n.toLocaleString("pt-BR")}`;

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-background-50 flex flex-col transition-opacity"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition:
          "opacity 260ms cubic-bezier(0.22,1,0.36,1), transform 260ms cubic-bezier(0.22,1,0.36,1)",
      }}
      role="dialog"
      aria-label="Busca"
    >
      <div className="shell flex items-center gap-4 h-[82px] border-b border-background-200">
        <i className="ri-search-line text-[20px] text-foreground-500"></i>
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar peças, tecidos, cores ou categorias"
          aria-label="Buscar"
          className="flex-1 bg-transparent outline-none text-base md:text-2xl font-display placeholder:text-foreground-400"
        />
        <button
          onClick={closeSearch}
          aria-label="Fechar busca"
          className="w-10 h-10 -mr-2 flex items-center justify-center cursor-pointer transition-opacity hover:opacity-60"
        >
          <i className="ri-close-line text-[20px]"></i>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="shell py-9 md:py-14">
          {!q.trim() && (
            <>
              <p className="eyebrow mb-5">Categorias</p>
              <div className="flex flex-wrap gap-2.5">
                {CATEGORY_LINKS.map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    onClick={closeSearch}
                    className="px-4 py-2.5 text-[11px] tracking-[0.16em] uppercase border border-foreground-950/15 rounded-full transition-colors duration-200 hover:border-primary-500 hover:text-primary-600"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
              <p className="eyebrow mt-10 mb-5">Todas as peças</p>
            </>
          )}

          {q.trim() && (
            <p className="eyebrow mb-7">
              {results.length > 0 ? `Resultados (${results.length})` : "Resultados"}
            </p>
          )}

          {q.trim() && results.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-foreground-600 text-[15px]">
                Nada encontrado para “{q}”. Tente outro nome, tecido, cor ou categoria.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5 justify-center">
                {CATEGORY_LINKS.slice(0, 6).map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    onClick={closeSearch}
                    className="px-4 py-2.5 text-[11px] tracking-[0.16em] uppercase border border-foreground-950/15 rounded-full transition-colors duration-200 hover:border-primary-500 hover:text-primary-600"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
            {(q.trim() ? results : products).map((p) => (
              <Link
                to={`/produto/${p.slug}`}
                onClick={closeSearch}
                key={p.id}
                className="block cursor-pointer group"
              >
                <div className="w-full aspect-[4/5] bg-secondary-100 overflow-hidden">
                  <img
                    src={p.main}
                    alt={p.name}
                    className="w-full h-full object-cover object-top transition-opacity duration-300 group-hover:opacity-90"
                  />
                </div>
                <p className="mt-3 text-[13px] md:text-[14px] text-foreground-950 transition-colors group-hover:text-primary-600">
                  {p.name}
                </p>
                <p className="mt-1 text-[11px] text-foreground-500">
                  {p.categoryLabel} · {p.price === null ? "Sob consulta" : money(p.price)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}