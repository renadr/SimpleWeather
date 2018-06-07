import React from 'react';
import { APIkey } from '../../key.js';
import iconConfigJSON from '../../icons.json';

const APIBaseURL = "http://api.wunderground.com/api/";
const APIService = "/forecast";
const API = APIBaseURL + APIkey + APIService ;
const APIAutoComplete = "http://autocomplete.wunderground.com/aq?query=";
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};
// export const APIManager = new APIHandler();

class APIHandler {  

    constructor() {
        this.country = "FR";
        this.city = "Paris";
        this.l = "/q/zmw:00000.45.07156";
      }
    
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
        // var country = "FR";
        // var city = "Paris";
        var specificData = this.l+".json";  
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
                tempAvg : (parseInt(weatherInfo[i].low.celsius) + parseInt(weatherInfo[i].high.celsius)) / 2,
                city : this.city,
                country: this.country
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

    async getCities(city) {
        try {
            allMatches = await this.getCitiesFromAPI(city);
            results = this.getImportantDataFromJson(allMatches);
        } catch(e){
            console.error(e);
        }
        return results;
    }

    async getCitiesFromAPI(city) {
        try{
            let response = await fetch(
                APIAutoComplete + city
                );
            responseJson =  await response.json();
        }   catch (error){
            console.error(error);
        }
        // console.log(responseJson);
        return responseJson;
    }

    getImportantDataFromJson(allMatches) {
        city = [];
        var j = 0;
        for(let i=0;i<allMatches.RESULTS.length;i++) {
             if(allMatches.RESULTS[i].type == "city") {
                city[j] = {
                    city: allMatches.RESULTS[i].name.split(",")[0],
                    name: allMatches.RESULTS[i].name,
                    country: allMatches.RESULTS[i].c,
                    l: allMatches.RESULTS[i].l,
                }
                j++;
            }
        }
        return city;
    }

    setCityAndCountry(city,country,l) {
        this.city = city;
        this.country = country;
        this.l = l;
    }

    getCity() {
        return this.city;
    }

}

module.exports = APIHandler;
