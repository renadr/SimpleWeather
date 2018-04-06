import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, Image, TextInput, ActivityIndicator } from 'react-native';
import { APIkey } from '../../key.js';
import iconConfigJSON from '../../icons.json';

const APIBaseURL = "http://api.wunderground.com/api/";
const APIService = "/forecast/q/";
const API = APIBaseURL + APIkey + APIService ;
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

class APIHandler {

    async getDataFromAPI(){
        try{
            APIResponse = await this.getAPIResponseFromLocation();
            weatherInfo = this.getWeatherInfoFromAPIResponse(APIResponse);
            dayInfo = this.getDayInfoFromWeatherInfo(weatherInfo);
        } catch(e){
            console.error(e);
        }
        return {
            today: dayInfo[0],
            tommorow: dayInfo[1],
            thirdDay: dayInfo[2]
        };
    }


    async getAPIResponseFromLocation(){
        var country = "FR";
        var city = "Paris";
        var specificData = country+"/"+city+".json";  
        try{
            let response = await fetch(
                API + specificData
            );
            responseJson =  await response.json();
        }   catch (error){
            console.error(error);
        }
        return responseJson;
    }

    getWeatherInfoFromAPIResponse(APIResponse){
        days = [];
        for(let i=0;i<3;i++){
            days[i] = APIResponse.forecast.simpleforecast.forecastday[i];
        }
        return days;
    }

    getDayInfoFromWeatherInfo(weatherInfo){
        dayInfo = [];
        for(let i=0;i<weatherInfo.length;i++){
            switch(i){
                case 0:
                    weatherInfo[i].date.weekday = "Aujourd'hui";
                    break;
                case 1:
                    weatherInfo[i].date.weekday = "Demain";
                    break;
                case 2:
                    weatherInfo[i].date.weekday = "Après-demain";
                    break;
                
            }

            weatherText = this.getConditionDayInfo(weatherInfo[i]);
            dayInfo[i] = {
                day: weatherInfo[i].date.weekday,
                infoText: weatherText,
                iconcode: weatherInfo[i].icon,
                tempText : weatherInfo[i].low.celsius + ' °C / ' + weatherInfo[i].high.celsius + ' °C',
                tempAvg : (parseInt(weatherInfo[i].low.celsius) + parseInt(weatherInfo[i].high.celsius)) / 2
            };
        }
        return dayInfo;
    }

    // Transform Condition info from API to get translation
    getConditionDayInfo(dayInfo){
        let origin = dayInfo.icon;
        for(key in iconConfigJSON){
            if(key == origin){
                return iconConfigJSON[key].translation;
            }
        }
    }

}

module.exports = APIHandler;
