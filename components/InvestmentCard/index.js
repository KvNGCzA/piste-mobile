import React from 'react';
import {
  Text, View, TouchableOpacity
} from 'react-native';
import styles from './styles';
import { addCommas } from '../../helpers';

export default ({investment}) =>
  <TouchableOpacity
    style={styles.investmentCard}
  >
    <View style={styles.investmentTitle}>
      <Text style={styles.investmentTitleText}>
        {investment.name}
      </Text>
    </View>
    <View style={styles.investmentDetails}>
      <View style={styles.roi}>
        <Text style={styles.amountInvested}>N{addCommas(investment.amountInvested)}</Text>
        <Text style={styles.expectedReturnPercentage}>{investment.expectedReturnPercentage}% roi</Text>
      </View>
      <View style={styles.countDownTimer}>
        <Text style={styles.countDownTimerText}>
          {investment.returnDate}
        </Text>
      </View>
    </View>
  </TouchableOpacity>