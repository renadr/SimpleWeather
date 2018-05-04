import React from 'react';
import { Text, View, ScrollView, Image, ActivityIndicator, TouchableNativeFeedback } from 'react-native';
import { key } from '../key';
import { Screen } from '../components/Screen';
import APIHandler from '../components/API/APIHandler';
// import APIManager from '../components/API/APIHandler';
import { styles } from '../styles/Styles';
import StylesDefault from '../styles/StylesDefault';

export const APIManager = new APIHandler();

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

  getCityAndCountry(city,country) {
    // console.log(city+" "+country);
    APIManager.setCityAndCountry(city,country);
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
    const styleColor = new StylesDefault();
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
                place={this.state.data.today.city+", "+this.state.data.today.country}
                />
                <Screen
                day={this.state.data.tommorow.day}
                type={this.state.data.tommorow.infoText}
                tempText={this.state.data.tommorow.tempText}
                tempAvg={this.state.data.tommorow.tempAvg}
                iconcode={this.state.data.tommorow.iconcode}
                place={this.state.data.tommorow.city+", "+this.state.data.tommorow.country}
                />
                <Screen
                day={this.state.data.thirdDay.day}
                type={this.state.data.thirdDay.infoText}
                tempText={this.state.data.thirdDay.tempText}
                tempAvg={this.state.data.thirdDay.tempAvg}
                iconcode={this.state.data.thirdDay.iconcode}
                place={this.state.data.thirdDay.city+", "+this.state.data.thirdDay.country}
                />
            </ScrollView>
            </View>
            <View style={{flex:1,backgroundColor:styleColor.getBackgroundColor()}}>
                <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',flex:1}}>
                    <TouchableNativeFeedback  onPress={() => this.props.navigation.navigate('SearchScreen')} style={{flex:1,flexDirection:'row',alignItems: 'center',justifyContent: 'center',padding:5}}>
                    <View style={styles.searchBar}>
                        <Image source={require('../search.png')} style={styles.ImageStyle} />
                        <Text style={styles.input}>Entrez votre ville ici...</Text>
                    </View>
                    </TouchableNativeFeedback >
                </View>
            </View>    
        </View>        
    
    );
  }
}

export default HomeScreen;

