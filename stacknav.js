import React, { Component } from 'react';
import {
  Image,
  Text,
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
  Search: {
    screen: SearchScreen,
    navigationOptions: ({navigation}) => ({
      title: "Search",
    })
  },
  CategoryShopList: {
    screen: CategoryScreen,
    navigationOptions: ({navigation}) => ({
      title: "Category",
    })
  },
  ShopDetail: {
    screen: ShopDetailsScreen,
    navigationOptions: ({navigation}) => ({
      title: "Shop Detail",
    })
  },
});

export default stackNav;