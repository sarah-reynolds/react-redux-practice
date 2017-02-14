import React, { Component } from 'react';
import FetchWeather from '../actions/FetchWeatherAction';
import FetchMovie from '../actions/FetchMovieAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			zipCode: '',
			movieSearch: ''
		}
		this.changeZipCode = this.changeZipCode.bind(this);
		this.getWeather = this.getWeather.bind(this);
		this.getMovie = this.getMovie.bind(this);
		this.changeMovie = this.changeMovie.bind(this)
	}

	getWeather(event){
		event.preventDefault()
		this.props.FetchWeather(this.state.zipCode)
	}

	getMovie(event){
		event.preventDefault()
		this.props.FetchMovie(this.state.movieSearch)
	}

	changeZipCode(event){
		this.setState({
			zipCode: event.target.value
		})
	}

	changeMovie(event){
		this.setState({
			movieSearch: event.target.value
		})
	}

	render() {
		console.log(this.props)
		var weatherData = "";
		var weatherData = this.props.weatherData.name
		var movieData = "";
		// var movieData = this.props.movieData.name

		return (
			<div>
				<form onSubmit={this.getWeather}>
					<input placeholder="Enter zip code" value={this.state.zipCode} onChange={this.changeZipCode} />
					<button type="submit" className="btn btn-primary">Get the weather</button>
				</form>
				{weatherData}
				{/* <WeatherData data={this.state.weatherData} */
				<form onSubmit={this.getMovie}>
					<input placeholder="Enter movie" value={this.state.movieSearch} onChange={this.changeMovie} />
					<button type="submit" className="btn btn-success">Get the movies</button>
				</form>
				{movieData}
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		weatherData: state.weather
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		FetchWeather:FetchWeather,
		FetchMovie:FetchMovie
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
