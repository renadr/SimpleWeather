import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, Image, TextInput, ActivityIndicator, TouchableNativeFeedback } from 'react-native';
import { key } from '../key';
import { Screen } from '../components/Screen';
import APIHandler from '../components/API/APIHandler';
import { styles } from '../styles/styles';

const APIManager = new APIHandler();

class HomeScreen extends React.Component {

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
       <View style={{flex: 1, padding: 20,alignItems: 'center',justifyContent: 'center'}}>
          <Image source={require('../icons/logo.png')} style={{width: 200, height: 200}}/>
          <ActivityIndicator color="#03eefd" size="large"/>
        </View>
      )
    }
    return (
        <View style={{flex:1}}>
            <View style={{flex:8}}>
                <ScrollView horizontal={true} pagingEnabled={true}>
                <Screen
                day={this.state.data.today.day}
                type={this.state.data.today.infoText}
                tempText={this.state.data.today.tempText}
                tempAvg={this.state.data.today.tempAvg}
                iconcode={this.state.data.today.iconcode}
                />
                <Screen
                day={this.state.data.tommorow.day}
                type={this.state.data.tommorow.infoText}
                tempText={this.state.data.tommorow.tempText}
                tempAvg={this.state.data.tommorow.tempAvg}
                iconcode={this.state.data.tommorow.iconcode}
                />
                <Screen
                day={this.state.data.thirdDay.day}
                type={this.state.data.thirdDay.infoText}
                tempText={this.state.data.thirdDay.tempText}
                tempAvg={this.state.data.thirdDay.tempAvg}
                iconcode={this.state.data.thirdDay.iconcode}
                />
            </ScrollView>
            </View>
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',flex:1}}>
                    <TouchableNativeFeedback  onPress={() => this.props.navigation.navigate('SearchScreen')} style={{flex:1,flexDirection:'row',alignItems: 'center',justifyContent: 'center',padding:5}}>
                    <View style={styles.searchBar}>
                        <Image source={require('../search.png')} style={styles.ImageStyle} />
                        <Text style={styles.input}>Entrez votre ville ici...</Text>
                        {/* <TextInput style={styles.input} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Entrez votre ville ici..." /> */}
                    </View>
                    </TouchableNativeFeedback >
                </View>
            </View>    
        </View>        
    
    );
  }
}

export default HomeScreen;

