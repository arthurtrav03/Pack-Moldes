import React from 'react';
import { ShieldCheck, Lock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 px-4 text-xs space-y-6 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand & Wordmark */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white">
            <span className="text-xl font-black tracking-tight">
              Acervo de Moldes <span className="text-purple-400">VIP</span>
            </span>
          </div>
          <p className="text-zinc-500 text-xs max-w-sm">
            O ecossistema completo para artesãs acelerarem suas produções e faturarem alto com papelaria personalizada.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <a href="#amostras" className="hover:text-white transition">Amostras</a>
          <a href="#bonus" className="hover:text-white transition">Bônus</a>
          <a href="#beneficios" className="hover:text-white transition">Vantagens</a>
          <a href="#planos" className="hover:text-white transition">Planos</a>
          <a href="#duvidas" className="hover:text-white transition">Dúvidas Frequentes</a>
        </div>

        {/* Security badges */}
        <div className="flex items-center justify-center gap-3 text-zinc-400 text-[11px]">
          <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>SSL 256-bit</span>
          </div>
          <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Garantia 7 Dias</span>
          </div>
        </div>

      </div>

      <div className="max-w-3xl mx-auto text-center space-y-2 pt-6 border-t border-zinc-900 text-zinc-500 text-[11px] leading-relaxed">
        <p className="text-zinc-400 font-medium">
          © {new Date().getFullYear()} - Todos os direitos reservados. Acervo de Moldes Prontos para Papelaria Personalizada.
        </p>
        <p>
          Este site não possui vínculo institucional com o Facebook, Instagram ou Google. Todos os conteúdos digitais são licenciados para uso pessoal e confecção artesanal de encomendas.
        </p>
      </div>
    </footer>
  );
};
