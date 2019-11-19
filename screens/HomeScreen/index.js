import React, { Component } from 'react';
import {
  Dimensions, StatusBar, Text, View, ImageBackground, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { isLoggingIn, setGlobal, fetchAllInvestments, isFetchingInvestments } from '../../store/actions/global';
import backcurve from '../../assets/backcurve2.png'
import menuButton from '../../assets/menuButton.png'
import mocks from './__mock__';
import { addCommas } from '../../helpers';
import { colors, fonts } from '../../commons';
import AllHomeTabs from '../../components/AllHomeTabs';
import Modal from '../../components/Modal';
import AddNewInvestmentModal from './AddNewInvestmentModal';
import ViewInvestmentModal from './ViewInvestmentModal';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    activeTab: 1,
    password: '',
    errors: '',
    showModal: false,
    openInvestment: {},
    showAddNewInvestmentModal: true,
    dateInput: '',
    newInvestment: {
      name: "",
      amountInvested: null,
      roi: {
        type: "percentage",
        value: null
      },
      returnDate: ""
    }
  }

  componentDidMount() {
    const { fetchAllInvestments, isFetchingInvestments } = this.props;
    isFetchingInvestments({ isFetching: true });
    fetchAllInvestments();
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

  launchAddNewInvestmentModal = () => {
    this.setState({ showAddNewInvestmentModal: true });

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
      <TouchableOpacity onPress={this.launchAddNewInvestmentModal} >
        <Image source={menuButton} style={styles.menuButton}/>
      </TouchableOpacity>
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

  viewInvestment = (investment) => this.setState({ openInvestment: investment, showModal: true });

  renderAllTabs = ({ investments, overview }) =>
    <AllHomeTabs
      handleScroll={this.handleScroll}
      activeInvestments={investments.active || []}
      matureInvestments={investments.mature || []}
      viewInvestment={this.viewInvestment}
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

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.cardBack} barStyle="light-content" />
        <ViewInvestmentModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          investment={this.state.openInvestment}
        />
        <AddNewInvestmentModal
          visible={this.state.showAddNewInvestmentModal}
          toggleModal={
            () => this.setState({ showAddNewInvestmentModal: false })
          }
          onDateChange={dateInput => this.setState({ dateInput })}
          dateValue={this.state.dateInput}
        />
        <ImageBackground
          source={backcurve}
          imageStyle={styles.imageStyle}
          style={styles.backImage}
        />
        {this.renderHeadContentTwo(this.props.global.overview.active)}
        <View style={styles.body}>
          {this.renderHomeNav()}
          {this.renderAllTabs({
            investments: this.props.global.investments.allInvestments,
            overview: mocks.overview
          })}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const actionCreators = { isLoggingIn, setGlobal, fetchAllInvestments, isFetchingInvestments };

export default connect(mapStateToProps, actionCreators)(HomeScreen);
