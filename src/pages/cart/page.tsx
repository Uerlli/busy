import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/feature/Layout";
import Breadcrumb from "@/components/feature/Breadcrumb";
import Seo from "@/components/feature/Seo";
import { useUI } from "@/context/UIContext";

export default function Cart() {
  const { items, updateQty, removeItem, subtotal } = useUI();
  const [noticeOpen, setNoticeOpen] = useState(false);

  const money = (n: number) => `R$ ${n.toLocaleString("pt-BR")}`;

  return (
    <Layout>
      <Seo
        title="Sacola — TRAMA"
        description="Revise as peças da sua sacola. A finalização de compra será integrada em seguida."
      />

      <section className="shell pt-8 md:pt-12 pb-20 md:pb-28">
        <Breadcrumb items={[{ label: "Sacola" }]} />
        <h1 className="font-display text-4xl md:text-5xl text-foreground-950 mt-6">Sua sacola</h1>

        {items.length === 0 ? (
          <div className="mt-12 py-20 text-center border border-dashed border-foreground-950/15 rounded-sm">
            <p className="text-foreground-600 text-[15px]">Sua sacola está vazia.</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/colecao/mais-vendidos" className="btn btn-primary w-full sm:w-auto">Ver mais vendidos</Link>
              <Link to="/colecao/linho" className="btn btn-outline w-full sm:w-auto">Ver linho</Link>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
            {/* Itens */}
            <div className="md:col-span-8 border-t border-background-200">
              {items.map((it, idx) => (
                <div
                  key={idx}
                  className="py-6 border-b border-background-200 grid grid-cols-12 gap-4 md:gap-6 items-center"
                >
                  <Link to={`/produto/${it.product.slug}`} className="col-span-3 md:col-span-2 block">
                    <div className="w-full aspect-square bg-secondary-100 overflow-hidden">
                      <img
                        src={it.product.main}
                        alt={it.product.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </Link>

                  <div className="col-span-9 md:col-span-6">
                    <Link
                      to={`/produto/${it.product.slug}`}
                      className="text-[15px] text-foreground-950 transition-colors hover:text-primary-600"
                    >
                      {it.product.name}
                    </Link>
                    <p className="mt-1 text-[12px] text-foreground-500">
                      {it.product.categoryLabel} · {it.variant}
                    </p>

                    <div className="mt-4 flex items-center gap-5">
                      <div className="inline-flex items-center border border-foreground-950/15 rounded-sm">
                        <button
                          onClick={() => updateQty(idx, it.qty - 1)}
                          aria-label="Diminuir quantidade"
                          className="w-9 h-9 flex items-center justify-center cursor-pointer transition-colors hover:bg-background-200"
                        >
                          <i className="ri-subtract-line text-[14px]"></i>
                        </button>
                        <span className="w-9 text-center text-[13px]">{it.qty}</span>
                        <button
                          onClick={() => updateQty(idx, it.qty + 1)}
                          aria-label="Aumentar quantidade"
                          className="w-9 h-9 flex items-center justify-center cursor-pointer transition-colors hover:bg-background-200"
                        >
                          <i className="ri-add-line text-[14px]"></i>
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(idx)}
                        className="text-[12px] text-foreground-500 hover:text-foreground-950 cursor-pointer transition-colors"
                      >
                        Remover
                      </button>
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-4 text-left md:text-right">
                    <p className="text-[15px] text-foreground-950">
                      {it.product.price === null ? "Sob consulta" : money(it.product.price * it.qty)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumo */}
            <div className="md:col-span-4">
              <div className="bg-background-100 border border-background-200 rounded-sm p-6 md:p-8 md:sticky md:top-[132px]">
                <p className="eyebrow mb-6">Resumo</p>
                <div className="flex justify-between text-[14px] text-foreground-950 py-2">
                  <span>Subtotal</span>
                  <span>{money(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[14px] text-foreground-500 py-2">
                  <span>Frete</span>
                  <span>A calcular</span>
                </div>
                <div className="flex justify-between text-[16px] text-foreground-950 pt-4 mt-4 border-t border-background-200">
                  <span>Total</span>
                  <span>{money(subtotal)}</span>
                </div>

                <button onClick={() => setNoticeOpen(true)} className="btn btn-primary w-full mt-7">
                  Finalizar compra
                </button>

                {noticeOpen && (
                  <div className="mt-4 p-4 bg-secondary-100 border border-background-300 rounded-sm text-[12px] text-foreground-700 leading-relaxed">
                    <p className="flex items-start gap-2">
                      <i className="ri-information-line mt-0.5 shrink-0"></i>
                      A finalização de compra ainda não está integrada. Esta sacola funciona como
                      demonstração — o pagamento será ativado assim que a operação de vendas for definida.
                    </p>
                  </div>
                )}

                <Link
                  to="/colecao/malhas"
                  className="block text-center mt-4 text-[12px] tracking-[0.16em] uppercase text-foreground-600 hover:text-foreground-950 transition-colors"
                >
                  Continuar escolhendo
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}