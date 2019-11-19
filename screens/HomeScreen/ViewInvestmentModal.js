import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { addCommas } from '../../helpers';
import { colors, fonts } from '../../commons';
import Modal from '../../components/Modal';

export default ({ showModal, toggleModal, investment }) =>
  <Modal visible={showModal} toggleModal={toggleModal}>
    <View style={styles.investmentInfoParent}>

      <View>
        <Text style={styles.investmentInfoTitle}>
          name
        </Text>
        <Text style={styles.investmentInfoDetail}>
          {investment.name}
        </Text>
      </View>

      <View>
        <Text style={styles.investmentInfoTitle}>
          principle
        </Text>
        <Text style={styles.investmentInfoDetail}>
          N{addCommas(investment.amountInvested || 0)}
        </Text>
      </View>

      <View>
        <Text style={styles.investmentInfoTitle}>
          return on investment
        </Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 17
        }}>
          <Text style={[styles.investmentInfoDetail, { marginBottom: 0 }]}>
            N{addCommas(
              investment.expectedReturnPercentage
              ? investment.expectedReturnPercentage/100 * investment.amountInvested : 0)}
          </Text>
          <Text style={{ color: colors.cardRed,  marginLeft: 6, fontWeight: '500', }}>
          {investment.expectedReturnPercentage}%
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.investmentInfoTitle}>
          date of maturity
        </Text>
        <Text style={styles.investmentInfoDetail}>
        {investment.status === 'mature' ? 'paid out ' : null}{new Date(investment.returnDate).toDateString()}
        </Text>
      </View>
      
    </View>
  </Modal>
