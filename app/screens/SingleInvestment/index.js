import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { colors } from '../../commons';
import edit from '../../../assets/icons/edit.png';
import mark from '../../../assets/icons/mark.png';
import trash from '../../../assets/icons/trash.png';
import mocks from '../__mock__';

export default class SingleInvestment extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('investmentId', 'investment id'),
    };
  }

  renderSectionOne = () => {
    return (
      <View style={{
        height: 280,
        backgroundColor: colors.secondaryColor,
        ...colors.defaultShadow,
        zIndex: 3
      }}/>
    );
  }

  renderSectionTwo = () => {
    const values = [{
      label: 'name',
      value: 'PiggyVest Rice Farm - Kano'
    }, {
      label: 'principle',
      value: 'N1,000,000'
    }, {
      label: 'return on investment',
      value: 'N300,000',
      percentageRoi: '30%'
    }, {
      label: 'payout type',
      value: 'recurrent',
      percentageRoi: 'every year'
    }, {
      label: 'next payout',
      value: 'Jun 20, 2020'
    }]
    return (
      <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
          }}
        >
          {values.map(({ value, label, percentageRoi }) => 
            <View style={styles.textCont} key={label}>
              <Text style={styles.label}>{label || 'enter label'}</Text>
              <View style={styles.valueCont}>
                <Text style={styles.value}>{value || 'enter value'}</Text>
                <Text style={styles.roi}>{percentageRoi}</Text>
              </View>
            </View>
          )}
        </ScrollView>
    );
  }

  renderSectionThree = () => {
    return (
      <View style={{
        height: 80,
        flexDirection: 'row',
        zIndex: 3,
        backgroundColor: colors.secondaryColor,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: colors.border,
        ...colors.defaultShadow,
        elevation: -4,
        shadowOffset: { width: 0, height: -4 }
      }}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={edit} style={styles.actionButtonImage}/>
          <Text style={styles.actionButtonText}>edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={mark} style={styles.actionButtonImage}/>
          <Text style={styles.actionButtonText}>mature</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, { borderRightWidth: 0 }]}>
          <Image source={trash} style={styles.actionButtonImage}/>
          <Text style={[styles.actionButtonText, { color: colors.warning }]}>delete</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: colors.secondaryColor
      }}>

        {this.renderSectionOne()}
        {this.renderSectionTwo()}
        {this.renderSectionThree()}
        
      </View>
    );
  }
}
