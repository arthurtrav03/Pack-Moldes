import React, { useState } from 'react';
import { X, ShieldCheck, QrCode, CreditCard, Copy, Check, ArrowRight, Sparkles, CheckCircle2, Lock } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: 'basico' | 'vip';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  plan
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [includeOrderBump, setIncludeOrderBump] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [copiedPix, setCopiedPix] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [pixGenerated, setPixGenerated] = useState(false);

  if (!isOpen) return null;

  const basePrice = plan === 'vip' ? 44.00 : 19.90;
  const bumpPrice = 9.90;
  const totalPrice = includeOrderBump ? basePrice + bumpPrice : basePrice;

  const handleGeneratePix = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !whatsapp) {
      alert('Por favor, preencha seu e-mail e WhatsApp para envio dos arquivos.');
      return;
    }
    setPixGenerated(true);
  };

  const handleCopyPix = () => {
    setCopiedPix(true);
    navigator.clipboard?.writeText(
      '00020126580014BR.GOV.BCB.PIX0136acervo-moldes-drive@pagamento-seguro.com520400005303986540544.005802BR5925ACERVO PAPELARIA VIP6009SAO PAULO62070503***6304E8A2'
    );
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const handleSimulatePayment = () => {
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-purple-100 overflow-hidden my-6">
        
        {/* Top Header */}
        <div className="p-5 bg-gradient-to-r from-purple-800 to-indigo-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] font-black uppercase text-emerald-300 tracking-wider">
              CHECKOUT 100% SEGURO
            </span>
          </div>

          <h3 className="text-xl font-black">
            {plan === 'vip' ? 'PACOTE COMPLETO VIP' : 'PACOTE BÁSICO'}
          </h3>
          <p className="text-xs text-purple-200">
            {plan === 'vip'
              ? 'Acesso Vitalício ao Google Drive + 4 Bônus Exclusivos'
              : 'Acervo Principal em PDF pronto para tesoura'}
          </p>
        </div>

        {/* Content */}
        {!isSuccess ? (
          <div className="p-5 sm:p-6 space-y-5">
            
            {/* Order Summary Pill */}
            <div className="bg-purple-50 p-3.5 rounded-2xl border border-purple-100 flex items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="font-extrabold text-slate-800 block">
                  {plan === 'vip' ? 'Acervo VIP Completo' : 'Acervo Básico'}
                </span>
                <span className="text-[11px] text-slate-500">Envio imediato no e-mail</span>
              </div>
              <div className="text-right">
                <span className="font-black text-purple-900 text-base">
                  R$ {basePrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* Order Bump Checkbox */}
            <div className="bg-amber-50/70 p-3.5 rounded-2xl border-2 border-dashed border-amber-300">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeOrderBump}
                  onChange={(e) => setIncludeOrderBump(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-purple-600 focus:ring-purple-500 cursor-pointer"
                />
                <div className="space-y-0.5 text-xs">
                  <span className="font-black text-amber-950 block">
                    ⚡ OFERTA ÚNICA: Pack +500 Artes de Caneca & Lembrancinhas por apenas + R$ 9,90
                  </span>
                  <p className="text-amber-800 text-[11px] leading-relaxed">
                    Marque para incluir junto no seu drive mais de 500 artes prontas para sublimação e datas comemorativas.
                  </p>
                </div>
              </label>
            </div>

            {/* User Form */}
            {!pixGenerated ? (
              <form onSubmit={handleGeneratePix} className="space-y-3 text-left">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Eduarda Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-purple-600 transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Seu Melhor E-mail:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="onde receberá o Drive"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-purple-600 transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      WhatsApp com DDD:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-purple-600 transition"
                    />
                  </div>
                </div>

                {/* Payment Selection Tabs */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Forma de Pagamento:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-2.5 rounded-xl border text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer transition ${
                        paymentMethod === 'pix'
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-xs'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <QrCode className="w-4 h-4 text-emerald-600" />
                      <span>PIX (Acesso Imediato)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded-xl border text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer transition ${
                        paymentMethod === 'card'
                          ? 'border-purple-600 bg-purple-50 text-purple-900 shadow-xs'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-purple-600" />
                      <span>Cartão de Crédito</span>
                    </button>
                  </div>
                </div>

                {/* Total and Submit */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Total a pagar:</span>
                    <span className="text-2xl font-black text-slate-900">
                      R$ {totalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-md transition cursor-pointer flex items-center gap-1.5"
                  >
                    <span>CONTINUAR</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              /* PIX Payment Stage */
              <div className="space-y-4 text-center">
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl space-y-2">
                  <span className="inline-block bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase">
                    PIX GERADO COM SUCESSO
                  </span>
                  <h4 className="font-black text-base text-slate-900">
                    Pague R$ {totalPrice.toFixed(2).replace('.', ',')} para liberar
                  </h4>
                  <p className="text-xs text-slate-600">
                    Abra o app do seu banco, escolha <strong>Pagar com PIX</strong> e escaneie o QR Code ou cole o código abaixo:
                  </p>
                </div>

                {/* Visual QR Code representation */}
                <div className="p-4 bg-white border-2 border-slate-800 rounded-2xl w-48 h-48 mx-auto flex flex-col items-center justify-center shadow-md">
                  <div className="grid grid-cols-6 gap-1 w-full h-full p-2 bg-slate-950 rounded-lg">
                    {[...Array(36)].map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-xs ${
                          i % 2 === 0 || i % 5 === 0 ? 'bg-white' : 'bg-transparent'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Copia e Cola Code */}
                <div className="space-y-2 text-left">
                  <label className="text-[11px] font-bold text-slate-500 block">
                    Código PIX Copia e Cola:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value="00020126580014BR.GOV.BCB.PIX0136acervo-moldes-drive@pagamento-seguro.com520400005303986540544.005802BR5925ACERVO PAPELARIA VIP6009SAO PAULO62070503***6304E8A2"
                      className="w-full text-[10px] font-mono bg-slate-100 p-2 rounded-lg border border-slate-200 text-slate-600 truncate select-all"
                    />
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="bg-purple-700 hover:bg-purple-800 text-white px-3 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1 shrink-0 cursor-pointer"
                    >
                      {copiedPix ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                    </button>
                  </div>
                </div>

                {/* Confirm Button */}
                <button
                  type="button"
                  onClick={handleSimulatePayment}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm py-3.5 px-4 rounded-xl shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>JÁ FIZ O PIX! CONFIRMAR E LIBERAR ACESSO</span>
                </button>

                <p className="text-[11px] text-slate-400">
                  A confirmação é imediata. Você receberá o acesso no e-mail: <strong>{email}</strong>
                </p>
              </div>
            )}

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantia de 7 dias · Reembolso integral garantido</span>
            </div>

          </div>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-black uppercase text-emerald-600 tracking-wider">
                PAGAMENTO CONFIRMADO COM SUCESSO!
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Parabéns, {name || 'Artesã'}!
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Seu acesso ao acervo no Google Drive já está liberado. Enviamos o link também para <strong>{email}</strong> e no WhatsApp <strong>{whatsapp}</strong>.
              </p>
            </div>

            {/* Drive access button */}
            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-left space-y-2">
              <span className="text-[11px] font-bold text-purple-900 block">
                Link do seu Google Drive Exclusivo:
              </span>
              <a
                href="#drive-liberado"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Acesso ao Google Drive simulado com sucesso! Na versão de produção, o link real do Drive será aberto.');
                }}
                className="w-full text-center block bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-md transition"
              >
                📁 ACESSAR MEU DRIVE AGORA
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-700 font-bold underline cursor-pointer"
            >
              Fechar esta janela
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
