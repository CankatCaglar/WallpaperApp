import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { ThemeProvider, useThemeContext } from './src/theme/ThemeContext';
import { FavoritesProvider } from './src/context/FavoritesContext';

const AppContent = () => {
  const { isDark, theme } = useThemeContext();

  const customTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: {
      ...(isDark ? DarkTheme.colors : DefaultTheme.colors),
      primary: theme?.primary || DefaultTheme.colors.primary,
      background: theme?.background || DefaultTheme.colors.background,
      card: theme?.surface || DefaultTheme.colors.card,
      text: theme?.text || DefaultTheme.colors.text,
      border: theme?.border || DefaultTheme.colors.border,
    },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <AppContent />
      </FavoritesProvider>
    </ThemeProvider>
  );
} 