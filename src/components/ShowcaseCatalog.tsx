import React, { useState } from 'react';
import { Sparkles, Eye, Scissors, Check, Search, Layers, FolderCheck } from 'lucide-react';
import festaImg from '../assets/images/festa_infantil_showcase_1792085050282.jpg';
import topoImg from '../assets/images/topos_de_bolo_3d_1792085050778.jpg';
import caixasImg from '../assets/images/caixas_personalizadas_pack_1792085051187.jpg';

interface CatalogItem {
  id: string;
  category: 'infantil' | 'topos' | 'caixas' | 'sazonal';
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  description: string;
  formats: string[];
}

const ITEMS: CatalogItem[] = [
  {
    id: '1',
    category: 'infantil',
    badge: 'Mais Vendidos',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    title: 'Kits Festas Infantis',
    subtitle: 'Centenas de temas completos',
    image: festaImg,
    tags: ['Safari', 'Princesas', 'Patrulha Canina', 'Astronauta', 'Circo', 'Fundo do Mar', '+50 Temas'],
    description: 'Kits completos prontos com caixas milk, cone pirâmide, caixa sushi, toppers de docinho, bandeirolas e apliques.',
    formats: ['.STUDIO3', '.PDF', '.PNG Alta Resolução']
  },
  {
    id: '2',
    category: 'topos',
    badge: 'Praticidade',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    title: 'Topos de Bolo 3D & Camadas',
    subtitle: 'Diversos modelos editáveis',
    image: topoImg,
    tags: ['Camadas 3D', 'Floral', 'Infantil', 'Casamento', '15 Anos', 'Nomes Editáveis'],
    description: 'Topos em camadas com efeito 3D prontos para cortar. Basta trocar o nome e a idade para seu cliente.',
    formats: ['.STUDIO3', '.PDF', '.SVG']
  },
  {
    id: '3',
    category: 'caixas',
    badge: 'Lembrancinhas',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    title: 'Caixas Milk, Pirâmides & Embalagens',
    subtitle: 'Formatos variados e limpos',
    image: caixasImg,
    tags: ['Caixa Milk', 'Caixa Pirâmide', 'Caixa Bala', 'Caixa Maletinha', 'Sacolinhas'],
    description: 'Linhas de vinco perfeitas já configuradas para montagem rápida sem desperdício de papel offset ou fotográfico.',
    formats: ['.STUDIO3', '.PDF', '.DXF']
  },
  {
    id: '4',
    category: 'sazonal',
    badge: 'Sazonais em Alta',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    title: 'Datas Comemorativas & Corporativo',
    subtitle: 'Dia das Mães, Páscoa, Natal, etc.',
    image: festaImg, // will use fallback styled card overlay
    tags: ['Dia das Mães', 'Páscoa', 'Dia dos Pais', 'Dia dos Professores', 'Natal'],
    description: 'Arquivos sazonais para faturar alto o ano todo: cartões porta-mimos, embalagens de chocolate, caixas para canecas.',
    formats: ['.STUDIO3', '.PDF', '.PNG']
  }
];

export const ShowcaseCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);

  const filteredItems = ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="amostras" className="py-12 sm:py-20 bg-slate-950 text-white overflow-hidden relative border-y-4 border-amber-400">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-block bg-emerald-500 text-slate-950 text-xs font-black uppercase px-4 py-1.5 rounded-full shadow-md tracking-wider">
            AMOSTRAS REAIS DO ACERVO
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-amber-300 uppercase tracking-tight leading-tight">
            VEJA ALGUNS DOS TEMAS E MOLDES QUE VOCÊ VAI RECEBER:
          </h2>
          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto">
            Arquivos em PDF, Studio Silhouette e PNG prontos para corte em tesoura ou máquina. Clique para ver detalhes!
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {[
              { id: 'all', label: 'Todos os Moldes' },
              { id: 'infantil', label: 'Festas Infantis' },
              { id: 'topos', label: 'Topos de Bolo 3D' },
              { id: 'caixas', label: 'Caixas & Embalagens' },
              { id: 'sazonal', label: 'Datas Comemorativas' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar tema ou molde..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 text-white placeholder-slate-400 text-xs rounded-xl pl-9 pr-3 py-2 border border-slate-700 focus:outline-none focus:border-purple-400 transition"
            />
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-2xl p-3 shadow-2xl text-slate-900 flex flex-col justify-between cursor-pointer hover:-translate-y-1 transition duration-300 border border-slate-200"
            >
              <div>
                <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-[4/3] border border-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="bg-white/95 text-slate-900 text-xs font-bold py-1 px-3 rounded-full shadow flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Ver Detalhes
                    </span>
                  </div>
                </div>

                <div className="pt-3 pb-1 px-1 space-y-1.5">
                  <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <h4 className="font-black text-sm text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-purple-700 font-bold">
                <span className="flex items-center gap-1">
                  <Scissors className="w-3 h-3" /> Tesoura ou Silhouette
                </span>
                <span className="text-xs text-slate-400 group-hover:text-purple-600 transition">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Notice */}
        <div className="mt-10 p-4 sm:p-5 bg-slate-900/90 rounded-2xl border border-slate-800 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-0.5">
            <h5 className="font-extrabold text-white text-sm">Procurando algum tema específico?</h5>
            <p className="text-xs text-slate-400">Temos mais de 3.500 moldes cadastrados e organizados no Google Drive.</p>
          </div>
          <a
            href="#planos"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl transition whitespace-nowrap shadow-md cursor-pointer"
          >
            DESCOBRIR TODOS OS TEMAS
          </a>
        </div>

      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-white text-slate-900 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="relative aspect-[16/9] bg-slate-100">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold transition cursor-pointer"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-3">
                <span className="bg-purple-600 text-white text-xs font-black px-3 py-1 rounded-lg shadow">
                  {selectedItem.badge}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-black text-slate-900">{selectedItem.title}</h3>
                <p className="text-xs text-slate-500">{selectedItem.subtitle}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedItem.description}
              </p>

              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Formatos Inclusos:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedItem.formats.map((fmt, i) => (
                    <span key={i} className="bg-purple-50 text-purple-700 border border-purple-200 font-mono text-xs font-bold px-2 py-0.5 rounded-md">
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Exemplos inclusos na pasta:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedItem.tags.map((tag, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full font-medium">
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href="#planos"
                  onClick={() => setSelectedItem(null)}
                  className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow transition"
                >
                  QUERO TER ACESSO A ESTES MOLDES
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
