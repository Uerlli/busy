import type { RouteObject } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/home/page";
import { Camisas, Polos, Novidades } from "@/pages/collection/page";
import ProductDetail from "@/pages/product/page";
import About from "@/pages/about/page";
import Contact from "@/pages/contact/page";
import Cart from "@/pages/cart/page";
import FAQ from "@/pages/faq/page";
import { Shipping, Privacy, Terms } from "@/pages/info/page";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/camisas", element: <Camisas /> },
  { path: "/polos", element: <Polos /> },
  { path: "/novidades", element: <Novidades /> },
  { path: "/produto/:slug", element: <ProductDetail /> },
  { path: "/a-marca", element: <About /> },
  { path: "/contato", element: <Contact /> },
  { path: "/sacola", element: <Cart /> },
  { path: "/duvidas", element: <FAQ /> },
  { path: "/envio-e-devolucoes", element: <Shipping /> },
  { path: "/privacidade", element: <Privacy /> },
  { path: "/termos", element: <Terms /> },
  { path: "*", element: <NotFound /> },
];

export default routes;