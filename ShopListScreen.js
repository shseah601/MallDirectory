import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class ShopListScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Shop List Screen</Text>
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

export default ShopListScreen;