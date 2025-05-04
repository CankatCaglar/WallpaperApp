import React, { useEffect, useState } from 'react';
import { ScreenTemplate } from '../components/ScreenTemplate';
import { WallpaperGrid } from '../components/WallpaperGrid';
import { useNavigation } from '@react-navigation/native';

const WALLPAPER_WIDTH = 1080;
const WALLPAPER_HEIGHT = 1920;
const WALLPAPER_COUNT = 4;

function getTodaySeed() {
  // Her gün için aynı seed, her gün değişsin
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

function generateWallpapers() {
  const seed = getTodaySeed();
  // Her gün farklı 4 resim için seed + index
  return Array.from({ length: WALLPAPER_COUNT }).map((_, i) => ({
    id: `lorempicsum-${seed}-${i}`,
    image: `https://picsum.photos/seed/${seed}-${i}/${WALLPAPER_WIDTH}/${WALLPAPER_HEIGHT}`,
  }));
}

export const NewScreen = () => {
  const navigation = useNavigation();
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    setWallpapers(generateWallpapers());
  }, []);

  const handleProPress = () => {
    // TODO: Implement Pro subscription flow
  };

  const handleWallpaperPress = (wallpaper) => {
    const index = wallpapers.findIndex(w => w.id === wallpaper.id);
    navigation.navigate('WallpaperDetail', {
      wallpaper: { ...wallpaper, image: wallpaper.image },
      category: {
        title: 'New',
        wallpapers: wallpapers.map(w => ({ ...w, image: w.image })),
      },
      initialIndex: index,
    });
  };

  return (
    <ScreenTemplate title="New" onProPress={handleProPress}>
      <WallpaperGrid
        items={wallpapers}
        onItemPress={handleWallpaperPress}
      />
    </ScreenTemplate>
  );
}; 