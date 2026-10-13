import { Link } from "react-router-dom";

export type Crumb = { label: string; to?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Início", to: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      {all.map((c, i) => {
        const isLast = i === all.length - 1;
        return (
          <span key={i} className="flex items-center">
            {i > 0 && <span className="sep">/</span>}
            {isLast || !c.to ? (
              <span className="current">{c.label}</span>
            ) : (
              <Link to={c.to}>{c.label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}