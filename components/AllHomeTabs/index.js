import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import styles from './styles';
import { addCommas } from '../../helpers';
import InvestmentCard from '../InvestmentCard';
import addButton from '../../assets/addButton.png';
import reactotron from 'reactotron-react-native';
import Buttons from '../../commons/Buttons';
import { colors } from '../../commons';

const { width } = Dimensions.get('window');

const renderInvestmentTabs = ({
  investments, childScrollRef, viewInvestment
}) =>
  <View style={styles.tabParent}>
    <ScrollView
      scrollEnabled
      style={styles.tab}
      showsVerticalScrollIndicator={false}
      ref={childScrollRef}
    >
      {
        investments.map((investment) => <InvestmentCard
          investment={investment}
          key={investment.id}
          viewInvestment={viewInvestment}
        />)
      }
    </ScrollView>
  </View>

const renderOverviewTabContent = ({
  name, principle, currency = true, percentageROI
}) =>
  <View style={styles.overviewContent} key={name}>
    <Text style={[styles.text, styles.overviewCategoryName]}>
      {name}
    </Text>
    <View
      style={styles.overviewCategory}
    >
      <Text style={[styles.text, styles.overviewRoi]}>
        {percentageROI && `${percentageROI.toFixed(2)}%`}
      </Text>
      <Text style={[styles.text, styles.overviewPrinciple]}>
        {currency ? 'N' : ''}{addCommas(principle)}
      </Text>
    </View>
  </View>

const renderOverviewTab = ({ active, mature }) =>
  <View style={[styles.tabParent, styles.overviewParent]}>
    <View style={styles.overviewContainer}>

      <View style={styles.overviewSection}>
        <Text style={styles.overviewTitle}>active investments</Text>
        {renderOverviewTabContent({ name: 'Principle', principle: active.principle })}
        {renderOverviewTabContent({ name: 'Return On investment', principle: active.roi, percentageROI: active.percentageROI })}
        {renderOverviewTabContent({ name: 'number of investments', principle: active.numberOfInvestments, currency: false })}
      </View>

      <View style={styles.overviewSection}>
        <Text style={styles.overviewTitle}>mature investments</Text>
        {renderOverviewTabContent({ name: 'Principle', principle: mature.principle })}
        {renderOverviewTabContent({ name: 'Return On investment', principle: mature.roi, percentageROI: mature.percentageROI })}
        {renderOverviewTabContent({ name: 'number of investments', principle: mature.numberOfInvestments, currency: false })}
      </View>

      {/* <View style={styles.overviewSection}>
        <Text style={styles.overviewTitle}>projected portfolio</Text>
        {activeValues.map((value) => renderOverviewTabContent(value))}
      </View> */}

    </View>
  </View>

const placeHolder = (type, toggleAddNewInvestmentModal) =>
  <View style={styles.placeholderParent}>
    <View style={{
      alignItems: 'center',
      width: '80%'
    }}>
      <Text style={styles.topText}>
        {type === 'active' ?' You have not added' : 'You have no mature'}
      </Text>
      <Text style={styles.topText}>
        {type === 'active' ? 'any investment' : 'investments'}
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 90,
          marginBottom: 90
        }}
        onPress={toggleAddNewInvestmentModal}
      >
        <Image source={addButton} style={{ height: 100, width: 100 }}/>
      </TouchableOpacity>
      <Buttons 
        value="start now"
        style={styles.customPlaceholderButton}
        onPress={toggleAddNewInvestmentModal}
      />
    </View>
  </View>

const AllHomeTabs = ({
  handleScroll,
  activeInvestments, matureInvestments,
  overview, parentScrollRef, activeTabScrollRef, matureTabScrollerRef,
  viewInvestment, toggleAddNewInvestmentModal
}) => 
  <View style={{ height: '85%'}}>
    <ScrollView
      style={styles.tabs}
      scrollEnabled
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={1000}
      ref={parentScrollRef}
    >
      {activeInvestments.length ? renderInvestmentTabs({
        investments: activeInvestments,
        childScrollRef: activeTabScrollRef,
        viewInvestment
      }) : placeHolder('active', toggleAddNewInvestmentModal)}
      {matureInvestments.length ? renderInvestmentTabs({
        investments: matureInvestments,
        childScrollRef: matureTabScrollerRef,
        viewInvestment
      }) : placeHolder('mature', toggleAddNewInvestmentModal)}
      {renderOverviewTab(overview)}
    </ScrollView>
  </View>

export default AllHomeTabs;
