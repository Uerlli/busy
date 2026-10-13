import { useState, FormEvent } from "react";
import Layout from "@/components/feature/Layout";
import Breadcrumb from "@/components/feature/Breadcrumb";
import Seo from "@/components/feature/Seo";
import { CONTACT } from "@/mocks/brand";

const CONTACT_ENDPOINT = "https://readdy.ai/api/form/db7377od6mcdj80oo74g";

export default function Contact() {
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
      const res = await fetch(CONTACT_ENDPOINT, {
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
        setError(msg || "Não foi possível enviar. Tente novamente.");
      }
    } catch {
      setStatus("error");
      setError("Falha de conexão. Tente novamente.");
    }
  };

  return (
    <Layout>
      <Seo
        title="Contato — TRAMA"
        description="Fale com a marca pelo formulário de contato. Dúvidas sobre peças, tamanhos ou pedidos."
      />

      <section className="shell pt-8 md:pt-12 pb-20 md:pb-28">
        <Breadcrumb items={[{ label: "Contato" }]} />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          {/* Coluna de informações */}
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">Contato</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground-950 leading-tight">
              Fale com a marca.
            </h1>
            <p className="mt-5 text-foreground-600 text-[15px] leading-[1.9] max-w-md">
              {CONTACT.intro}
            </p>

            <div className="mt-10 space-y-6 text-[14px]">
              <div>
                <p className="eyebrow mb-2">E-mail</p>
                <p className="text-foreground-900">{CONTACT.email}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Atendimento</p>
                <p className="text-foreground-700">{CONTACT.hours}</p>
              </div>
            </div>

            <p className="mt-10 text-[12px] text-foreground-500 leading-relaxed flex items-start gap-2 max-w-md">
              <i className="ri-information-line mt-0.5 shrink-0"></i>
              {CONTACT.note}
            </p>
          </div>

          {/* Formulário */}
          <div className="md:col-span-6 md:col-start-7">
            {status === "success" ? (
              <div className="border border-background-200 rounded-sm p-8 md:p-10 text-center bg-background-100">
                <i className="ri-checkbox-circle-line text-[34px] text-primary-600"></i>
                <p className="eyebrow mt-4 mb-2">Mensagem recebida</p>
                <h2 className="font-display text-2xl md:text-3xl text-foreground-950">Obrigado.</h2>
                <p className="mt-4 text-foreground-600 text-[14px] leading-relaxed">
                  Recebemos sua mensagem e responderemos pelo e-mail informado.
                </p>
                <button onClick={() => setStatus("idle")} className="btn btn-outline mt-8">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                id="contact-form"
                data-readdy-form
                onSubmit={onSubmit}
                className="space-y-5"
                noValidate={false}
              >
                <div>
                  <label htmlFor="contact-name" className="eyebrow block mb-2">Nome</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    className="field w-full"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="eyebrow block mb-2">E-mail</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    className="field w-full"
                    placeholder="voce@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="eyebrow block mb-2">
                    Assunto <span className="!tracking-normal !text-foreground-400 normal-case">— opcional</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    className="field w-full"
                    placeholder="Tamanhos, pedido, parceria…"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="eyebrow block mb-2">Mensagem</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    maxLength={500}
                    className="field w-full resize-none"
                    placeholder="Escreva sua mensagem (até 500 caracteres)"
                  />
                </div>
                <input
                  type="text"
                  name="website_alt"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  readOnly
                  className="hp-field"
                />
                <div className="pt-1">
                  <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full sm:w-auto">
                    {status === "loading" ? "Enviando…" : "Enviar mensagem"}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-[13px] text-accent-700 flex items-center gap-2">
                    <i className="ri-error-warning-line"></i>
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}