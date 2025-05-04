import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import { TouchableComponent } from '../components/TouchableComponent';
import { getShadowStyle } from '../utils/platform';

const { width, height } = Dimensions.get('window');

const FEATURES = [
  '100% No Ads',
  'Unlimited all content',
  'New exclusive wallpapers weekly',
  'Apple Watch wallpapers unlocked',
];

const PLANS = [
  {
    id: 'weekly',
    price: '$1.99',
    period: 'per week',
  },
  {
    id: 'monthly',
    price: '$2.99',
    period: 'per month',
  },
  {
    id: 'yearly',
    price: '$19.99',
    period: 'per year',
    isBestOffer: true,
  },
];

export const PaywallScreen = ({ navigation }) => {
  const { dark } = useTheme();

  const handleClose = () => {
    navigation.goBack();
  };

  const handlePurchase = (plan) => {
    // TODO: Implement purchase logic
    console.log('Selected plan:', plan);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#1E0B36', '#230B45', '#3B0764']}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      
      <TouchableComponent
        onPress={handleClose}
        style={styles.closeButton}
        hapticType="light"
      >
        <Icon name="close" size={22} color="rgba(255,255,255,0.9)" />
      </TouchableComponent>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Unlimited access</Text>
        
        <View style={styles.featuresContainer}>
          {FEATURES.map((feature, index) => (
            <View key={index} style={styles.featureRow}>
              <Icon name="star" size={20} color="#FFD700" />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        <View style={styles.plansContainer}>
          {PLANS.map((plan) => (
            <TouchableComponent
              key={plan.id}
              style={[
                styles.planButton,
                plan.isBestOffer && styles.bestOfferButton
              ]}
              onPress={() => handlePurchase(plan)}
              hapticType="medium"
              scaleAmount={0.95}
            >
              <LinearGradient
                colors={plan.isBestOffer ? 
                  ['#00B37E', '#00875F'] : 
                  ['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.08)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.planGradient}
              >
                <View style={styles.planContent}>
                  {plan.isBestOffer && (
                    <View style={styles.bestOfferBadge}>
                      <Text style={styles.bestOfferText}>BEST OFFER</Text>
                    </View>
                  )}
                  <Text style={[
                    styles.planPrice,
                    plan.isBestOffer && styles.bestOfferPrice
                  ]}>{plan.price}</Text>
                  <Text style={[
                    styles.planPeriod,
                    plan.isBestOffer && styles.bestOfferPeriod
                  ]}>{plan.period}</Text>
                </View>
              </LinearGradient>
            </TouchableComponent>
          ))}
        </View>

        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Terms of Use</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E0B36',
  },
  closeButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    right: 20,
    zIndex: 1,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Platform.OS === 'ios' ? 100 : 80,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  featuresContainer: {
    marginBottom: 40,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  plansContainer: {
    gap: 12,
  },
  planButton: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.1)',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  bestOfferButton: {
    transform: [{ scale: 1.02 }],
    ...Platform.select({
      ios: {
        shadowColor: '#00B37E',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.35,
        shadowRadius: 6,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  planGradient: {
    padding: Platform.OS === 'ios' ? 20 : 18,
  },
  planContent: {
    alignItems: 'center',
  },
  bestOfferBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    marginBottom: 8,
  },
  bestOfferText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  planPrice: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 4,
  },
  bestOfferPrice: {
    fontSize: 32,
  },
  planPeriod: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
  },
  bestOfferPeriod: {
    color: 'rgba(255,255,255,0.9)',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  footerLink: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
  },
}); 