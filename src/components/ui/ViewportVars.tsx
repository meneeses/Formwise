"use client";
import { useEffect } from "react";

export default function ViewportVars() {
  useEffect(() => {
    const setVar = () => {
      const el = document.getElementById("site-header");
      const h = el?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    setVar();
    // atualiza em resize e quando fontes carregam
    window.addEventListener("resize", setVar);
    document.fonts?.addEventListener?.("loadingdone", setVar);
    return () => {
      window.removeEventListener("resize", setVar);
      document.fonts?.removeEventListener?.("loadingdone", setVar);
    };
  }, []);
  return null;
}
