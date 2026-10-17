import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Como vou receber os arquivos?',
    answer: 'O link de acesso ao Google Drive com todas as pastas organizadas é enviado imediatamente para o seu e-mail e também pelo WhatsApp cadastrados assim que o pagamento for aprovado pelo sistema. O envio é 100% automático.'
  },
  {
    question: 'Preciso ter a máquina Silhouette para usar?',
    answer: 'Não! Mais de metade das nossas artesãs trabalham como "tesouretes" cortando na tesoura ou estilete. Por isso, todos os moldes acompanham versões prontas em PDF com linhas pontilhadas de dobra e vinco perfeitas para imprimir em folha A4.'
  },
  {
    question: 'Por quanto tempo terei acesso ao acervo?',
    answer: 'No Pacote VIP Completo o seu acesso é vitalício! As pastas ficam salvas no seu Google Drive para você baixar quando quiser, quantas vezes precisar, hoje ou daqui a anos, sem nunca expirar.'
  },
  {
    question: 'Consigo acessar pelo celular ou preciso de computador?',
    answer: 'Você pode acessar, navegar e baixar os arquivos tanto pelo celular ou tablet quanto pelo computador/notebook através do aplicativo do Google Drive.'
  },
  {
    question: 'Os arquivos são editáveis?',
    answer: 'Sim! Os moldes em formato Silhouette Studio (.studio3) permitem alterar nomes, idades, trocar cores e texturas. Além disso, você recebe o bônus de videoaulas ensinando o passo a passo de como fazer isso em menos de 1 minuto.'
  },
  {
    question: 'Quais as formas de pagamento disponíveis?',
    answer: 'Aceitamos PIX com aprovação instantânea e liberação em 2 minutos, e Cartão de Crédito (com parcelamento em até 5x). O ambiente de pagamento possui certificado de segurança SSL e criptografia ponta a ponta.'
  }
];

interface FaqAccordionProps {
  onOpenHelp: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ onOpenHelp }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-14 sm:py-20 bg-white px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-purple-700 bg-purple-100 px-3 py-1 rounded-full uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Ficou com alguma dúvida sobre o acervo? Veja as respostas mais comuns abaixo:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/60"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4 px-5 text-left font-extrabold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:text-purple-700 transition"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Card */}
        <div className="p-5 bg-purple-50/70 rounded-2xl border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-extrabold text-slate-900 text-sm">Ainda precisa de ajuda?</h4>
            <p className="text-xs text-slate-600">Nossa equipe de suporte tira suas dúvidas diretamente no WhatsApp.</p>
          </div>
          <button
            onClick={onOpenHelp}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs px-4 py-2.5 rounded-xl shadow-xs transition cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>FALAR NO WHATSAPP</span>
          </button>
        </div>

      </div>
    </section>
  );
};
