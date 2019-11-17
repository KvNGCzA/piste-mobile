import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import reactotron from 'reactotron-react-native';

class Errors extends Component {
  render() {
    const { errors } = this.props; 
    return (
      <Text style={{ display: errors ? 'flex' : 'none', color: 'red' }}>
        {errors}
      </Text>
    );
  }
}

const mapStateToProps = ({ global: { errors } }) => ({ errors });

export default connect(mapStateToProps, null)(Errors);
