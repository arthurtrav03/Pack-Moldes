import React from 'react';
import { ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-amber-50/60 px-4">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 bg-white p-6 sm:p-8 rounded-3xl border-2 border-amber-300 shadow-md">
        
        {/* Seal Graphic */}
        <div className="shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 p-2 shadow-lg flex items-center justify-center text-center">
          <div className="w-full h-full rounded-full border-2 border-dashed border-amber-700/50 flex flex-col items-center justify-center p-2 bg-amber-400/20">
            <span className="text-2xl sm:text-3xl font-black text-amber-950 leading-none">7</span>
            <span className="text-[10px] font-black uppercase text-amber-900 tracking-wider">DIAS DE</span>
            <span className="text-[9px] font-extrabold uppercase text-amber-950">GARANTIA</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center sm:text-left space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-md">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RISCO ZERO PARA VOCÊ</span>
          </div>
          <h3 className="font-black text-lg sm:text-xl text-slate-900">
            GARANTIA INCONDICIONAL DE 7 DIAS
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Testar o acervo é 100% sem risco. Baixe os moldes, use em seus projetos e veja como tudo é organizado. Se por qualquer motivo você não amar os arquivos, basta nos enviar um e-mail ou mensagem no WhatsApp que devolvemos <strong>100% do seu dinheiro</strong>, sem letras miúdas.
          </p>
          <div className="pt-1 flex items-center justify-center sm:justify-start gap-4 text-xs font-bold text-emerald-700">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Reembolso Instantâneo
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Código do Consumidor Art. 49
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
