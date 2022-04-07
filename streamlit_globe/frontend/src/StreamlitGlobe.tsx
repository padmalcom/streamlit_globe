import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import Globe from 'react-globe.gl'
import React, { ReactNode } from "react"

import world_day from './assets/earth-day2.jpg';
import world_night from './assets/earth-night.jpg'

class StreamlitGlobe extends StreamlitComponentBase {
	 
  public render = (): ReactNode => {
	  
	// parameters
	const pointsData = this.props.args["pointsData"];
	const labelsData = this.props.args["labelsData"];
	const daytime = this.props.args["daytime"];
	const width = this.props.args["width"];
	const height = this.props.args["height"];
	
	if ((pointsData === undefined) && (labelsData === undefined)) {
		return(<span>Please provide either 'pointsData' or 'labelsData' as argument.</span>);
	}
	
	let parsedPointsData: Array<object> = [];
	if (pointsData !== undefined) {
		parsedPointsData = JSON.parse(JSON.stringify(pointsData));
	}
	
	let parsedLabelsData: Array<object> = [];
	if (labelsData !== undefined) {
		parsedLabelsData = JSON.parse(JSON.stringify(labelsData));
	}

	let daytime_img = world_day;
	if (daytime === "night") {
		daytime_img = world_night;
	}
	console.log(daytime_img);
	return (
		<div id="globe">
			<Globe
				pointsData={parsedPointsData}
				labelsData={parsedLabelsData}
				pointAltitude="size"
				pointColor="color"
				width={width}
				height={height}
				globeImageUrl={daytime_img}
				backgroundImageUrl={require('./assets/night-sky.png')}
			/>
		</div>
	);
	
  }
}

export default withStreamlitConnection(StreamlitGlobe)