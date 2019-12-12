import React, { Component } from 'react';
import {
  Dimensions, StatusBar, Text, View, ImageBackground, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import actions from '../../store/actions/global';
import { addCommas } from '../../helpers';
import { colors, fonts } from '../../commons';
import reactotron from 'reactotron-react-native';
import chartDecrease from '../../assets/chart-decrease.png';
import moneyBill from '../../assets/money-bill.png';
import history from '../../assets/history.png';
import homeImage from '../../assets/homeImage.png';
import sun from '../../assets/sun.png';
import options from '../../components/Header';

const defaultNewInvestment = {
  name: '',
  amountInvested: null,
  roiType: "percentage",
  roiValue: null,
  returnDate: ''
};

class HomeScreen extends Component {
  static navigationOptions = {
    ...options
  };

  state = {
    activeTab: 1,
    password: '',
    errors: '',
    showModal: false,
    openInvestment: {},
    showAddNewInvestmentModal: false,
    showEditNewInvestmentModal: false,
    dateInput: '',
    newInvestment: { ...defaultNewInvestment },
    editedInvestment: { ...defaultNewInvestment }
  }

  componentDidMount() {
    const { fetchAllInvestments, isFetchingInvestments } = this.props;
    isFetchingInvestments({ isFetching: true });
    fetchAllInvestments();
  }

  setNewInvestmentFormValues = (value, key) => {
    this.setState(prevState => ({
      ...prevState,
      newInvestment: {
        ...prevState.newInvestment,
        [key]: value
      }
    }))
  }

  setEditedInvestmentFormValues = (value, key) => {
    this.setState(prevState => ({
      ...prevState,
      editedInvestment: {
        ...prevState.editedInvestment,
        [key]: value
      }
    }))
  }

  addNewInvestmentHandler = () => {
    const { newInvestment } =this.state;
    const investment = { ...newInvestment };
    investment.roi = { type: investment.roiType, value: investment.roiValue };
    this.props.addNewInvestment({
      investment,
      toggleAddNewInvestmentModal: this.toggleAddNewInvestmentModal
    });
    this.setState({ newInvestment: { ...defaultNewInvestment } })
  }

  editInvestmentHandler = () => {
    const { editedInvestment } =this.state;
    const investment = { ...editedInvestment };
    investment.roi = {
      type: investment.roiType,
      value: investment.roiValue
    };
    delete investment.expectedReturnPercentage;
    this.props.editInvestment({
      investment,
      investmentId: investment.id,
      toggleEditedInvestmentModal: () => this.setState({ showEditNewInvestmentModal: false })
    });
    this.setState({ editedInvestment: { ...defaultNewInvestment } })
  }

  renderSectionOne = () => {
    return (
      <View style={styles.head}>
        <Text style={{
          color: colors.primaryColor,
          textTransform: 'uppercase',
          fontFamily: fonts.redHatM,
          fontSize: 10,
          letterSpacing: 1
        }}>total investments capital</Text>
        <Text style={{
          color: colors.primaryColor,
          fontFamily: fonts.redHatM,
          fontSize: 32,
          letterSpacing: 1
        }}>N5,000,000</Text>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }}>
          <Text style={{
            color: colors.textGrey,
            fontFamily: fonts.redHatM,
            fontSize: 14,
            letterSpacing: 1
          }}>N1,500,000</Text>
          <Text style={{
            color: colors.warning,
            fontFamily: fonts.redHatM,
            fontSize: 14,
            letterSpacing: 1
          }}> 30% ROI</Text>
        </View>
        <Image source={homeImage} style={{
          resizeMode: 'contain',
          flex: 1,
          width: '80%'
        }}/>
      </View>
    );
  }

  renderSectionTwo = () => {
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Text style={{
          fontFamily: fonts.redHatM,
          textTransform: 'capitalize',
          color: colors.primaryColor,
          fontSize: 16,
          paddingTop: 20,
          paddingBottom: 20,
          letterSpacing: 1
        }}>Good Morning Christopher</Text>
        <Image source={sun} style={{
          height: 28,
          width: 28,
          marginLeft: 10,
          resizeMode: 'contain'
        }}/>
      </View>
    );
  }

  renderSectionThree = () => {
    const cards = [{
      image: chartDecrease,
      text: 'View Active investments',
      link: 'AllInvestments'
    }, {
      image: moneyBill,
      text: 'View your next payout',
      link: ''
    }, {
      image: history,
      text: 'View investments history',
      link: ''
    }];

    return (
      <View style={{
        width: '90%',
      }}>

        <View>
          {cards.map(({ image, text, link }) => 
            <TouchableOpacity key={text} style={styles.homeCard}
              onPress={() => {
                this.props.navigation.navigate(link)
              }}
            >
              <Image style={{
                height: 60,
                width: 60,
                resizeMode: 'contain'
              }} source={image}/>
              <Text style={styles.homeCardText}>
                {text}
              </Text>
            </TouchableOpacity>
          )}
        </View>

      </View>
    );
  }

  render() {

    return (
      <View style={styles.container}>
        {this.renderSectionOne()}
        {this.renderSectionTwo()}
        {this.renderSectionThree()}
      </View>
    );
  }
}

export default connect(state => ({ ...state }), actions)(HomeScreen);
