import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageStyle,
  ViewStyle,
  TextStyle,
  Platform,
  StyleProp,
} from 'react-native';
import { TouchableComponent } from './TouchableComponent';
import { getShadowStyle } from '../utils/platform';
import { LinearGradient } from 'expo-linear-gradient';

interface CardComponentProps {
  imageUrl: string;
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  gradientColors?: string[];
  aspectRatio?: number;
}

export const CardComponent: React.FC<CardComponentProps> = ({
  imageUrl,
  title,
  onPress,
  style,
  imageStyle,
  titleStyle,
  gradientColors = ['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)'],
  aspectRatio = 1.4,
}) => {
  return (
    <TouchableComponent
      onPress={onPress}
      style={[styles.container, style]}
      hapticType="light"
      scaleAmount={0.95}
    >
      <Image
        source={{ uri: imageUrl }}
        style={[
          styles.image,
          { aspectRatio },
          imageStyle
        ]}
        resizeMode="cover"
      />
      {title && (
        <LinearGradient
          colors={gradientColors}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Text style={[styles.title, titleStyle]}>
            {title}
          </Text>
        </LinearGradient>
      )}
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: Platform.OS === 'ios' ? 14 : 12,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    ...getShadowStyle(),
  },
  image: {
    width: '100%',
    height: undefined,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Platform.OS === 'ios' ? 14 : 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: Platform.OS === 'ios' ? 18 : 16,
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
}); 