import { Link } from "react-router-dom";
import Layout from "@/components/feature/Layout";
import Reveal from "@/components/base/Reveal";
import Seo from "@/components/feature/Seo";
import { ABOUT } from "@/mocks/brand";

export default function About() {
  return (
    <Layout overlay>
      <Seo
        title="A marca — TRAMA"
        description="TRAMA é uma marca independente de roupas com foco em camisas e polos. Apresentação, princípios e espaço editável para a história real da marca."
      />

      {/* Hero */}
      <section className="relative w-full h-[72vh] min-h-[460px] overflow-hidden bg-foreground-950">
        <img
          src={ABOUT.hero.image}
          alt="Estúdio da marca com tecidos e mesa de trabalho"
          className="absolute inset-0 w-full h-full object-cover object-top hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
        <div className="relative z-10 shell w-full h-full flex flex-col justify-end pb-14 md:pb-20 text-background-50">
          <p className="eyebrow !text-background-50/80 mb-4">{ABOUT.hero.kicker}</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
            {ABOUT.hero.title}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="shell py-14 md:py-24">
        <Reveal>
          <p className="font-display text-2xl md:text-3xl text-foreground-950 leading-snug max-w-3xl">
            {ABOUT.intro}
          </p>
        </Reveal>
      </section>

      {/* Seções alternadas */}
      {ABOUT.sections.map((s, i) => {
        const reversed = i % 2 === 1;
        return (
          <section key={s.title} className="shell pb-14 md:pb-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              <Reveal className={`md:col-span-6 ${reversed ? "md:order-2 md:col-start-7" : ""}`}>
                <div className="w-full aspect-[4/5] overflow-hidden bg-secondary-100">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover object-top" />
                </div>
              </Reveal>
              <Reveal className={`md:col-span-5 ${reversed ? "md:order-1 md:col-start-1" : "md:col-start-8"}`} delay={120}>
                <p className="eyebrow mb-4">{s.kicker}</p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground-950 leading-tight">
                  {s.title}
                </h2>
                <p className="mt-5 text-foreground-600 text-[15px] leading-[1.9]">{s.body}</p>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Campanha */}
      <section className="w-full aspect-[16/7] min-h-[320px] overflow-hidden bg-secondary-100">
        <img
          src={ABOUT.campaign.image}
          alt="Camisas dobradas sobre uma superfície neutra"
          className="w-full h-full object-cover object-top"
        />
      </section>

      {/* História — espaço editável */}
      <section className="shell py-16 md:py-28">
        <Reveal className="max-w-3xl">
          <div className="border border-dashed border-foreground-950/20 rounded-sm p-8 md:p-12 bg-background-100">
            <p className="eyebrow mb-4 text-accent-700">{ABOUT.story.kicker}</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground-950 leading-tight">
              {ABOUT.story.title}
            </h2>
            <p className="mt-5 text-foreground-600 text-[15px] leading-[1.9]">{ABOUT.story.body}</p>
            <Link to="/contato" className="btn btn-outline mt-8">
              Falar com a marca
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Caminho comercial */}
      <section className="bg-primary-950 text-background-50">
        <div className="shell py-14 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Reveal>
            <p className="eyebrow !text-background-50/70 mb-3">A coleção</p>
            <h2 className="font-display text-3xl md:text-4xl">Camisas e polos disponíveis agora.</h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col sm:flex-row gap-3">
            <Link to="/camisas" className="btn w-full sm:w-auto bg-background-50 text-foreground-950 hover:bg-background-100">
              Ver camisas
            </Link>
            <Link to="/polos" className="btn btn-ghost-light w-full sm:w-auto">
              Ver polos
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}