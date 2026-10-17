import React from 'react';
import { CheckCircle2, Star, ShieldCheck, Download, Sparkles, FolderArchive, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_papelaria_mockup_1792085049903.jpg';

interface HeroProps {
  onPlanSelect: (plan: 'vip' | 'basico') => void;
  onOpenThemeSearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlanSelect, onOpenThemeSearch }) => {
  return (
    <section className="bg-gradient-to-b from-purple-50/70 via-fuchsia-50/30 to-white py-10 sm:py-16 px-4 text-center relative overflow-hidden">
      {/* Decorative ambient blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        
        {/* Trust pill */}
        <div className="inline-flex items-center gap-2 bg-purple-100/90 text-purple-900 border border-purple-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-purple-600 fill-purple-600" />
          <span>O MAIOR ACERVO DO BRASIL PARA ARTESÃS E ATELIÊS</span>
        </div>

        {/* Main headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900">
          Tenha acesso a um <span className="text-purple-600 underline decoration-purple-300 decoration-wavy underline-offset-4">acervo profissional</span> com milhares de moldes prontos para <span className="text-amber-600">responder qualquer cliente em minutos</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Nunca mais perca uma venda por não ter o tema pronto. Centenas de caixas, topos de bolo e lembrancinhas prontas para imprimir e cortar!
        </p>

        {/* Mockup Card with real product image */}
        <div className="py-2 flex justify-center">
          <div className="relative inline-block max-w-2xl w-full mx-auto group">
            {/* Soft backdrop glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-400/30 via-emerald-400/20 to-indigo-400/30 rounded-3xl blur-2xl opacity-75 pointer-events-none transition group-hover:opacity-100" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-100 bg-white">
              <img
                src={heroImg}
                alt="Acervo Profissional de Moldes Prontos - Papelaria Personalizada"
                className="w-full h-auto object-cover object-center rounded-2xl transition duration-500 hover:scale-[1.02]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating feature pills on the image */}
              <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-1.5">
                <FolderArchive className="w-3.5 h-3.5 text-amber-400" />
                <span>+3.500 Arquivos no Drive</span>
              </div>

              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-purple-950 text-[11px] sm:text-xs font-black px-3 py-1.5 rounded-xl border border-purple-200 shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Formatos: Studio + PDF + PNG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Search Catalog Teaser Button */}
        <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenThemeSearch}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-purple-800 bg-purple-100 hover:bg-purple-200 px-4 py-2.5 rounded-xl border border-purple-200 transition cursor-pointer"
          >
            <span>🔍 Buscar se seu tema favorito está no acervo</span>
            <span className="bg-purple-700 text-white text-[10px] px-2 py-0.5 rounded-full font-black">TESTAR AGORA</span>
          </button>
        </div>

        {/* Dark Callout Action Card */}
        <div className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-7 max-w-xl mx-auto shadow-2xl space-y-4 border border-zinc-800 relative">
          <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
            Tenha <span className="text-emerald-400 font-bold">acesso imediato</span> ao maior acervo de <span className="text-amber-300 font-bold">arquivos e moldes editáveis</span> para você <span className="text-white font-semibold">acelerar sua produção</span> e <span className="text-emerald-300 font-semibold">fechar encomendas na hora</span>.
          </p>
          
          <button
            onClick={() => onPlanSelect('vip')}
            className="w-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-black text-sm sm:text-base py-4 px-6 rounded-xl shadow-lg transition duration-200 transform hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2 tracking-wide"
          >
            <span>QUERO MEU ACESSO COM DESCONTO</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Micro trust row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-zinc-400">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Acesso Vitalício
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Download className="w-3.5 h-3.5 text-amber-400" /> Download Imediato
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" /> 7 Dias de Garantia
            </span>
          </div>
        </div>

        {/* Social Proof Stars */}
        <div className="pt-2 flex flex-col items-center justify-center gap-1.5 text-slate-600">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-xs font-semibold text-slate-700">
            Mais de <strong className="text-purple-800">4.800 artesãs</strong> já transformaram sua rotina e economizam horas de trabalho
          </p>
        </div>

      </div>
    </section>
  );
};
