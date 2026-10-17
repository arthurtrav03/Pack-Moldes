import React from 'react';
import { CreditCard, MailCheck, Printer, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-14 sm:py-20 bg-white px-4 border-b border-slate-100">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        
        <div>
          <span className="text-xs font-black text-emerald-700 uppercase tracking-widest block mb-1">
            PASSO A PASSO SIMPLES & DESCOMPLICADO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-600 uppercase tracking-tight">
            COMO FUNCIONA?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2">
            Em menos de 3 minutos você já estará baixando seus primeiros arquivos no computador ou celular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Step 1 */}
          <div className="p-6 border border-emerald-100 bg-emerald-50/30 rounded-2xl text-center space-y-3.5 shadow-xs relative group hover:border-emerald-300 transition">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
              <CreditCard className="w-8 h-8 text-emerald-700" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase text-emerald-700 tracking-wider">Passo 01</span>
              <h3 className="font-black text-base text-slate-900">1. Faça o seu Pedido</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Escolha o pacote ideal nesta página com pagamento 100% seguro via PIX (aprovação instantânea) ou Cartão.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 border border-emerald-100 bg-emerald-50/30 rounded-2xl text-center space-y-3.5 shadow-xs relative group hover:border-emerald-300 transition">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
              <MailCheck className="w-8 h-8 text-emerald-700" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase text-emerald-700 tracking-wider">Passo 02</span>
              <h3 className="font-black text-base text-slate-900">2. Acesse o Drive</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Você recebe na hora o link de acesso no seu e-mail e também pelo WhatsApp com instruções de como salvar e usar.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 border border-emerald-100 bg-emerald-50/30 rounded-2xl text-center space-y-3.5 shadow-xs relative group hover:border-emerald-300 transition">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
              <Printer className="w-8 h-8 text-emerald-700" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase text-emerald-700 tracking-wider">Passo 03</span>
              <h3 className="font-black text-base text-slate-900">3. Baixe e Monte</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Escolha o tema do seu cliente, personalize nome e idade e imprima com corte perfeito em tesoura ou Silhouette.
            </p>
          </div>

        </div>

        {/* Small reassurance bar */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Pagamento Criptografado & Seguro
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" /> Liberação Automática em 2 minutos
          </span>
        </div>

      </div>
    </section>
  );
};
