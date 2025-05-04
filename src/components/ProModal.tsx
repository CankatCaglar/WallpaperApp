import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { lightTheme, darkTheme } from '../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { getBottomSafeArea, getShadowStyle } from '../utils/platform';

interface ProModalProps {
  visible: boolean;
  onClose: () => void;
}

const subscriptionPlans = [
  {
    id: 'monthly',
    title: 'Monthly',
    price: '$4.99',
    period: 'month',
    features: [
      'Unlimited Wallpapers',
      'HD Quality',
      'No Ads',
      'Auto Wallpaper',
      'Priority Support',
    ],
  },
  {
    id: 'yearly',
    title: 'Yearly',
    price: '$39.99',
    period: 'year',
    features: [
      'Unlimited Wallpapers',
      'HD Quality',
      'No Ads',
      'Auto Wallpaper',
      'Priority Support',
      'Exclusive Content',
    ],
    savings: 'Save 33%',
  },
];

export const ProModal: React.FC<ProModalProps> = ({ visible, onClose }) => {
  const { dark } = useTheme();
  const theme = dark ? darkTheme : lightTheme;

  const handleSubscribe = (planId: string) => {
    // TODO: Implement subscription logic
    console.log('Subscribe to plan:', planId);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, { backgroundColor: theme.background }, getShadowStyle()]}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: theme.text }]}>Upgrade to Pro</Text>
            <TouchableOpacity 
              onPress={onClose} 
              style={styles.closeButton}
              activeOpacity={Platform.OS === 'ios' ? 0.7 : 1}
            >
              <Icon name="close" size={24} color={theme.text} />
            </TouchableOpacity>
          </View>

          <ScrollView 
            showsVerticalScrollIndicator={false}
            bounces={Platform.OS === 'ios'}
          >
            <View style={styles.plansContainer}>
              {subscriptionPlans.map((plan) => (
                <TouchableOpacity
                  key={plan.id}
                  style={[styles.planCard, { backgroundColor: theme.surface }]}
                  onPress={() => handleSubscribe(plan.id)}
                  activeOpacity={Platform.OS === 'ios' ? 0.7 : 1}
                >
                  {plan.savings && (
                    <View style={styles.savingsBadge}>
                      <Text style={styles.savingsText}>{plan.savings}</Text>
                    </View>
                  )}
                  <Text style={[styles.planTitle, { color: theme.text }]}>{plan.title}</Text>
                  <Text style={[styles.planPrice, { color: theme.text }]}>{plan.price}</Text>
                  <Text style={[styles.planPeriod, { color: theme.textSecondary }]}>
                    per {plan.period}
                  </Text>
                  <View style={styles.featuresList}>
                    {plan.features.map((feature, index) => (
                      <View key={index} style={styles.featureItem}>
                        <Icon name="checkmark-circle" size={20} color={theme.primary} />
                        <Text style={[styles.featureText, { color: theme.text }]}>
                          {feature}
                        </Text>
                      </View>
                    ))}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: getBottomSafeArea(),
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
  },
  closeButton: {
    padding: 8,
  },
  plansContainer: {
    paddingHorizontal: 20,
  },
  planCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    position: 'relative',
  },
  savingsBadge: {
    position: 'absolute',
    top: -12,
    right: 20,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  savingsText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  planTitle: {
    fontSize: 20,
    fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
    marginBottom: 8,
  },
  planPrice: {
    fontSize: 32,
    fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
    marginBottom: 4,
  },
  planPeriod: {
    fontSize: 16,
    marginBottom: 16,
  },
  featuresList: {
    marginTop: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    marginLeft: 8,
    fontSize: 16,
  },
}); 