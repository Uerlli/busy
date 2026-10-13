import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { BRAND, FOOTER_COLUMNS } from "@/mocks/brand";

const NEWSLETTER_ENDPOINT = "https://readdy.ai/api/form/db7377od6mcdj80oo750";

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    const hp = String(data.get("website_alt") || "").trim();
    if (hp) {
      setStatus("success");
      formEl.reset();
      return;
    }
    data.delete("website_alt");
    setStatus("loading");
    setError("");
    try {
      const body = new URLSearchParams();
      data.forEach((v, k) => body.append(k, String(v)));
      const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      const responseText = await res.text();
      let parsed: { code?: string; meta?: { message?: string; detail?: string } } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }
      const msg = parsed?.meta?.message || parsed?.meta?.detail || responseText || "";
      const isSpam = String(msg).toLowerCase().includes("spam");
      if (res.ok && parsed?.code === "OK" && !isSpam) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
        setError(msg || "Não foi possível concluir. Tente novamente.");
      }
    } catch {
      setStatus("error");
      setError("Falha de conexão. Tente novamente.");
    }
  };

  return (
    <footer className="bg-secondary-100 text-foreground-900">
      {/* Newsletter — banda de marca */}
      <section className="bg-primary-900 text-background-50">
        <div className="shell py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-6">
              <p className="eyebrow mb-4 !text-background-50/70">Newsletter</p>
              <h3 className="font-display text-2xl md:text-4xl leading-tight">
                Novidades da marca, sem excesso.
              </h3>
              <p className="mt-4 text-[14px] text-background-50/75 max-w-md leading-relaxed">
                Deixe seu e-mail para receber lançamentos e notas da coleção.
              </p>
            </div>
            <div className="md:col-span-6">
              {status === "success" ? (
                <p className="text-[15px] text-background-50" style={{ minHeight: 48 }}>
                  Obrigado. Você entrou na lista.
                </p>
              ) : (
                <form
                  id="newsletter-form"
                  data-readdy-form
                  onSubmit={onSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Seu e-mail"
                    aria-label="Seu e-mail"
                    className="w-full sm:flex-1 h-12 px-4 text-[14px] text-foreground-950 bg-background-50 border border-background-50/20 rounded-sm outline-none focus:border-primary-400"
                  />
                  <input
                    type="text"
                    name="website_alt"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                    className="hp-field"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="shrink-0 w-full sm:w-auto h-12 px-7 text-[12px] font-medium tracking-[0.2em] uppercase whitespace-nowrap cursor-pointer rounded-sm bg-background-50 text-primary-950 transition-colors duration-200 hover:bg-background-100 disabled:opacity-70"
                  >
                    {status === "loading" ? "Enviando…" : "Assinar"}
                  </button>
                </form>
              )}
              {status === "error" && <p className="mt-4 text-sm text-background-50/90">{error}</p>}
            </div>
          </div>
        </div>
      </section>

      <div className="shell pt-14 md:pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 md:gap-10">
          <div className="col-span-2 md:col-span-5">
            <p className="font-display text-2xl tracking-[0.28em]">{BRAND.name}</p>
            <p className="mt-5 text-[14px] text-foreground-600 max-w-xs leading-relaxed">
              Marca independente de roupas com foco em camisas e polos. Primeira coleção disponível no site.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="eyebrow mb-4">{col.title}</p>
              <ul className="space-y-3 text-[13px]">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-foreground-700 transition-colors duration-200 hover:text-primary-600">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1">
            <p className="eyebrow mb-4">Sacola</p>
            <ul className="space-y-3 text-[13px]">
              <li>
                <Link to="/sacola" className="text-foreground-700 transition-colors duration-200 hover:text-primary-600">
                  Ver sacola
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-foreground-700 transition-colors duration-200 hover:text-primary-600">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-foreground-950/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-foreground-500">
          <p className="text-center sm:text-left">
            © 2026 {BRAND.name}. Conteúdo e nome provisórios.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/privacidade" className="transition-colors hover:text-foreground-800">Privacidade</Link>
            <Link to="/termos" className="transition-colors hover:text-foreground-800">Termos</Link>
            <Link to="/envio-e-devolucoes" className="transition-colors hover:text-foreground-800">Envio e devoluções</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}