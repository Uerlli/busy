import { useState } from "react";
import { Link } from "react-router-dom";
import { useUI } from "@/context/UIContext";
import { BRAND } from "@/mocks/brand";

export default function CartDrawer() {
  const { cartOpen, closeCart, items, updateQty, removeItem, subtotal } = useUI();
  const [removing, setRemoving] = useState<number | null>(null);

  const handleRemove = (idx: number) => {
    setRemoving(idx);
    setTimeout(() => {
      removeItem(idx);
      setRemoving(null);
    }, 260);
  };

  const money = (n: number) => `R$ ${n.toLocaleString("pt-BR")}`;

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-foreground-950/45 transition-opacity duration-300 ${
          cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!cartOpen}
      />
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[440px] bg-background-50 flex flex-col transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
        role="dialog"
        aria-label="Sacola"
      >
        <div className="flex items-center justify-between px-6 h-[68px] border-b border-background-200">
          <p className="eyebrow">Sua sacola ({items.length})</p>
          <button
            onClick={closeCart}
            aria-label="Fechar"
            className="w-10 h-10 -mr-2 flex items-center justify-center cursor-pointer transition-opacity hover:opacity-60"
          >
            <i className="ri-close-line text-[20px]"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-foreground-500 text-sm">Sua sacola está vazia.</p>
              <button
                onClick={closeCart}
                className="mt-6 border-b border-foreground-950 text-[12px] tracking-[0.2em] uppercase pb-1 cursor-pointer"
              >
                Continuar escolhendo
              </button>
            </div>
          )}
          {items.map((it, idx) => (
            <div
              key={idx}
              className={`cart-item flex gap-4 py-5 border-b border-background-200 ${
                removing === idx ? "removing" : ""
              }`}
            >
              <div className="w-20 h-20 bg-secondary-100 shrink-0 overflow-hidden">
                <img
                  src={it.product.main}
                  alt={it.product.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-3 text-[14px] text-foreground-950">
                  <p className="truncate">{it.product.name}</p>
                  <p className="shrink-0">
                    {it.product.price === null ? "Sob consulta" : money(it.product.price * it.qty)}
                  </p>
                </div>
                <p className="mt-1 text-[12px] text-foreground-500">{it.variant}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="inline-flex items-center border border-foreground-950/15 rounded-sm">
                    <button
                      onClick={() => updateQty(idx, it.qty - 1)}
                      aria-label="Diminuir quantidade"
                      className="w-9 h-9 flex items-center justify-center cursor-pointer transition-colors duration-150 hover:bg-background-200"
                    >
                      <i className="ri-subtract-line text-[14px]"></i>
                    </button>
                    <span className="w-9 text-center text-[13px]">{it.qty}</span>
                    <button
                      onClick={() => updateQty(idx, it.qty + 1)}
                      aria-label="Aumentar quantidade"
                      className="w-9 h-9 flex items-center justify-center cursor-pointer transition-colors duration-150 hover:bg-background-200"
                    >
                      <i className="ri-add-line text-[14px]"></i>
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(idx)}
                    className="text-[12px] text-foreground-500 hover:text-foreground-950 cursor-pointer transition-colors"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="border-t border-background-200 px-6 py-6">
            <div className="flex justify-between text-[15px] text-foreground-950">
              <span>Subtotal</span>
              <span>{money(subtotal)}</span>
            </div>
            <p className="text-[12px] text-foreground-500 mt-2 leading-relaxed">
              Frete e impostos são calculados na finalização. Sacola em modo demonstração — a
              finalização de compra será integrada em seguida.
            </p>
            <Link
              to="/sacola"
              onClick={closeCart}
              className="btn btn-primary mt-6 w-full"
            >
              Ver sacola
            </Link>
            <button onClick={closeCart} className="btn btn-outline mt-3 w-full">
              Continuar escolhendo
            </button>
          </div>
        )}

        <p className="px-6 pb-5 text-[11px] text-foreground-400">
          {BRAND.name} — conteúdo provisório.
        </p>
      </aside>
    </>
  );
}