import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/feature/Layout";

export default function NotFound() {
  const location = useLocation();

  return (
    <Layout>
      <section className="shell py-28 md:py-40 text-center">
        <p className="eyebrow mb-5">Erro 404</p>
        <h1 className="font-display text-4xl md:text-6xl text-foreground-950 leading-tight">
          Esta página não existe.
        </h1>
        <p className="mt-5 text-foreground-500 text-[14px] break-all max-w-md mx-auto">
          {location.pathname}
        </p>
        <p className="mt-4 text-foreground-600 text-[15px] max-w-md mx-auto leading-relaxed">
          O endereço pode ter mudado ou nunca ter existido. Volte ao início ou veja a coleção.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn btn-primary w-full sm:w-auto">Voltar ao início</Link>
          <Link to="/colecao/malhas" className="btn btn-outline w-full sm:w-auto">Ver a coleção</Link>
        </div>
      </section>
    </Layout>
  );
}