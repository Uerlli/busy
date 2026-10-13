import { useEffect, useState } from "react";
import { ANNOUNCEMENTS } from "@/mocks/brand";

/**
 * Faixa superior editável. Mensagens reais apenas — sem promoções fictícias,
 * contagem regressiva ou urgência artificial. Edite ANNOUNCEMENTS em mocks/brand.ts.
 */
export default function Announcement() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (ANNOUNCEMENTS.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % ANNOUNCEMENTS.length), 4800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="announce" role="region" aria-label="Avisos da marca">
      {ANNOUNCEMENTS.map((m, i) => (
        <span key={m} className={`announce-msg ${i === idx ? "is-active" : ""}`}>
          {m}
        </span>
      ))}
    </div>
  );
}