import React from 'react';
import {
  Text, View, TouchableOpacity
} from 'react-native';
import styles from './styles';
import { addCommas } from '../../helpers';

export default ({ investment, viewInvestment }) =>
  <TouchableOpacity
    style={styles.investmentCard}
    onPress={() => viewInvestment(investment)}
  >
    <View style={styles.investmentTitle}>
      <Text style={styles.investmentTitleText}>
        {investment.name}
      </Text>
    </View>
    <View style={styles.investmentDetails}>
      <View style={styles.roi}>
        <Text style={styles.amountInvested}>N{addCommas(investment.amountInvested)}</Text>
        <Text style={styles.expectedReturnPercentage}>
          {`${investment.expectedReturnPercentage}`.substring(0, 5)}% roi
        </Text>
      </View>
      <View style={styles.countDownTimer}>
        <Text style={styles.countDownTimerText}>
          {`${investment.status === 'mature' ? 'paid out' : ''}`} {new Date(investment.returnDate).toDateString()}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
