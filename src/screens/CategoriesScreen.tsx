import React from 'react';
import { ScreenTemplate } from '../components/ScreenTemplate';
import { WallpaperGrid, WallpaperItem } from '../components/WallpaperGrid';
import { wallpaperImages } from '../data/wallpaperImages';

interface Category extends WallpaperItem {
  wallpapers: {
    id: string;
    title: string;
    artist: string;
    image: string;
  }[];
}

interface NavigationProps {
  navigate: (screen: string, params: { category: Category }) => void;
}

const createWallpapers = (categoryId: string, images: string[]) => {
  return images.map((image, index) => ({
    id: `${categoryId}-${index + 1}`,
    title: `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} ${index + 1}`,
    artist: `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}Art`,
    image,
  }));
};

const categories = [
  {
    id: 'nature',
    title: 'Nature',
    image: wallpaperImages.nature[0],
    wallpapers: createWallpapers('nature', wallpaperImages.nature),
  },
  {
    id: 'animals',
    title: 'Animals',
    image: wallpaperImages.animals[0],
    wallpapers: createWallpapers('animals', wallpaperImages.animals),
  },
  {
    id: 'abstract',
    title: 'Abstract',
    image: wallpaperImages.abstract[0],
    wallpapers: createWallpapers('abstract', wallpaperImages.abstract),
  },
  {
    id: 'minimalist',
    title: 'Minimalist',
    image: wallpaperImages.minimalist[0],
    wallpapers: createWallpapers('minimalist', wallpaperImages.minimalist),
  },
  {
    id: 'space',
    title: 'Space',
    image: wallpaperImages.space[0],
    wallpapers: createWallpapers('space', wallpaperImages.space),
  },
  {
    id: 'cityscape',
    title: 'Cityscape',
    image: wallpaperImages.cityscape[0],
    wallpapers: createWallpapers('cityscape', wallpaperImages.cityscape),
  },
  {
    id: 'mountains',
    title: 'Mountains',
    image: wallpaperImages.mountains[0],
    wallpapers: createWallpapers('mountains', wallpaperImages.mountains),
  },
  {
    id: 'water',
    title: 'Water',
    image: wallpaperImages.water[0],
    wallpapers: createWallpapers('water', wallpaperImages.water),
  },
  {
    id: 'dark',
    title: 'Dark',
    image: wallpaperImages.dark[0],
    wallpapers: createWallpapers('dark', wallpaperImages.dark),
  },
  {
    id: 'customProPack',
    title: 'Custom Pro Pack',
    image: wallpaperImages.customProPack[0],
    wallpapers: createWallpapers('customProPack', wallpaperImages.customProPack),
  }
];

export const CategoriesScreen = ({ navigation }: { navigation: NavigationProps }) => {
  const handleCategoryPress = (item: WallpaperItem) => {
    navigation.navigate('CategoryDetail', { category: item as Category });
  };

  return (
    <ScreenTemplate title="Categories">
      <WallpaperGrid
        items={categories}
        onItemPress={handleCategoryPress}
        showTitle={true}
      />
    </ScreenTemplate>
  );
}; 