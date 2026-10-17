import React from 'react';
import { Check, X, Star, Zap, ShieldCheck, Download, Sparkles, FolderArchive, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_papelaria_mockup_1792085049903.jpg';
import caixasImg from '../assets/images/caixas_personalizadas_pack_1792085051187.jpg';

interface PricingPlansProps {
  onSelectPlan: (plan: 'basico' | 'vip') => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="planos" className="py-14 sm:py-24 bg-gradient-to-b from-purple-50/50 via-rose-50/20 to-purple-50/50 px-4 scroll-mt-14 relative">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="bg-purple-700 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
            ESCOLHA O PACOTE IDEAL
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            OFERTA PROMOCIONAL EXCLUSIVA
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Pagamento único, sem assinaturas. Acesso vitalício liberado imediatamente após a confirmação.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left items-stretch">
          
          {/* PLANO BÁSICO */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-200/90 flex flex-col justify-between hover:border-slate-300 transition duration-300">
            <div>
              {/* Header Box */}
              <div className="text-center pb-5 border-b border-slate-100">
                <span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Opção de Entrada</span>
                <h3 className="font-black text-slate-800 text-xl mt-1">PACOTE BÁSICO</h3>
                <p className="text-xs text-slate-500 mt-0.5">Arquivos Essenciais em PDF</p>
              </div>

              {/* Preview illustration */}
              <div className="my-5 p-3 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                <div className="relative w-full h-40 rounded-xl overflow-hidden">
                  <img
                    src={caixasImg}
                    alt="Pacote Básico"
                    className="w-full h-full object-cover grayscale-[30%] opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                    <span className="bg-white/95 text-slate-800 text-xs font-bold px-3 py-1 rounded-lg shadow-sm">
                      Versão Essencial PDF
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature List */}
              <ul className="text-xs space-y-3 text-slate-600 mb-6 font-medium">
                <li className="flex items-start gap-2.5 text-slate-900 font-bold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Acervo Principal de Moldes em PDF</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-900 font-bold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Formatos prontos para tesoura (tesouretes)</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-900 font-bold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Acesso organizado via Google Drive</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400 line-through">
                  <X className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                  <span>Arquivos Editáveis em Studio (.studio3)</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400 line-through">
                  <X className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                  <span>Super Pack de +1.000 Fontes Premium</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400 line-through">
                  <X className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                  <span>Banco de Papéis Digitais e PNGs 300 DPI</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400 line-through">
                  <X className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                  <span>Aulas de Edição & Atualizações Semanais</span>
                </li>
              </ul>
            </div>

            {/* Price and CTA */}
            <div>
              <div className="text-center my-4 pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400 block font-semibold">Pagamento único de</span>
                <div className="flex items-baseline justify-center gap-1 mt-1">
                  <span className="text-xs font-bold text-slate-500">R$</span>
                  <span className="text-4xl font-black text-slate-900">19,90</span>
                </div>
                <span className="text-[11px] text-slate-500 block mt-1">Sem mensalidades · Acesso Imediato</span>
              </div>

              <button
                onClick={() => onSelectPlan('basico')}
                className="w-full block text-center bg-slate-800 hover:bg-slate-900 text-white font-extrabold text-sm py-4 px-4 rounded-xl shadow-md transition duration-200 cursor-pointer"
              >
                QUERO O PACOTE BÁSICO
              </button>
            </div>
          </div>

          {/* PLANO COMPLETO (RECOMENDADO VIP) */}
          <div className="bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-purple-500/80 flex flex-col justify-between relative transform md:-translate-y-3 hover:-translate-y-4 transition duration-300">
            
            {/* Top highlight ribbon */}
            <div className="absolute -top-4 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs px-4 py-1.5 rounded-full uppercase shadow-md flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-slate-950" />
              <span>MAIS ESCOLHIDO (96%)</span>
            </div>

            <div>
              {/* Header Box */}
              <div className="text-center pb-5 border-b border-purple-700/60">
                <span className="text-xs font-black uppercase text-amber-300 tracking-wider">Acesso Total & Vitalício</span>
                <h3 className="font-black text-white text-2xl mt-1">PACOTE COMPLETO VIP</h3>
                <p className="text-xs text-purple-200 mt-0.5">Acervo Completo + Todos os 4 Bônus Exclusivos</p>
              </div>

              {/* Preview image */}
              <div className="my-5 p-2 bg-purple-900/60 rounded-2xl flex items-center justify-center border border-purple-600/40">
                <div className="relative w-full h-40 rounded-xl overflow-hidden">
                  <img
                    src={heroImg}
                    alt="Pacote VIP Completo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent flex items-end p-2.5">
                    <span className="bg-amber-400 text-slate-950 text-[11px] font-black px-2.5 py-1 rounded-md shadow">
                      +3.500 Moldes Prontos
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature List */}
              <ul className="text-xs space-y-2.5 text-purple-100 mb-6 font-medium">
                <li className="flex items-start gap-2.5 text-amber-300 font-extrabold">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Milhares de Moldes em Studio (.studio3) e PDF</span>
                </li>
                <li className="flex items-start gap-2.5 text-white font-bold">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Topos de Bolo 3D, Caixas Lembrancinhas e Kits</span>
                </li>
                <li className="flex items-start gap-2.5 text-white font-bold">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Acesso Vitalício ao Google Drive com Atualizações</span>
                </li>
                <li className="flex items-start gap-2.5 text-amber-300 font-bold bg-purple-800/40 p-2 rounded-xl border border-purple-500/30">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>🎁 Bônus 1: Videoaulas de Edição Rápida</span>
                </li>
                <li className="flex items-start gap-2.5 text-amber-300 font-bold bg-purple-800/40 p-2 rounded-xl border border-purple-500/30">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>🎁 Bônus 2: Super Pack +1.000 Fontes Instaláveis</span>
                </li>
                <li className="flex items-start gap-2.5 text-amber-300 font-bold bg-purple-800/40 p-2 rounded-xl border border-purple-500/30">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>🎁 Bônus 3: Banco de Papéis Digitais & PNGs 300 DPI</span>
                </li>
                <li className="flex items-start gap-2.5 text-amber-300 font-bold bg-purple-800/40 p-2 rounded-xl border border-purple-500/30">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>🎁 Bônus 4: Atualizações de Lançamentos 2026</span>
                </li>
                <li className="flex items-start gap-2.5 text-emerald-300 font-extrabold bg-emerald-950/70 p-2.5 rounded-xl border border-emerald-500/50">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Envio Imediato via e-mail e WhatsApp (2 minutos)</span>
                </li>
              </ul>
            </div>

            {/* Price and CTA */}
            <div>
              <div className="text-center my-4 pt-4 border-t border-purple-700/60">
                <span className="text-xs text-purple-300 block line-through">
                  De R$ 197,00 por apenas
                </span>
                <div className="flex items-baseline justify-center gap-1 mt-1">
                  <span className="text-base font-bold text-amber-300">R$</span>
                  <span className="text-5xl font-black text-white tracking-tight">44,00</span>
                </div>
                <span className="text-[11px] text-purple-200 block mt-1 font-semibold">
                  ou até 5x no cartão · Pagamento único · Sem taxas
                </span>
              </div>

              <button
                onClick={() => onSelectPlan('vip')}
                className="w-full block text-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 active:from-emerald-700 text-white font-black text-base py-4 px-6 rounded-2xl shadow-xl transition transform hover:scale-[1.02] cursor-pointer"
              >
                QUERO O ACESSO VIP COMPLETO
              </button>
            </div>
          </div>

        </div>

        {/* Security badges row */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-500 font-semibold">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Compra 100% Segura com SSL
          </span>
          <span className="flex items-center gap-1.5">
            <Download className="w-4 h-4 text-purple-600" /> Acesso Imediato no Google Drive
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" /> Garantia Incondicional de 7 Dias
          </span>
        </div>

      </div>
    </section>
  );
};
