import React, { Component } from 'react';
import {
  StatusBar, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { isLoggingIn, setGlobal } from '../../store/actions/global';
import backcurve from '../../assets/backcurve2.png'
import pass from '../../assets/pass.jpeg'
import mocks from './__mock__';
import { addCommas } from '../../helpers';
import { colors } from '../../commons';
import InvestmentCard from '../../components/InvestmentCard';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    activeTab: 1,
    password: '',
    errors: {},
  }

  onChangeTab = (activeTab) => this.setState({ activeTab })

  renderHeadContent = () =>
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

  renderHomeNav = () => 
    <View style={styles.homeNavCont}>
      <TouchableOpacity onPress={() => this.onChangeTab(1)} style={[styles.homeNavBtn, this.state.activeTab === 1 ? styles.active : '']}>
        <Text style={styles.homeNavText}>active</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onChangeTab(2)} style={[styles.homeNavBtn, this.state.activeTab === 2 ? styles.active : '']}>
        <Text style={styles.homeNavText}>mature</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onChangeTab(3)} style={[styles.homeNavBtn, this.state.activeTab === 3 ? styles.active : '']}>
        <Text style={styles.homeNavText}>overview</Text>
      </TouchableOpacity>
    </View>

  render() {
    const { email, password } = this.state;
    const { global } = this.props;
    
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.cardBack} barStyle="light-content" />
        <ImageBackground
          source={backcurve}
          imageStyle={styles.imageStyle}
          style={styles.backImage}/>
        {this.renderHeadContent()}
        <View style={styles.body}>
          {this.renderHomeNav()}
          <ScrollView
            scrollEnabled
            pagingEnabled
            style={styles.slide}
            showsHorizontalScrollIndicator={false}
            onScroll={this.handleScroll}
            scrollEventThrottle={1000}
          >
            {
            mocks.investments.map((investment) => <InvestmentCard
              investment={investment} key={investment.id}
            />)
          }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const actionCreators = { isLoggingIn, setGlobal };

export default connect(mapStateToProps, actionCreators)(HomeScreen);
