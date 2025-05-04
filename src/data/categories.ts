export interface Wallpaper {
  id: string;
  url: string;
  title: string;
  description?: string;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  nameTr: string;
  wallpapers: Wallpaper[];
}

export const categories: Category[] = [
  {
    id: 'nature',
    name: 'Nature',
    nameTr: 'Doğa',
    wallpapers: []
  },
  {
    id: 'animals',
    name: 'Animals',
    nameTr: 'Hayvanlar',
    wallpapers: []
  },
  {
    id: 'abstract',
    name: 'Abstract',
    nameTr: 'Soyut',
    wallpapers: []
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    nameTr: 'Minimalist',
    wallpapers: []
  },
  {
    id: 'space',
    name: 'Space',
    nameTr: 'Uzay',
    wallpapers: []
  },
  {
    id: 'cityscape',
    name: 'Cityscape',
    nameTr: 'Şehir Manzaraları',
    wallpapers: []
  },
  {
    id: 'mountains',
    name: 'Mountains',
    nameTr: 'Dağlar',
    wallpapers: []
  },
  {
    id: 'water',
    name: 'Water',
    nameTr: 'Su',
    wallpapers: []
  },
  {
    id: 'neon-cyberpunk',
    name: 'Neon & Cyberpunk',
    nameTr: 'Neon & Siberpunk',
    wallpapers: []
  },
  {
    id: 'anime-art',
    name: 'Anime & Art',
    nameTr: 'Anime & Sanat',
    wallpapers: []
  },
  {
    id: 'cars-vehicles',
    name: 'Cars & Vehicles',
    nameTr: 'Arabalar & Araçlar',
    wallpapers: []
  },
  {
    id: 'dark-black',
    name: 'Dark & Black',
    nameTr: 'Karanlık & Siyah',
    wallpapers: []
  },
  {
    id: 'floral',
    name: 'Floral',
    nameTr: 'Çiçekler',
    wallpapers: []
  },
  {
    id: 'fantasy-scifi',
    name: 'Fantasy & Sci-Fi',
    nameTr: 'Fantastik & Bilim Kurgu',
    wallpapers: []
  },
  {
    id: 'seasons',
    name: 'Seasons',
    nameTr: 'Mevsimler',
    wallpapers: []
  },
  {
    id: 'textures-patterns',
    name: 'Textures & Patterns',
    nameTr: 'Dokular & Desenler',
    wallpapers: []
  },
  {
    id: 'quotes-typography',
    name: 'Quotes & Typography',
    nameTr: 'Alıntılar & Tipografi',
    wallpapers: []
  },
  {
    id: 'gaming',
    name: 'Gaming',
    nameTr: 'Oyun Temalı',
    wallpapers: []
  },
  {
    id: 'sports',
    name: 'Sports',
    nameTr: 'Spor',
    wallpapers: []
  },
  {
    id: 'aesthetic-pastel',
    name: 'Aesthetic & Pastel',
    nameTr: 'Estetik & Pastel',
    wallpapers: []
  }
]; 