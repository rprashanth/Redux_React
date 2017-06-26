import  React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Maps from '../components/maps'


class WeatherList extends React.Component{
	renderWeather(cityData){
		const name = cityData.city.name
		const temps = cityData.list.map(weather => weather.main.temp)
		const pressure = cityData.list.map(weather => weather.main.pressure)
		const humidity = cityData.list.map(weather => weather.main.humidity)
		const { lat, lon } = cityData.city.coord;
		console.log(lat, lon)
		return(
				<tr key={name}>
					<td><Maps latitude={lat} longitude={lon} /></td>
					<td>
						<Chart data={temps} color="green" units="K" />
					</td>
					<td>
						<Chart data={pressure} color="blue" units="P"/>
					</td>
					<td>
						<Chart data={humidity} color="red" units="%"/>
					</td>
				</tr>
			)
	}
	render(){
		return(
				<table className="table table-hover">
					<thead>
						<tr>
							<th>city</th>
							<th>Temperatute (K)</th>
							<th>Pressure (P)</th>
							<th>Humidity (%)</th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			)
	}
}

function mapStateToProps({ weather }){
	return { weather } // same as doing weather: weather ES6
}

export default connect(mapStateToProps)(WeatherList)