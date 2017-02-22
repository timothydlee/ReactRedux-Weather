import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
	renderWeather(cityData) {
		const list = cityData.list;
		const name = cityData.city.name;
		const temps = list.map((weather) => weather.main.temp);
		const pressure = list.map((weather) => weather.main.pressure);
		const humidity = list.map((weather) => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={name}>
				<td>{name}</td>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps}	color="blue" units="&deg;F"/></td>
				<td><Chart data={pressure}	color="orange" units="hPa"/></td>
				<td><Chart data={humidity}	color="black" units="%"/></td>				
			</tr>
		);	
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Map</th>
						<th>Temp (&deg;F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		);
	}
}

//({ weather }) === (state) --> state.weather
function mapStateToProps({ weather }) {
	return { weather }; // { weather } === { weather: weather }
}

export default connect (mapStateToProps)(WeatherList);