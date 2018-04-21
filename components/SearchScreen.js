import React from 'react';
import { View, Image, TextInput, ScrollView, Text, TouchableNativeFeedback } from 'react-native';
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
                <View style={{flex:8,alignItems: 'center'}}>
                {/* Ajouter ici la liste des résultats (limité à un chiffre choisi) */}
                    <ScrollView style={styles.resultScroll}>
                        <TouchableNativeFeedback style={styles.resultClickable}><View style={styles.resultItem}><Text style={styles.resultItemText}>New York City, New York, US</Text></View></TouchableNativeFeedback>
                        <TouchableNativeFeedback style={styles.resultClickable}><View style={styles.resultItem}><Text style={styles.resultItemText}>New Kingston, Jamaica, JM</Text></View></TouchableNativeFeedback>
                        <TouchableNativeFeedback style={styles.resultClickable}><View style={styles.resultItem}><Text style={styles.resultItemText}>Newcastle, Australia, AU</Text></View></TouchableNativeFeedback>
                        <TouchableNativeFeedback style={styles.resultClickable}><View style={styles.resultItem}><Text style={styles.resultItemText}>New Orleans, Louisana, US</Text></View></TouchableNativeFeedback>
                        <TouchableNativeFeedback style={styles.resultClickable}><View style={styles.resultItem}><Text style={styles.resultItemText}>Newcastle, South Africa, ZA</Text></View></TouchableNativeFeedback>
                        <TouchableNativeFeedback style={styles.resultClickable}><View style={styles.resultItem}><Text style={styles.resultItemText}>New Delhi, India, IN</Text></View></TouchableNativeFeedback>
                        <TouchableNativeFeedback style={styles.resultClickable}><View style={styles.resultItem}><Text style={styles.resultItemText}>Newark, New Jersey, US</Text></View></TouchableNativeFeedback>
                        <TouchableNativeFeedback style={styles.resultClickable}><View style={styles.resultItem}><Text style={styles.resultItemText}>Newcastle upon Tyne, United Kingdom, GB</Text></View></TouchableNativeFeedback>
                        <TouchableNativeFeedback style={styles.resultClickable}><View style={styles.resultItem}><Text style={styles.resultItemText}>Newport News, Virginia, US</Text></View></TouchableNativeFeedback>
                        <TouchableNativeFeedback style={styles.resultClickable}><View style={styles.resultItem}><Text style={styles.resultItemText}>New Haven, Connecticut, US</Text></View></TouchableNativeFeedback>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default SearchScreen;