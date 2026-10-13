import { useMemo, useState } from "react";
import Layout from "@/components/feature/Layout";
import ProductCard from "@/components/base/ProductCard";
import Breadcrumb from "@/components/feature/Breadcrumb";
import Seo from "@/components/feature/Seo";
import { products, SIZES, type Product } from "@/mocks/products";
import { COLLECTIONS } from "@/mocks/brand";

type CollectionViewProps = {
  title: string;
  kicker: string;
  intro: string;
  heroImage: string;
  items: Product[];
};

type Availability = "all" | "in" | "out";
type SortKey = "novidades" | "preco-asc" | "preco-desc";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "novidades", label: "Novidades primeiro" },
  { value: "preco-asc", label: "Preço: menor para maior" },
  { value: "preco-desc", label: "Preço: maior para menor" },
];

export function CollectionView({ title, kicker, intro, heroImage, items }: CollectionViewProps) {
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);
  const [colorFilter, setColorFilter] = useState<string[]>([]);
  const [availability, setAvailability] = useState<Availability>("all");
  const [sort, setSort] = useState<SortKey>("novidades");

  const colorOptions = useMemo(() => {
    const names = new Set<string>();
    items.forEach((p) => p.colors.forEach((c) => names.add(c.name)));
    return Array.from(names);
  }, [items]);

  const toggle = (list: string[], value: string, setter: (v: string[]) => void) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const filtersActive =
    sizeFilter.length > 0 || colorFilter.length > 0 || availability !== "all";

  const clearFilters = () => {
    setSizeFilter([]);
    setColorFilter([]);
    setAvailability("all");
  };

  const filtered = useMemo(() => {
    let list = items.filter((p) => {
      if (sizeFilter.length > 0 && !p.sizes.some((s) => sizeFilter.includes(s))) return false;
      if (colorFilter.length > 0 && !p.colors.some((c) => colorFilter.includes(c.name))) return false;
      if (availability === "in" && !p.inStock) return false;
      if (availability === "out" && p.inStock) return false;
      return true;
    });

    list = [...list];
    if (sort === "preco-asc") {
      list.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    } else if (sort === "preco-desc") {
      list.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
    } else {
      list.sort((a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)));
    }
    return list;
  }, [items, sizeFilter, colorFilter, availability, sort]);

  const chipClass = (active: boolean) =>
    `h-9 px-3 text-[11px] tracking-[0.12em] uppercase whitespace-nowrap cursor-pointer border rounded-full transition-colors duration-200 ${
      active
        ? "border-primary-500 text-primary-700 bg-primary-50"
        : "border-foreground-950/15 text-foreground-600 hover:border-foreground-950/40 hover:text-foreground-900"
    }`;

  return (
    <Layout>
      <Seo title={`${title} — TRAMA`} description={intro} />

      {/* Cabeçalho de coleção — imagem menor que a da home */}
      <section className="relative w-full h-[260px] md:h-[400px] overflow-hidden bg-secondary-100">
        <img
          src={heroImage}
          alt={`Coleção ${title}`}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        <div className="relative z-10 shell w-full h-full flex flex-col justify-end pb-8 md:pb-12 text-background-50">
          <p className="eyebrow !text-background-50/80">{kicker}</p>
          <h1 className="font-display text-4xl md:text-6xl mt-2">{title}</h1>
        </div>
      </section>

      <section className="shell pt-6 md:pt-8">
        <Breadcrumb items={[{ label: title }]} />
        <p className="mt-4 md:mt-6 text-foreground-600 text-[14px] md:text-[15px] max-w-2xl leading-relaxed">
          {intro}
        </p>
      </section>

      {/* Barra de filtros e ordenação */}
      <section className="shell mt-8 md:mt-10">
        <div className="border-y border-background-200 py-5 flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="eyebrow !text-[10px]">Tamanho</span>
              {SIZES.map((s) => (
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
            <div className="flex items-center gap-3 flex-wrap">
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
            <div className="flex items-center gap-3 flex-wrap">
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
            </p>
            <div className="flex items-center gap-4">
              {filtersActive && (
                <button
                  onClick={clearFilters}
                  className="text-[12px] tracking-[0.14em] uppercase text-primary-700 border-b border-primary-500 pb-0.5 cursor-pointer transition-opacity hover:opacity-70"
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

      {/* Grade de produtos */}
      <section className="shell pt-10 md:pt-14 pb-20 md:pb-28">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14" data-product-shop>
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border border-dashed border-foreground-950/15 rounded-sm">
            <p className="font-display text-2xl text-foreground-950">Nenhuma peça com esses filtros.</p>
            <p className="mt-3 text-foreground-500 text-[14px]">
              Ajuste os filtros ou veja a coleção inteira.
            </p>
            <button onClick={clearFilters} className="btn btn-outline mt-7">
              Remover filtros
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
}

function collectionBySlug(slug: string) {
  return COLLECTIONS.find((c) => c.slug === slug)!;
}

export function Camisas() {
  const meta = collectionBySlug("camisas");
  const items = products.filter((p) => p.category === "camisas");
  return (
    <CollectionView
      title={meta.title}
      kicker={meta.kicker}
      intro={meta.intro}
      heroImage={meta.heroImage}
      items={items}
    />
  );
}

export function Polos() {
  const meta = collectionBySlug("polos");
  const items = products.filter((p) => p.category === "polos");
  return (
    <CollectionView
      title={meta.title}
      kicker={meta.kicker}
      intro={meta.intro}
      heroImage={meta.heroImage}
      items={items}
    />
  );
}

export function Novidades() {
  const meta = collectionBySlug("camisas");
  const items = products.filter((p) => p.isNew);
  return (
    <CollectionView
      title="Novidades"
      kicker="Últimas peças no site"
      intro="As peças mais recentes da coleção inicial, entre camisas e polos. Novas entradas acontecem aos poucos, à medida que ficam prontas."
      heroImage={meta.heroImage}
      items={items}
    />
  );
}

export default Camisas;