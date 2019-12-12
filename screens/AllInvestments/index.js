import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { colors } from '../../commons';
import mocks from '../__mock__';
import InvestmentCard from '../../components/InvestmentCard';

export default class AllInvestments extends Component {
  static navigationOptions = {
    title: 'Active Investments'
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: colors.secondaryColor
      }}>
        <View style={{
        height: 350,
        backgroundColor: colors.secondaryColor,
        ...colors.defaultShadow,
        zIndex: 3
      }}>

        </View>
        <ScrollView
          style={{
            paddingHorizontal: 10
          }}
        >
          {mocks.investments.map((investment) => <InvestmentCard
            key={investment.id}
            investment={investment}
            viewInvestment={() => this.props.navigation.navigate('SingleInvestment',  {
              investmentId: investment.id
            })}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}
