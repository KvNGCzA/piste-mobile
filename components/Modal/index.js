import React, { Component } from 'react';
import {
  View, StatusBar
} from 'react-native';
import styles from './styles';
import Buttons from '../../commons/Buttons';

export default class Modal extends Component {
  

  render() {
    return(
      <View style={[styles.modalContainer, { display: this.props.visible ? 'flex' : 'none' }]}>
        <StatusBar hidden/>
        <View style={styles.modalContentWrapper}>
          {this.props.children}
          <View style={styles.buttonsContainer}>
            <Buttons type="action" value="edit"/>
            <Buttons
              type="action"
              actionType="negative"
              value="cancle"
              onPress={this.props.toggleModal}
            />
          </View>
        </View>
      </View>
    );
  }
}
