import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import logo from '../../assets/logo-3x.png';
import Button from '../../commons/Buttons';
import { isLoggingIn, setGlobal } from '../../store/actions/global';
import reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Errors from '../../commons/Errors';

// AsyncStorage.removeItem('persist:root'), AsyncStorage.setItem('persist:root', JSON.stringify({global: initialState}))}

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
    }
  }

  componentDidMount() {
    const { setGlobal } = this.props;
    setGlobal({ errors: '' })
  }

  onPress = () => {
    const { email, password } = this.state;
    const { isLoggingIn, setGlobal, navigation: { navigate } } = this.props;
    setGlobal({ isLoading: true });
    isLoggingIn({ email, password, navigate });
  }

  focusField = () => this._password.focus()

  onChange = (text, key) => this.setState({ [key]: text });

  renderTextInput = (props) => {
    return (
      <View style={styles.inputField}>
        <View style={styles.labelCont}>
          <Text style={styles.label}>{props.label}</Text>
          <Text style={styles.clickable}>{props.otherLabel}</Text>
        </View>
        <TextInput
          style={styles.input}
          {...props}
        />
      </View>
    );
  }

  render() {
    const { email, password } = this.state;
    const { global } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.logoImage}>
          <Image source={logo} style={styles.logo}/>
        </View>
        <View>
          {this.renderTextInput({
            textContentType: 'emailAddress',
            onChangeText: text => this.onChange(text.toLowerCase(), 'email'),
            value: email,
            onSubmitEditing: this.focusField,
            blurOnSubmit: false,
            returnKeyType: 'next',
            label: 'Email'
          })}
          {this.renderTextInput({
            ref: input => { this._password = input; },
            textContentType: 'password',
            onSubmitEditing: this.onPress,
            onChangeText: text => this.onChange(text, 'password'),
            value: password,
            blurOnSubmit: true,
            returnKeyType: 'send',
            secureTextEntry: true,
            label: 'Password',
            otherLabel: 'forgot password?'
          })}
          <Button
            value="login"
            onPress={this.onPress}
            isLoading={global.isLoading}
          />
          <View style={[styles.labelCont, styles.labelCont2]}>
            <Text style={styles.label}>Dont have an account?</Text>
            <Text style={styles.clickable}>Register</Text>
          </View>
        </View>
        <Errors />
      </View>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const actionCreators = { isLoggingIn, setGlobal };

export default connect(mapStateToProps, actionCreators)(LoginScreen);