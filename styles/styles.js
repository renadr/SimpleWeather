import { StyleSheet } from 'react-native';
import StylesDefault from '../styles/StylesDefault';

const styleColor = new StylesDefault();

export const styles = StyleSheet.create({
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
      flexDirection:'row'
    },
    input: {
      color: "#666666",
      fontWeight: 'bold',
      fontSize: 20,
      padding: 10,
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
    resultClickable: {
      flex:1,
      borderRadius: 50,
    },
    resultItem: {
      height:50,
      alignItems: 'center', 
      flexDirection: 'row',
      flex:1,
    },
    resultItemText: {
      fontSize: 17,
      color:styleColor.getTextColor()
    }
  });
  
