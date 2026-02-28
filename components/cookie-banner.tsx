"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[min(96%,720px)] -translate-x-1/2 rounded-xl border bg-white p-4 shadow-xl">
      <p className="text-sm">Diese Website verwendet essenzielle Cookies für Funktionalität und Formularsicherheit.</p>
      <button className="mt-3 rounded bg-brand px-3 py-2 text-sm font-semibold text-white" onClick={() => { localStorage.setItem("cookie-consent", "1"); setShow(false); }}>Verstanden</button>
    </div>
  );
}
