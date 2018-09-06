import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import googleMapCity from '../components/google_map';

class WeatherList extends Component {
    renderWeather (cityData){
        const name = cityData.city.name;
        //const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273);
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><googleMapCity lon = {lon} lat = {lat} /></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="green" units="hpa" /></td>
                <td><Chart data={humidities} color="blue" units="%" /></td>
            </tr>
        );
    }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hpa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}    
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    //const weather = state.weather;
    return {weather};
    //return {weather:weather}; before ES6
}

export default connect(mapStateToProps)(WeatherList);
 