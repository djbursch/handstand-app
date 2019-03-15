import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify from '@aws-amplify/core'
import config from './aws-exports'
Amplify.configure(config)

import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation'
import {Ionicons} from '@expo/vector-icons';

import Home from './screens/Home';
import Settings from './screens/Settings';
import Progress from './screens/Progress';
import Camera from './screens/Camera';

const CameraNav = createSwitchNavigator({
    Camera: {screen: Camera},
});

const LoggedIn = createBottomTabNavigator(
  {
    Home: {screen: Home},
    Settings: {screen: Settings},
    Progress: {screen: Progress},
    Camera: CameraNav,
  },
);

const MainNav = createAppContainer(LoggedIn);

class App extends React.Component {
  render() {
    return (
        <MainNav/>
    );
  }
}

export default withAuthenticator(App, {includeGreetings: true});
