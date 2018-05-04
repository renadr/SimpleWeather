import React from 'react';
import { Text, View, Dimensions, StatusBar, Image } from 'react-native';
import ImageLoader from './ImagesLoader';
import StylesDefault from '../styles/StylesDefault';

const IconLoader = new ImageLoader();
const styleColor = new StylesDefault();

export class Screen extends React.Component {

      constructor (props) {
        super(props)
      }

      render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;

        //Load the icon using ImagesLoader Service
        icon = IconLoader.getIconFromCode(this.props.iconcode);

        return (
            <View style={{backgroundColor:styleColor.getBackgroundColor(),flex:1,width:screenWidth,}}>
            <StatusBar hidden />
            <View style={{flex:5}}>
              <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:styleColor.getTextColor(),fontSize:25,fontWeight: 'bold'}}>{this.props.day}</Text>
              </View>
              <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:styleColor.getTextColor(),fontSize:15}}>{this.props.place}</Text>
              </View>
              <View style={{flexDirection:'row',flex:4, alignItems: 'center',justifyContent: 'center'}}>
                <View style={{flex:1,flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
                  <Image source={icon} style={{flex:1}} resizeMode="contain" />
                </View>
              </View>
              <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:styleColor.getTextColor(),fontSize:20}}>{this.props.type}</Text>
              </View>
              <View style={{flexDirection:'row',flex:2,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:styleColor.getTextColor(),fontSize:90,textShadowColor: 'rgba(0, 0, 0, 0.05)', textShadowOffset: {width: 0, height: 1}, textShadowRadius: 30, fontWeight: 'bold', }}>{this.props.tempAvg+" °C"}</Text>
              </View>
              <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:styleColor.getTextColor(),fontSize:20}}>{this.props.tempText}</Text>
              </View>
            </View>
          </View>
        );
    }
}
