import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import { addCommas } from '../../helpers';
import { colors, fonts } from '../../commons';
import Modal from '../../components/Modal';
import trash from '../../assets/trash.png'

export default ({ showModal, toggleModal, investment, deleteInvestment, editInvestmentHandler }) =>
  <Modal visible={showModal} toggleModal={toggleModal} positiveActionHandler={editInvestmentHandler}>
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
              ? Math.floor(investment.expectedReturnPercentage/100 * investment.amountInvested): 0)}
          </Text>
          <Text style={{ color: colors.cardRed,  marginLeft: 6, fontWeight: '500', }}>
          {Number.isInteger(investment.expectedReturnPercentage) ? investment.expectedReturnPercentage : `${investment.expectedReturnPercentage}`.substring(0, 5)}%
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
      <TouchableHighlight
        style={{
          position: 'absolute',
          right: 0,
        }}
        onPress={() => deleteInvestment({ investmentId: investment.id, status: investment.status, toggleModal })}
      >
        <Image source={trash}/>
      </TouchableHighlight>

    </View>
  </Modal>
