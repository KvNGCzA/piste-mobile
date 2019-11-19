import React, { Component } from 'react';
import {
  View, StatusBar, Text
} from 'react-native';
import styles from './styles';
import Buttons from '../../commons/Buttons';
import { colors } from '../../commons';

export default class Modal extends Component {
  

  render() {
    return(
      <View
        style={[
          styles.modalContainer,
          { display: this.props.visible ? 'flex' : 'none' }
        ]}
      >
        <StatusBar hidden/>
        <View style={styles.modalContentWrapper}>
          <Text
            style={{
              color: colors.textGrey,
              fontSize: 14,
              fontWeight: '300',
              textTransform: 'uppercase',
              alignSelf: 'center',
              marginBottom: this.props.headerTitle ? 30 : 0,
              letterSpacing: 1
            }}
          >
            {this.props.headerTitle}
          </Text>
          {this.props.children}
          <View style={styles.buttonsContainer}>
            <Buttons
              type="action"
              value={this.props.positiveActionText || "edit"}
              onPress={this.props.positiveActionHandler}
            />
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
