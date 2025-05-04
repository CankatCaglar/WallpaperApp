import { Platform, StatusBar } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const getStatusBarHeight = () => {
  return Platform.select({
    ios: 44,
    android: StatusBar.currentHeight || 0,
  });
};

export const getBottomSafeArea = () => {
  return Platform.select({
    ios: 34,
    android: 0,
  });
};

export const getTabBarHeight = () => {
  return Platform.select({
    ios: 49,
    android: 56,
  });
};

export const getShadowStyle = (color: string = '#000') => {
  return Platform.select({
    ios: {
      shadowColor: color,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {
      elevation: 5,
    },
  });
}; 