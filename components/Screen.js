import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, Image, TextInput, ActivityIndicator } from 'react-native';

export class Screen extends React.Component {
      render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        let pic = {
          uri: 'http://adrienlemaire.fr/SimpleWeather/soleil.gif'
        };
        // The background color change the night (8:00pm / 20h) and become darker 
        let d = new Date();
        let colorBg = d.getHours()<20 ? '#FFDF00' : '#250051';
        return (
            <View style={{backgroundColor:colorBg,flex:1,width:screenWidth,}}>
            <StatusBar hidden />
            <View style={{flex:5}}>
              <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:'#ffffff',fontSize:25}}>{this.props.day}</Text>
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
                <Text style={{color:'#ffffff',fontSize:20}}>{this.props.type}</Text>
              </View>
              <View style={{flexDirection:'row',flex:2,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:'#ffffff',fontSize:90,textShadowColor: 'rgba(0, 0, 0, 0.1)', textShadowOffset: {width: 0, height: 1}, textShadowRadius: 30, }}>{this.props.tempAvg+" °C"}</Text>
              </View>
              <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:'#ffffff',fontSize:20}}>{this.props.tempText}</Text>
              </View>
            </View>
            <View style={{flex:1}}>
              <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',flex:1}}>
                <TextInput style={styles.input} underlineColorAndroid='rgba(0,0,0,0)' />
              </View>
            </View>            
          </View>
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