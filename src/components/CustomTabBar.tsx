import React from 'react';
import { View, StyleSheet, Platform, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import { lightTheme, darkTheme } from '../theme/colors';
import { getTabBarHeight, getBottomSafeArea, getShadowStyle } from '../utils/platform';
import { TouchableComponent } from './TouchableComponent';

const { width } = Dimensions.get('window');
const TAB_WIDTH = width / 5; // 5 tabs

const ACTIVE_COLOR = '#34C759'; // iOS yeşil rengi

interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export const CustomTabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  const { dark } = useTheme();
  const theme = dark ? darkTheme : lightTheme;

  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor: theme.tabBar,
        borderTopColor: Platform.OS === 'ios' ? theme.border : 'transparent',
      },
      getShadowStyle()
    ]}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const getIconName = () => {
          const iconMap = {
            Categories: ['grid', 'grid-outline'],
            New: ['time', 'time-outline'],
            Popular: ['flame', 'flame-outline'],
            Favorites: ['heart', 'heart-outline'],
            Settings: ['settings', 'settings-outline'],
          };
          return iconMap[route.name]?.[isFocused ? 0 : 1] || 'home-outline';
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableComponent
            key={route.key}
            onPress={onPress}
            style={[styles.tabButton, { width: TAB_WIDTH }]}
            hapticType="light"
            scaleAmount={0.92}
          >
            <View style={styles.tabContent}>
              <Icon
                name={getIconName()}
                size={24}
                color={isFocused ? ACTIVE_COLOR : theme.tabBarInactive}
                style={styles.tabIcon}
              />
              <Text style={[
                styles.tabLabel,
                { 
                  color: isFocused ? ACTIVE_COLOR : theme.tabBarInactive,
                  fontSize: Platform.OS === 'ios' ? 10 : 12
                }
              ]}>
                {route.name}
              </Text>
            </View>
          </TouchableComponent>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 85 : getTabBarHeight(),
    paddingBottom: Platform.OS === 'ios' ? getBottomSafeArea() : 0,
    borderTopWidth: Platform.OS === 'ios' ? 0.5 : 0,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Platform.OS === 'ios' ? 6 : 8,
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 4,
  },
  tabIcon: {
    marginBottom: Platform.OS === 'ios' ? 4 : 2,
  },
  tabLabel: {
    fontWeight: '500',
    letterSpacing: 0.2,
  },
}); 