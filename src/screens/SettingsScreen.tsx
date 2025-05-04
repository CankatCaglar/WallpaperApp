import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, Platform } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableComponent } from '../components/TouchableComponent';
import { ScreenTemplate } from '../components/ScreenTemplate';
import { useThemeContext } from '../theme/ThemeContext';

type RootStackParamList = {
  Paywall: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const getIconColor = (id: string, isDark: boolean) => {
  const colors = {
    theme: isDark ? '#FFD700' : '#FF9500',
    pro: '#FFD700',
    rate: '#FF2D55',
    share: '#007AFF',
    contact: '#4CD964',
    privacy: '#5856D6',
    terms: '#5856D6',
  };
  return colors[id] || '#999';
};

export const SettingsScreen = () => {
  const { theme, isDark, toggleTheme } = useThemeContext();
  const navigation = useNavigation<NavigationProp>();

  const handleUpgradeToPro = () => {
    navigation.navigate('Paywall');
  };

  const settingsSections = [
    {
      title: 'General',
      items: [
        {
          id: 'theme',
          title: 'Dark Mode',
          icon: isDark ? 'moon' : 'sunny',
          type: 'switch',
          value: isDark,
          onValueChange: toggleTheme,
        },
        {
          id: 'pro',
          title: 'Upgrade to Pro',
          icon: 'diamond',
          type: 'button',
          onPress: handleUpgradeToPro,
        },
      ],
    },
    {
      title: 'App',
      items: [
        {
          id: 'rate',
          title: 'Rate App',
          icon: 'star',
          type: 'button',
        },
        {
          id: 'share',
          title: 'Share App',
          icon: 'share',
          type: 'button',
        },
        {
          id: 'contact',
          title: 'Contact Us',
          icon: 'mail',
          type: 'button',
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          id: 'privacy',
          title: 'Privacy Policy',
          icon: 'document-text',
          type: 'button',
        },
        {
          id: 'terms',
          title: 'Terms of Use',
          icon: 'information-circle',
          type: 'button',
        },
      ],
    },
  ];

  const renderSettingItem = (item: any) => {
    switch (item.type) {
      case 'switch':
        return (
          <Switch
            value={item.value}
            onValueChange={item.onValueChange}
            trackColor={{ 
              false: 'rgba(120,120,128,0.16)', 
              true: '#007AFF'
            }}
            thumbColor={Platform.OS === 'ios' ? undefined : (isDark ? '#FFFFFF' : '#F4F4F4')}
            ios_backgroundColor="rgba(120,120,128,0.16)"
          />
        );
      default:
        return <Icon name="chevron-forward" size={24} color="#999" />;
    }
  };

  return (
    <ScreenTemplate title="Settings">
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {settingsSections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.textSecondary }]}>{section.title}</Text>
            <View style={styles.sectionContent}>
              {section.items.map((item, index) => (
                <TouchableComponent
                  key={item.id}
                  style={[
                    styles.settingItem,
                    index !== section.items.length - 1 && styles.settingItemBorder,
                    { borderBottomColor: theme.border }
                  ]}
                  onPress={item.onPress}
                  hapticType="light"
                  scaleAmount={0.98}
                >
                  <View style={styles.settingItemLeft}>
                    <Icon
                      name={item.icon} 
                      size={22}
                      color={getIconColor(item.id, isDark)}
                    />
                    <Text style={[styles.settingItemTitle, { color: theme.text }]}>{item.title}</Text>
                  </View>
                  {renderSettingItem(item)}
                </TouchableComponent>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingTop: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
    paddingHorizontal: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sectionContent: {
    paddingHorizontal: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  settingItemBorder: {
    borderBottomWidth: 0.5,
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingItemTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  settingValue: {
    fontSize: 16,
  },
}); 