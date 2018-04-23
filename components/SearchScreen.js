import React from 'react';
import { View, Image, TextInput, ScrollView, Text, TouchableNativeFeedback, Button, FlatList } from 'react-native';
import { styles } from '../styles/Styles';
import StylesDefault from '../styles/StylesDefault';
import APIHandler from '../components/API/APIHandler';

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
        console.log(this.state.search);
        APIManager.getCities(this.state.search).then(data=> {
            this.setState({
                cities: data
            });
            console.log(this.state.cities);
        }).catch(error => console.error(error));
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
                {/* <Button
                onPress={() => this.test()}
                title="Learn More"
                color="#841584"
                /> */}
                <View style={{flex:8,alignItems: 'center'}}>
                
                <FlatList style={{flex:1}} data={this.state.cities} renderItem={({item}) => <TouchableNativeFeedback style={styles.resultClickable}><Text style={{color:styleColor.getTextColor(),fontSize:15}}>{item.name}</Text></TouchableNativeFeedback>}keyExtractor={(item, index) => index} />
                </View>
            </View>
        )
    }
}

export default SearchScreen;