import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions,
  NavigationEvents,
  createBottomTabNavigator
} from 'react-navigation'; // Version can be specified in package.json

// Tab1st
import HomeScreen from './Tab1st/home';
// Tab2nd
import DiscoveryScreen from './Tab2nd/discovery';
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

  Discovery: {
    screen: DiscoveryScreen,
  },
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

const Tab1stStackNavi = createStackNavigator(
  AllStack,
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '首页',
    })
  }
);

const Tab2ndStackNavi = createStackNavigator(
  AllStack,
  {
    initialRouteName: 'Discovery',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '发现',
    })
  }
);

const Tab3rdStackNavi = createStackNavigator(
  AllStack,
  {
    initialRouteName: 'New',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '创建',
    })
  }
);

const Tab4thStackNavi = createStackNavigator(
  AllStack,
  {
    initialRouteName: 'Message',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '消息',
    })
  }
);

const Tab5thStackNavi = createStackNavigator(
  AllStack,
  {
    initialRouteName: 'Mine',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我的',
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
      // inactiveTintColor: 'black',
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