import React, { Component } from 'react';
import {
  Text, View, TextInput, Image, TouchableWithoutFeedback
} from 'react-native';
import { DEVELOPMENT_EMAIL, DEVELOPMENT_PASSWORD } from 'react-native-dotenv';
import { connect } from 'react-redux';
import styles from './styles';
import logo from '../../../assets/logo-3x.png';
import Button from '../../commons/Buttons';
import actions from '../../store/actions/global';
import reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Errors from '../../commons/Errors';
import { initialGlobalState } from '../../store/initialGlobalState';
import CustomTextInput from '../../commons/CustomTextInput';

// AsyncStorage.removeItem('persist:root');
// AsyncStorage.setItem('persist:root', JSON.stringify({global: initialGlobalState}))

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.global.user.email || '',
      password: DEVELOPMENT_PASSWORD || '',
      errors: '',
      isOwner: true
    }
  }

  componentDidMount() {
    const { setGlobal } = this.props;
    setGlobal({ errors: '', isLoading: false })
  }

  onPress = () => {
    const { email, password } = this.state;
    const { isLoggingIn, setGlobal, navigation: { navigate } } = this.props;
    setGlobal({ isLoading: true });
    isLoggingIn({
      email,
      password,
      navigate,
      setIsOwner: () => this.setState({ isOwner: true })
    });
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

  renderEmailField = ({ user, email }) => 
    user.id && this.state.isOwner
    ? <View>
        <Text style={styles.greeting}>Hi,</Text>
        <Text style={styles.firstName}>{user.firstName}</Text>
      </View> : 
    <CustomTextInput
      {...{
        inputFieldOptions: {
          textContentType: 'emailAddress',
          onChangeText: text => this.onChange(text.toLowerCase(), 'email'),
          value: email,
          onSubmitEditing: this.focusField,
          blurOnSubmit: false,
          returnKeyType: 'next',
        },
        label: 'Email'
      }}
    />


  renderRegisterOption = ({ user, isOwner }) => 
    <TouchableWithoutFeedback
      onPress={
        user.id && isOwner
          ? () => this.setState(
              { email: '', password: '', isOwner: false },
              () => this.props.setGlobal(initialGlobalState)
            )
          : () => alert('go to registration page')
      }
      accessibilityRole="link"
    >
      <View
        style={[styles.labelCont, styles.labelCont2]}
      >
        <Text style={styles.label}>
        {user.id && isOwner ? `Not ${user.firstName}?`: 'Dont have an account?'}
        </Text>
        <Text style={styles.clickable}>
          {user.id && isOwner ? 'Your Account' : 'Register'}
        </Text>
      </View>
    </TouchableWithoutFeedback>

  render() {
    const { email, password, isOwner } = this.state;
    const { global } = this.props;
    const { user } = global;

    return (
      <View style={styles.container}>
        <View style={styles.logoImage}>
          <Image source={logo} style={styles.logo}/>
        </View>
        <View>
          {this.renderEmailField({ user, email })}
          <CustomTextInput {...{
            inputFieldOptions: {
              ref: input => { this._password = input; },
              textContentType: 'password',
              onSubmitEditing: this.onPress,
              onChangeText: text => this.onChange(text, 'password'),
              value: password,
              blurOnSubmit: true,
              returnKeyType: 'send',
              secureTextEntry: true,
            },
            label: 'Password',
            otherLabel: 'forgot password?'
          }}/>
          <Button
            value="login"
            onPress={this.onPress}
            isLoading={global.isLoading}
          />
          {this.renderRegisterOption({ user, isOwner })}
        </View>
        <Errors />
      </View>
    );
  }
}

export default connect(state => ({ ...state }), actions)(LoginScreen);