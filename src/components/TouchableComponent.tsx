import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  ViewStyle,
  StyleProp,
  Platform,
} from 'react-native';
import * as Haptics from 'expo-haptics';

interface TouchableComponentProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  hapticType?: 'light' | 'medium' | 'heavy';
  scaleAmount?: number;
}

export const TouchableComponent: React.FC<TouchableComponentProps> = ({
  children,
  style,
  hapticType = 'light',
  scaleAmount = 0.97,
  onPress,
  ...props
}) => {
  const handlePress = () => {
    const hapticStyle = {
      light: Haptics.ImpactFeedbackStyle.Light,
      medium: Haptics.ImpactFeedbackStyle.Medium,
      heavy: Haptics.ImpactFeedbackStyle.Heavy,
    }[hapticType];

    if (Platform.OS === 'ios') {
      Haptics.impactAsync(hapticStyle);
    }
    onPress?.();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        style,
        {
          transform: [{ scale: pressed ? scaleAmount : 1 }],
        },
        styles.base,
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    transform: [{ scale: 1 }],
  },
}); 