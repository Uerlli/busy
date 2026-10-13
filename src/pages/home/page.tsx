import { Link } from "react-router-dom";
import Layout from "@/components/feature/Layout";
import ProductCard from "@/components/base/ProductCard";
import Reveal from "@/components/base/Reveal";
import Seo from "@/components/feature/Seo";
import { products } from "@/mocks/products";
import { HOME } from "@/mocks/brand";

export default function Home() {
  const featured = HOME.featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  return (
    <Layout overlay>
      <Seo
        title="TRAMA — Camisas e Polos de Autor"
        description="Marca independente de roupas com foco em camisas e polos. Primeira coleção disponível no site, com compra direta e leitura editorial."
      />

      {/* 1. ABERTURA EDITORIAL — imagem em tela cheia com produto visível */}
      <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-foreground-950">
        <img
          src={HOME.hero.image}
          alt="Modelo vestindo uma camisa da primeira coleção"
          className="absolute inset-0 w-full h-full object-cover object-top hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/60" />

        <div className="relative z-10 shell w-full h-full flex flex-col justify-end pb-16 md:pb-24">
          <p className="eyebrow !text-background-50/80 mb-4">{HOME.hero.eyebrow}</p>
          <h1 className="font-display text-background-50 text-[34px] leading-[1.05] md:text-7xl max-w-4xl">
            {HOME.hero.title}
          </h1>
          <p className="mt-5 md:mt-6 text-background-50/85 text-[14px] md:text-[16px] max-w-lg leading-relaxed">
            {HOME.hero.line}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to={HOME.hero.primaryCta.to} className="btn btn-primary w-full sm:w-auto">
              {HOME.hero.primaryCta.label}
            </Link>
            <Link to={HOME.hero.secondaryCta.to} className="btn btn-ghost-light w-full sm:w-auto">
              {HOME.hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden md:flex flex-col items-center gap-3 text-background-50/70">
          <span className="text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">Role</span>
          <span className="w-px h-10 bg-background-50/40" />
        </div>
      </section>

      {/* 2. ACESSO ÀS CATEGORIAS */}
      <section className="shell py-16 md:py-24">
        <Reveal className="mb-8 md:mb-12">
          <span className="block w-10 h-px bg-accent-500 mb-5" />
          <p className="eyebrow mb-3">Comece por aqui</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground-950 max-w-2xl leading-tight">
            Duas categorias, uma mesma ideia de roupa.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {HOME.categories.map((cat, i) => (
            <Reveal key={cat.key} delay={i * 90}>
              <Link to={cat.to} className="group block cursor-pointer">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-secondary-100">
                  <img
                    src={cat.image}
                    alt={`Coleção de ${cat.title}`}
                    className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="font-display text-background-50 text-3xl md:text-4xl">{cat.title}</h3>
                    <p className="mt-2 text-background-50/85 text-[13px] md:text-[14px] max-w-xs">{cat.copy}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-background-50 text-[12px] tracking-[0.18em] uppercase">
                      Explorar
                      <i className="ri-arrow-right-line text-[14px] transition-transform duration-300 group-hover:translate-x-1"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. SELEÇÃO DA COLEÇÃO */}
      <section className="bg-background-100 border-y border-background-200">
        <div className="shell py-16 md:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
            <div>
              <p className="eyebrow mb-3">Seleção</p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground-950 leading-tight">
                Peças para começar
              </h2>
            </div>
            <Link
              to="/camisas"
              className="text-[12px] tracking-[0.18em] uppercase border-b border-foreground-950 pb-1 transition-colors hover:text-primary-600 hover:border-primary-600"
            >
              Ver a coleção completa
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10" data-product-shop>
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BLOCO EDITORIAL DA COLEÇÃO */}
      <section className="shell py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <Reveal className="md:col-span-7">
            <div className="w-full aspect-[16/10] overflow-hidden bg-secondary-100">
              <img
                src={HOME.editorial.image}
                alt="Bloco editorial da coleção"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={120}>
            <span className="block w-10 h-px bg-accent-500 mb-5" />
            <p className="eyebrow mb-4">{HOME.editorial.kicker}</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground-950 leading-tight">
              {HOME.editorial.title}
            </h2>
            <p className="mt-5 text-foreground-600 text-[15px] leading-[1.9] max-w-lg">
              {HOME.editorial.body}
            </p>
            <Link
              to={HOME.editorial.to}
              className="mt-7 inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase border-b border-foreground-950 pb-1 transition-colors hover:text-primary-600 hover:border-primary-600"
            >
              {HOME.editorial.cta}
              <i className="ri-arrow-right-line text-[14px]"></i>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5. DETALHE DA PEÇA */}
      <section className="bg-primary-950 text-background-50">
        <div className="shell py-16 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <Reveal className="md:col-span-6 order-2 md:order-1">
              <p className="eyebrow !text-background-50/70 mb-4">{HOME.detail.kicker}</p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight">{HOME.detail.title}</h2>
              <p className="mt-5 text-background-50/75 text-[15px] leading-[1.9] max-w-lg">
                {HOME.detail.body}
              </p>
            </Reveal>
            <Reveal className="md:col-span-6 order-1 md:order-2" delay={120}>
              <div className="w-full aspect-square overflow-hidden bg-primary-900">
                <img
                  src={HOME.detail.image}
                  alt="Detalhe de colarinho, carcela e botão"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. APRESENTAÇÃO DA MARCA */}
      <section className="shell py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <Reveal className="md:col-span-5">
            <div className="w-full aspect-[4/5] overflow-hidden bg-secondary-100">
              <img
                src={HOME.brand.image}
                alt="Retrato editorial com uma peça da marca"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
            <p className="eyebrow mb-4">{HOME.brand.kicker}</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground-950 leading-tight">
              {HOME.brand.title}
            </h2>
            <p className="mt-5 text-foreground-600 text-[15px] leading-[1.9] max-w-lg">{HOME.brand.body}</p>
            <Link to={HOME.brand.to} className="btn btn-outline mt-8">
              {HOME.brand.cta}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 7. ENCERRAMENTO COMERCIAL */}
      <section className="bg-secondary-100 border-t border-background-200">
        <div className="shell py-16 md:py-24 text-center">
          <Reveal>
            <p className="eyebrow mb-4">A coleção</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground-950 leading-tight">
              {HOME.closing.title}
            </h2>
            <p className="mt-5 text-foreground-600 text-[15px] max-w-xl mx-auto leading-relaxed">
              {HOME.closing.body}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/camisas" className="btn btn-primary w-full sm:w-auto">Ver camisas</Link>
              <Link to="/polos" className="btn btn-outline w-full sm:w-auto">Ver polos</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}