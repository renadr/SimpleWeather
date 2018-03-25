import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, Image, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    let pic = {
      uri: 'http://adrienlemaire.fr/SimpleWeather/soleil.gif'
    };
    return (
      <ScrollView horizontal={true} pagingEnabled={true}>
        <View style={{backgroundColor:'#FFDF00',flex:1,width:screenWidth,justifyContent:'center',alignItems:'center'}}>
          <StatusBar hidden />
          <View style={{flex:5}}>
            <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
              <Text style={{color:'#ffffff',fontSize:25}}>Aujourd'hui</Text>
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
              <Text style={{color:'#ffffff',fontSize:20}}>Ensoleillé</Text>
            </View>
            <View style={{flexDirection:'row',flex:2,alignItems: 'center',justifyContent: 'center'}}>
              <Text style={{color:'#ffffff',fontSize:90,textShadowColor: 'rgba(0, 0, 0, 0.1)', textShadowOffset: {width: 0, height: 1}, textShadowRadius: 30, }}>13°C</Text>
            </View>
            <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
              <Text style={{color:'#ffffff',fontSize:20}}>8°C / 13°C</Text>
            </View>
          </View>
          <View style={{flex:1}}>
            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}></View>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
