import React, { Component } from 'react';
import {
  View, Text, TextInput
} from 'react-native';
import styles from './styles';


export default (props) => 
  <View style={[styles.inputField, props.parentStyle || '']}>
    <View style={styles.labelCont}>
      <Text style={[styles.label, props.textStyle || '']}>{props.label}</Text>
      <Text style={[styles.clickable, props.otherLabelStyle]}>{props.otherLabel}</Text>
    </View>
    <TextInput
      style={[styles.input, props.inputStyle]}
      {...props.inputFieldOptions}
    />
  </View>
