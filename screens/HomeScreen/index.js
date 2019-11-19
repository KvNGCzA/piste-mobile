import React, { Component } from 'react';
import {
  Dimensions, StatusBar, Text, View, ImageBackground, Image, TouchableOpacity, Picker
} from 'react-native';
import { connect } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import { isLoggingIn, setGlobal, fetchAllInvestments, isFetchingInvestments } from '../../store/actions/global';
import backcurve from '../../assets/backcurve2.png'
import menuButton from '../../assets/menuButton.png'
import formDropdownIcon from '../../assets/formDropdownIcon.png'
import mocks from './__mock__';
import { addCommas } from '../../helpers';
import { colors } from '../../commons';
import reactotron from 'reactotron-react-native';
import AllHomeTabs from '../../components/AllHomeTabs';
import Modal from '../../components/Modal';
import CustomTextInput from '../../commons/CustomTextInput';

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
    showAddNewInvestmentModal: false
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

  addNewInvestmentModal = () => {
    const inputStyle = {
      borderColor: colors.textGrey,
      borderWidth: 1,
      height: 47,
      width: '100%',
      color: colors.cardOrange,
      fontWeight: 'bold',
    };

    const textStyle = {
      color: colors.textGrey,
      fontWeight: '300',
      textTransform: 'capitalize',
    }

    const dropDownStyle = {
      textAlign: 'center',
      color: colors.textGrey,
      borderColor: colors.textGrey,
      fontSize: 16,
      borderWidth: 1,
      borderLeftWidth: 0,
      height: 47,
      color: colors.cardOrange,
      fontWeight: 'bold',
      paddingLeft: 10,
    }

    return (
      <Modal
        positiveActionText="Add"
        visible={this.state.showAddNewInvestmentModal}
        headerTitle="add investment"
        toggleModal={() => this.setState({ showAddNewInvestmentModal: false })}
      >
        <View>
            <View>
              <CustomTextInput {...{
                label: 'name',
                textStyle,
                inputStyle,
                inputFieldOptions: {
                }
              }}/>
            </View>
          <View>
            <CustomTextInput {...{
              label: 'principle',
              textStyle,
              inputStyle,
              inputFieldOptions: {
              }
            }}/>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 25 }}>
            <View style={{ width: '70%' }}>
              <CustomTextInput {...{
                label: 'return on investment',
                textStyle,
                inputStyle: { ...inputStyle, borderRightWidth: 0,  },
                parentStyle:{ marginBottom: 0 },
                inputFieldOptions: {
                }
              }}/>
            </View>
            <View style={{ height: 47, borderRightWidth: 1, borderColor: colors.textGrey }}/>
            <View style={{ width: '30%', }}>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                placeholder={{}}
                style={{
                  alignItems: 'center',
                  inputIOS: { ...dropDownStyle },
                  inputAndroid: { ...dropDownStyle  },
                  iconContainer: {
                    right: null,
                    paddingLeft: 10
                  }
                }}
                useNativeAndroidPickerStyle={false}
                items={[
                  { label: '%', value: '%' },
                  { label: 'Naira', value: 'Naira' },
                ]}
                Icon={() =>
                  <View 
                   style={{
                      justifyContent: 'center',
                      height: 47,
                      alignItems: 'center',
                      right: '10%'
                    }}
                  >
                    <Image  source={formDropdownIcon}/>
                  </View>
                }
              />
            </View>
          </View>
        </View>
        <View>
          <CustomTextInput {...{
            label: 'date of maturity',
            textStyle,
            inputStyle,
            inputFieldOptions: {
            }
          }}/>
        </View>
      </Modal>
    )
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

  viewInvestment = (investment) => {
    this.setState({ openInvestment: investment, showModal: true });
  }

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
   

  renderViewInvestmentModal = () => {
    const { openInvestment: investment } = this.state;
    return (
      <Modal visible={this.state.showModal} toggleModal={this.toggleModal}>
        <View style={styles.investmentInfoParent}>

          <View>
            <Text style={styles.investmentInfoTitle}>
              name
            </Text>
            <Text style={styles.investmentInfoDetail}>
              {investment.name}
            </Text>
          </View>

          <View>
            <Text style={styles.investmentInfoTitle}>
              principle
            </Text>
            <Text style={styles.investmentInfoDetail}>
              N{addCommas(investment.amountInvested || 0)}
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
                N{addCommas(
                  investment.expectedReturnPercentage
                  ? investment.expectedReturnPercentage/100 * investment.amountInvested : 0)}
              </Text>
              <Text style={{ color: colors.cardRed,  marginLeft: 6, fontWeight: '500', }}>
              {investment.expectedReturnPercentage}%
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.investmentInfoTitle}>
              date of maturity
            </Text>
            <Text style={styles.investmentInfoDetail}>
            {investment.status === 'mature' ? 'paid out ' : null}{new Date(investment.returnDate).toDateString()}
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
        {this.addNewInvestmentModal()}
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
