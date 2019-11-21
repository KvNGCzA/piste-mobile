import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import { addCommas } from '../../helpers';
import InvestmentCard from '../InvestmentCard';

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

const AllHomeTabs = ({
  handleScroll, activeInvestments, matureInvestments,
  overview, parentScrollRef, activeTabScrollRef, matureTabScrollerRef,
  viewInvestment
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
      {renderInvestmentTabs({
        investments: activeInvestments,
        childScrollRef: activeTabScrollRef,
        viewInvestment
      })}
      {renderInvestmentTabs({
        investments: matureInvestments,
        childScrollRef: matureTabScrollerRef,
        viewInvestment
      })}
      {renderOverviewTab(overview)}
    </ScrollView>
  </View>

export default AllHomeTabs;
