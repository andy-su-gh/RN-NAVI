/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import naviPortal from './source/naviPortal';

AppRegistry.registerComponent(appName, () => naviPortal);
