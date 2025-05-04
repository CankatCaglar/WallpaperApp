import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Platform,
  Dimensions
} from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { lightTheme, darkTheme } from '../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { getStatusBarHeight } from '../utils/platform';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableComponent } from './TouchableComponent';

const { width } = Dimensions.get('window');

type RootStackParamList = {
  Paywall: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface ScreenTemplateProps {
  title: string;
  children: React.ReactNode;
  style?: any;
}

export const ScreenTemplate: React.FC<ScreenTemplateProps> = ({
  title,
  children,
  style,
}) => {
  const { dark } = useTheme();
  const theme = dark ? darkTheme : lightTheme;
  const navigation = useNavigation<NavigationProp>();

  const handleProPress = () => {
    navigation.navigate('Paywall');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }, style]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>
          {title}
        </Text>
        <TouchableComponent
          onPress={handleProPress}
          style={styles.proButton}
          hapticType="medium"
          scaleAmount={0.95}
        >
          <LinearGradient
            colors={dark ? ['#8E2DE2', '#4A00E0'] : ['#FF416C', '#FF4B2B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.proBadge}
          >
            <Icon 
              name="diamond" 
              size={Platform.OS === 'ios' ? 13 : 15}
              color="#FFFFFF"
              style={styles.proIcon}
            />
            <Text style={styles.proText}>PRO</Text>
          </LinearGradient>
        </TouchableComponent>
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 8 : 16,
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 34 : 28,
    fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
  },
  proButton: {
    borderRadius: Platform.OS === 'ios' ? 14 : 16,
    overflow: 'hidden',
  },
  proBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 6 : 8,
    borderRadius: Platform.OS === 'ios' ? 14 : 16,
  },
  proIcon: {
    marginRight: 6,
  },
  proText: {
    color: '#FFFFFF',
    fontSize: Platform.OS === 'ios' ? 13 : 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  content: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 12 : 8,
  },
}); 