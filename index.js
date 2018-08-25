import { AppRegistry, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import SideMenu from './SideMenu/SideMenu'
import stackNav from './stacknav';

const drawernav = createDrawerNavigator({
  Item1: {
      screen: stackNav,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
    contentOptions: {
      activeTintColor: '#e91e63',
    }
});

AppRegistry.registerComponent('MallDirectory', () => drawernav);