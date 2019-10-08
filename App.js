import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Profile from './src/screens/Profile';
import Acceleration from './src/screens/Acceleration'


const App = createStackNavigator({
  Profile: {
    screen: Profile
  },
  Acceleration: {
    screen: Acceleration
  }
},
  {
    header:'none',
    initialRouteName:'Acceleration'
  });


export default createAppContainer(App);
