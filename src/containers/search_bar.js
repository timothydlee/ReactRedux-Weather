import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = { term: '' };
	  this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e) {
		this.setState({ term: e.target.value });
	}

	onFormSubmit(e) {
		e.preventDefault();
		
		//We need to go and fetch weather data here
		this.props.fetchWeather(this.state.term)
		//After action creator is called, resets the state of term to empty string
		this.setState({ term: '' });
	}

	render() {
		return (
				<form onSubmit={ this.onFormSubmit } className='input-group'>
					<input 
						placeholder='Get a five-day forecast in your favorite cities'
						className='form-control'
						value={ this.state.term }
						onChange={ this.onInputChange }
					/>
					<span className='input-group-btn'>
						<button type='submit' className='btn btn-secondary'>Submit</button>
					</span>
				</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch)
}


//First argument null pertains to state (redux standardization) - since this component container does not concern itself with state, null is the argument
export default connect (null, mapDispatchToProps)(SearchBar);