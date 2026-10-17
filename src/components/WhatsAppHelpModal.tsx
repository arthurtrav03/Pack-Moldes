import React, { useState } from 'react';
import { MessageCircle, X, Send, CheckCheck, Sparkles } from 'lucide-react';

interface WhatsAppHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenThemeSearch: () => void;
  onSelectVip: () => void;
}

export const WhatsAppHelpModal: React.FC<WhatsAppHelpModalProps> = ({
  isOpen,
  onClose,
  onOpenThemeSearch,
  onSelectVip
}) => {
  const [userMsg, setUserMsg] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Olá! Sou a consultora do Ateliê VIP. Posso te ajudar a tirar qualquer dúvida sobre o acervo de moldes prontos?',
      time: 'Agora'
    }
  ]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const text = textToSend || userMsg;
    if (!text.trim()) return;

    const newMsgs = [...messages, { sender: 'user' as const, text, time: 'Agora' }];
    setMessages(newMsgs);
    setUserMsg('');

    setTimeout(() => {
      let botReply = 'Com certeza! O acervo possui mais de 3.500 moldes nos formatos Studio e PDF com acesso vitalício no Google Drive.';
      if (text.toLowerCase().includes('tema')) {
        botReply = 'Temos centenas de temas infantis, batizado, 15 anos e sazonais. Você pode pesquisar seu tema exato pelo catálogo interativo!';
      } else if (text.toLowerCase().includes('garantia') || text.toLowerCase().includes('seguro')) {
        botReply = 'Sua compra é 100% protegida com 7 dias de garantia incondicional pelo Código do Consumidor.';
      } else if (text.toLowerCase().includes('imediato') || text.toLowerCase().includes('como')) {
        botReply = 'O envio é imediato via e-mail e WhatsApp em até 2 minutos após a confirmação do pagamento no PIX ou Cartão!';
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botReply,
          time: 'Agora'
        }
      ]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-2 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-sm w-full shadow-2xl border border-emerald-100 overflow-hidden flex flex-col h-[520px]">
        
        {/* WhatsApp Header */}
        <div className="bg-[#075E54] text-white p-3.5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-950 flex items-center justify-center font-bold text-sm shadow-xs">
              ✂️
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">
                Suporte Acervo VIP
              </h4>
              <span className="text-[10px] text-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online agora
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-100 hover:text-white p-1 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat message body with WhatsApp background */}
        <div className="flex-1 bg-[#EFEAE2] p-3 overflow-y-auto space-y-2.5 text-xs">
          <div className="text-center my-1">
            <span className="bg-white/80 text-slate-500 text-[10px] px-2 py-0.5 rounded shadow-xs font-medium">
              HOJE · ATENDIMENTO AUTOMATIZADO
            </span>
          </div>

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex flex-col max-w-[85%] ${
                m.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <div
                className={`p-2.5 rounded-2xl shadow-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#E7FFDB] text-slate-900 rounded-tr-none'
                    : 'bg-white text-slate-800 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
              <div className="flex items-center gap-1 text-[9px] text-slate-400 px-1 mt-0.5">
                <span>{m.time}</span>
                {m.sender === 'user' && <CheckCheck className="w-3 h-3 text-sky-500" />}
              </div>
            </div>
          ))}

          {/* Quick FAQ Suggestion chips */}
          <div className="pt-2 space-y-1">
            <span className="text-[10px] text-slate-500 font-bold block">Perguntas rápidas:</span>
            <div className="flex flex-col gap-1">
              <button
                onClick={() => handleSend('O envio do Google Drive é imediato?')}
                className="bg-white/90 hover:bg-white text-emerald-900 text-[11px] p-2 rounded-xl text-left border border-emerald-200 transition font-medium"
              >
                ⚡ O envio é imediato no e-mail?
              </button>
              <button
                onClick={() => handleSend('Tem arquivos para quem corta na tesoura?')}
                className="bg-white/90 hover:bg-white text-emerald-900 text-[11px] p-2 rounded-xl text-left border border-emerald-200 transition font-medium"
              >
                ✂️ Tem arquivos para quem corta na tesoura?
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenThemeSearch();
                }}
                className="bg-purple-100 hover:bg-purple-200 text-purple-900 text-[11px] p-2 rounded-xl text-left border border-purple-200 transition font-bold"
              >
                🔍 Quero pesquisar se tem o meu tema!
              </button>
            </div>
          </div>
        </div>

        {/* Input area */}
        <div className="p-2.5 bg-slate-100 border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            placeholder="Digite sua dúvida..."
            value={userMsg}
            onChange={(e) => setUserMsg(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-white text-xs p-2.5 rounded-full border border-slate-300 focus:outline-none focus:border-emerald-600 font-medium"
          />
          <button
            onClick={() => handleSend()}
            className="bg-[#075E54] hover:bg-[#128C7E] text-white p-2.5 rounded-full transition cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
