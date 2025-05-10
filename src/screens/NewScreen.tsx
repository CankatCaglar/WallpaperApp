import React, { useEffect, useState } from 'react';
import { ScreenTemplate } from '../components/ScreenTemplate';
import { WallpaperGrid } from '../components/WallpaperGrid';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WALLPAPER_WIDTH = 1080;
const WALLPAPER_HEIGHT = 1920;
const WALLPAPER_COUNT = 4;
const MAX_WALLPAPERS = 100;
const STORAGE_KEY = '@wallery_new_wallpapers';

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
    date: new Date().toISOString(),
  }));
}

export const NewScreen = () => {
  const navigation = useNavigation();
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    const loadAndUpdateWallpapers = async () => {
      try {
        // Mevcut wallpapleri yükle
        const storedWallpapers = await AsyncStorage.getItem(STORAGE_KEY);
        let currentWallpapers = storedWallpapers ? JSON.parse(storedWallpapers) : [];
        
        // Son güncelleme tarihini kontrol et
        const lastUpdate = await AsyncStorage.getItem('@wallery_last_update');
        const today = new Date().toDateString();
        
        if (lastUpdate !== today) {
          // Yeni wallpapleri oluştur
          const newWallpapers = generateWallpapers();
          
          // Yeni wallpapleri başa ekle
          currentWallpapers = [...newWallpapers, ...currentWallpapers];
          
          // 100'den fazla wallpaper varsa en eskileri sil
          if (currentWallpapers.length > MAX_WALLPAPERS) {
            currentWallpapers = currentWallpapers.slice(0, MAX_WALLPAPERS);
          }
          
          // Güncellemeleri kaydet
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(currentWallpapers));
          await AsyncStorage.setItem('@wallery_last_update', today);
        }
        
        setWallpapers(currentWallpapers);
      } catch (error) {
        console.error('Error loading/updating wallpapers:', error);
        // Hata durumunda yeni wallpapleri göster
        setWallpapers(generateWallpapers());
      }
    };

    loadAndUpdateWallpapers();
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