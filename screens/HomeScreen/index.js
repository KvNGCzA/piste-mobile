import React, { Component } from 'react';
import {
  Dimensions, StatusBar, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView
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
import reactotron from 'reactotron-react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    activeTab: 1,
    password: '',
    errors: {},
  }

  handleScroll = (e) => {
    const { width } = Dimensions.get('window');
    const scrollPosition = e.nativeEvent.contentOffset.x;
    const ninetyPercentOfWidth = 0.9 * width;
    if (scrollPosition < ninetyPercentOfWidth) {
      this.setState({ activeTab: 1 });
    } else if (
      scrollPosition >= ninetyPercentOfWidth
      && scrollPosition <= ninetyPercentOfWidth * 2
    ) {
      this.setState({ activeTab: 2 });
    } else {
      this.setState({ activeTab: 3 });
    }
  }

  scrollToTab = (value) => {
    const { width } = Dimensions.get('window');
    this.scroller.scrollTo({ x: width * value, y: 0 });
  }

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
      <TouchableOpacity
        onPress={() => this.scrollToTab(0)}
        style={[styles.homeNavBtn, this.state.activeTab === 1 ? styles.active : '']}
      >
        <Text style={styles.homeNavText}>active</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => this.scrollToTab(1)}
        style={[styles.homeNavBtn, this.state.activeTab === 2 ? styles.active : '']}
      >
        <Text style={styles.homeNavText}>mature</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => this.scrollToTab(2)}
        style={[styles.homeNavBtn, this.state.activeTab === 3 ? styles.active : '']}
      >
        <Text style={styles.homeNavText}>overview</Text>
      </TouchableOpacity>
    </View>

  renderTabs = () =>
    <View>
      <ScrollView
        style={styles.tabs}
        scrollEnabled
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={this.handleScroll}
        scrollEventThrottle={1000}
        ref={scroller => this.scroller = scroller}
      >
        <View style={styles.tabParent}>
          <ScrollView
            scrollEnabled
            style={styles.tab}
            showsVerticalScrollIndicator={false}
          >
            {
              mocks.investments.map((investment) => <InvestmentCard
                investment={investment} key={investment.id}
              />)
            }
          </ScrollView>
        </View>
        <View style={styles.tabParent}>
          <ScrollView
            scrollEnabled
            style={styles.tab}
            showsVerticalScrollIndicator={false}
          >
            {
              mocks.investments.map((investment) => <InvestmentCard
                investment={investment} key={investment.id}
              />)
            }
          </ScrollView>
        </View>
        <View style={styles.tabParent}>
          <ScrollView
            scrollEnabled
            style={styles.tab}
            showsVerticalScrollIndicator={false}
          >
            {
              mocks.investments.map((investment) => <InvestmentCard
                investment={investment} key={investment.id}
              />)
            }
          </ScrollView>
          </View>
      </ScrollView>
    </View>

  render() {
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
          {this.renderTabs()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const actionCreators = { isLoggingIn, setGlobal };

export default connect(mapStateToProps, actionCreators)(HomeScreen);
