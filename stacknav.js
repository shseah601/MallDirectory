import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator,NavigationActions } from  'react-navigation';
import HomeScreen from "./HomeScreen";
import ShopDetailsScreen from "./ShopDetailsScreen";
import MallDetailsScreen from "./MallDetailsScreen";
import FloorPlanScreen from "./FloorPlanScreen";
import CategoryScreen from "./CategoryScreen";
import SearchScreen from "./SearchScreen";
import ShopListScreen from './ShopListScreen';
import ProfileScreen from './ProfileScreen';
import EditUserScreen from './EditUserScreen';

import FeedbackScreen from "./FeedbackScreen";

const stackNav = createStackNavigator({
  Home : {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      headerLeft:(<TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image
                        style={{width: 30,height: 30}}
                        source={require('./img/menu_icon.png')}
                    />
                  </TouchableOpacity>
      )
    })
  },
  MallDetails: {
    screen: MallDetailsScreen,
    navigationOptions: ({navigation}) => ({
      title: "Mall Details",
    })
  },
  FloorPlan: {
    screen: FloorPlanScreen,
    navigationOptions: ({navigation}) => ({
      title: "Floor Plan",
    })
  },
  ShopList: {
    screen: ShopListScreen,
    navigationOptions: ({navigation}) => ({
      title: "Shop List",
    })
  }, 
  Feedback: {
    screen: FeedbackScreen,
    navigationOptions: ({navigation}) => ({
      title: "Feedback",
    })
  }, 
  Search: {
    screen: SearchScreen,
  },
  CategoryShopList: {
    screen: CategoryScreen,
  },
  ShopDetail: {
    screen: ShopDetailsScreen,
  },
  User: {
    screen: ProfileScreen,
  },
  EditUser: {
    screen: EditUserScreen,
    navigationOptions: ({navigation}) => ({
      title: "Edit User",
    })
  },
});

export default stackNav;