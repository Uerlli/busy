import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "@/mocks/products";

export default function ProductCard({ product }: { product: Product }) {
  const priceLabel =
    product.price === null
      ? "Sob consulta"
      : `R$ ${product.price.toLocaleString("pt-BR")}`;

  return (
    <Link to={`/produto/${product.slug}`} className="block group cursor-pointer">
      <div className="pcard-media w-full aspect-[4/5] bg-secondary-100">
        <img
          src={product.main}
          alt={`${product.name} — ${product.categoryLabel}`}
          title={`${product.name} — ${product.type}`}
          className="img-a"
        />
        <img src={product.alt} alt="" aria-hidden="true" className="img-b" />
      </div>

      <div className="mt-3 md:mt-4">
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-[13px] md:text-[14px] leading-snug text-foreground-950">
            <span className="transition-colors duration-200 group-hover:text-primary-600">
              {product.name}
            </span>
          </h4>
          <p className="shrink-0 text-[13px] md:text-[14px] text-foreground-950 whitespace-nowrap">
            {priceLabel}
          </p>
        </div>

        <p className="mt-1 text-[11px] md:text-[12px] text-foreground-500">
          {product.type} · {product.fit.split(",")[0]}
        </p>

        <div className="mt-2.5 flex items-center gap-2">
          <span className="flex items-center gap-1">
            {product.colors.slice(0, 4).map((c) => (
              <span
                key={c.name}
                className="w-3 h-3 rounded-full border border-foreground-950/15 cursor-pointer"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </span>
          <span className="text-[11px] text-foreground-400 truncate">
            {product.colors.length} {product.colors.length === 1 ? "cor" : "cores"}
          </span>
          {!product.inStock && (
            <span className="ml-auto text-[10px] tracking-[0.12em] uppercase text-foreground-400">
              Esgotado
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}