import React, { Component } from 'react';
import {
  Dimensions, StatusBar, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView
} from 'react-native';
import styles from './styles';
import mocks from '../../screens/HomeScreen/__mock__';
import { addCommas } from '../../helpers';
import { colors } from '../../commons';
import InvestmentCard from '../InvestmentCard';
import reactotron from 'reactotron-react-native';

const renderActiveTab = (investments) => 
  <View style={styles.tabParent}>
    <ScrollView
      scrollEnabled
      style={styles.tab}
      showsVerticalScrollIndicator={false}
    >
      {
        investments.map((investment) => <InvestmentCard
          investment={investment} key={investment.id}
        />)
      }
    </ScrollView>
  </View>

const renderMatureTab = (investments) => 
  <View style={styles.tabParent}>
    <ScrollView
      scrollEnabled
      style={styles.tab}
      showsVerticalScrollIndicator={false}
    >
      {
        investments.map((investment) => <InvestmentCard
          investment={investment} key={investment.id}
        />)
      }
    </ScrollView>
  </View>

const renderOverviewTabContent = ({
  name, value, currency = true, percentageRoi
}) =>
  <View style={styles.overviewContent} key={name}>
    <Text style={[styles.text, styles.overviewCategoryName]}>
      {name}
    </Text>
    <View
      style={styles.overviewCategory}
    >
      <Text style={[styles.text, styles.overviewRoi]}>
        {percentageRoi && `${percentageRoi.toFixed(2)}%`}
      </Text>
      <Text style={[styles.text, styles.overviewPrinciple]}>
        {currency ? 'N' : ''}{addCommas(value)}
      </Text>
    </View>
  </View>

const renderOverviewTab = (activeValues) =>
  <View style={[styles.tabParent, styles.overviewParent]}>
    <View style={styles.overviewContainer}>

      <View style={styles.overviewSection}>
        <Text style={styles.overviewTitle}>active investments</Text>
        {activeValues.map((value) => renderOverviewTabContent(value))}
      </View>

      <View style={styles.overviewSection}>
        <Text style={styles.overviewTitle}>mature investments</Text>
        {activeValues.map((value) => renderOverviewTabContent(value))}
      </View>

      <View style={styles.overviewSection}>
        <Text style={styles.overviewTitle}>projected portfolio</Text>
        {activeValues.map((value) => renderOverviewTabContent(value))}
      </View>

    </View>
  </View>

class AllHomeTabs extends Component {
  render() {
    const {
      handleScroll, activeInvestments, matureInvestments, overview
    } = this.PaymentResponse;
    return (
      <View>
        <ScrollView
          style={styles.tabs}
          scrollEnabled
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={1000}
          ref={scroller => this.scroller = scroller}
        >
          {renderActiveTab(activeInvestments)}
          {renderMatureTab(matureInvestments)}
          {renderOverviewTab(overview)}
        </ScrollView>
      </View>
    );
  }
}


export default AllHomeTabs;
