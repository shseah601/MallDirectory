import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class FloorPlanScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Floor Plan Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default FloorPlanScreen;