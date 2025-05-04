import React from 'react';
import { ScreenTemplate } from '../components/ScreenTemplate';
import { WallpaperGrid } from '../components/WallpaperGrid';
import { wallpaperImages } from '../data/wallpaperImages';

// Kategoriler (customProPack hariç)
const categories = Object.keys(wallpaperImages).filter(
  (cat) => cat !== 'customProPack'
);

// Her kategoriden rastgele 3 fotoğraf seç
function getRandomWallpapers() {
  let wallpapers: { id: string; image: string }[] = [];
  categories.forEach((category) => {
    const images = wallpaperImages[category];
    // Rastgele sırala ve ilk 3'ü al
    const selected = images
      .map((img) => ({ img, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .slice(0, 3)
      .map((item, idx) => ({
        id: `${category}-${idx}`,
        image: item.img,
      }));
    wallpapers = wallpapers.concat(selected);
  });
  return wallpapers;
}

const popularWallpapers = getRandomWallpapers();

export const PopularScreen = ({ navigation }) => {
  const handleProPress = () => {
    // TODO: Implement Pro subscription flow
  };

  const handleWallpaperPress = (wallpaper) => {
    // Fotoğrafın indexini bul
    const index = popularWallpapers.findIndex(w => w.id === wallpaper.id);
    navigation.navigate('WallpaperDetail', {
      wallpaper: { ...wallpaper, image: wallpaper.image },
      category: {
        title: 'Popular',
        wallpapers: popularWallpapers.map(w => ({ ...w, image: w.image })),
      },
      initialIndex: index,
    });
  };

  return (
    <ScreenTemplate title="Popular" onProPress={handleProPress}>
      <WallpaperGrid
        items={popularWallpapers}
        onItemPress={handleWallpaperPress}
      />
    </ScreenTemplate>
  );
}; 