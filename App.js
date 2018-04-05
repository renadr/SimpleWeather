import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, Image, TextInput, ActivityIndicator } from 'react-native';
import { key } from './key';
import { Screen } from './components/Screen';
import APIHandler from './components/API/APIHandler';

const APIManager = new APIHandler();

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      data: null
    };
  }

  componentDidMount(){
    // Setting loading status
    this.setState({ isLoading: true })
    // Using Promise, getting API data then setting the state
    APIManager.getDataFromAPI().then(data => {
      console.log(data);
      this.setState(
        {
          isLoading: false,
          data: data,
        }
      )
    });
  }

  // If state is loading, display a spinner
  render() {
    if(this.state.isLoading){
      return(
       <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <ScrollView horizontal={true} pagingEnabled={true}>
        <Screen
          day={this.state.data.today.day}
          type={this.state.data.today.type}
          tempText={this.state.data.today.tempText}
          tempAvg={this.state.data.today.tempAvg}
        />
        <Screen
          day={this.state.data.tommorow.day}
          type={this.state.data.tommorow.type}
          tempText={this.state.data.tommorow.tempText}
          tempAvg={this.state.data.tommorow.tempAvg}
        />
        <Screen
          day={this.state.data.thirdDay.day}
          type={this.state.data.thirdDay.type}
          tempText={this.state.data.thirdDay.tempText}
          tempAvg={this.state.data.thirdDay.tempAvg}
        />
      </ScrollView>
    );
  }
}


