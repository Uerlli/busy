import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Save scroll positions per key, restore on POP navigation (Back/Forward), otherwise scroll to 0.
export default function ScrollManager() {
  const location = useLocation();
  const navType = useNavigationType();
  const positions = useRef<Map<string, number>>(new Map());
  const prevKey = useRef<string | null>(null);

  useEffect(() => {
    // Save previous scroll before route change
    return () => {
      if (prevKey.current) {
        positions.current.set(prevKey.current, window.scrollY);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Save the currently leaving position
    const onBeforeUnload = () => {
      if (prevKey.current) positions.current.set(prevKey.current, window.scrollY);
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, []);

  useLayoutEffect(() => {
    const key = location.key;
    if (prevKey.current && prevKey.current !== key) {
      positions.current.set(prevKey.current, window.scrollY);
    }

    if (navType === "POP") {
      const saved = positions.current.get(key);
      window.scrollTo(0, typeof saved === "number" ? saved : 0);
    } else {
      window.scrollTo(0, 0);
    }

    prevKey.current = key;
  }, [location.key, navType]);

  return null;
}