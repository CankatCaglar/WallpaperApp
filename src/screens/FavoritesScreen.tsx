import React from 'react';
import { View, StyleSheet, Dimensions, FlatList, Platform, Text } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import { TouchableComponent } from '../components/TouchableComponent';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { useThemeContext } from '../theme/ThemeContext';
import { ScreenTemplate } from '../components/ScreenTemplate';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const PADDING = 16;
const GAP = 12;
const COLUMNS = 2;
const ITEM_WIDTH = (width - (PADDING * 2) - (GAP * (COLUMNS - 1))) / COLUMNS;
const ITEM_HEIGHT = ITEM_WIDTH * 1.5;

export const FavoritesScreen = () => {
  const { favorites } = useFavorites();
  const navigation = useNavigation();
  const { theme } = useThemeContext();

  const handleProPress = () => {
    navigation.navigate('Paywall');
  };

  const renderItem = ({ item }) => (
    <TouchableComponent
      style={[styles.item, { backgroundColor: theme.cardBackground }]}
      onPress={() => navigation.navigate('WallpaperDetail', { wallpaper: item })}
      hapticType="light"
      scaleAmount={0.96}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        contentFit="cover"
        transition={150}
      />
    </TouchableComponent>
  );

  return (
    <ScreenTemplate title="Favorites" onProPress={handleProPress}>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="heart-outline" size={64} color="#bbb" style={{ marginBottom: 16 }} />
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.emptyTitle}>No favorites yet</Text>
            <Text style={styles.emptyDesc}>Tap the heart icon on any wallpaper to add it here.</Text>
          </View>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={COLUMNS}
          contentContainerStyle={styles.grid}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      )}
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  grid: {
    padding: PADDING,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: GAP,
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#888',
    marginBottom: 6,
  },
  emptyDesc: {
    fontSize: 15,
    color: '#aaa',
    textAlign: 'center',
    maxWidth: 260,
  },
}); 