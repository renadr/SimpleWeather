import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, Image, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    return (
      <ScrollView horizontal={true}>
        <View style={{backgroundColor:'#5f9eff',flex:1,width:screenWidth,justifyContent:'center',alignItems:'center'}}>
          <StatusBar hidden />
          <Text style={{fontSize:20,padding:15,color:'white',textAlign:'center'}}>
            Ecran 1
          </Text>
        </View>
        <View style={{backgroundColor:'#5f9e02',flex:1,width:screenWidth,justifyContent:'center',alignItems:'center'}}>
          <StatusBar hidden />
          <Text style={{fontSize:20,padding:15,color:'white',textAlign:'center'}}>
            Ecran 2
          </Text>
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
