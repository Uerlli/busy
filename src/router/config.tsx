import type { RouteObject } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/home/page";
import CollectionPage from "@/pages/collection/page";
import ProductDetail from "@/pages/product/page";
import Looks from "@/pages/looks/page";
import About from "@/pages/about/page";
import Contact from "@/pages/contact/page";
import Cart from "@/pages/cart/page";
import FAQ from "@/pages/faq/page";
import { Shipping, Privacy, Terms } from "@/pages/info/page";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/colecao/:slug", element: <CollectionPage /> },
  { path: "/novidades", element: <CollectionPage /> },
  { path: "/produto/:slug", element: <ProductDetail /> },
  { path: "/looks", element: <Looks /> },
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