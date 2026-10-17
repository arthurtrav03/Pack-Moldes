import React from 'react';
import { Video, Type, Image as ImageIcon, Sparkles, Gift, CheckCircle } from 'lucide-react';

interface BonusItem {
  id: number;
  title: string;
  description: string;
  originalPrice: string;
  icon: React.ReactNode;
  tag: string;
  bgGradient: string;
  accentColor: string;
  highlights: string[];
}

const BONUSES: BonusItem[] = [
  {
    id: 1,
    title: 'Aulas Rápidas de Edição',
    description: 'Aprenda a alterar nomes e idades nos arquivos em poucos segundos, mesmo se você nunca mexeu em programas de edição.',
    originalPrice: 'R$ 47,00',
    icon: <Video className="w-8 h-8 text-purple-600" />,
    tag: 'Passo a Passo em Vídeo',
    bgGradient: 'from-purple-500/10 to-indigo-500/10',
    accentColor: 'text-purple-600',
    highlights: ['Silhouette Studio do zero', 'Edição rápida de textos', 'Dicas para economizar papel']
  },
  {
    id: 2,
    title: 'Super Pack de +1.000 Fontes Premium',
    description: 'O acervo definitivo com fontes temáticas infantis, cursivas elegantes e fontes 3D prontas para instalar no Windows ou Mac.',
    originalPrice: 'R$ 37,00',
    icon: <Type className="w-8 h-8 text-amber-600" />,
    tag: '+1.000 Tipografias',
    bgGradient: 'from-amber-500/10 to-orange-500/10',
    accentColor: 'text-amber-600',
    highlights: ['Fontes infantis temáticas', 'Letras 3D e cursivas', 'Instalação com 1 clique']
  },
  {
    id: 3,
    title: 'Banco de Papéis Digitais & PNGs',
    description: 'Milhares de texturas em alta resolução (300 DPI) e personagens recortados com fundo transparente para você criar variações infinitas.',
    originalPrice: 'R$ 57,00',
    icon: <ImageIcon className="w-8 h-8 text-emerald-600" />,
    tag: 'Texturas & Clipart 300 DPI',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    accentColor: 'text-emerald-600',
    highlights: ['Fundos geométricos e florais', 'Personagens com fundo transparente', 'Resolução para impressão fotográfica']
  },
  {
    id: 4,
    title: 'Atualizações de Lançamentos 2026',
    description: 'Acesso às novas pastas do Drive conforme surgirem novos temas e tendências no mercado de festas e eventos.',
    originalPrice: 'R$ 97,00',
    icon: <Sparkles className="w-8 h-8 text-rose-600" />,
    tag: 'Novos Temas Adicionados',
    bgGradient: 'from-rose-500/10 to-pink-500/10',
    accentColor: 'text-rose-600',
    highlights: ['Temas que estão em alta', 'Sem cobranças adicionais', 'Drive sempre atualizado']
  }
];

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus" className="py-14 sm:py-20 bg-purple-50/60 px-4 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-purple-700" />
            <span>PACOTE EXCLUSIVO PARA HOJE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            4 BÔNUS ESPECIAIS INCLUSOS
          </h2>
          <span className="inline-block bg-purple-700 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase shadow-xs">
            GARANTIDOS HOJE NO PACOTE VIP COMPLETO
          </span>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Além de todo o acervo de milhares de moldes prontos, você levará gratuitamente os 4 bônus que vão acelerar suas vendas e economizar seu tempo:
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white p-5 rounded-2xl shadow-md border border-purple-100/90 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-300 group"
            >
              <div className="space-y-4">
                {/* Visual Icon Header Box */}
                <div className={`w-full h-36 rounded-xl bg-gradient-to-br ${bonus.bgGradient} border border-purple-100/60 flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:scale-[1.02] transition`}>
                  <div className="p-3 bg-white rounded-2xl shadow-sm mb-2">
                    {bonus.icon}
                  </div>
                  <span className="text-[11px] font-extrabold text-slate-700 bg-white/90 px-2.5 py-0.5 rounded-full border border-purple-100 shadow-xs">
                    {bonus.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-base mb-1.5 text-slate-900 group-hover:text-purple-700 transition">
                    {bonus.id}. {bonus.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {bonus.description}
                  </p>
                  
                  {/* Micro list */}
                  <ul className="space-y-1 pt-1 border-t border-slate-100 text-[11px] text-slate-500">
                    {bonus.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price Strikethrough Tag */}
              <div className="mt-5 bg-amber-50 text-amber-900 font-extrabold text-xs text-center py-2.5 px-2 rounded-xl border border-amber-200 shadow-xs">
                <span>De </span>
                <span className="line-through text-amber-800/80 font-bold">{bonus.originalPrice}</span>
                <span> por </span>
                <span className="text-emerald-700 font-black">GRÁTIS HOJE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Banner */}
        <div className="bg-white p-5 rounded-2xl border-2 border-purple-200 shadow-sm max-w-2xl mx-auto text-center space-y-2">
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
            VALOR TOTAL DOS BÔNUS SE COMPRADOS SEPARADAMENTE:
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl sm:text-2xl font-black text-slate-400 line-through">R$ 238,00</span>
            <span className="text-sm font-bold text-slate-700">➜</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
              R$ 0,00 (100% GRÁTIS)
            </span>
          </div>
          <p className="text-[11px] text-purple-700 font-medium">
            * Liberado automaticamente no mesmo link do Google Drive logo após a confirmação.
          </p>
        </div>

      </div>
    </section>
  );
};
