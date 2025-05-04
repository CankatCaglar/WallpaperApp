import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Platform,
  Text,
} from 'react-native';
import { Image } from 'expo-image';
import { TouchableComponent } from './TouchableComponent';

const { width } = Dimensions.get('window');
const numColumns = 2;
const horizontalPadding = 16;
const gap = 12;
const itemWidth = (width - (horizontalPadding * 2) - gap) / numColumns;

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export interface WallpaperItem {
  id: string;
  title?: string;
  image: string;
}

interface WallpaperGridProps {
  items: WallpaperItem[];
  onItemPress?: (item: WallpaperItem) => void;
  showTitle?: boolean;
}

const WallpaperItem = memo(({ item, onPress, showTitle }) => (
  <TouchableComponent
    style={styles.item}
    onPress={() => onPress?.(item)}
    hapticType="light"
  >
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        contentFit="cover"
        transition={150}
        placeholder={blurhash}
        cachePolicy="memory-disk"
        recyclingKey={item.id}
        priority="normal"
        contentPosition="center"
      />
      {showTitle && item.title && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    </View>
  </TouchableComponent>
));

export const WallpaperGrid: React.FC<WallpaperGridProps> = ({
  items,
  onItemPress,
  showTitle = false,
}) => {
  const renderItem = ({ item }) => (
    <WallpaperItem item={item} onPress={onItemPress} showTitle={showTitle} />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
      initialNumToRender={4}
      maxToRenderPerBatch={2}
      windowSize={3}
      removeClippedSubviews={Platform.OS === 'android'}
      updateCellsBatchingPeriod={100}
      onEndReachedThreshold={0.5}
      maintainVisibleContentPosition={{
        minIndexForVisible: 0,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: horizontalPadding,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: gap,
  },
  item: {
    width: itemWidth,
    height: itemWidth * 1.5,
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
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
}); 