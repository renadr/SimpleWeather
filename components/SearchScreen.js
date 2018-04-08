import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, Image, TextInput, ActivityIndicator, TouchableNativeFeedback , Alert} from 'react-native';
import { styles } from '../styles/Styles';
import StylesDefault from '../styles/StylesDefault';

class SearchScreen extends React.Component {
    render() {
        const styleColor = new StylesDefault();
        return(
            <View style={{flex:1,backgroundColor:styleColor.getBackgroundColor()}}>
                <View style={{flex:1,flexDirection:'row',alignItems: 'center',justifyContent: 'center',padding:5}}>
                    <View style={styles.searchBar}>
                    <Image source={require('../search.png')} style={styles.ImageStyle} />
                    <TextInput style={styles.input} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Entrez votre ville ici..." autoFocus />
                    </View>
                </View>
                <View style={{flex:8}}>
                {/* Ajouter ici la liste des résultats (limité à un chiffre choisi) */}
                </View>
            </View>
        )
    }
}

export default SearchScreen;