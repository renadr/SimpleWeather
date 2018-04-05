import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, Image, TextInput, ActivityIndicator } from 'react-native';
import { key } from './key.js';

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


    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    let pic = {
      uri: 'http://adrienlemaire.fr/SimpleWeather/soleil.gif'
    };
    // The background color change the night (8:00pm / 20h) and become darker 
    let d = new Date();
    let colorBg = d.getHours()<20 ? '#FFDF00' : '#250051';
    return (
      <ScrollView horizontal={true} pagingEnabled={true}>
        <View style={{backgroundColor:colorBg,flex:1,width:screenWidth,}}>
          <StatusBar hidden />
          <View style={{flex:5}}>
            <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
              <Text style={{color:'#ffffff',fontSize:25}}>{this.state.day}</Text>
            </View>
            <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
              <Text style={{color:'#ffffff',fontSize:15}}>Paris, France</Text>
            </View>
            <View style={{flexDirection:'row',flex:4, alignItems: 'center',justifyContent: 'center'}}>
              <View style={{flex:1,flexDirection:'column',alignItems: 'stretch',justifyContent: 'center'}}>
                <Image source={pic} style={{flex:1}} resizeMode="contain" />
              </View>
            </View>
            <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
              <Text style={{color:'#ffffff',fontSize:20}}>{this.state.type}</Text>
            </View>
            <View style={{flexDirection:'row',flex:2,alignItems: 'center',justifyContent: 'center'}}>
              <Text style={{color:'#ffffff',fontSize:90,textShadowColor: 'rgba(0, 0, 0, 0.1)', textShadowOffset: {width: 0, height: 1}, textShadowRadius: 30, }}>{this.state.tempAvg+" °C"}</Text>
            </View>
            <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
              <Text style={{color:'#ffffff',fontSize:20}}>{this.state.tempText}</Text>
            </View>
          </View>
          <View style={{flex:1}}>
            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',flex:1}}>
              <TextInput style={styles.input} underlineColorAndroid='rgba(0,0,0,0)' />
            </View>
          </View>            
        </View>

        <View style={{backgroundColor:'#5f9e02',flex:1,width:screenWidth,justifyContent:'center',alignItems:'center'}}>
          <StatusBar hidden />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    color: "#000000",
    flex:0.9,
    fontSize: 20,
    padding: 10,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    shadowOffset: {
        height: 0,
        width: 0
    },
    //android
    elevation: 5,
  },
});
