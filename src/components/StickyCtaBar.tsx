import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface StickyCtaBarProps {
  onCtaClick: () => void;
}

export const StickyCtaBar: React.FC<StickyCtaBarProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md text-white border-t border-purple-500/30 p-2.5 sm:p-3 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex w-8 h-8 rounded-full bg-amber-400 text-slate-950 items-center justify-center font-bold text-xs">
            <Zap className="w-4 h-4 fill-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black text-white">
                Acervo Completo VIP
              </span>
              <span className="text-[10px] bg-purple-600 font-bold px-1.5 py-0.5 rounded text-white hidden sm:inline-block">
                Vitalício
              </span>
            </div>
            <div className="flex items-baseline gap-1 text-[11px] sm:text-xs">
              <span className="text-slate-400 line-through">R$ 197</span>
              <span className="text-emerald-400 font-black text-sm sm:text-base">R$ 44,00</span>
            </div>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-black text-xs sm:text-sm py-2 px-4 sm:px-6 rounded-xl shadow-md transition whitespace-nowrap cursor-pointer flex items-center gap-1.5"
        >
          <span>QUERO COM DESCONTO</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
