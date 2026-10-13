import Layout from "@/components/feature/Layout";
import Breadcrumb from "@/components/feature/Breadcrumb";
import Seo from "@/components/feature/Seo";
import { POLICIES } from "@/mocks/brand";

function InfoPage({
  title,
  kicker,
  body,
}: {
  title: string;
  kicker: string;
  body: string[];
}) {
  return (
    <Layout>
      <Seo title={`${title} — TRAMA`} description={body[0]} />

      <section className="shell pt-8 md:pt-12 pb-20 md:pb-28">
        <Breadcrumb items={[{ label: title }]} />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4 text-accent-700">{kicker}</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground-950 leading-tight">
              {title}
            </h1>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-5 text-foreground-600 leading-[1.9] text-[15px]">
            <p className="text-[12px] text-accent-700 flex items-start gap-2">
              <i className="ri-information-line mt-0.5 shrink-0"></i>
              Conteúdo provisório para revisão. Substitua pelo texto oficial revisado antes de publicar.
            </p>
            {body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function Shipping() {
  return (
    <InfoPage
      title={POLICIES.shipping.title}
      kicker={POLICIES.shipping.kicker}
      body={POLICIES.shipping.body}
    />
  );
}

export function Privacy() {
  return (
    <InfoPage
      title={POLICIES.privacy.title}
      kicker={POLICIES.privacy.kicker}
      body={POLICIES.privacy.body}
    />
  );
}

export function Terms() {
  return (
    <InfoPage
      title={POLICIES.terms.title}
      kicker={POLICIES.terms.kicker}
      body={POLICIES.terms.body}
    />
  );
}

export default Shipping;