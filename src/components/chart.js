import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
	function average(data) {
		return _.round(_.sum(data)/data.length)
	}

	return (
		<div>
			<Sparklines svgHeight={150} svgWidth={300} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
				<SparklinesSpots />
				<div> { average(props.data) } {props.units}</div>
			</Sparklines>
		</div>
	)
}