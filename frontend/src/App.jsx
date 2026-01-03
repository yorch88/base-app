import React from "react";
import Servitmodule from "./modules/servicio/components/MainPage.jsx";
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">
          Sistema Universal de Servicios
        </h1>
        <span className="text-xs uppercase tracking-wider text-slate-400">
          Multitenant ID
        </span>
      </header>

      <main className="flex-1 px-6 py-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <h2 className="text-sm font-semibold mb-2 text-slate-200">
            Actividades
          </h2>
         <Servitmodule />
        </section>
      </main>

      <footer className="border-t border-slate-800 px-6 py-3 text-xs text-slate-500">
        Arquitectura universal
      </footer>
    </div>
  );
}