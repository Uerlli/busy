import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import SearchOverlay from "./SearchOverlay";
import Announcement from "./Announcement";

/**
 * Layout compartilhado. `overlay` é usado nas páginas cuja primeira dobra é
 * uma imagem de tela cheia — o cabeçalho fica transparente sobre a imagem e
 * ganha superfície sólida ao rolar.
 */
export default function Layout({
  children,
  overlay = false,
}: {
  children: ReactNode;
  overlay?: boolean;
}) {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-background-50">
      <Announcement />
      <Header overlay={overlay} />
      <main
        key={location.pathname}
        className={`route-fade ${overlay ? "" : "pt-[96px] md:pt-[116px]"}`}
      >
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
    </div>
  );
}