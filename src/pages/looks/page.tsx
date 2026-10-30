import { Link } from "react-router-dom";
import Layout from "@/components/feature/Layout";
import Breadcrumb from "@/components/feature/Breadcrumb";
import Seo from "@/components/feature/Seo";
import Reveal from "@/components/base/Reveal";
import { products } from "@/mocks/products";
import { BRAND, LOOKS } from "@/mocks/brand";

export default function Looks() {
  const money = (n: number) => `R$ ${n.toLocaleString("pt-BR")}`;

  return (
    <Layout>
      <Seo
        title={`Looks — ${BRAND.name} | ${BRAND.line}`}
        description="Combinações completas com peças da loja: linho no verão, alfaiataria na cidade, camadas no inverno e viagem leve."
      />

      <section className="shell pt-8 md:pt-12 pb-6">
        <Breadcrumb items={[{ label: "Looks" }]} />
        <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Combinações</p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground-950 leading-tight max-w-2xl">
              Looks completos
            </h1>
          </div>
          <p className="text-foreground-600 text-[14px] leading-[1.85] max-w-md">
            Cada combinação reúne peças que já estão na loja. Toque em uma peça para ver cores,
            tamanhos e detalhes.
          </p>
        </div>
      </section>

      <section className="shell pb-20 md:pb-28">
        {LOOKS.map((look, i) => {
          const items = look.productIds
            .map((id) => products.find((p) => p.id === id))
            .filter(Boolean) as typeof products;

          return (
            <Reveal key={look.id}>
              <article
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start py-9 md:py-14 ${
                  i > 0 ? "border-t border-background-200" : ""
                }`}
              >
                <div className="md:col-span-5">
                  <div className="w-full aspect-[3/4] overflow-hidden bg-secondary-100">
                    <img
                      src={look.image}
                      alt={look.title}
                      title={`Look ${look.title}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="eyebrow !text-[10px] mb-2">Look {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="font-display text-2xl md:text-4xl text-foreground-950">{look.title}</h2>
                  <p className="mt-3 text-foreground-600 text-[14px] leading-[1.85] max-w-lg">{look.note}</p>

                  <div className="mt-6 border-t border-background-200">
                    {items.map((p) => (
                      <Link
                        key={p.id}
                        to={`/produto/${p.slug}`}
                        className="group flex items-center gap-4 py-3.5 border-b border-background-200 cursor-pointer"
                      >
                        <div className="w-14 h-16 shrink-0 overflow-hidden bg-secondary-100">
                          <img
                            src={p.main}
                            alt={p.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[13px] md:text-[14px] text-foreground-950 transition-colors group-hover:text-primary-600 truncate">
                            {p.name}
                          </p>
                          <p className="mt-0.5 text-[11px] text-foreground-500">
                            {p.categoryLabel} · {p.colors.length}{" "}
                            {p.colors.length === 1 ? "cor" : "cores"}
                          </p>
                        </div>
                        <p className="shrink-0 text-[12px] md:text-[13px] text-foreground-950">
                          {p.price === null ? "Sob consulta" : money(p.price)}
                        </p>
                        <i className="ri-arrow-right-line text-[14px] text-foreground-400 transition-transform duration-300 group-hover:translate-x-1"></i>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/colecao/${items[0]?.category ?? "malhas"}`}
                      className="link-underline text-[11px] tracking-[0.18em] uppercase"
                    >
                      Ver categoria
                    </Link>
                    <Link
                      to={`/produto/${items[0]?.slug ?? ""}`}
                      className="text-[11px] tracking-[0.18em] uppercase text-foreground-500 transition-colors hover:text-primary-600"
                    >
                      Começar por esta peça
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      <section className="bg-primary-950 text-background-50">
        <div className="shell py-14 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-7">
          <div>
            <p className="eyebrow !text-background-50/60 mb-3">Coleção de linho</p>
            <h2 className="font-display text-2xl md:text-4xl">Camisas, calças e bermudas no mesmo tecido.</h2>
          </div>
          <Link to="/colecao/linho" className="btn bg-background-50 text-foreground-950 hover:bg-background-100 w-full sm:w-auto">
            Ver a coleção de linho
          </Link>
        </div>
      </section>
    </Layout>
  );
}