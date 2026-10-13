import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import type { Product } from "@/mocks/products";

export type CartItem = { product: Product; variant: string; qty: number };

type UICtx = {
  items: CartItem[];
  addToCart: (p: Product, variant: string, qty?: number) => void;
  updateQty: (idx: number, qty: number) => void;
  removeItem: (idx: number) => void;
  subtotal: number;
  count: number;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
};

const Ctx = createContext<UICtx | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const addToCart = useCallback((p: Product, variant: string, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.product.id === p.id && i.variant === variant);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [...prev, { product: p, variant, qty }];
    });
    setCartOpen(true);
  }, []);

  const updateQty = useCallback((idx: number, qty: number) => {
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, qty: Math.max(1, qty) } : it)));
  }, []);

  const removeItem = useCallback((idx: number) => {
    setItems((prev) => prev.filter((_, i) => i !== idx));
  }, []);

  const subtotal = useMemo(
    () => items.reduce((s, i) => s + (i.product.price ?? 0) * i.qty, 0),
    [items]
  );
  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  // Scroll lock + escape handling
  useEffect(() => {
    const anyOpen = cartOpen || searchOpen;
    if (anyOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setCartOpen(false);
          setSearchOpen(false);
        }
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev || "";
        window.removeEventListener("keydown", onKey);
      };
    } else {
      // Ensure cleanup restores scroll unconditionally
      document.body.style.overflow = "";
    }
  }, [cartOpen, searchOpen]);

  const value: UICtx = {
    items, addToCart, updateQty, removeItem, subtotal, count,
    cartOpen, openCart: () => setCartOpen(true), closeCart: () => setCartOpen(false),
    searchOpen, openSearch: () => setSearchOpen(true), closeSearch: () => setSearchOpen(false),
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useUI() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useUI outside provider");
  return v;
}