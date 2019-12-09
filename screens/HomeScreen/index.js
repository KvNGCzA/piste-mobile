import React, { Component } from 'react';
import {
  Dimensions, StatusBar, Text, View, ImageBackground, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import actions from '../../store/actions/global';
import backcurve from '../../assets/backcurve2.png'
import menuButton from '../../assets/menuButton.png'
import mocks from './__mock__';
import { addCommas } from '../../helpers';
import { colors, fonts } from '../../commons';
import AllHomeTabs from '../../components/AllHomeTabs';
import AddNewInvestmentModal from './AddNewInvestmentModal';
import ViewInvestmentModal from './ViewInvestmentModal';
import reactotron from 'reactotron-react-native';

const defaultNewInvestment = {
  name: '',
  amountInvested: null,
  roiType: "percentage",
  roiValue: null,
  returnDate: ''
};

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
    if (this.activeTabScroller) this.activeTabScroller.scrollTo({ x: 0, y: 0 });
    if (this.matureTabScroller) this.matureTabScroller.scrollTo({ x: 0, y: 0 });
  }

  toggleAddNewInvestmentModal = () => {
    this.setState((prevState) => ({ ...prevState, showAddNewInvestmentModal: !prevState.showAddNewInvestmentModal }));
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
            {`${active.percentageROI}`.substring(0, 5)}% ROI
          </Text>
        </View>
        <View style={styles.overviewCont}>
          <Text style={styles.overviewValue}>
            N{addCommas(Math.floor(active.principle + active.roi))}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={this.toggleAddNewInvestmentModal} >
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

  renderAllTabs = ({ investments, overview }) =>
    <AllHomeTabs
      handleScroll={this.handleScroll}
      activeInvestments={investments.active || []}
      matureInvestments={investments.mature || []}
      viewInvestment={this.viewInvestment}
      overview={overview}
      parentScrollRef={scroller => this.parentScroller = scroller}
      activeTabScrollRef={scroller => this.activeTabScroller = scroller}
      matureTabScrollerRef={scroller => this.matureTabScroller = scroller}
      toggleAddNewInvestmentModal={this.toggleAddNewInvestmentModal}
    />

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.cardBack} barStyle="light-content" />
        {this.state.showModal ? <ViewInvestmentModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          investment={this.state.openInvestment}
          deleteInvestment={this.props.deleteInvestment}
          editInvestmentHandler={() => this.setState({
            editedInvestment: {
              ...defaultNewInvestment,
              ...this.state.openInvestment,
              roiValue: this.state.openInvestment.expectedReturnPercentage
            },
            showEditNewInvestmentModal: true,
            showModal: false
          })}
        /> : null}
        {this.state.showAddNewInvestmentModal ? <AddNewInvestmentModal
          visible={this.state.showAddNewInvestmentModal}
          toggleModal={
            () => this.setState({
              showAddNewInvestmentModal: false,
              newInvestment: { ...defaultNewInvestment }
            })
          }
          positiveActionHandler={this.addNewInvestmentHandler}
          positiveActionText="add"
          values={this.state.newInvestment}
          setNewInvestmentFormValues={this.setNewInvestmentFormValues}
          headerTitle="add new investment"
        /> : null}
        {this.state.showEditNewInvestmentModal ? <AddNewInvestmentModal
          visible={this.state.showEditNewInvestmentModal}
          toggleModal={
            () => this.setState({ showEditNewInvestmentModal: false })
          }
          positiveActionHandler={this.editInvestmentHandler}
          positiveActionText="update"
          values={this.state.editedInvestment}
          setNewInvestmentFormValues={this.setEditedInvestmentFormValues}
          headerTitle="edit investment"
        /> : null}
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
            overview: this.props.global.overview,
          })}
        </View>
      </View>
    );
  }
}

export default connect(state => ({ ...state }), actions)(HomeScreen);
