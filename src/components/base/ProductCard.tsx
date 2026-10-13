import { Link } from "react-router-dom";
import type { Product } from "@/mocks/products";

export default function ProductCard({ product }: { product: Product }) {
  const priceLabel =
    product.price === null
      ? "Sob consulta"
      : `${product.currency} ${product.price.toLocaleString("pt-BR")}`;

  return (
    <Link to={`/produto/${product.slug}`} className="block group cursor-pointer">
      <div className="pcard-media w-full aspect-square bg-secondary-100">
        <img
          src={product.main}
          alt={`${product.name} — ${product.categoryLabel}`}
          title={`${product.name} — ${product.categoryLabel}`}
          className="img-a"
        />
        <img src={product.worn} alt="" aria-hidden="true" className="img-b" />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h4 className="text-[14px] md:text-[15px] leading-snug text-foreground-950">
            <span className="transition-colors duration-200 group-hover:text-primary-600">
              {product.name}
            </span>
          </h4>
          <div className="mt-2 flex items-center gap-2">
            <span className="flex items-center gap-1">
              {product.colors.slice(0, 3).map((c) => (
                <span
                  key={c.name}
                  className="w-3 h-3 rounded-full border border-foreground-950/15"
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </span>
            <span className="text-[12px] text-foreground-500 truncate">
              {product.colors.map((c) => c.name).join(" · ")}
            </span>
          </div>
        </div>
        <p className="shrink-0 text-[14px] md:text-[15px] text-foreground-950 whitespace-nowrap">
          {priceLabel}
        </p>
      </div>
    </Link>
  );
}