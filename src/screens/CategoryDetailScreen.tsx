import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import { Image } from 'expo-image';
import { TouchableComponent } from '@/components/TouchableComponent';
import { useThemeContext } from '@/theme/ThemeContext';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Wallpaper {
  id: string;
  title: string;
  image: string;
  artist?: string;
}

interface Category {
  id: string;
  title: string;
  wallpapers: Wallpaper[];
}

type RootStackParamList = {
  CategoryDetail: { category: Category };
  WallpaperDetail: { wallpaper: Wallpaper; category: Category };
};

type CategoryDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'CategoryDetail'>;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const { width } = Dimensions.get('window');
const numColumns = 2;
const horizontalPadding = 16;
const gap = 12;
const itemWidth = (width - (horizontalPadding * 2) - gap) / numColumns;
const itemHeight = itemWidth * 1.8; // Increased aspect ratio for better preview

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const CategoryDetailScreen: React.FC<CategoryDetailScreenProps> = ({ route, navigation }) => {
  const { category } = route.params;
  const { theme } = useThemeContext();

  useEffect(() => {
    if (category.wallpapers) {
      category.wallpapers.forEach((wallpaper, index) => {
        const highQualityUrl = wallpaper.image.includes('?')
          ? `${wallpaper.image}&q=100&w=${width * 2}`
          : `${wallpaper.image}?q=100&w=${width * 2}`;

        // @ts-ignore
        Image.prefetch(highQualityUrl, { priority: index < 4 ? "high" : "normal" });
      });
    }
  }, [category]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: category.title,
    });
  }, [navigation, category]);

  const getHighQualityUrl = (url: string): string => {
    return url.includes('?') 
      ? `${url}&q=100&w=${width * 2}`
      : `${url}?q=100&w=${width * 2}`;
  };

  const renderItem = ({ item, index }: { item: Wallpaper; index: number }) => (
    <TouchableComponent
      style={[styles.wallpaperItem, { 
        marginLeft: index % 2 === 0 ? 0 : gap/2,
        marginRight: index % 2 === 0 ? gap/2 : 0,
      }]}
      onPress={() => navigation.navigate('WallpaperDetail', { 
        wallpaper: {
          ...item,
          image: getHighQualityUrl(item.image)
        },
        category: {
          ...category,
          wallpapers: category.wallpapers.map(w => ({
            ...w,
            image: getHighQualityUrl(w.image)
          }))
        }
      })}
      hapticType="light"
      scaleAmount={0.97}
    >
      <Image
        source={{ uri: getHighQualityUrl(item.image) }}
        style={styles.wallpaperImage}
        contentFit="cover"
        transition={200}
        placeholder={blurhash}
        cachePolicy="memory-disk"
        recyclingKey={item.id}
        priority={index < 4 ? "high" : "normal"}
        contentPosition="center"
      />
    </TouchableComponent>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={category.wallpapers}
        renderItem={renderItem}
        keyExtractor={(item: Wallpaper) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        initialNumToRender={6}
        maxToRenderPerBatch={4}
        windowSize={5}
        removeClippedSubviews={Platform.OS === 'android'}
        updateCellsBatchingPeriod={100}
        onEndReachedThreshold={0.5}
        maintainVisibleContentPosition={{
          minIndexForVisible: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: horizontalPadding,
    paddingBottom: gap,
  },
  wallpaperItem: {
    width: itemWidth,
    height: itemHeight,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: gap,
    backgroundColor: '#1a1a1a',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  wallpaperImage: {
    width: '100%',
    height: '100%',
  },
}); 