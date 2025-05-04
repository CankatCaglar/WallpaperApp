import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wallpaper } from '../types/types';

interface FavoritesContextType {
  favorites: Wallpaper[];
  addToFavorites: (wallpaper: Wallpaper) => void;
  removeFromFavorites: (wallpaper: Wallpaper) => void;
  isFavorite: (wallpaper: Wallpaper) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Wallpaper[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const savedFavorites = await AsyncStorage.getItem('favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const saveFavorites = async (newFavorites: Wallpaper[]) => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const addToFavorites = (wallpaper: Wallpaper) => {
    const newFavorites = [...favorites, wallpaper];
    setFavorites(newFavorites);
    saveFavorites(newFavorites);
  };

  const removeFromFavorites = (wallpaper: Wallpaper) => {
    const newFavorites = favorites.filter(f => f.id !== wallpaper.id);
    setFavorites(newFavorites);
    saveFavorites(newFavorites);
  };

  const isFavorite = (wallpaper: Wallpaper) => {
    return favorites.some(f => f.id === wallpaper.id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}; 