import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';

interface Testimonial {
  name: string;
  business: string;
  city: string;
  text: string;
  rating: number;
  date: string;
  avatarColor: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Juliana M.',
    business: 'Ateliê Doce Papel',
    city: 'São Paulo - SP',
    text: 'Gente, facilitou demais a minha vida! Antes eu perdia horas criando os moldes do zero no Studio Silhouette, agora é só baixar, trocar o nome da criança e mandar cortar. Meus finais de semana voltaram a existir!',
    rating: 5,
    date: 'Compradora Verificada',
    avatarColor: 'bg-purple-600'
  },
  {
    name: 'Camila F.',
    business: 'Papelaria Personalizada & Mimos',
    city: 'Belo Horizonte - MG',
    text: 'Consigo responder os orçamentos no WhatsApp na hora, mandando a foto do kit já pronto. As vendas aumentaram muito porque mãe não espera: quem manda o modelo primeiro fecha a festa!',
    rating: 5,
    date: 'Compradora Verificada',
    avatarColor: 'bg-emerald-600'
  },
  {
    name: 'Fernanda S.',
    business: 'Tesoureira & Festas Criativas',
    city: 'Rio de Janeiro - RJ',
    text: 'Achei sensacional a organização das pastas no Drive! Eu corto tudo na tesoura e os PDFs vêm com as linhas certinhas de dobra e corte. Não fico mais perdendo arquivos bagunçados no computador.',
    rating: 5,
    date: 'Compradora Verificada',
    avatarColor: 'bg-amber-600'
  },
  {
    name: 'Larissa R.',
    business: 'Lari Mimos & Convites',
    city: 'Curitiba - PR',
    text: 'O pacote de fontes e as videoaulas valem mais que o preço do acervo todo! Em um único pedido de 30 caixinhas milk eu já recuperei 3 vezes o valor que investi. Podem comprar sem medo.',
    rating: 5,
    date: 'Compradora Verificada',
    avatarColor: 'bg-indigo-600'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-14 sm:py-20 bg-white px-4 border-b border-slate-100">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        
        <div>
          <span className="text-xs font-black text-purple-700 uppercase tracking-widest block mb-1">
            RESULTADOS REAIS NA PRÁTICA
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            O QUE DIZEM NOSSAS ARTESÃS
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2">
            Veja a experiência de quem já está economizando tempo e faturando mais com o acervo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-5 border border-slate-200/80 rounded-2xl bg-slate-50/60 space-y-3.5 flex flex-col justify-between hover:border-purple-200 hover:shadow-md transition duration-200"
            >
              <div className="space-y-3">
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-600" /> Verificada
                  </span>
                </div>

                {/* Testimonial body */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.avatarColor} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs`}>
                  {t.name.slice(0, 2)}
                </div>
                <div>
                  <span className="text-xs font-black text-slate-900 block">{t.name}</span>
                  <span className="text-[11px] font-medium text-slate-500 block">{t.business}</span>
                  <span className="text-[10px] text-slate-400 block">{t.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp style audio note proof banner */}
        <div className="bg-purple-50 p-4 rounded-2xl border border-purple-200 max-w-xl mx-auto flex items-center justify-center gap-3 text-xs text-purple-900 font-semibold">
          <ThumbsUp className="w-4 h-4 text-purple-700 shrink-0" />
          <span>Mais de 99.4% de avaliações positivas em nossa central de atendimento.</span>
        </div>

      </div>
    </section>
  );
};
