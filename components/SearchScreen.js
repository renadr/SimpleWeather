import React from 'react';
import { View, Image, TextInput, ScrollView, Text, TouchableNativeFeedback, Button, FlatList } from 'react-native';
import { styles } from '../styles/Styles';
import StylesDefault from '../styles/StylesDefault';
import APIHandler from '../components/API/APIHandler';
import HomeScreen from '../components/HomeScreen';

const Home = new HomeScreen();

const APIManager = new APIHandler();


class SearchScreen extends React.Component {

    constructor(props){
        super(props);
        this.state={
          cities: null,
          search: ''
        };
    }
    
    AutomaticResearch(text) {
        this.setState({search: text});
        APIManager.getCities(this.state.search).then(data=> {
            this.setState({
                cities: data
            });
        }).catch(error => console.error(error));
    }

    changeCityAndCountry(city,country,l) {
        console.log(country);
        Home.getCityAndCountry(city,country,l);
        this.props.navigation.navigate('HomeScreen');
    }

    render() {
        const styleColor = new StylesDefault();

        return(
            <View style={{flex:1,backgroundColor:styleColor.getBackgroundColor()}}>
                <View style={{flex:1,flexDirection:'row',alignItems: 'center',justifyContent: 'center',padding:5}}>
                    <View style={styles.searchBar}>
                        <Image source={require('../search.png')} style={styles.ImageStyle} />
                        <TextInput onChangeText={(text) => this.AutomaticResearch(text)} style={styles.input} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Entrez votre ville ici..." autoFocus />
                    </View>
                </View>
                <View style={{flex:8,alignItems: 'center'}}>
                    <FlatList style={{flex:1,flexDirection:'column'}} data={this.state.cities} renderItem={({item}) => 
                        <TouchableNativeFeedback style={styles.resultClickable} onPress={() =>this.changeCityAndCountry(item.city,item.country,item.l)}><View style={styles.resultItem}><Text style={styles.resultItemText}>{item.name+", "+item.country}</Text></View></TouchableNativeFeedback>}
                    keyExtractor={(item, index) => index} />
                </View>
            </View>
        )
    }
}

export default SearchScreen;