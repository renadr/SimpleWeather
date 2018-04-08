import React from 'react';
import {StackNavigator} from 'react-navigation'
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
}

export const RootStack = StackNavigator(
  {
    HomeScreen: { screen : HomeScreen},
    SearchScreen: {screen: SearchScreen},
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode : 'none'
  }
);