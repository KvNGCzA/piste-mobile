import React, { Component } from 'react';
import {
  Dimensions, StatusBar, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { isLoggingIn, setGlobal } from '../../store/actions/global';
import backcurve from '../../assets/backcurve2.png'
import menuButton from '../../assets/menuButton.png'
import mocks from './__mock__';
import { addCommas } from '../../helpers';
import { colors } from '../../commons';
import reactotron from 'reactotron-react-native';
import AllHomeTabs from '../../components/AllHomeTabs';
import Modal from '../../components/Modal';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    activeTab: 1,
    password: '',
    errors: '',
    showModal: false
  }

  handleScroll = (e) => {
    const { width } = Dimensions.get('window');
    const scrollPosition = e.nativeEvent.contentOffset.x;
    const ninetyPercentOfWidth = 0.9 * width;
    if (scrollPosition < ninetyPercentOfWidth) {
      this.setState({ activeTab: 1 });
      this.scrollTabsToFront();
    } else if (
      scrollPosition >= ninetyPercentOfWidth
      && scrollPosition <= ninetyPercentOfWidth * 2
    ) {
      this.setState({ activeTab: 2 });
      this.scrollTabsToFront();
    } else {
      this.setState({ activeTab: 3 });
      this.scrollTabsToFront();
    }
  }

  scrollToTab = (value) => {
    this.parentScroller.scrollTo({
      x: Dimensions.get('window').width * value,
      y: 0
    });
    this.scrollTabsToFront();
  }

  scrollTabsToFront = () => {
    this.activeTabScroller.scrollTo({ x: 0, y: 0 });
    this.matureTabScroller.scrollTo({ x: 0, y: 0 });
  }

  renderHeadContent = (totalNetworth) =>
    <View style={styles.content}>
      <Image source={menuButton} style={{ width: 100, height: 100, borderRadius: 50 }}/>
      <View>
        <View style={styles.overviewCont}>
          <Text style={styles.currency}>N</Text>
          <Text style={styles.overviewValue}>{addCommas(totalNetworth)}</Text>
        </View>
        <Text style={styles.label}>networth</Text>
      </View>
    </View>

  renderHeadContentTwo = (active) =>
    <View style={styles.content}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.label, { marginRight: 3 }]}>total portfolio</Text>
          <Text style={[styles.label, { color: colors.cardRed, fontWeight: 'bold' }]}>
            {active.percentageROI.toFixed(2)}% ROI
          </Text>
        </View>
        <View style={styles.overviewCont}>
          <Text style={styles.overviewValue}>
            N{addCommas(active.principle + active.roi)}
          </Text>
        </View>
      </View>
      <Image source={menuButton} style={styles.menuButton}/>
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

  toggleModal = () => this.setState(({ showModal }) => ({ showModal: !showModal }));

  renderAllTabs = ({ investments, overview }) =>
    <AllHomeTabs
      handleScroll={this.handleScroll}
      activeInvestments={investments}
      matureInvestments={investments}
      viewInvestment={() => this.setState({ showModal: true })}
      overview={[{
        name: 'principle',
        value: overview.active.principle
      }, {
        name: 'return on investment',
        value: overview.active.roi,
        percentageRoi: overview.active.percentageROI
      }, {
        name: 'number of investments',
        value: overview.active.numberOfInvestments,
        currency: false
      }]}
      parentScrollRef={scroller => this.parentScroller = scroller}
      activeTabScrollRef={scroller => this.activeTabScroller = scroller}
      matureTabScrollerRef={scroller => this.matureTabScroller = scroller}
    />
   

  renderViewInvestmentModal = () => {
    return (
      <Modal visible={this.state.showModal} toggleModal={this.toggleModal}>
        <View style={styles.investmentInfoParent}>

          <View>
            <Text style={styles.investmentInfoTitle}>
              name
            </Text>
            <Text style={styles.investmentInfoDetail}>
              PiggyVest - Chicken Farm
            </Text>
          </View>

          <View>
            <Text style={styles.investmentInfoTitle}>
              principle
            </Text>
            <Text style={styles.investmentInfoDetail}>
              N{addCommas(100000)}
            </Text>
          </View>

          <View>
            <Text style={styles.investmentInfoTitle}>
              return on investment
            </Text>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 17
            }}>
              <Text style={[styles.investmentInfoDetail, { marginBottom: 0 }]}>
                N{addCommas(100000)}
              </Text>
              <Text style={{ color: colors.cardRed,  marginLeft: 6, fontWeight: '500', }}>
                10%
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.investmentInfoTitle}>
              date of maturity
            </Text>
            <Text style={styles.investmentInfoDetail}>
              139d 12h 35m 42s
            </Text>
          </View>
          
        </View>
      </Modal>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.cardBack} barStyle="light-content" />
        {this.renderViewInvestmentModal()}
        <ImageBackground
          source={backcurve}
          imageStyle={styles.imageStyle}
          style={styles.backImage}
        />
        {this.renderHeadContentTwo(this.props.global.overview.active)}
        <View style={styles.body}>
          {this.renderHomeNav()}
          {this.renderAllTabs({
            investments: mocks.investments, overview: mocks.overview
          })}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const actionCreators = { isLoggingIn, setGlobal };

export default connect(mapStateToProps, actionCreators)(HomeScreen);
