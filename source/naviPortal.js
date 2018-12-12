import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions,
  NavigationEvents,
  createBottomTabNavigator
} from 'react-navigation'; // Version can be specified in package.json
// import ThemeLoader from 'theme/ThemeLoader';
import { Icon } from 'react-native-elements';

// Tab1st
import HomeScreen from './Tab1st/home';
// Tab2nd
import DiscoveryScreen from './Tab2nd/discovery';
import FlatListDemo from './Tab2nd/flatListDemo';
import EmptyPage from './Tab2nd/emptyPage';
// Tab3rd
import NewScreen from './Tab3rd/new';
// Tab4th
import MessageScreen from './Tab4th/message';
// Tab5th
import MineScreen from './Tab5th/mine';

// TabOther
import DetailsScreen from './TabOther/detail';
import ProfileScreen from './TabOther/profile';
import SettingsScreen from './TabOther/setting';
import OtherScreen from './TabOther/other';


const AllStack = {
  //Tab1st
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
  Other: {
    screen: OtherScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },

  //Tab2nd
  Discovery: {
    screen: DiscoveryScreen,
  },
  FlatListDemo: {
    screen: FlatListDemo,
  },
  EmptyPage: {
    screen: EmptyPage,
  },

  //Tab3rd
  New: {
    screen: NewScreen,
  },
  Message: {
    screen: MessageScreen,
  },
  Mine: {
    screen: MineScreen,
  }
};

/**
 * https://oblador.github.io/react-native-vector-icons/
 * Icon.type
 * ['ionicon', 'entypo']
 */
const icon_size_normal = 24;
const icon_size_focus = 28;
const color_main = 'orange';
const color_default = '#939393';

const Tab1stStackNavi = createStackNavigator(
  AllStack,
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Icon
          name={'ios-home'}
          type={'ionicon'}
          size={focused ? icon_size_focus : icon_size_normal}
          color={focused ? color_main : color_default}
        />
      ),
    })
  }
);

const Tab2ndStackNavi = createStackNavigator(
  AllStack,
  {
    initialRouteName: 'Discovery',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '发现',
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Icon
          name={'ios-paper-plane'}
          // name={'md-jet'}
          // name={'md-compass'}
          type={'ionicon'}
          size={focused ? icon_size_focus : icon_size_normal}
          color={focused ? color_main : color_default}
        />
      ),
    })
  }
);

const Tab3rdStackNavi = createStackNavigator(
  AllStack,
  {
    initialRouteName: 'New',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '创建',
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Icon
          name={'md-paw'}
          // name={'ios-add-circle'}
          type={'ionicon'}
          size={focused ? icon_size_focus : icon_size_normal}
          color={focused ? color_main : color_default}
        />
      ),
    })
  }
);

const Tab4thStackNavi = createStackNavigator(
  AllStack,
  {
    initialRouteName: 'Message',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '消息',
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Icon
          // name={'ios-notifications'}
          name={'md-notifications'}
          type={'ionicon'}
          size={focused ? icon_size_focus : icon_size_normal}
          color={focused ? color_main : color_default}
        />
      ),
    })
  }
);

const Tab5thStackNavi = createStackNavigator(
  AllStack,
  {
    initialRouteName: 'Mine',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Icon
          name={'md-contact'}
          // name={'ios-contact'}
          type={'ionicon'}
          // type={'entypo'}
          size={focused ? icon_size_focus : icon_size_normal}
          color={focused ? color_main : color_default}
        />
      ),
    })
  }
);


const TabNavigator = createBottomTabNavigator(
  {
    Tab1st: Tab1stStackNavi,
    Tab2nd: Tab2ndStackNavi,
    Tab3rd: Tab3rdStackNavi,
    Tab4th: Tab4thStackNavi,
    Tab5th: Tab5thStackNavi,
  }, {
    initialRouteName: 'Tab1st',
    tabBarOptions: {
      activeTintColor: 'orange',
      // activeBackgroundColor: 'gray',
      // inactiveTintColor: null,
      // inactiveBackgroundColor: '',
      // showLabel: true,
      // showIcon: true,
      // style: {},
      // labelStyle: {},
      // tabStyle: {},
      // allowFontScaling: true,
      // safeAreaInset: { bottom: 'always', top: 'never' }
    },
  }
);

export default createAppContainer(TabNavigator);

    /**
     * NOTE *
     * 
     * "react-navigation": "3.0.0-rc.5"
     * rm -rf node_modules && npm install
     * react-native link
 */