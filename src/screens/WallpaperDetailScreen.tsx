import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  Share,
  Alert,
  StatusBar,
  FlatList,
} from 'react-native';
import { Image } from 'expo-image';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { TouchableComponent } from '../components/TouchableComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from '../context/FavoritesContext';
import { useThemeContext } from '../theme/ThemeContext';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: width,
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 60 : 16,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  downloadButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: Platform.OS === 'ios' ? 40 : 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
  },
});

export const WallpaperDetailScreen = ({ route, navigation }) => {
  const { wallpaper, category } = route.params;
  const [downloading, setDownloading] = useState(false);
  const { theme, isDark } = useThemeContext();
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const [currentIndex, setCurrentIndex] = useState(
    category?.wallpapers.findIndex(w => w.id === wallpaper.id) ?? 0
  );
  
  const isWallpaperFavorite = isFavorite(wallpaper);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      animation: 'fade',
    });
  }, [navigation]);

  const handleClose = () => {
    navigation.goBack();
  };

  const handleShare = async () => {
    try {
      const currentWallpaper = category?.wallpapers[currentIndex] || wallpaper;
      await Share.share({
        message: `Check out this amazing wallpaper: ${currentWallpaper.title} by ${currentWallpaper.artist}`,
        url: currentWallpaper.image,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const handleDownload = async () => {
    try {
      if (Platform.OS === 'android') {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission needed', 'Please grant media library permissions to download wallpapers.');
          return;
        }
      }

      setDownloading(true);
      const currentWallpaper = category?.wallpapers[currentIndex] || wallpaper;
      const fileUri = `${FileSystem.documentDirectory}${currentWallpaper.id}.jpg`;
      const downloadResult = await FileSystem.downloadAsync(currentWallpaper.image, fileUri);

      if (downloadResult.status !== 200) {
        throw new Error('Download failed');
      }

      await MediaLibrary.createAssetAsync(downloadResult.uri);

      Alert.alert(
        'Success',
        'Wallpaper saved to your photos!',
        [{ text: 'OK' }]
      );
    } catch (error) {
      console.error('Download error:', error);
      Alert.alert('Error', 'Failed to download wallpaper');
    } finally {
      setDownloading(false);
    }
  };

  const handleFavoritePress = () => {
    const currentWallpaper = category?.wallpapers[currentIndex] || wallpaper;
    if (isFavorite(currentWallpaper)) {
      removeFromFavorites(currentWallpaper);
    } else {
      addToFavorites(currentWallpaper);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ width: width }}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        contentFit="cover"
      />
    </View>
  );

  const onViewableItemsChanged = React.useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={category?.wallpapers || [wallpaper]}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={currentIndex}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50
        }}
      />
      <View style={styles.header}>
        <TouchableComponent
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
          hapticType="light"
        >
          <Icon name="chevron-back" size={24} color="#FFF" />
        </TouchableComponent>
        <View style={styles.headerRight}>
          <TouchableComponent
            style={styles.iconButton}
            onPress={handleShare}
            hapticType="light"
          >
            <Icon name="share-outline" size={24} color="#FFF" />
          </TouchableComponent>
          <TouchableComponent
            style={styles.iconButton}
            onPress={handleFavoritePress}
            hapticType="medium"
          >
            <Icon 
              name={isFavorite(category?.wallpapers[currentIndex] || wallpaper) ? "heart" : "heart-outline"} 
              size={24} 
              color={isFavorite(category?.wallpapers[currentIndex] || wallpaper) ? "#FF3B30" : "#FFF"} 
            />
          </TouchableComponent>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableComponent
          style={styles.downloadButton}
          onPress={handleDownload}
          disabled={downloading}
          hapticType="medium"
          scaleAmount={0.92}
        >
          <Icon 
            name={downloading ? 'cloud-download-outline' : 'download-outline'} 
            size={28} 
            color="#FFF" 
          />
        </TouchableComponent>
      </View>
    </View>
  );
}; 