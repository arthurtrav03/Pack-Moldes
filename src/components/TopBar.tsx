import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, Zap } from 'lucide-react';

interface TopBarProps {
  onCtaClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onCtaClick }) => {
  // Countdown timer in seconds (starts at 14 min 30 sec)
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 1 ? prev - 1 : 14 * 60));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Promo Notification Bar */}
      <div className="bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white py-2 px-3 shadow-md relative z-40 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center font-medium">
          <div className="flex items-center gap-1.5 font-bold text-amber-300">
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
            <span>OFERTA RELÂMPAGO:</span>
          </div>
          <span className="text-purple-100">
            Acesso vitalício ao Drive liberado hoje com mais de 75% OFF
          </span>
          <div className="flex items-center gap-1 bg-purple-950/60 px-2 py-0.5 rounded text-amber-300 font-mono font-bold tracking-wider text-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* Main Clean Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-xs transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
          {/* Brand Wordmark */}
          <a href="#" className="flex items-center gap-2 text-slate-900 group">
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-lg shadow-sm group-hover:bg-purple-700 transition">
              ✂️
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">
                Acervo <span className="text-purple-600">VIP</span>
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Papelaria Personalizada
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-semibold text-slate-600">
            <a href="#amostras" className="hover:text-purple-700 transition-colors whitespace-nowrap">
              Amostras
            </a>
            <a href="#bonus" className="hover:text-purple-700 transition-colors whitespace-nowrap">
              Bônus Exclusivos
            </a>
            <a href="#beneficios" className="hover:text-purple-700 transition-colors whitespace-nowrap">
              Vantagens
            </a>
            <a href="#como-funciona" className="hover:text-purple-700 transition-colors whitespace-nowrap">
              Como Funciona
            </a>
            <a href="#depoimentos" className="hover:text-purple-700 transition-colors whitespace-nowrap">
              Depoimentos
            </a>
            <a href="#duvidas" className="hover:text-purple-700 transition-colors whitespace-nowrap">
              Dúvidas
            </a>
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={onCtaClick}
              className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs sm:text-sm font-extrabold py-2.5 px-4 sm:px-5 rounded-xl shadow-sm transition hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              Garantir Acesso
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
