import { StyleSheet } from 'react-native';
import React from 'react';

class StylesDefault {

    // The background color change the night (8:00pm / 20h) and become darker 
    getBackgroundColor() {
      let d = new Date();
      return d.getHours()<20 && d.getHours()>6 ? '#FFFFFF' : '#333333';
    }
    // The text color change the night (8:00pm / 20h) and become lighter 
    getTextColor() {
      let d = new Date();
      return d.getHours()<20 && d.getHours()>6 ? '#333333' : '#FFFFFF';      
    }

  }

  module.exports = StylesDefault;