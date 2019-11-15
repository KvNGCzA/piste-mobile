import React, { Component } from 'react';
import { Text, View, TextInput, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { isLoggingIn, setGlobal } from '../../store/actions/global';
import backcurve from '../../assets/backcurve.png'
import pass from '../../assets/pass.jpeg'
import mocks from './__mock__';
import { addCommas } from '../../helpers';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: '',
    password: '',
    errors: {},
  }

  render() {
    const { email, password } = this.state;
    const { global } = this.props;
    
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backcurve}
          imageStyle={styles.imageStyle}
          style={styles.backImage}
        >
          <View style={styles.content}>
            <Image source={pass} style={{ width: 100, height: 100, borderRadius: 50 }}/>
            <View>
              <View style={styles.overviewCont}>
                <Text style={styles.currency}>N</Text>
                <Text style={styles.overviewValue}>{addCommas(mocks.overview.networth.total)}</Text>
              </View>
              <Text style={styles.label}>networth</Text>
            </View>
          </View>
          <View>
            <Text>Other shit</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const actionCreators = { isLoggingIn, setGlobal };

export default connect(mapStateToProps, actionCreators)(HomeScreen);