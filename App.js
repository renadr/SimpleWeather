import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, Image, TextInput, ActivityIndicator } from 'react-native';
import { key } from './key.js';
import { Screen } from './components/Screen';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      day: '',
      type: '',
      tempText: '',
      tempAvg: '',
      isLoading: true
    }
  }

  componentDidMount(){
    this.setState({ isLoading: true })

    const APIBaseURL = "http://api.wunderground.com/api/";
    const APIService = "/forecast/q/";
    const API = APIBaseURL + key + APIService ;
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const country = "FR";
    const city = "Paris";
    const specificData = country+"/"+city+".json";
    // Getting Data from API
    return fetch(API + specificData)
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.response.features.forecast == 1){
        // Updating state with Data
        this.setState(
          {
            isLoading: false,
            day: responseJson.forecast.simpleforecast.forecastday[0].date.weekday,
            type: responseJson.forecast.simpleforecast.forecastday[0].conditions,
            tempText: responseJson.forecast.simpleforecast.forecastday[0].low.celsius + ' °C / ' + responseJson.forecast.simpleforecast.forecastday[0].high.celsius + ' °C',
            tempAvg: (parseInt(responseJson.forecast.simpleforecast.forecastday[0].low.celsius) + parseInt(responseJson.forecast.simpleforecast.forecastday[0].high.celsius)) / 2
          })
      }
      else{
        alert("Il y a eu une erreur lors de la requete (Status not OK)");
      }
    }).catch((error) => {
      console.error(error);
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
        <Screen day={this.state.day} type={this.state.type} tempText={this.state.tempText} tempAvg={this.state.tempAvg} />

      </ScrollView>
    );
  }
}


