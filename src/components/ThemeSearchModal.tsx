import React, { useState } from 'react';
import { Search, X, CheckCircle2, Sparkles, FolderArchive, ArrowRight } from 'lucide-react';

interface ThemeSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (plan: 'vip') => void;
}

const POPULAR_THEMES = [
  { name: 'Safari Baby / Safari Floresta', category: 'neutro', items: 'Kits Milk, Pirâmide, Topo 3D, Maletinha' },
  { name: 'Patrulha Canina (Paw Patrol)', category: 'infantil', items: 'Todos os personagens, topos e caixas' },
  { name: 'Bolofofos', category: 'infantil', items: 'Kit completo com bandeirolas e apliques' },
  { name: 'Princesas da Disney (Cinderela, Branca de Neve, Bela)', category: 'menina', items: 'Caixas luxo com visor e carruagem' },
  { name: 'Astronauta & Espaço', category: 'neutro', items: 'Caixa foguete, caixa pirâmide e topo 3D' },
  { name: 'Minnie & Mickey Mouse (Tradicional e Rosa)', category: 'infantil', items: 'Kits clássicos e modernos em camadas' },
  { name: 'Encanto (Família Madrigal)', category: 'menina', items: 'Floral e borboletas 3D' },
  { name: 'Divertida Mente 2', category: 'infantil', items: 'Novas emoções, topos e caixas cubo' },
  { name: 'Fundo do Mar / Sereia', category: 'neutro', items: 'Caixa concha, pirâmide e apliques holográficos' },
  { name: 'Dinossauros / Jurassic', category: 'menino', items: 'Caixa vulcão, caixa milk e tags de docinhos' },
  { name: 'Super-Heróis (Homem-Aranha, Batman, Vingadores)', category: 'menino', items: 'Kits de ação prontos com camadas' },
  { name: 'Jardim Encantado / Borboletas', category: 'menina', items: 'Caixa gazebo, gaiolinha e topo floral' },
  { name: 'Circo Rosa & Circo Tradicional', category: 'neutro', items: 'Caixa tenda, carrossel e pipoca' },
  { name: 'Fazendinha Menino & Menina', category: 'neutro', items: 'Caixa celeiro, trator e animais' },
  { name: 'Ursinho Pooh / Ursinho Baloeiro', category: 'neutro', items: 'Chá de bebê e 1 aninho' },
  { name: 'Sonic The Hedgehog', category: 'menino', items: 'Caixas rápidas e anéis dourados' },
  { name: 'Barbie Fashion', category: 'menina', items: 'Caixa bolsa, caixa cabine e topos glitter' },
  { name: 'Batizado & Primeira Comunhão', category: 'religioso', items: 'Caixa anjinho, terço e convites luxo' },
  { name: 'Casamento & Bodas', category: 'adulto', items: 'Forminhas especiais, caixas bem-casado' },
  { name: 'Dia das Mães / Dia dos Pais / Páscoa', category: 'sazonal', items: 'Porta-bombons, cartões e cestas' }
];

export const ThemeSearchModal: React.FC<ThemeSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPlan
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (!isOpen) return null;

  const filtered = POPULAR_THEMES.filter((theme) => {
    const matchesCat = selectedCategory === 'all' || theme.category === selectedCategory;
    const matchesSearch =
      theme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      theme.items.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-purple-100 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-purple-800 to-indigo-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase mb-2">
            <Sparkles className="w-3 h-3" />
            <span>+3.500 ARQUIVOS ORGANIZADOS</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black">Consulte seu tema no acervo</h3>
          <p className="text-xs text-purple-200 mt-1">
            Digite o nome de uma festa ou evento para verificar os moldes inclusos no Google Drive.
          </p>

          {/* Search bar inside header */}
          <div className="relative mt-4">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              placeholder="Ex: Safari, Patrulha Canina, Casamento, Minnie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm rounded-xl pl-11 pr-4 py-3 shadow-inner font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>

        {/* Filter chips */}
        <div className="p-3 border-b border-slate-100 bg-slate-50 flex items-center gap-1.5 overflow-x-auto text-xs">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'infantil', label: 'Infantil' },
            { id: 'menina', label: 'Meninas' },
            { id: 'menino', label: 'Meninos' },
            { id: 'neutro', label: 'Neutros' },
            { id: 'sazonal', label: 'Datas Comemorativas' },
            { id: 'adulto', label: 'Casamento/15 Anos' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-lg font-bold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Themes List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-2.5">
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl border border-purple-100 bg-purple-50/40 hover:bg-purple-50 transition flex items-start justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h5 className="font-extrabold text-sm text-slate-900">{item.name}</h5>
                  </div>
                  <p className="text-xs text-slate-500 pl-5.5">{item.items}</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 font-black text-[10px] px-2 py-0.5 rounded-md uppercase shrink-0">
                  DISPONÍVEL
                </span>
              </div>
            ))
          ) : (
            <div className="text-center py-8 space-y-2">
              <FolderArchive className="w-10 h-10 text-purple-300 mx-auto" />
              <p className="font-extrabold text-sm text-slate-800">
                Não encontrou "{searchTerm}" na lista rápida?
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Fique tranquila! O Google Drive possui milhares de moldes e caixas limpas onde você pode aplicar qualquer personagem em menos de 2 minutos.
              </p>
            </div>
          )}
        </div>

        {/* Footer with immediate CTA */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Todos os temas acima acompanham moldes em <strong>PDF + Studio</strong></span>
          </div>
          <button
            onClick={() => {
              onClose();
              onSelectPlan('vip');
            }}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm py-2.5 px-5 rounded-xl shadow transition cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>LIBERAR ACERVO COMPLETO (R$ 44,00)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
