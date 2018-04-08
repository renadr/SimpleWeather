import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, Image, TextInput, ActivityIndicator, TouchableNativeFeedback , Alert} from 'react-native';

class SearchScreen extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
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

const styles = StyleSheet.create({
    searchBar: {
      backgroundColor: '#ffffff',
      borderRadius: 50,
      //IOS
      shadowOpacity: 0.3,
      shadowRadius: 50,
      shadowOffset: {
          height: 0,
          width: 0
      },
      //android
      elevation: 2,
      flex:0.9,
      flexDirection:'row',
    },
    input: {
      color: "#666666",
      fontWeight: 'bold',
      fontSize: 20,
      maxHeight:30,
      margin: 10,
      flex:0.8,
    },
    ImageStyle: {
      margin: 10,
      paddingLeft: 10,
      resizeMode : 'contain',
      alignItems: 'center',
      maxHeight:30,
      flex:0.1,
    },
  });
  