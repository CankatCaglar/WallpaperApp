import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { TouchableComponent } from '../components/TouchableComponent';
import { CustomTabBar } from '../components/CustomTabBar';
import { useThemeContext } from '../theme/ThemeContext';
import { CategoriesScreen } from '../screens/CategoriesScreen';
import { NewScreen } from '../screens/NewScreen';
import { PopularScreen } from '../screens/PopularScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { PaywallScreen } from '../screens/PaywallScreen';
import { CategoryDetailScreen } from '../screens/CategoryDetailScreen';
import { WallpaperDetailScreen } from '../screens/WallpaperDetailScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  proButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#8A2BE2',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  proText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'grid' : 'grid-outline'}
              size={24}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={NewScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'star' : 'star-outline'}
              size={24}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Popular"
        component={PopularScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'trending-up' : 'trending-up-outline'}
              size={24}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'heart' : 'heart-outline'}
              size={24}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'settings' : 'settings-outline'}
              size={24}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  const { theme, isDark } = useThemeContext();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.background,
        },
      }}
    >
      <Stack.Screen 
        name="MainTabs" 
        component={TabNavigator}
      />
      <Stack.Screen 
        name="CategoryDetail" 
        component={CategoryDetailScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          headerTitleStyle: {
            color: theme.text,
          },
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerLeft: () => (
            <TouchableComponent
              style={styles.headerButton}
              onPress={() => navigation.goBack()}
              hapticType="light"
            >
              <Icon 
                name="chevron-back" 
                size={28} 
                color={theme.text}
              />
            </TouchableComponent>
          ),
          headerRight: () => (
            <TouchableComponent
              style={[styles.proButton, { backgroundColor: theme.primary }]}
              onPress={() => {
                navigation.navigate('Paywall');
              }}
              hapticType="medium"
              scaleAmount={0.96}
            >
              <Icon name="diamond" size={16} color={isDark ? '#000' : '#FFF'} />
              <Text style={[styles.proText, { color: isDark ? '#000' : '#FFF' }]}>PRO</Text>
            </TouchableComponent>
          ),
        })}
      />
      <Stack.Screen 
        name="WallpaperDetail" 
        component={WallpaperDetailScreen}
        options={{
          headerShown: false,
          presentation: 'fullScreenModal',
          animation: 'fade',
          contentStyle: {
            backgroundColor: '#000',
          },
        }}
      />
      <Stack.Screen 
        name="Paywall" 
        component={PaywallScreen}
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
    </Stack.Navigator>
  );
}; 