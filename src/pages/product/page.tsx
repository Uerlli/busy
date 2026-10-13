import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/feature/Layout";
import ProductCard from "@/components/base/ProductCard";
import Breadcrumb from "@/components/feature/Breadcrumb";
import Seo from "@/components/feature/Seo";
import { products } from "@/mocks/products";
import { useUI } from "@/context/UIContext";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useUI();

  const [color, setColor] = useState(product?.colors[0]?.name ?? "");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [openAcc, setOpenAcc] = useState<string | null>("descricao");
  const [guideOpen, setGuideOpen] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="shell py-32 text-center">
          <p className="eyebrow mb-4">Peça não encontrada</p>
          <h1 className="font-display text-3xl md:text-4xl text-foreground-950">
            Não encontramos esta peça.
          </h1>
          <Link to="/camisas" className="btn btn-outline mt-8">
            Ver a coleção
          </Link>
        </div>
      </Layout>
    );
  }

  const gallery = [
    { src: product.main, label: "Peça" },
    { src: product.worn, label: "Vestida" },
    { src: product.detail, label: "Detalhe" },
  ];

  const related = (() => {
    const same = products.filter((p) => p.id !== product.id && p.category === product.category);
    const rest = products.filter((p) => p.id !== product.id && p.category !== product.category);
    return [...same, ...rest].slice(0, 4);
  })();

  const priceLabel =
    product.price === null
      ? "Sob consulta"
      : `${product.currency} ${(product.price * qty).toLocaleString("pt-BR")}`;

  const toggle = (k: string) => setOpenAcc(openAcc === k ? null : k);

  const onAdd = () => {
    if (!size) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addToCart(product, `${size} · ${color}`, qty);
  };

  const accItems = [
    { key: "descricao", title: "Descrição", body: product.description },
    { key: "composicao", title: "Composição", body: product.composition },
    { key: "cuidados", title: "Cuidados", body: product.care },
    { key: "envio", title: "Envio e devolução", body: "As condições de envio e devolução ainda serão definidas e publicadas antes da abertura das vendas. Esta informação é provisória." },
  ];

  return (
    <Layout>
      <Seo title={`${product.name} — TRAMA`} description={product.shortDescription} />

      <section className="shell pt-6 md:pt-8 pb-20 md:pb-28">
        <Breadcrumb
          items={[
            { label: product.categoryLabel + "s", to: `/${product.category}` },
            { label: product.name },
          ]}
        />

        <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-10">
          {/* Galeria */}
          <div className="md:col-span-7">
            <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
              <div className="flex md:flex-col gap-3 md:w-[84px] shrink-0 overflow-x-auto md:overflow-visible">
                {gallery.map((g, i) => (
                  <button
                    key={g.label}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Ver ${g.label}`}
                    aria-pressed={activeImg === i}
                    className={`shrink-0 w-[68px] md:w-[84px] aspect-square overflow-hidden cursor-pointer border rounded-sm transition-all duration-200 ${
                      activeImg === i
                        ? "border-primary-500 opacity-100"
                        : "border-transparent opacity-65 hover:opacity-100"
                    }`}
                  >
                    <img src={g.src} alt={g.label} className="w-full h-full object-cover object-top bg-secondary-100" />
                  </button>
                ))}
              </div>
              <div className="flex-1">
                <div className="w-full aspect-square overflow-hidden bg-secondary-100 rounded-sm">
                  <img
                    key={activeImg}
                    src={gallery[activeImg].src}
                    alt={`${product.name} — ${gallery[activeImg].label}`}
                    title={`${product.name} — ${product.categoryLabel}`}
                    className="w-full h-full object-cover object-top"
                    style={{ animation: "img-soft-in 380ms var(--ease-brand) both" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Informações */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-[132px]">
              <p className="eyebrow mb-3">{product.categoryLabel}</p>
              <h1 className="font-display text-3xl md:text-4xl text-foreground-950 leading-tight">
                {product.name}
              </h1>
              <p className="mt-3 text-[18px] text-foreground-950">{priceLabel}</p>
              <p className="mt-5 text-foreground-600 text-[14px] leading-[1.8]">
                {product.shortDescription}
              </p>

              {/* Cor */}
              <div className="mt-8">
                <p className="eyebrow mb-3">
                  Cor — <span className="!tracking-normal !text-foreground-800">{color}</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((c) => {
                    const active = color === c.name;
                    return (
                      <button
                        key={c.name}
                        onClick={() => setColor(c.name)}
                        aria-pressed={active}
                        aria-label={c.name}
                        title={c.name}
                        className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border transition-all duration-200 ${
                          active ? "border-primary-500 border-2" : "border-foreground-950/20"
                        }`}
                      >
                        <span
                          className="w-6 h-6 rounded-full block"
                          style={{ backgroundColor: c.hex }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tamanho */}
              <div className="mt-7">
                <div className="flex items-center justify-between mb-3">
                  <p className="eyebrow">Tamanho</p>
                  <button
                    onClick={() => setGuideOpen(true)}
                    className="text-[12px] tracking-[0.1em] uppercase text-primary-700 border-b border-primary-400 pb-0.5 cursor-pointer transition-opacity hover:opacity-70"
                  >
                    Guia de medidas
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => {
                    const active = size === s;
                    return (
                      <button
                        key={s}
                        onClick={() => {
                          setSize(s);
                          setSizeError(false);
                        }}
                        aria-pressed={active}
                        className={`h-11 min-w-[52px] px-3 text-[13px] rounded-sm border cursor-pointer transition-colors duration-200 ${
                          active
                            ? "border-primary-500 bg-primary-50 text-primary-800"
                            : "border-foreground-950/15 text-foreground-700 hover:border-foreground-950/45"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
                {sizeError && (
                  <p className="mt-2 text-[12px] text-accent-700 flex items-center gap-1.5">
                    <i className="ri-error-warning-line"></i>
                    Selecione um tamanho antes de adicionar à sacola.
                  </p>
                )}
              </div>

              {/* Quantidade */}
              <div className="mt-7">
                <p className="eyebrow mb-3">Quantidade</p>
                <div className="inline-flex items-center border border-foreground-950/15 rounded-sm">
                  <button
                    className="w-11 h-11 flex items-center justify-center cursor-pointer transition-colors hover:bg-background-200"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    aria-label="Diminuir"
                  >
                    <i className="ri-subtract-line text-[14px]"></i>
                  </button>
                  <span className="w-10 text-center text-[14px]">{qty}</span>
                  <button
                    className="w-11 h-11 flex items-center justify-center cursor-pointer transition-colors hover:bg-background-200"
                    onClick={() => setQty(qty + 1)}
                    aria-label="Aumentar"
                  >
                    <i className="ri-add-line text-[14px]"></i>
                  </button>
                </div>
              </div>

              <button
                onClick={onAdd}
                disabled={!product.inStock}
                className={`btn w-full mt-8 ${product.inStock ? "btn-primary" : "btn-outline !cursor-not-allowed opacity-60"}`}
              >
                {product.inStock ? "Adicionar à sacola" : "Esgotado"}
              </button>

              <p className="mt-4 text-[12px] text-foreground-500 flex items-center gap-2">
                <i className={product.inStock ? "ri-checkbox-circle-line text-primary-600" : "ri-close-circle-line"}></i>
                {product.inStock ? "Disponível" : "Sem estoque no momento"}
              </p>

              {/* Blocos recolhíveis */}
              <div className="mt-8 border-t border-background-200">
                {accItems.map((a) => (
                  <div key={a.key} className="border-b border-background-200">
                    <button
                      onClick={() => toggle(a.key)}
                      className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
                      aria-expanded={openAcc === a.key}
                    >
                      <span className="text-[12px] font-medium tracking-[0.16em] uppercase text-foreground-950">
                        {a.title}
                      </span>
                      <span className="w-5 h-5 flex items-center justify-center text-foreground-500">
                        <i className={`ri-${openAcc === a.key ? "subtract" : "add"}-line text-[15px]`}></i>
                      </span>
                    </button>
                    <div className={`acc-body ${openAcc === a.key ? "open" : ""}`}>
                      <p className="pb-5 text-[14px] text-foreground-600 leading-[1.8]">{a.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial da peça */}
      <section className="bg-secondary-100">
        <div className="shell py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="w-full aspect-[4/5] overflow-hidden bg-background-200">
            <img
              src={product.worn}
              alt={`${product.name} vestida`}
              title={`${product.name} — vestida`}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">Vestida</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground-950 leading-tight">
              Como a peça cai no corpo.
            </h2>
            <p className="mt-5 text-foreground-600 text-[15px] leading-[1.9] max-w-lg">
              A modelagem foi pensada para funcionar sozinha. O corte reto mantém a linha do ombro e a
              manga não marca o braço. Use aberta sobre uma peça lisa ou fechada até o último botão.
            </p>
          </div>
        </div>
      </section>

      {/* Relacionados */}
      <section className="shell py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-foreground-950">Combine com</h2>
          <Link
            to={`/${product.category}`}
            className="text-[12px] tracking-[0.18em] uppercase border-b border-foreground-950 pb-1 transition-colors hover:text-primary-600 hover:border-primary-600"
          >
            Ver toda a categoria
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10" data-product-shop>
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Guia de medidas — modal */}
      {guideOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Guia de medidas"
        >
          <div className="absolute inset-0 bg-foreground-950/50" onClick={() => setGuideOpen(false)} />
          <div className="relative bg-background-50 w-full max-w-lg rounded-sm p-6 md:p-8 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow mb-2">Guia de medidas</p>
                <h3 className="font-display text-2xl text-foreground-950">{product.name}</h3>
              </div>
              <button
                onClick={() => setGuideOpen(false)}
                aria-label="Fechar guia"
                className="w-9 h-9 -mr-2 -mt-1 flex items-center justify-center cursor-pointer transition-opacity hover:opacity-60"
              >
                <i className="ri-close-line text-[20px]"></i>
              </button>
            </div>

            <p className="mt-5 text-[13px] text-foreground-600 leading-relaxed">
              Meça sobre o corpo, sem apertar a fita: ombro (de ombro a ombro), tórax (na parte mais
              larga), comprimento (do ombro até a barra) e manga (do ombro até o punho).
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="text-foreground-500">
                    <th className="text-left font-normal py-2 border-b border-background-200">Tam.</th>
                    <th className="text-left font-normal py-2 border-b border-background-200">Ombro</th>
                    <th className="text-left font-normal py-2 border-b border-background-200">Tórax</th>
                    <th className="text-left font-normal py-2 border-b border-background-200">Compr.</th>
                    <th className="text-left font-normal py-2 border-b border-background-200">Manga</th>
                  </tr>
                </thead>
                <tbody>
                  {product.sizes.map((s) => (
                    <tr key={s} className="text-foreground-800">
                      <td className="py-2 border-b border-background-100">{s}</td>
                      <td className="py-2 border-b border-background-100">—</td>
                      <td className="py-2 border-b border-background-100">—</td>
                      <td className="py-2 border-b border-background-100">—</td>
                      <td className="py-2 border-b border-background-100">—</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-[12px] text-foreground-500 leading-relaxed flex items-start gap-2">
              <i className="ri-information-line mt-0.5"></i>
              {product.measurementsNote} As medidas numéricas serão preenchidas quando a tabela oficial for
              confirmada — nenhum valor foi inventado.
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
}