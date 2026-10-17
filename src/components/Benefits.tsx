import React from 'react';
import { Zap, FolderOpen, Scissors, DollarSign, Clock, Layers, Sparkles, HeartHandshake } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-14 sm:py-20 bg-stone-50 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        
        <div>
          <span className="text-xs font-black text-purple-700 uppercase tracking-widest block mb-1">
            ESTRUTURA ORGANIZADA E PENSADA PARA ARTESÃS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            POR QUE ESSE ACERVO É PARA VOCÊ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Chega de passar horas desenhando caixinhas do zero na madrugada enquanto as mensagens do WhatsApp acumulam!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200/80 flex items-start space-x-4 hover:border-purple-300 hover:shadow-md transition">
            <div className="text-3xl p-3 bg-purple-100/70 text-purple-700 rounded-2xl shrink-0">
              <Zap className="w-7 h-7 text-purple-700" />
            </div>
            <div className="space-y-1.5 self-center">
              <h4 className="font-black text-base text-slate-900">
                Agilidade no Atendimento
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Envie a prévia da arte e foto do kit pronto para seu cliente no WhatsApp em questão de minutos antes que ele procure outra pessoa.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200/80 flex items-start space-x-4 hover:border-purple-300 hover:shadow-md transition">
            <div className="text-3xl p-3 bg-amber-100/70 text-amber-700 rounded-2xl shrink-0">
              <FolderOpen className="w-7 h-7 text-amber-700" />
            </div>
            <div className="space-y-1.5 self-center">
              <h4 className="font-black text-base text-slate-900">
                Drive 100% Organizado
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pastas catalogadas por temas, tipos de peças e datas especiais para você não perder tempo caçando arquivos soltos no seu computador.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200/80 flex items-start space-x-4 hover:border-purple-300 hover:shadow-md transition">
            <div className="text-3xl p-3 bg-emerald-100/70 text-emerald-700 rounded-2xl shrink-0">
              <Scissors className="w-7 h-7 text-emerald-700" />
            </div>
            <div className="space-y-1.5 self-center">
              <h4 className="font-black text-base text-slate-900">
                Corte com Tesoura ou Máquina
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Arquivos já ajustados em PDF para tesouretes e em formato Studio (.studio3) para quem usa plotter de corte Silhouette Cameo ou Portrait.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200/80 flex items-start space-x-4 hover:border-purple-300 hover:shadow-md transition">
            <div className="text-3xl p-3 bg-indigo-100/70 text-indigo-700 rounded-2xl shrink-0">
              <DollarSign className="w-7 h-7 text-indigo-700" />
            </div>
            <div className="space-y-1.5 self-center">
              <h4 className="font-black text-base text-slate-900">
                Sem Custos Mensais
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pague uma única vez hoje e use o acervo quantas vezes quiser em seus pedidos, sem nenhuma taxa escondida ou mensalidade no cartão.
              </p>
            </div>
          </div>

        </div>

        {/* Comparison Callout */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 text-left shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">
              ECONOMIA REAL DE TEMPO & DINHEIRO
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Comprar arquivos avulsos custa entre R$ 10 e R$ 25 cada molde
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Com apenas 2 encomendas fechadas, o seu investimento no acervo completo se paga e todo o resto é lucro direto para o seu ateliê!
            </p>
          </div>
          <a
            href="#planos"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm py-3 px-6 rounded-xl transition whitespace-nowrap shadow-lg cursor-pointer"
          >
            QUERO ECONOMIZAR AGORA
          </a>
        </div>

      </div>
    </section>
  );
};
