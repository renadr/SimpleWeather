import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, Image, TextInput, ActivityIndicator } from 'react-native';
import { key } from '../../key.js';

const APIBaseURL = "http://api.wunderground.com/api/";
const APIService = "/forecast/q/";
const API = APIBaseURL + key + APIService ;
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
            console.log(dayInfo);
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
            dayInfo[i] = {
                day: weatherInfo[i].date.weekday,
                type: weatherInfo[i].conditions,
                tempText : weatherInfo[i].low.celsius + ' °C / ' + weatherInfo[i].high.celsius + ' °C',
                tempAvg : (parseInt(weatherInfo[i].low.celsius) + parseInt(weatherInfo[i].high.celsius)) / 2
            };
        }
        return dayInfo;
    }

}

module.exports = APIHandler;
