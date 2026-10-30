import { useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Layout from "@/components/feature/Layout";
import ProductCard from "@/components/base/ProductCard";
import Breadcrumb from "@/components/feature/Breadcrumb";
import Seo from "@/components/feature/Seo";
import { products, APPAREL_SIZES, SHOE_SIZES, type Product } from "@/mocks/products";
import { BRAND, COLLECTION_META, VIRTUAL_COLLECTIONS, type CollectionMeta } from "@/mocks/brand";

type SortKey = "novidades" | "preco-asc" | "preco-desc";
type Availability = "all" | "in" | "out";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "novidades", label: "Novidades primeiro" },
  { value: "preco-asc", label: "Preço: menor para maior" },
  { value: "preco-desc", label: "Preço: maior para menor" },
];

const ALL_META: CollectionMeta[] = [...COLLECTION_META, ...VIRTUAL_COLLECTIONS];

function pickProducts(slug: string): Product[] {
  if (slug === "linho") return products.filter((p) => p.linen);
  if (slug === "novidades") return products.filter((p) => p.isNew);
  if (slug === "mais-vendidos") return products.filter((p) => p.bestSeller);
  return products.filter((p) => p.category === slug);
}

export default function CollectionPage() {
  const { slug } = useParams();
  const location = useLocation();
  const fallbackSlug = location.pathname === "/novidades" ? "novidades" : "malhas";
  const resolvedSlug = slug ?? fallbackSlug;
  const meta = ALL_META.find((c) => c.slug === resolvedSlug);
  const items = pickProducts(resolvedSlug);

  const [sizeFilter, setSizeFilter] = useState<string[]>([]);
  const [colorFilter, setColorFilter] = useState<string[]>([]);
  const [availability, setAvailability] = useState<Availability>("all");
  const [sort, setSort] = useState<SortKey>("novidades");

  const sizeOptions = useMemo(() => {
    const names = new Set<string>();
    items.forEach((p) => p.sizes.forEach((s) => names.add(s)));
    const ordered = [...APPAREL_SIZES, ...SHOE_SIZES].filter((s) => names.has(s));
    const extra = [...names].filter((s) => !ordered.includes(s));
    return [...ordered, ...extra];
  }, [items]);

  const colorOptions = useMemo(() => {
    const names = new Set<string>();
    items.forEach((p) => p.colors.forEach((c) => names.add(c.name)));
    return Array.from(names);
  }, [items]);

  const toggle = (list: string[], value: string, setter: (v: string[]) => void) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const filtersActive = sizeFilter.length > 0 || colorFilter.length > 0 || availability !== "all";

  const clearFilters = () => {
    setSizeFilter([]);
    setColorFilter([]);
    setAvailability("all");
  };

  const filtered = useMemo(() => {
    const list = items.filter((p) => {
      if (sizeFilter.length > 0 && !p.sizes.some((s) => sizeFilter.includes(s))) return false;
      if (colorFilter.length > 0 && !p.colors.some((c) => colorFilter.includes(c.name))) return false;
      if (availability === "in" && !p.inStock) return false;
      if (availability === "out" && p.inStock) return false;
      return true;
    });

    const sorted = [...list];
    if (sort === "preco-asc") {
      sorted.sort((a, b) => (a.price ?? Number.MAX_SAFE_INTEGER) - (b.price ?? Number.MAX_SAFE_INTEGER));
    } else if (sort === "preco-desc") {
      sorted.sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
    } else {
      sorted.sort((a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)));
    }
    return sorted;
  }, [items, sizeFilter, colorFilter, availability, sort]);

  const chipClass = (active: boolean) =>
    `h-8 px-3 text-[11px] tracking-[0.1em] uppercase whitespace-nowrap cursor-pointer border rounded-full transition-colors duration-200 ${
      active
        ? "border-primary-500 text-primary-700 bg-primary-50"
        : "border-foreground-950/15 text-foreground-600 hover:border-foreground-950/40 hover:text-foreground-900"
    }`;

  if (!meta) {
    return (
      <Layout>
        <section className="shell py-28 md:py-40 text-center">
          <p className="eyebrow mb-4">Coleção não encontrada</p>
          <h1 className="font-display text-3xl md:text-4xl text-foreground-950">
            Esta categoria ainda não existe.
          </h1>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {COLLECTION_META.slice(0, 4).map((c) => (
              <Link key={c.slug} to={`/colecao/${c.slug}`} className="btn btn-outline">
                {c.title}
              </Link>
            ))}
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo title={`${meta.title} — ${BRAND.name} | ${BRAND.line}`} description={meta.intro} />

      {/* Abertura de coleção — mais baixa que a home */}
      <section className="relative w-full h-[240px] md:h-[380px] overflow-hidden bg-secondary-100">
        <img
          src={meta.heroImage}
          alt={`Coleção ${meta.title}`}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/5" />
        <div className="relative z-10 shell w-full h-full flex flex-col justify-end pb-7 md:pb-11 text-background-50">
          <p className="eyebrow !text-background-50/85">{meta.kicker}</p>
          <h1 className="font-display text-3xl md:text-6xl mt-2">{meta.title}</h1>
        </div>
      </section>

      <section className="shell pt-6 md:pt-8">
        <Breadcrumb items={[{ label: "Loja", to: "/colecao/malhas" }, { label: meta.title }]} />
        <p className="mt-4 md:mt-6 text-foreground-600 text-[14px] md:text-[15px] max-w-2xl leading-relaxed">
          {meta.intro}
        </p>
      </section>

      {/* Acesso rápido entre categorias */}
      <section className="shell mt-7 border-b border-background-200">
        <div className="tab-strip">
          {COLLECTION_META.map((c) => (
            <Link
              key={c.slug}
              to={`/colecao/${c.slug}`}
              className={`tab-strip-item ${c.slug === resolvedSlug ? "is-active" : ""}`}
            >
              {c.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Filtros + ordenação */}
      <section className="shell mt-6">
        <div className="border-b border-background-200 pb-5 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="eyebrow !text-[10px]">Tamanho</span>
              {sizeOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => toggle(sizeFilter, s, setSizeFilter)}
                  className={chipClass(sizeFilter.includes(s))}
                  aria-pressed={sizeFilter.includes(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="eyebrow !text-[10px]">Cor</span>
              {colorOptions.map((c) => (
                <button
                  key={c}
                  onClick={() => toggle(colorFilter, c, setColorFilter)}
                  className={chipClass(colorFilter.includes(c))}
                  aria-pressed={colorFilter.includes(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="eyebrow !text-[10px]">Disponibilidade</span>
              <button
                onClick={() => setAvailability(availability === "in" ? "all" : "in")}
                className={chipClass(availability === "in")}
                aria-pressed={availability === "in"}
              >
                Disponível
              </button>
              <button
                onClick={() => setAvailability(availability === "out" ? "all" : "out")}
                className={chipClass(availability === "out")}
                aria-pressed={availability === "out"}
              >
                Esgotado
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[12px] text-foreground-500">
              {filtered.length} {filtered.length === 1 ? "peça" : "peças"}
              {filtersActive ? " com os filtros aplicados" : " nesta categoria"}
            </p>
            <div className="flex items-center gap-4">
              {filtersActive && (
                <button
                  onClick={clearFilters}
                  className="text-[11px] tracking-[0.14em] uppercase text-primary-700 border-b border-primary-500 pb-0.5 cursor-pointer transition-opacity hover:opacity-70"
                >
                  Remover filtros
                </button>
              )}
              <span className="select-wrap">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  aria-label="Ordenar"
                  className="field !h-10 !text-[12px] !border-foreground-950/15"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <i className="ri-arrow-down-s-line select-chevron text-[13px]"></i>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grade */}
      <section className="shell pt-8 md:pt-12 pb-20 md:pb-28">
        {filtered.length > 0 ? (
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-9 md:gap-y-14"
            data-product-shop
          >
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border border-dashed border-foreground-950/15 rounded-sm">
            <p className="font-display text-2xl text-foreground-950">Nenhuma peça com esses filtros.</p>
            <p className="mt-3 text-foreground-500 text-[14px]">
              Ajuste os filtros ou veja a categoria inteira.
            </p>
            <button onClick={clearFilters} className="btn btn-outline mt-7">
              Remover filtros
            </button>
          </div>
        )}
      </section>

      {/* Outras categorias */}
      <section className="bg-background-100 border-t border-background-200">
        <div className="shell py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-foreground-950">Continue pela loja</h2>
            <Link to="/looks" className="link-underline text-[11px] tracking-[0.16em] uppercase">
              Ver combinações de looks
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {COLLECTION_META.filter((c) => c.slug !== resolvedSlug)
              .slice(0, 4)
              .map((c) => (
                <Link key={c.slug} to={`/colecao/${c.slug}`} className="group relative block cursor-pointer">
                  <div className="w-full aspect-[4/3] overflow-hidden bg-secondary-100">
                    <img
                      src={c.heroImage}
                      alt={c.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/25" />
                  <span className="absolute bottom-4 left-4 font-display text-background-50 text-lg md:text-xl">
                    {c.title}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}