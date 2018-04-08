import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, Image, TextInput, ActivityIndicator, TouchableNativeFeedback , Alert} from 'react-native';
import ImageLoader from './ImagesLoader';
import SearchScreen from '../components/SearchScreen';
import { StackNavigator } from 'react-navigation';
import { RootStack } from '../App';

const IconLoader = new ImageLoader();

export class Screen extends React.Component {

        constructor (props) {
          super(props)
      }

      render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;

        //Load the icon using ImagesLoader Service
        icon = IconLoader.getIconFromCode(this.props.iconcode);

        // The background color change the night (8:00pm / 20h) and become darker 
        let d = new Date();
        let colorBg = d.getHours()<20 && d.getHours()>6 ? '#FFFFFF' : '#333333';
        let colorTxt = d.getHours()<20 && d.getHours()>6 ? '#333333' : '#FFFFFF';
        const showAlert = () => {
          Alert.alert(
             'Fonctionnalite prochainement implementé'
          )
        }
        return (
            <View style={{backgroundColor:colorBg,flex:1,width:screenWidth,}}>
            <StatusBar hidden />
            <View style={{flex:5}}>
              <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:colorTxt,fontSize:25,fontWeight: 'bold'}}>{this.props.day}</Text>
              </View>
              <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:colorTxt,fontSize:15}}>Paris, France</Text>
              </View>
              <View style={{flexDirection:'row',flex:4, alignItems: 'center',justifyContent: 'center'}}>
                <View style={{flex:1,flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
                  <Image source={icon} style={{flex:1}} resizeMode="contain" />
                </View>
              </View>
              <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:colorTxt,fontSize:20}}>{this.props.type}</Text>
              </View>
              <View style={{flexDirection:'row',flex:2,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:colorTxt,fontSize:90,textShadowColor: 'rgba(0, 0, 0, 0.05)', textShadowOffset: {width: 0, height: 1}, textShadowRadius: 30, fontWeight: 'bold', }}>{this.props.tempAvg+" °C"}</Text>
              </View>
              <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:colorTxt,fontSize:20}}>{this.props.tempText}</Text>
              </View>
            </View>
          </View>
        );
    }
}
