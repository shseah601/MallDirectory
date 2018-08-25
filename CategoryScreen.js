import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class CategoryScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Category shop list</Text>
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

export default CategoryScreen;