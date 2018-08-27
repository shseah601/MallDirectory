import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
              Home
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('MallDetails')}>
              Mall Details
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ShopList')}>
              Shop List
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('FloorPlan')}>
              Floor Plan
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>© WorldOfWireless 2018 Inc</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;