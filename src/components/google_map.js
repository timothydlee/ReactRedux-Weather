import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: { 
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		//this.refs.map will point to this element
		return <div ref="map" />
	}
}

export default GoogleMap;