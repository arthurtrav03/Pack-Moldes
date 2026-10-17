/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Check, 
  X, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  MessageCircle, 
  CheckCheck, 
  Star, 
  Zap, 
  Layers, 
  FolderCheck, 
  DownloadCloud, 
  Printer, 
  Scissors,
  TrendingUp,
  Smartphone,
  Phone,
  Video,
  MoreVertical,
  ArrowLeft
} from 'lucide-react';

import heroMockupImg from './assets/images/mockup_oficial_produto.jpg';
import helloKittyImg from './assets/images/hello_kitty_kit_pt_1792119198318.jpg';
import mcqueenImg from './assets/images/topo_bolo_mcqueen_pt_1792119216490.jpg';
import patrulhaCaninaImg from './assets/images/patrulha_canina_caixas_pt_1792119198672.jpg';
import conviteHomemAranhaImg from './assets/images/convite_spider_heroi_1792120249206.jpg';
import seloGarantiaImg from './assets/images/selo_garantia_transparente.png';
import avatarJuliana from './assets/images/avatar_juliana_realista_1792122227765.jpg';
import avatarCamila from './assets/images/avatar_camila_realista_1792122225180.jpg';
import avatarCarla from './assets/images/avatar_carla_realista_1792122225185.jpg';
import passo1Img from './assets/images/passo1_selecionar_molde_1792165347619.jpg';
import passo2Img from './assets/images/passo2_editar_imprimir_1792165364354.jpg';
import passo3Img from './assets/images/passo3_monte_venda_1792165377249.jpg';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showUpsellPopup, setShowUpsellPopup] = useState(false);
  const [popupSeconds, setPopupSeconds] = useState(299);

  useEffect(() => {
    if (!showUpsellPopup) return;
    const interval = setInterval(() => {
      setPopupSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [showUpsellPopup]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToPlanos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('planos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col antialiased selection:bg-purple-200 selection:text-purple-950 font-sans">
      
      {/* 1. HEADER DE URGÊNCIA */}
      <header className="sticky top-0 z-40 bg-[#7C3AED] text-white py-2 px-3 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-center text-xs sm:text-sm font-bold tracking-wide text-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Oferta válida apenas hoje (15/10/2026)</span>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section className="bg-gradient-to-b from-[#F5F3FF] via-[#FAF5FF] to-[#F3E8FF] pt-4 sm:pt-6 pb-10 sm:pb-14 px-4 text-center relative overflow-hidden">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 relative z-10">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Tenha acesso a um <span className="text-purple-600">acervo profissional</span> com milhares de <span className="text-[#D97706]">moldes prontos</span> para responder qualquer cliente em poucos minutos
            </h1>
            <p className="text-base sm:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
              Mais de 7.500 artes e moldes de corte e impressão editáveis pelo Canva, CorelDraw e Silhouette Studio
            </p>

            <div className="py-1.5 flex justify-center">
              <div className="relative inline-block py-1 max-w-3xl w-full mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-300/30 via-emerald-400/20 to-teal-400/20 rounded-3xl blur-2xl opacity-70 pointer-events-none"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80 bg-white">
                  <img
                    alt="Acervo Profissional de Papelaria Personalizada e Moldes Prontos - Mockup Completo"
                    className="w-full h-auto object-cover object-center rounded-2xl transition duration-300 hover:scale-[1.01]"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    src={heroMockupImg}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/mockup.jpg';
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#18181B] text-white rounded-2xl p-6 sm:p-7 max-w-xl mx-auto shadow-2xl space-y-4 border border-zinc-800">
              <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                Tenha <span className="text-[#05DF72] font-bold">acesso imediato</span> ao acervo de <span className="text-amber-300 font-bold">moldes e arquivos editáveis</span> para você <span className="text-white font-semibold">acelerar sua produção</span> e <span className="text-[#05DF72] font-semibold">preparar suas encomendas</span>.
              </p>
              <a
                href="#planos"
                onClick={scrollToPlanos}
                className="inline-block w-full bg-[#00D06C] hover:bg-[#00B860] active:bg-[#009E52] text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-xl shadow-lg shadow-[#00D06C]/30 transition duration-200 transform hover:scale-[1.02] cursor-pointer uppercase tracking-wider"
              >
                QUERO O MEU ACESSO
              </a>
            </div>
          </div>
        </section>

        {/* 3. DOR DO CLIENTE (LOGO APÓS A PRIMEIRA TELA) */}
        <section className="py-12 sm:py-16 bg-[#FFF5F5] px-4 border-b border-red-100 relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-8 text-center relative z-10">
            
            {/* Título Chamativo em Vermelho */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-red-600 uppercase tracking-tight leading-tight">
                Pare de perder clientes!
              </h2>
              <p className="text-base sm:text-2xl font-extrabold text-slate-900 uppercase tracking-tight mt-3 max-w-3xl mx-auto leading-snug">
                QUANTAS ENCOMENDAS VOCÊ DEIXA DE FECHAR POR NÃO TER O TEMA PRONTO PARA MOSTRAR NA HORA?
              </p>
            </div>

            {/* Print Realista do WhatsApp */}
            <div className="max-w-md mx-auto shadow-2xl rounded-3xl overflow-hidden border-2 border-stone-300 bg-[#EFEAE2] text-left">
              {/* WhatsApp Header */}
              <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between shadow-md">
                <div className="flex items-center space-x-2.5">
                  <ArrowLeft className="w-5 h-5 text-white/90 cursor-pointer" />
                  <div className="relative">
                    <img
                      src={avatarJuliana}
                      alt="Cliente Mariana"
                      className="w-10 h-10 rounded-full object-cover border border-white/40"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075E54] rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white leading-tight">Cliente Mariana (Festa Infantil)</h3>
                    <p className="text-[11px] text-emerald-100 leading-tight">online</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <Video className="w-4 h-4 cursor-pointer" />
                  <Phone className="w-4 h-4 cursor-pointer" />
                  <MoreVertical className="w-4 h-4 cursor-pointer" />
                </div>
              </div>

              {/* Chat Body */}
              <div className="p-3 sm:p-4 space-y-3 text-xs sm:text-[13px] bg-[#ECE5DD] min-h-[250px] flex flex-col justify-end">
                {/* Date pill */}
                <div className="text-center my-1">
                  <span className="bg-white/80 text-gray-600 text-[10px] font-semibold px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wide">
                    Hoje
                  </span>
                </div>

                {/* Msg 1 - Cliente */}
                <div className="self-start max-w-[85%] bg-white text-gray-800 p-2.5 rounded-2xl rounded-tl-none shadow-xs border border-gray-200/50 space-y-1">
                  <p className="leading-relaxed">
                    Oi, boa tarde! Você faz kit festa Astronauta Baby pra sábado? Tem foto do tema pronto pra me mandar agora pra eu já fechar? 🚀
                  </p>
                  <span className="text-[10px] text-gray-400 block text-right">14:15</span>
                </div>

                {/* Msg 2 - Artesã Sem Acervo */}
                <div className="self-end max-w-[85%] bg-[#D9FDD3] text-gray-800 p-2.5 rounded-2xl rounded-tr-none shadow-xs border border-emerald-200/50 space-y-1">
                  <p className="leading-relaxed">
                    Oi Mariana! Faço sim, mas não tenho essa arte pronta... Levo uns 3 dias pra criar do zero e te mandar a prévia. 🥺
                  </p>
                  <div className="flex items-center justify-end space-x-1 text-[10px] text-gray-500">
                    <span>14:28</span>
                    <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                </div>

                {/* Msg 3 - Cliente Perdida */}
                <div className="self-start max-w-[85%] bg-white text-gray-800 p-2.5 rounded-2xl rounded-tl-none shadow-xs border border-red-200 bg-red-50/50 space-y-1">
                  <p className="leading-relaxed text-gray-800 font-medium">
                    Poxa, que pena... Já fechei com outra artesã que me mandou as fotos na hora. Obrigada! 💔
                  </p>
                  <span className="text-[10px] text-gray-400 block text-right">14:35</span>
                </div>
              </div>

              {/* Chat Footer Alert */}
              <div className="bg-red-600 text-white p-3 text-center text-xs font-bold flex items-center justify-center gap-1.5">
                <X className="w-4 h-4 shrink-0" />
                <span>Cliente perdida por falta de modelo pronto na hora!</span>
              </div>
            </div>

          </div>
        </section>

        {/* 4. QUADRO COMPARATIVO: SEM O MATERIAL vs COM O MATERIAL */}
        <section className="py-10 sm:py-14 bg-white px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left items-stretch">
              
              {/* CARD: SEM O MATERIAL */}
              <div className="bg-red-50/70 rounded-2xl p-6 sm:p-7 border-2 border-red-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                      ✕
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg sm:text-xl text-red-700 uppercase tracking-tight">
                        Sem o Material
                      </h3>
                      <p className="text-xs text-red-600 font-medium">Rotina cansativa</p>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-700 font-medium">
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                      <span>Demora para responder e perde clientes no WhatsApp por não ter o tema pronto.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                      <span>Horas caçando arquivos na internet, com links quebrados e moldes com erro de corte.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CARD: COM O MATERIAL */}
              <div className="bg-gradient-to-b from-white to-emerald-50/80 rounded-2xl p-6 sm:p-7 border-2 border-emerald-500 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg sm:text-xl text-emerald-700 uppercase tracking-tight">
                        Com o Material
                      </h3>
                      <p className="text-xs text-emerald-600 font-bold">Rotina rápida e lucrativa</p>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-800 font-medium">
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                      <span>Responde orçamentos na hora e fecha pedidos imediatamente com temas prontos.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                      <span>Mais de 7.500 moldes testados e 100% editáveis no Canva, Corel e Silhouette.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-emerald-100">
                  <a
                    href="#planos"
                    onClick={scrollToPlanos}
                    className="block w-full text-center bg-[#00D06C] hover:bg-[#00B860] active:bg-[#009E52] text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-md shadow-[#00D06C]/20 transition transform hover:scale-[1.01] uppercase tracking-wide cursor-pointer"
                  >
                    Quero Ter o Material Agora
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. MOSTRUÁRIO / CARROSSEL DE TEMAS */}
        <section className="py-12 sm:py-16 bg-[#0A192F] text-white overflow-hidden relative border-y-4 border-amber-400">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto px-4 text-center mb-8 relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#FACC15] uppercase tracking-tight max-w-4xl mx-auto leading-tight drop-shadow-sm">
              VEJA ALGUNS DOS TEMAS E MOLDES QUE VOCÊ VAI RECEBER:
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-xl mx-auto">
              Passo a passo com ilustrações nítidas, formatos indicados, fotos dos produtos montados e dicas de corte.
            </p>
            <p className="text-[11px] text-amber-300/90 mt-1.5 font-medium flex items-center justify-center gap-1.5">
              <span>👉 Arraste para o lado para ver mais arquivos</span>
            </p>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            <div className="flex gap-6 px-4 overflow-x-auto pb-4 scroll-smooth">
              {/* Card 1 - Hello Kitty */}
              <div className="shrink-0 w-52 sm:w-64 md:w-72 bg-white rounded-2xl p-2.5 shadow-2xl transition-all duration-300 hover:scale-105 group relative">
                <div className="relative rounded-xl overflow-hidden bg-stone-100 aspect-[9/16] flex items-center justify-center border border-stone-200">
                  <img
                    alt="Kit Festa"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    src={helloKittyImg}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/pages/page1.jpg';
                    }}
                  />
                </div>
                <div className="pt-2.5 pb-1 px-1 text-slate-900">
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200 uppercase tracking-wider">
                    Kits Infantis
                  </span>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 mt-1 leading-snug truncate">
                    Kit Festa
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">
                    Mais agilidade para atender seus clientes!
                  </p>
                </div>
              </div>

              {/* Card 2 - Relâmpago McQueen */}
              <div className="shrink-0 w-52 sm:w-64 md:w-72 bg-white rounded-2xl p-2.5 shadow-2xl transition-all duration-300 hover:scale-105 group relative">
                <div className="relative rounded-xl overflow-hidden bg-stone-100 aspect-[9/16] flex items-center justify-center border border-stone-200">
                  <img
                    alt="Topo de Bolo"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    src={mcqueenImg}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/pages/page2.jpg';
                    }}
                  />
                </div>
                <div className="pt-2.5 pb-1 px-1 text-slate-900">
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200 uppercase tracking-wider">
                    Topos de Bolo
                  </span>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 mt-1 leading-snug truncate">
                    Topo de Bolo
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">
                    Modelos prontos e editáveis!
                  </p>
                </div>
              </div>

              {/* Card 3 - Patrulha Canina */}
              <div className="shrink-0 w-52 sm:w-64 md:w-72 bg-white rounded-2xl p-2.5 shadow-2xl transition-all duration-300 hover:scale-105 group relative">
                <div className="relative rounded-xl overflow-hidden bg-stone-100 aspect-[9/16] flex items-center justify-center border border-stone-200">
                  <img
                    alt="Caixa Milk e Pirâmides 3D"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    src={patrulhaCaninaImg}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/pages/page3.jpg';
                    }}
                  />
                </div>
                <div className="pt-2.5 pb-1 px-1 text-slate-900">
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200 uppercase tracking-wider">
                    Lembrancinhas
                  </span>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 mt-1 leading-snug truncate">
                    Caixa Milk e Pirâmides 3D
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">
                    Vários formatos com linha de vinco!
                  </p>
                </div>
              </div>

              {/* Card 4 - Convites Personalizados */}
              <div className="shrink-0 w-52 sm:w-64 md:w-72 bg-white rounded-2xl p-2.5 shadow-2xl transition-all duration-300 hover:scale-105 group relative">
                <div className="relative rounded-xl overflow-hidden bg-stone-100 aspect-[9/16] flex items-center justify-center border border-stone-200">
                  <img
                    alt="Convites Personalizados - Homem Aranha"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    src={conviteHomemAranhaImg}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/pages/page4.jpg';
                    }}
                  />
                </div>
                <div className="pt-2.5 pb-1 px-1 text-slate-900">
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200 uppercase tracking-wider">
                    Editáveis
                  </span>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 mt-1 leading-snug truncate">
                    Convites Personalizados
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">
                    Filmes, personagens e muito mais!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PRA QUEM É INDICADO (CARROSSEL DE DORES QUE O PRODUTO RESOLVE) */}
        <section className="py-12 sm:py-16 bg-slate-50 px-4 border-b border-gray-200/80">
          <div className="max-w-6xl mx-auto space-y-8 text-center">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight">
                PRA QUEM É INDICADO?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-2">
                O material foi desenvolvido especificamente para resolver as maiores dores do seu dia a dia:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
              
              {/* Dor 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-200/90 flex flex-col justify-between transition duration-200 group">
                <div className="space-y-2.5">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold">
                    🎯
                  </div>
                  <h3 className="font-extrabold text-base text-gray-900 group-hover:text-purple-700 transition">
                    Quem já vende personalizados
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                    Para parar de perder tempo criando artes do zero e focar apenas em produzir.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Economize mais de 15 horas semanais</span>
                </div>
              </div>

              {/* Dor 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-200/90 flex flex-col justify-between transition duration-200 group">
                <div className="space-y-2.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold">
                    📱
                  </div>
                  <h3 className="font-extrabold text-base text-gray-900 group-hover:text-emerald-700 transition">
                    Quem atende e vende pelo WhatsApp
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                    Para enviar modelos prontos na hora e fechar pedidos no primeiro contato.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Feche vendas em menos de 5 minutos</span>
                </div>
              </div>

              {/* Dor 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-200/90 flex flex-col justify-between transition duration-200 group">
                <div className="space-y-2.5">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl font-bold">
                    ⚡
                  </div>
                  <h3 className="font-extrabold text-base text-gray-900 group-hover:text-amber-700 transition">
                    Quem quer responder clientes rapidamente
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                    Para mandar fotos profissionais em minutos enquanto a cliente está decidindo.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Atendimento profissional de alto padrão</span>
                </div>
              </div>

              {/* Dor 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-200/90 flex flex-col justify-between transition duration-200 group">
                <div className="space-y-2.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold">
                    📈
                  </div>
                  <h3 className="font-extrabold text-base text-gray-900 group-hover:text-blue-700 transition">
                    Quem quer aumentar as vendas e lucros
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                    Para aceitar o triplo de encomendas por semana com produção acelerada.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Produção rápida com lucro garantido</span>
                </div>
              </div>

              {/* Dor 5 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-200/90 flex flex-col justify-between transition duration-200 group sm:col-span-2 lg:col-span-1">
                <div className="space-y-2.5">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-xl font-bold">
                    🗂️
                  </div>
                  <h3 className="font-extrabold text-base text-gray-900 group-hover:text-rose-700 transition">
                    Quem quer montar um grande acervo
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                    Para ter milhares de moldes organizados em nuvem e nunca mais perder vendas.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Mais de 7.500 moldes na palma da mão</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. PASSO A PASSO DE COMO FUNCIONA (COM AS 3 IMAGENS) */}
        <section className="py-12 sm:py-16 bg-white px-4 border-b border-gray-100">
          <div className="max-w-5xl mx-auto space-y-10 text-center">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight">
                COMO FUNCIONA NA PRÁTICA?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mt-2">
                Apenas 3 passos simples para você começar a faturar hoje mesmo no seu ateliê:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              
              {/* Passo 1 */}
              <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                <div>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-white border border-stone-200 mb-4 shadow-inner">
                    <img
                      src={passo1Img}
                      alt="1. Selecionar o tema entre os modelos organizados"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 bg-[#7C3AED] text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-md">
                      PASSO 1
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-900 leading-snug">
                    1. Selecionar o tema entre os modelos organizados
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-2">
                    Acesse o Google Drive com pastas organizadas por temas de A a Z. Escolha o tema que o cliente pediu em segundos com fotos de prévia.
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-200 text-[11px] font-bold text-purple-700 flex items-center gap-1">
                  <span>Pastas catalogadas de fácil acesso</span>
                </div>
              </div>

              {/* Passo 2 */}
              <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                <div>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-white border border-stone-200 mb-4 shadow-inner">
                    <img
                      src={passo2Img}
                      alt="2. Editar o tema pelo Canva, CorelDraw ou Silhouette Studio"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 bg-[#7C3AED] text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-md">
                      PASSO 2
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-900 leading-snug">
                    2. Editar pelo Canva, Corel ou Silhouette Studio
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-2">
                    Abra o arquivo no seu programa favorito, altere o nome e a idade do aniversariante e envie direto para impressão com linhas perfeitas.
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-200 text-[11px] font-bold text-purple-700 flex items-center gap-1">
                  <span>Edição em menos de 2 minutos</span>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                <div>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-white border border-stone-200 mb-4 shadow-inner">
                    <img
                      src={passo3Img}
                      alt="3. Imprima e venda"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 bg-[#00D06C] text-slate-950 text-xs font-black px-2.5 py-1 rounded-lg shadow-md">
                      PASSO 3
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-900 leading-snug">
                    3. Imprima e venda
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-2">
                    Corte na tesoura ou na sua plotter, dobre nos vincos marcados, cole com facilidade e entregue uma encomenda profissional que encanta!
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-200 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                  <span>Pronto para encantar e lucrar</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. ESTRUTURA COMPLETA (RESUMIDA) */}
        <section className="py-12 sm:py-16 bg-[#F5F5F0] px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <span className="text-xs font-bold text-purple-700 uppercase tracking-widest block mb-1">
                TUDO INCLUSO
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900 uppercase tracking-tight">
                ESTRUTURA COMPLETA DO ACERVO
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-purple-900 max-w-xl mx-auto mt-2 bg-purple-100 py-1.5 px-4 rounded-full inline-block border border-purple-200">
                Mais de 7.500 moldes e arquivos testados e prontos para faturar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-200 flex items-start space-x-4 transition">
                <div className="text-3xl p-2.5 bg-purple-50 text-purple-700 rounded-xl border border-purple-100 shrink-0">
                  🎨
                </div>
                <div className="space-y-1 self-center">
                  <h4 className="font-extrabold text-base text-gray-900 leading-snug">
                    Arquivos em Studio, PDF e CDR
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Opções prontas para quem corta na tesoura ou usa plotter de corte Cameo/Portrait.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-200 flex items-start space-x-4 transition">
                <div className="text-3xl p-2.5 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 shrink-0">
                  📸
                </div>
                <div className="space-y-1 self-center">
                  <h4 className="font-extrabold text-base text-gray-900 leading-snug">
                    Mockups Prontos para Postar
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Fotos profissionais dos produtos montados para divulgar no WhatsApp e Instagram.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-200 flex items-start space-x-4 transition">
                <div className="text-3xl p-2.5 bg-amber-50 text-amber-700 rounded-xl border border-amber-100 shrink-0">
                  📁
                </div>
                <div className="space-y-1 self-center">
                  <h4 className="font-extrabold text-base text-gray-900 leading-snug">
                    Google Drive 100% Organizado
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Pastas divididas por temas de A a Z para você encontrar qualquer molde em segundos.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-200 flex items-start space-x-4 transition">
                <div className="text-3xl p-2.5 bg-blue-50 text-blue-700 rounded-xl border border-blue-100 shrink-0">
                  ☁️
                </div>
                <div className="space-y-1 self-center">
                  <h4 className="font-extrabold text-base text-gray-900 leading-snug">
                    Acesso Vitalício &amp; Ilimitado
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Sem assinaturas mensais. Pague uma única vez e baixe os arquivos para sempre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. PÁGINA "MAIS TEMPO LIVRE" */}
        <section className="py-10 sm:py-12 bg-[#FFFBEB] px-4 border-y border-amber-100">
          <div className="max-w-3xl mx-auto bg-[#FEF3C7] border-2 border-[#F59E0B] p-6 sm:p-8 rounded-2xl text-center space-y-4 shadow-md relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 bg-amber-200/70 text-amber-950 text-xs font-bold px-3 py-1 rounded-full uppercase">
              <span>⚡ Mais tempo livre na sua rotina</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-gray-900 uppercase leading-snug tracking-tight">
              COM NOSSO MATERIAL VOCÊ ENCONTRA ARQUIVOS PRONTOS, ECONOMIZA TEMPO E TEM MOLDES PARA SEMPRE QUE PRECISAR USAR.
            </h3>
            <div className="text-left max-w-md mx-auto bg-amber-100/80 p-4 rounded-xl border border-amber-300/80 space-y-2 text-xs sm:text-sm text-gray-800 font-medium">
              <p className="font-bold text-gray-900 text-center sm:text-left">
                Tenha mais praticidade na hora de atender seus clientes:
              </p>
              <div className="space-y-1.5 pt-1">
                <div className="flex items-start gap-2">
                  <span className="shrink-0">✅</span>
                  <span>Arquivos reunidos em um só Google Drive catalogado</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="shrink-0">✅</span>
                  <span>Mais agilidade para enviar orçamentos no WhatsApp</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="shrink-0">✅</span>
                  <span>Menos tempo desenhando moldes do zero e noites em claro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. OFERTAS / PLANOS DE PREÇO (LOGO APÓS "MAIS TEMPO LIVRE") */}
        <section id="planos" className="py-12 sm:py-18 bg-[#FFF5F5] px-4 scroll-mt-14">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div>
              <span className="bg-[#7C3AED] text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                ESCOLHA O MELHOR PLANO PARA VOCÊ
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight mt-3">
                OFERTA PROMOCIONAL EXCLUSIVA DE HOJE
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mt-3">
                Pagamento único, sem mensalidades. Acesso imediato liberado no seu e-mail e WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left items-stretch">
              
              {/* PLANO BÁSICO */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-lg border border-gray-200 flex flex-col justify-between transition duration-200 hover:shadow-xl">
                <div>
                  <div className="text-center pb-4 border-b border-gray-100">
                    <h3 className="font-extrabold text-gray-700 text-lg">PACOTE BÁSICO</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Apenas o Acervo Essencial em PDF</p>
                  </div>
                  <ul className="text-xs space-y-2.5 text-gray-600 my-6 font-medium">
                    <li className="flex items-start gap-2 text-gray-900 font-bold">
                      <span className="text-emerald-600 font-black">✔</span>
                      <span>+300 moldes apresentados em PDF</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-900 font-bold">
                      <span className="text-emerald-600 font-black">✔</span>
                      <span>Material configurado para folha A4</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-900 font-bold">
                      <span className="text-emerald-600 font-black">✔</span>
                      <span>Liberação imediata após a compra</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400 line-through">
                      <span className="text-red-400 font-bold">❌</span>
                      <span>Bônus 01: Convites Editáveis</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400 line-through">
                      <span className="text-red-400 font-bold">❌</span>
                      <span>Bônus 02: 8.000 Caixinhas</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400 line-through">
                      <span className="text-red-400 font-bold">❌</span>
                      <span>Bônus 03: 1.500 Topos</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400 line-through">
                      <span className="text-red-400 font-bold">❌</span>
                      <span>Bônus 04: Kit Festa Adulto</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400 line-through">
                      <span className="text-red-400 font-bold">❌</span>
                      <span>Bônus 05: Guia Organização</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400 line-through">
                      <span className="text-red-400 font-bold">❌</span>
                      <span>Bônus 06: 360 mil arquivos (Acervo extra gigante)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400 line-through">
                      <span className="text-red-400 font-bold">❌</span>
                      <span>Envio com link direto por WhatsApp</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-center my-4 pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-500 block">Por apenas</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">R$ 9,90</span>
                    <span className="text-[11px] text-gray-500 block mt-0.5">Pagamento único via PIX ou Cartão</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowUpsellPopup(true)}
                    className="w-full block text-center bg-[#00D06C] hover:bg-[#00B860] active:bg-[#009E52] text-white font-extrabold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-md shadow-[#00D06C]/30 transition cursor-pointer"
                  >
                    QUERO O PACOTE BÁSICO
                  </button>
                </div>
              </div>

              {/* PLANO COMPLETO */}
              <div className="bg-[#4C1D95] text-white p-6 sm:p-7 rounded-2xl shadow-2xl border-4 border-[#7C3AED] flex flex-col justify-between relative transform md:-translate-y-2">
                <div className="absolute -top-4 right-4 bg-[#F59E0B] text-gray-900 font-black text-xs px-3.5 py-1 rounded-full uppercase shadow-md animate-pulse">
                  ★ RECOMENDADO
                </div>
                <div>
                  <div className="text-center pb-4 border-b border-purple-700">
                    <h3 className="font-extrabold text-purple-300 text-xl tracking-tight">PACOTE COMPLETO VIP</h3>
                    <p className="text-xs text-purple-200 mt-0.5">+7.500 Moldes + Todos os Bônus Exclusivos + Envio WhatsApp</p>
                  </div>
                  <ul className="text-xs space-y-2.5 text-purple-100 my-6 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">✔</span>
                      <span className="font-bold text-white">+7.500 arquivos em Studio (.STUDIO3), PDF e Canva</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#05DF72] font-bold">✔</span>
                      <span>Topos de bolo, caixas milk, pirâmides e convites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#05DF72] font-bold">✔</span>
                      <span>Liberação imediata no seu e-mail e WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">✔</span>
                      <span className="font-bold text-white">Acesso Vitalício ao Google Drive com download ilimitado</span>
                    </li>

                    <li className="pt-2 pb-1 border-t border-purple-600/50">
                      <div className="text-[11px] font-black uppercase text-amber-300 tracking-wider flex items-center gap-1.5">
                        <span>🎁</span>
                        <span>Todos os Bônus Exclusivos inclusos:</span>
                      </div>
                    </li>

                    <li className="flex items-start gap-2 pl-1">
                      <span className="text-[#05DF72] font-bold">✔</span>
                      <span><strong className="text-white">Bônus 01: Convites Editáveis</strong> (Modelos prontos para personalizar)</span>
                    </li>
                    <li className="flex items-start gap-2 pl-1">
                      <span className="text-[#05DF72] font-bold">✔</span>
                      <span><strong className="text-white">Bônus 02: 8.000 Caixinhas</strong> (Variedade de temas e formatos)</span>
                    </li>
                    <li className="flex items-start gap-2 pl-1">
                      <span className="text-[#05DF72] font-bold">✔</span>
                      <span><strong className="text-white">Bônus 03: 1.500 Topos</strong> (Prontos para imprimir)</span>
                    </li>
                    <li className="flex items-start gap-2 pl-1">
                      <span className="text-[#05DF72] font-bold">✔</span>
                      <span><strong className="text-white">Bônus 04: Kit Festa Adulto</strong> (Temas exclusivos para adultos)</span>
                    </li>
                    <li className="flex items-start gap-2 pl-1">
                      <span className="text-[#05DF72] font-bold">✔</span>
                      <span><strong className="text-white">Bônus 05: Guia Organização</strong> (Organize seus arquivos e pedidos)</span>
                    </li>
                    <li className="flex items-start gap-2 pl-1">
                      <span className="text-[#05DF72] font-bold">✔</span>
                      <span><strong className="text-white">Bônus 06: 360 mil arquivos</strong> (Acervo extra gigante)</span>
                    </li>

                    <li className="flex items-start gap-2 text-emerald-200 font-extrabold bg-purple-900/80 p-2.5 rounded-lg border border-purple-500/50 mt-3 shadow-inner">
                      <span>📲</span>
                      <span>Envio com link direto por WhatsApp</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-center my-4 pt-3 border-t border-purple-700">
                    <span className="text-xs text-purple-200 block line-through">De R$ 97,00 por apenas</span>
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">R$ 19,90</span>
                    <span className="text-[11px] text-purple-200 block mt-0.5 font-medium">Pagamento único via PIX ou Cartão</span>
                  </div>
                  <a
                    href="https://pay.wiapy.com/FPhHmlTNTzE0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-[#00D06C] hover:bg-[#00B860] active:bg-[#009E52] text-white font-black text-base sm:text-lg py-4 px-6 rounded-xl shadow-xl shadow-[#00D06C]/35 transition transform hover:scale-[1.02] cursor-pointer"
                  >
                    QUERO O PACOTE COMPLETO
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 11. PROVAS SOCIAIS (DEPOIMENTOS + PRINTS DE WHATSAPP REAIS) */}
        <section className="py-12 sm:py-16 bg-white px-4 border-b border-gray-100">
          <div className="max-w-6xl mx-auto text-center space-y-10">
            <div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                QUEM COMPRA, APROVA E RECOMENDA
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight mt-2.5">
                VEJA O QUE NOSSAS CLIENTES ESTÃO DIZENDO
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mt-2">
                Artesãs reais que transformaram a agilidade e o faturamento do seu ateliê:
              </p>
            </div>

            {/* Prints de Conversas Reais no WhatsApp */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              
              {/* Print WhatsApp 1 */}
              <div className="bg-[#EFEAE2] rounded-2xl overflow-hidden border border-stone-300 shadow-md flex flex-col justify-between">
                <div className="bg-[#075E54] text-white p-3 flex items-center gap-2.5 shadow-sm">
                  <img src={avatarJuliana} alt="Juliana M." className="w-8 h-8 rounded-full object-cover border border-white/50" />
                  <div>
                    <h4 className="text-xs font-bold leading-tight">Juliana M. • Ateliê Doce Papel</h4>
                    <span className="text-[10px] text-emerald-200">online</span>
                  </div>
                </div>
                <div className="p-3 space-y-2.5 text-xs bg-[#ECE5DD] flex-1 flex flex-col justify-end">
                  <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-xs text-gray-800 space-y-1">
                    <p className="leading-relaxed">
                      Menina do céu, olha isso!! Comprei o acervo ontem de noite e hoje de manhã já fechei <strong>3 kits festa</strong> só porque mandei a foto do tema pronto na hora pro cliente! 😍🙏
                    </p>
                    <span className="text-[9px] text-gray-400 block text-right">09:42</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-xs text-gray-800 space-y-1">
                    <p className="leading-relaxed">
                      Já paguei o valor do combo 5 vezes só com a primeira encomenda kkkk gratidão demais! ❤️
                    </p>
                    <span className="text-[9px] text-gray-400 block text-right">09:43</span>
                  </div>
                  <div className="bg-[#D9FDD3] p-2.5 rounded-xl rounded-tr-none shadow-xs text-gray-800 self-end max-w-[85%]">
                    <p className="leading-relaxed">
                      Que alegria Juliana!! É pra isso que criamos o acervo! Parabéns pelo sucesso! 🚀
                    </p>
                    <span className="text-[9px] text-gray-500 block text-right">09:45 ✓✓</span>
                  </div>
                </div>
                <div className="bg-emerald-50 p-2.5 border-t border-emerald-200 text-[11px] font-bold text-emerald-900 text-center">
                  ⭐ Fechou 3 kits no primeiro dia de uso
                </div>
              </div>

              {/* Print WhatsApp 2 */}
              <div className="bg-[#EFEAE2] rounded-2xl overflow-hidden border border-stone-300 shadow-md flex flex-col justify-between">
                <div className="bg-[#075E54] text-white p-3 flex items-center gap-2.5 shadow-sm">
                  <img src={avatarCamila} alt="Camila F." className="w-8 h-8 rounded-full object-cover border border-white/50" />
                  <div>
                    <h4 className="text-xs font-bold leading-tight">Camila F. • Papelaria &amp; Festas</h4>
                    <span className="text-[10px] text-emerald-200">online</span>
                  </div>
                </div>
                <div className="p-3 space-y-2.5 text-xs bg-[#ECE5DD] flex-1 flex flex-col justify-end">
                  <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-xs text-gray-800 space-y-1">
                    <p className="leading-relaxed">
                      Passando só pra agradecer... Eu perdia horas no Silhouette tentando consertar vetor torto que baixava da internet. 😩
                    </p>
                    <span className="text-[9px] text-gray-400 block text-right">16:15</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-xs text-gray-800 space-y-1">
                    <p className="leading-relaxed">
                      Os arquivos de vocês abrem perfeitos, com as marcas de registro alinhadas e corte limpinho. Economizei meu final de semana inteiro! Vale cada centavo! 👏
                    </p>
                    <span className="text-[9px] text-gray-400 block text-right">16:16</span>
                  </div>
                  <div className="bg-[#D9FDD3] p-2.5 rounded-xl rounded-tr-none shadow-xs text-gray-800 self-end max-w-[85%]">
                    <p className="leading-relaxed">
                      Arrasou Camila! Foco na produção sem dor de cabeça! Conte sempre com a gente! ✨
                    </p>
                    <span className="text-[9px] text-gray-500 block text-right">16:20 ✓✓</span>
                  </div>
                </div>
                <div className="bg-emerald-50 p-2.5 border-t border-emerald-200 text-[11px] font-bold text-emerald-900 text-center">
                  ⭐ Corte limpo e arquivos 100% testados
                </div>
              </div>

              {/* Print WhatsApp 3 */}
              <div className="bg-[#EFEAE2] rounded-2xl overflow-hidden border border-stone-300 shadow-md flex flex-col justify-between">
                <div className="bg-[#075E54] text-white p-3 flex items-center gap-2.5 shadow-sm">
                  <img src={avatarCarla} alt="Carla M." className="w-8 h-8 rounded-full object-cover border border-white/50" />
                  <div>
                    <h4 className="text-xs font-bold leading-tight">Carla M. • Artesã Tesourete</h4>
                    <span className="text-[10px] text-emerald-200">online</span>
                  </div>
                </div>
                <div className="p-3 space-y-2.5 text-xs bg-[#ECE5DD] flex-1 flex flex-col justify-end">
                  <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-xs text-gray-800 space-y-1">
                    <p className="leading-relaxed">
                      Eu corto tudo na tesoura e tinha muito medo de não conseguir usar... Mas os arquivos em PDF vêm na medida certa com as linhas de dobra!
                    </p>
                    <span className="text-[9px] text-gray-400 block text-right">18:02</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-xs text-gray-800 space-y-1">
                    <p className="leading-relaxed">
                      Fiz 40 caixinhas milk hoje sem errar nenhuma! Minha cliente amou o acabamento. Vocês são anjos! 🙏✨
                    </p>
                    <span className="text-[9px] text-gray-400 block text-right">18:03</span>
                  </div>
                  <div className="bg-[#D9FDD3] p-2.5 rounded-xl rounded-tr-none shadow-xs text-gray-800 self-end max-w-[85%]">
                    <p className="leading-relaxed">
                      Ficamos muito felizes Carla! O material foi feito com muito carinho para quem usa tesoura também! ✂️❤️
                    </p>
                    <span className="text-[9px] text-gray-500 block text-right">18:08 ✓✓</span>
                  </div>
                </div>
                <div className="bg-emerald-50 p-2.5 border-t border-emerald-200 text-[11px] font-bold text-emerald-900 text-center">
                  ⭐ Perfeito para quem corta na tesoura
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 12. BÔNUS EXCLUSIVOS */}
        <section className="py-12 sm:py-16 bg-[#F3E8FF] px-4">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight">
                BÔNUS EXCLUSIVOS
              </h2>
              <div className="my-3">
                <span className="inline-block bg-[#7C3AED] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase shadow-sm">
                  GARANTIDOS HOJE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 max-w-xl mx-auto mt-2 leading-relaxed">
                Além do acervo, leve também pacotes aceleradores de resultados{' '}
                <span className="font-extrabold text-purple-900 underline decoration-purple-500">
                  totalmente grátis
                </span>{' '}
                hoje.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {/* Bônus 1 */}
              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 flex flex-col justify-between group">
                <div>
                  <div className="w-full h-44 rounded-xl mb-4 bg-gradient-to-b from-stone-50 to-purple-50/50 p-2 flex items-center justify-center border border-purple-100/80 shadow-inner group-hover:scale-[1.02] transition duration-300 overflow-hidden">
                    <img
                      alt="Bônus 01: Convites Editáveis"
                      className="w-full h-full object-cover rounded-lg drop-shadow-md"
                      src="/src/assets/images/convite_spider_heroi_1792120249206.jpg"
                    />
                  </div>
                  <span className="text-[10px] font-black uppercase text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full inline-block mb-2">
                    Bônus 01
                  </span>
                  <h3 className="font-extrabold text-base mb-1.5 text-gray-900 leading-snug">
                    Convites Editáveis
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Modelos prontos para personalizar no Canva, Corel e Studio. Altere textos e envie para impressão ou WhatsApp em minutos.
                  </p>
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span><span>100% editável e fácil de mudar</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span><span>Versões digitais e para imprimir</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-[#FEF3C7] text-[#B45309] font-extrabold text-xs text-center py-2.5 px-2 rounded-xl border border-amber-200/80">
                  <span>De </span>
                  <span className="line-through text-amber-900 font-bold decoration-red-600 decoration-2">
                    R$ 47,00
                  </span>
                  <span className="text-gray-700"> por </span>
                  <span className="text-emerald-700 text-sm font-black">GRÁTIS NO VIP</span>
                </div>
              </div>

              {/* Bônus 2 */}
              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 flex flex-col justify-between group">
                <div>
                  <div className="w-full h-44 rounded-xl mb-4 bg-gradient-to-b from-stone-50 to-purple-50/50 p-2 flex items-center justify-center border border-purple-100/80 shadow-inner group-hover:scale-[1.02] transition duration-300 overflow-hidden">
                    <img
                      alt="Bônus 02: 8.000 Caixinhas"
                      className="w-full h-full object-cover rounded-lg drop-shadow-md"
                      src="/src/assets/images/caixas_personalizadas_pack_1792085051187.jpg"
                    />
                  </div>
                  <span className="text-[10px] font-black uppercase text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full inline-block mb-2">
                    Bônus 02
                  </span>
                  <h3 className="font-extrabold text-base mb-1.5 text-gray-900 leading-snug">
                    8.000 Caixinhas
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Grande variedade de temas e formatos (Milk, Pirâmide, Sushi, Bala, Maletinha) com linhas de corte e vinco perfeitas.
                  </p>
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span><span>Diversos formatos e temas populares</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span><span>Testados para corte limpo</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-[#FEF3C7] text-[#B45309] font-extrabold text-xs text-center py-2.5 px-2 rounded-xl border border-amber-200/80">
                  <span>De </span>
                  <span className="line-through text-amber-900 font-bold decoration-red-600 decoration-2">
                    R$ 67,00
                  </span>
                  <span className="text-gray-700"> por </span>
                  <span className="text-emerald-700 text-sm font-black">GRÁTIS NO VIP</span>
                </div>
              </div>

              {/* Bônus 3 */}
              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 flex flex-col justify-between group">
                <div>
                  <div className="w-full h-44 rounded-xl mb-4 bg-gradient-to-b from-stone-50 to-purple-50/50 p-2 flex items-center justify-center border border-purple-100/80 shadow-inner group-hover:scale-[1.02] transition duration-300 overflow-hidden">
                    <img
                      alt="Bônus 03: 1.500 Topos"
                      className="w-full h-full object-cover rounded-lg drop-shadow-md"
                      src="/src/assets/images/topos_de_bolo_3d_1792085050778.jpg"
                    />
                  </div>
                  <span className="text-[10px] font-black uppercase text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full inline-block mb-2">
                    Bônus 03
                  </span>
                  <h3 className="font-extrabold text-base mb-1.5 text-gray-900 leading-snug">
                    1.500 Topos
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Topos de bolo prontos para imprimir e cortar, com camadas 3D, shaker e acabamento profissional para qualquer celebração.
                  </p>
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span><span>Prontos para imprimir em folha A4</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span><span>Camadas fáceis de montar</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-[#FEF3C7] text-[#B45309] font-extrabold text-xs text-center py-2.5 px-2 rounded-xl border border-amber-200/80">
                  <span>De </span>
                  <span className="line-through text-amber-900 font-bold decoration-red-600 decoration-2">
                    R$ 57,00
                  </span>
                  <span className="text-gray-700"> por </span>
                  <span className="text-emerald-700 text-sm font-black">GRÁTIS NO VIP</span>
                </div>
              </div>

              {/* Bônus 4 */}
              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 flex flex-col justify-between group">
                <div>
                  <div className="w-full h-44 rounded-xl mb-4 bg-gradient-to-b from-stone-50 to-purple-50/50 p-2 flex items-center justify-center border border-purple-100/80 shadow-inner group-hover:scale-[1.02] transition duration-300 overflow-hidden">
                    <img
                      alt="Bônus 04: Kit Festa Adulto"
                      className="w-full h-full object-cover rounded-lg drop-shadow-md"
                      src="/src/assets/images/festa_infantil_showcase_1792085050282.jpg"
                    />
                  </div>
                  <span className="text-[10px] font-black uppercase text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full inline-block mb-2">
                    Bônus 04
                  </span>
                  <h3 className="font-extrabold text-base mb-1.5 text-gray-900 leading-snug">
                    Kit Festa Adulto
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Temas exclusivos e modernos para aniversários de adultos, boteco, chá bar, bodas e confraternizações sofisticadas.
                  </p>
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span><span>Temas adultos mais pedidos</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span><span>Design moderno e elegante</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-[#FEF3C7] text-[#B45309] font-extrabold text-xs text-center py-2.5 px-2 rounded-xl border border-amber-200/80">
                  <span>De </span>
                  <span className="line-through text-amber-900 font-bold decoration-red-600 decoration-2">
                    R$ 49,00
                  </span>
                  <span className="text-gray-700"> por </span>
                  <span className="text-emerald-700 text-sm font-black">GRÁTIS NO VIP</span>
                </div>
              </div>

              {/* Bônus 5 */}
              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 flex flex-col justify-between group">
                <div>
                  <div className="w-full h-44 rounded-xl mb-4 bg-gradient-to-b from-stone-50 to-purple-50/50 p-2 flex items-center justify-center border border-purple-100/80 shadow-inner group-hover:scale-[1.02] transition duration-300 overflow-hidden">
                    <img
                      alt="Bônus 05: Guia Organização"
                      className="w-full h-full object-cover rounded-lg drop-shadow-md"
                      src="/src/assets/images/passo1_selecionar_molde_1792165347619.jpg"
                    />
                  </div>
                  <span className="text-[10px] font-black uppercase text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full inline-block mb-2">
                    Bônus 05
                  </span>
                  <h3 className="font-extrabold text-base mb-1.5 text-gray-900 leading-snug">
                    Guia de Organização
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Método prático para catalogar seus arquivos, agilizar o fluxo de pedidos no WhatsApp e nunca mais se perder no computador.
                  </p>
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span><span>Rotina de atendimento rápido</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span><span>Pastas e pedidos organizados</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-[#FEF3C7] text-[#B45309] font-extrabold text-xs text-center py-2.5 px-2 rounded-xl border border-amber-200/80">
                  <span>De </span>
                  <span className="line-through text-amber-900 font-bold decoration-red-600 decoration-2">
                    R$ 37,00
                  </span>
                  <span className="text-gray-700"> por </span>
                  <span className="text-emerald-700 text-sm font-black">GRÁTIS NO VIP</span>
                </div>
              </div>

              {/* Bônus 6 */}
              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 flex flex-col justify-between group">
                <div>
                  <div className="w-full h-44 rounded-xl mb-4 bg-gradient-to-b from-stone-50 to-purple-50/50 p-2 flex items-center justify-center border border-purple-100/80 shadow-inner group-hover:scale-[1.02] transition duration-300 overflow-hidden">
                    <img
                      alt="Bônus 06: 360 mil arquivos"
                      className="w-full h-full object-cover rounded-lg drop-shadow-md"
                      src="/src/assets/images/hero_papelaria_mockup_1792085049903.jpg"
                    />
                  </div>
                  <span className="text-[10px] font-black uppercase text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full inline-block mb-2">
                    Bônus 06
                  </span>
                  <h3 className="font-extrabold text-base mb-1.5 text-gray-900 leading-snug">
                    360 mil Arquivos (Mega Acervo Extra)
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Super acervo extra gigante com papéis digitais, elementos PNG, vetores e artes prontas para você nunca mais faltar tema.
                  </p>
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span><span>Milhares de temas infantis e sazonais</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span><span>Download ilimitado no Google Drive</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-[#FEF3C7] text-[#B45309] font-extrabold text-xs text-center py-2.5 px-2 rounded-xl border border-amber-200/80">
                  <span>De </span>
                  <span className="line-through text-amber-900 font-bold decoration-red-600 decoration-2">
                    R$ 97,00
                  </span>
                  <span className="text-gray-700"> por </span>
                  <span className="text-emerald-700 text-sm font-black">GRÁTIS NO VIP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. PERGUNTAS FREQUENTES (FAQ) */}
        <section className="py-12 sm:py-16 bg-white px-4 border-b border-gray-100">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold text-purple-700 uppercase tracking-widest block mb-1">
                TIRE SUAS DÚVIDAS
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-center text-gray-900 uppercase tracking-tight">
                PERGUNTAS FREQUENTES
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Tudo o que você precisa saber antes de garantir seu material:
              </p>
            </div>

            <div className="space-y-3">
              {/* Question 1 */}
              <div 
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden cursor-pointer transition hover:border-purple-300"
                onClick={() => toggleFaq(1)}
              >
                <div className="p-4 flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-gray-900">
                    Como vou receber o material?
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${openFaq === 1 ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === 1 && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 bg-white">
                    O acervo é 100% digital via Google Drive. Imediatamente após a confirmação do pagamento, você receberá o link de acesso exclusivo direto no seu e-mail cadastrado e também por WhatsApp.
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div 
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden cursor-pointer transition hover:border-purple-300"
                onClick={() => toggleFaq(2)}
              >
                <div className="p-4 flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-gray-900">
                    Posso imprimir e cortar na tesoura?
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${openFaq === 2 ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === 2 && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 bg-white">
                    Sim! Todos os moldes acompanham versões em PDF prontas para impressão direta em folha A4 e com linhas de vinco/corte muito fáceis de cortar manualmente na tesoura ou estilete.
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div 
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden cursor-pointer transition hover:border-purple-300"
                onClick={() => toggleFaq(3)}
              >
                <div className="p-4 flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-gray-900">
                    Serve para quem usa máquina Silhouette ou Cameo?
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${openFaq === 3 ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === 3 && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 bg-white">
                    Sim! No Pacote Completo VIP você recebe os arquivos totalmente rastreados no formato oficial .STUDIO3 prontos para corte direto na Silhouette Studio, com marcas de registro e camadas separadas.
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div 
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden cursor-pointer transition hover:border-purple-300"
                onClick={() => toggleFaq(4)}
              >
                <div className="p-4 flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-gray-900">
                    O acesso tem validade ou tem mensalidade?
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${openFaq === 4 ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === 4 && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 bg-white">
                    Não há nenhuma mensalidade! O pagamento é único. Você garante acesso vitalício aos arquivos no Google Drive e pode baixar no seu computador quantas vezes quiser.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 14. SELO DE GARANTIA DE 7 DIAS */}
        <section className="py-10 sm:py-12 bg-[#FFFBEB] px-4">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white p-6 sm:p-7 rounded-2xl border-2 border-amber-300 shadow-md">
            <div className="shrink-0 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
              <img
                alt="Selo Oficial de Garantia 7 Dias"
                className="w-full h-full object-contain drop-shadow-xl"
                src={seloGarantiaImg}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/selo-garantia.png';
                }}
              />
            </div>
            <div className="text-center sm:text-left space-y-1.5">
              <h3 className="font-extrabold text-base sm:text-lg text-gray-900 leading-tight">
                VOCÊ TEM GARANTIA TOTAL DE 7 DIAS
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Se por qualquer motivo você não gostar da organização dos arquivos ou dos moldes, basta nos enviar um único e-mail ou mensagem no WhatsApp e devolvemos 100% do seu dinheiro, sem perguntas e sem complicação. O risco é todo nosso!
              </p>
            </div>
          </div>
        </section>

        {/* 15. ÚLTIMA OFERTA SOLUCIONANDO A DOR DO CLIENTE */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#18181B] via-[#0F172A] to-[#18181B] text-white px-4 relative overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="inline-block bg-red-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg animate-bounce">
              ÚLTIMA CHANCE HOJE COM PREÇO PROMOCIONAL
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
              Chega de perder encomendas por não ter a arte pronta na hora!
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Com o <span className="text-[#05DF72] font-bold">Acervo Profissional</span>, você nunca mais vai passar pela frustração de dizer <em>"não tenho esse tema"</em> ou perder uma venda para a concorrência por demorar para responder. Tenha mais de 7.500 moldes na palma da mão para atender na hora, faturar muito mais e ter o tempo livre que você merece.
            </p>

            <div className="pt-4 space-y-3">
              <a
                href="#planos"
                onClick={scrollToPlanos}
                className="inline-block w-full sm:w-auto bg-[#00D06C] hover:bg-[#00B860] active:bg-[#009E52] text-white font-black text-base sm:text-xl py-4 sm:py-5 px-8 sm:px-12 rounded-2xl shadow-2xl shadow-[#00D06C]/40 transition duration-200 transform hover:scale-[1.03] uppercase tracking-wide cursor-pointer"
              >
                QUERO MEU ACESSO IMEDIATO AGORA
              </a>
              <p className="text-xs text-gray-400 font-medium">
                🔒 Compra 100% Segura • Acesso Vitalício • Garantia Incondicional de 7 Dias
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* 16. FOOTER */}
      <footer className="bg-[#09090B] text-gray-400 text-center pt-10 pb-16 px-4 text-xs space-y-4 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-medium text-gray-300">
            © 2026 - Todos os direitos reservados. Acervo Profissional de Moldes e Papelaria Personalizada.
          </p>
          <p className="max-w-2xl mx-auto text-[11px] text-gray-500 leading-relaxed">
            Este site não é afiliado ao Google, Meta ou Facebook. Os resultados individuais dependem da aplicação de cada artesã. Todos os arquivos são disponibilizados para impressão e produção física montada.
          </p>
        </div>
      </footer>

      {/* POPUP DE UPSELL / ATENÇÃO AO ESCOLHER O PACOTE BÁSICO */}
      {showUpsellPopup && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm transition-all"
          onClick={() => setShowUpsellPopup(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border-2 border-amber-400 relative max-h-[92vh] flex flex-col transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar */}
            <button
              onClick={() => setShowUpsellPopup(false)}
              aria-label="Fechar"
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 bg-white/90 hover:bg-gray-100 rounded-full p-1.5 transition z-20 shadow-xs cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho do Popup */}
            <div className="bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white p-4 sm:p-5 text-center">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                Upgrade Promocional
              </h3>
              <p className="text-xs sm:text-sm font-bold text-amber-300 mt-0.5">
                Aproveite antes que acabe
              </p>
            </div>

            {/* Conteúdo do Popup */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-left">
              <div className="text-center space-y-2">
                <span className="inline-block bg-[#F59E0B] text-gray-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                  ★ MAIS COMPLETO
                </span>

                <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight font-['Nunito',sans-serif]">
                  Por apenas <span className="text-[#7C3AED] font-black">R$4,90 a mais</span>, leve o acervo vip completo
                </h4>

                <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed max-w-md mx-auto">
                  Troque o pacote básico pelo PACOTE COMPLETO VIP com mais de 7.500 artes editáveis e todos os bônus com acesso vitalício
                </p>
              </div>

              {/* Elementos que a pessoa vai ganhar */}
              <div className="bg-purple-50/70 rounded-2xl p-4 sm:p-5 border border-purple-100">
                <ul className="text-xs sm:text-sm space-y-2.5 text-gray-800 font-semibold font-['Nunito',sans-serif]">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-black text-base shrink-0">✔</span>
                    <span>Mais de 7.500 artes editáveis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-black text-base shrink-0">✔</span>
                    <span>Compatível com Canva, Corel e Silhouette</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-black text-base shrink-0">✔</span>
                    <span>Todos os bônus exclusivos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-black text-base shrink-0">✔</span>
                    <span>Acesso vitalício</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-black text-base shrink-0">✔</span>
                    <span>7 dias de garantia</span>
                  </li>
                </ul>
              </div>

              {/* Preço de Upgrade */}
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-3.5 text-center">
                <span className="text-xs text-gray-500 line-through block">De R$ 97,00</span>
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-xs font-bold text-purple-900">Por apenas</span>
                  <span className="text-3xl sm:text-4xl font-black text-purple-700 font-['Nunito',sans-serif]">R$ 14,90</span>
                  <span className="text-xs text-purple-900 font-bold">(pagamento único)</span>
                </div>
              </div>

              {/* Botões de Decisão */}
              <div className="space-y-2.5 pt-1">
                {/* Botão Verde de Aceite do VIP */}
                <a
                  href="https://pay.wiapy.com/8mjPjxnbLgZK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-[#00D06C] hover:bg-[#00B860] active:bg-[#009E52] text-white font-black text-sm sm:text-base py-4 px-4 rounded-xl shadow-xl shadow-[#00D06C]/35 transition transform hover:scale-[1.02] cursor-pointer"
                >
                  🚀 SIM! QUERO O VIP COMPLETO POR R$ 14,90
                </a>

                {/* Link Discreto de Recusa */}
                <a
                  href="https://pay.wiapy.com/24mTL2VvvDIZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center text-xs text-gray-400 hover:text-gray-600 underline py-1.5 transition cursor-pointer"
                >
                  Não, obrigado. Quero continuar apenas com o Básico por R$ 9,90 (sem os bônus)
                </a>
              </div>

              <div className="flex items-center justify-center gap-3 pt-1 text-[11px] text-gray-400 border-t border-gray-100">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Compra Segura
                </span>
                <span>•</span>
                <span>Garantia de 7 Dias</span>
                <span>•</span>
                <span>Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
