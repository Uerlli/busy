import { Link } from "react-router-dom";
import Layout from "@/components/feature/Layout";
import ProductCard from "@/components/base/ProductCard";
import Reveal from "@/components/base/Reveal";
import Seo from "@/components/feature/Seo";
import { products } from "@/mocks/products";
import { HOME, LOOKS, BRAND, COLLECTION_META } from "@/mocks/brand";

function byIds(ids: string[]) {
  return ids.map((id) => products.find((p) => p.id === id)).filter(Boolean) as typeof products;
}

export default function Home() {
  const bestSellers = byIds(HOME.bestSellerIds);
  const linenItems = byIds(HOME.linen.ids);
  const shoeItems = byIds(HOME.shoes.ids);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <Layout overlay>
      <Seo
        title="TRAMA — Chambre Quatre | Moda masculina"
        description="Moda masculina em tons sóbrios: malhas, polos, camisas de linho, alfaiataria, bermudas, casacos, mocassins e acessórios. A linha Chambre Quatre da TRAMA."
      />

      {/* 1. ABERTURA EDITORIAL */}
      <section className="relative w-full h-[86svh] min-h-[580px] md:h-[min(100vh,760px)] overflow-hidden bg-foreground-950">
        <img
          src={HOME.hero.image}
          alt="Modelo vestindo camisa de linho da linha Chambre Quatre"
          className="absolute inset-0 w-full h-full object-cover object-top hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/65" />

        <div className="relative z-10 shell w-full h-full flex flex-col justify-end pb-16 md:pb-24">
          <p className="eyebrow !text-background-50/85 mb-4">{HOME.hero.eyebrow}</p>
          <h1 className="font-display text-background-50 text-[32px] leading-[1.06] md:text-6xl lg:text-7xl max-w-4xl">
            {HOME.hero.title}
          </h1>
          <p className="mt-5 md:mt-6 text-background-50/85 text-[14px] md:text-[16px] max-w-xl leading-relaxed">
            {HOME.hero.line}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
            <Link to={HOME.hero.primaryCta.to} className="btn btn-primary w-full sm:w-auto">
              {HOME.hero.primaryCta.label}
            </Link>
            <Link to={HOME.hero.secondaryCta.to} className="btn btn-on-image w-full sm:w-auto">
              {HOME.hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden md:flex flex-col items-center gap-3 text-background-50/70">
          <span className="text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">Role</span>
          <span className="w-px h-10 bg-background-50/40" />
        </div>
      </section>

      {/* 2. ACESSO RÁPIDO ÀS CATEGORIAS */}
      <section className="border-b border-background-200 bg-background-50">
        <div className="shell">
          <div className="tab-strip py-1">
            {HOME.quickTabs.map((t) => (
              <Link key={t.to} to={t.to} className="tab-strip-item">
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIS VENDIDOS */}
      <section className="shell pt-14 md:pt-20 pb-14 md:pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-7 md:mb-10">
          <div>
            <p className="eyebrow mb-2.5">Seleção da casa</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground-950">Mais vendidos</h2>
          </div>
          <Link to="/colecao/mais-vendidos" className="link-underline text-[11px] tracking-[0.18em] uppercase">
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-9" data-product-shop>
          {bestSellers.slice(0, 8).map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 70}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. COMPRE POR CATEGORIA */}
      <section className="bg-background-100 border-y border-background-200">
        <div className="shell py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-7 md:mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-foreground-950">Compre por categoria</h2>
            <p className="text-[12px] text-foreground-500 max-w-xs">
              Dez categorias, do linho ao sobretudo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {HOME.categoryTiles.map((tile, i) => (
              <Reveal key={tile.to} delay={(i % 3) * 80}>
                <Link to={tile.to} className="group relative block cursor-pointer">
                  <div className="w-full aspect-[3/4] overflow-hidden bg-secondary-100">
                    <img
                      src={tile.image}
                      alt={tile.title}
                      title={`Categoria ${tile.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="font-display text-background-50 text-xl md:text-2xl">{tile.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-background-50/90 text-[10px] md:text-[11px] tracking-[0.18em] uppercase">
                      Explorar
                      <i className="ri-arrow-right-line text-[12px] transition-transform duration-300 group-hover:translate-x-1"></i>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {COLLECTION_META.slice(5).map((c) => (
              <Link
                key={c.slug}
                to={`/colecao/${c.slug}`}
                className="text-[12px] text-foreground-600 transition-colors hover:text-primary-600"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COLEÇÃO DE LINHO */}
      <section className="shell py-14 md:py-24">
        <Reveal>
          <Link to={HOME.linen.to} className="group block relative cursor-pointer">
            <div className="w-full h-[320px] md:h-[480px] overflow-hidden bg-secondary-100">
              <img
                src={HOME.linen.image}
                alt="Coleção de linho"
                title="Coleção de linho — Chambre Quatre"
                className="w-full h-full object-cover object-top transition-transform duration-[1000ms] ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-6 md:px-12 max-w-lg">
                <p className="eyebrow !text-background-50/85 mb-3">{HOME.linen.kicker}</p>
                <h2 className="font-display text-background-50 text-3xl md:text-5xl leading-tight">
                  {HOME.linen.title}
                </h2>
                <p className="mt-4 text-background-50/85 text-[13px] md:text-[14px] leading-relaxed max-w-md">
                  {HOME.linen.body}
                </p>
                <span className="btn btn-on-image mt-6 w-full sm:w-auto">
                  {HOME.linen.cta}
                  <i className="ri-arrow-right-line ml-2 text-[14px]"></i>
                </span>
              </div>
            </div>
          </Link>
        </Reveal>

        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-9" data-product-shop>
          {linenItems.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 6. COMBINAÇÕES DE LOOKS */}
      <section className="bg-primary-950 text-background-50">
        <div className="shell py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-7 md:mb-10">
            <div>
              <p className="eyebrow !text-background-50/60 mb-2.5">Combinações</p>
              <h2 className="font-display text-3xl md:text-4xl">Looks completos</h2>
            </div>
            <Link
              to="/looks"
              className="text-[11px] tracking-[0.18em] uppercase border-b border-background-50/60 pb-1 transition-opacity hover:opacity-70"
            >
              Ver todos os looks
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {LOOKS.map((look) => (
              <Link key={look.id} to="/looks" className="group block cursor-pointer">
                <div className="w-full aspect-[3/4] overflow-hidden bg-primary-900">
                  <img
                    src={look.image}
                    alt={look.title}
                    title={`Look ${look.title}`}
                    className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-[14px] md:text-[15px] text-background-50">{look.title}</h3>
                <p className="mt-1 text-[11px] md:text-[12px] text-background-50/60 leading-relaxed">
                  {look.note}
                </p>
                <p className="mt-2 text-[10px] tracking-[0.16em] uppercase text-background-50/50">
                  {look.productIds.length} peças
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NOVIDADES */}
      <section className="shell py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-7 md:mb-9">
          <div>
            <p className="eyebrow mb-2.5">Chegou agora</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground-950">Novidades</h2>
          </div>
          <Link to="/novidades" className="link-underline text-[11px] tracking-[0.18em] uppercase">
            Ver novidades
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-9" data-product-shop>
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 8. SAPATOS */}
      <section className="bg-background-100 border-y border-background-200">
        <div className="shell py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4 md:sticky md:top-[132px]">
              <p className="eyebrow mb-3">{HOME.shoes.kicker}</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground-950 leading-tight">
                {HOME.shoes.title}
              </h2>
              <p className="mt-4 text-foreground-600 text-[14px] leading-[1.85] max-w-sm">
                {HOME.shoes.body}
              </p>
              <Link to={HOME.shoes.to} className="link-underline mt-6 inline-block text-[11px] tracking-[0.18em] uppercase">
                {HOME.shoes.cta}
              </Link>
            </div>
            <div className="md:col-span-8 grid grid-cols-2 gap-x-4 md:gap-x-6 gap-y-9" data-product-shop>
              {shoeItems.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. A LINHA / MARCA */}
      <section className="shell py-14 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <Reveal className="md:col-span-6">
            <div className="w-full aspect-[4/5] max-h-[600px] overflow-hidden bg-secondary-100">
              <img
                src={HOME.brand.image}
                alt="Retrato editorial da linha Chambre Quatre"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8" delay={120}>
            <p className="eyebrow mb-3">{HOME.brand.kicker}</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground-950 leading-tight">
              {HOME.brand.title}
            </h2>
            <p className="mt-5 text-foreground-600 text-[15px] leading-[1.9] max-w-lg">
              {HOME.brand.body}
            </p>

            <div className="mt-7 border-t border-background-200 pt-6">
              <p className="eyebrow !text-accent-700 mb-2">Linha</p>
              <p className="font-display text-2xl text-foreground-950">{BRAND.line}</p>
              <p className="mt-3 text-foreground-600 text-[14px] leading-[1.85] max-w-md">
                {HOME.mission.body}
              </p>
            </div>

            <Link to={HOME.brand.to} className="btn btn-outline mt-7">
              {HOME.brand.cta}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 10. ENCERRAMENTO COMERCIAL */}
      <section className="bg-secondary-100 border-t border-background-200">
        <div className="shell py-14 md:py-20 text-center">
          <Reveal>
            <p className="eyebrow mb-3">A coleção</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground-950 leading-tight">
              {HOME.closing.title}
            </h2>
            <p className="mt-4 text-foreground-600 text-[14px] md:text-[15px] max-w-xl mx-auto leading-relaxed">
              {HOME.closing.body}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/colecao/malhas" className="btn btn-primary w-full sm:w-auto">
                Ver malhas
              </Link>
              <Link to="/colecao/camisas-de-linho" className="btn btn-outline w-full sm:w-auto">
                Ver camisas de linho
              </Link>
              <Link to="/colecao/mocassins" className="btn btn-outline w-full sm:w-auto">
                Ver sapatos
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}