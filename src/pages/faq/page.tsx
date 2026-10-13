import { useState } from "react";
import Layout from "@/components/feature/Layout";
import Breadcrumb from "@/components/feature/Breadcrumb";
import Seo from "@/components/feature/Seo";
import { FAQ_GROUPS } from "@/mocks/brand";

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (k: string) => setOpen(open === k ? null : k);

  return (
    <Layout>
      <Seo
        title="Dúvidas frequentes — TRAMA"
        description="Respostas sobre peças, tamanhos, pedidos, envio e trocas. Conteúdo provisório para revisão antes de publicar."
      />

      <section className="shell pt-8 md:pt-12 pb-20 md:pb-28">
        <Breadcrumb items={[{ label: "Dúvidas frequentes" }]} />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Ajuda</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground-950 leading-tight">
              Dúvidas frequentes
            </h1>
            <p className="mt-5 text-foreground-600 text-[14px] leading-relaxed max-w-sm">
              Reunimos as perguntas mais comuns. Algumas respostas dependem de definições em aberto e
              estão marcadas como provisórias.
            </p>
            <p className="mt-6 text-[12px] text-accent-700 flex items-start gap-2 max-w-sm">
              <i className="ri-information-line mt-0.5 shrink-0"></i>
              Conteúdo provisório para revisão — sem políticas definitivas.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-10">
            {FAQ_GROUPS.map((g) => (
              <div key={g.title}>
                <h2 className="eyebrow mb-4">{g.title}</h2>
                <div className="border-t border-background-200">
                  {g.items.map((it, i) => {
                    const key = `${g.title}-${i}`;
                    const isOpen = open === key;
                    return (
                      <div key={key} className="border-b border-background-200">
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="text-[15px] text-foreground-950">{it.q}</span>
                          <span className="w-5 h-5 flex items-center justify-center text-foreground-500 shrink-0">
                            <i className={isOpen ? "ri-subtract-line" : "ri-add-line"}></i>
                          </span>
                        </button>
                        <div className={`acc-body ${isOpen ? "open" : ""}`}>
                          <p className="pb-6 pr-6 text-foreground-600 leading-[1.9] text-[14px]">{it.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}