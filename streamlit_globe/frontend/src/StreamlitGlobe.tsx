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
	const globeData = this.props.args["globeData"];
	const daytime = this.props.args["daytime"];
	if (typeof(globeData) === "object") {
		const parsedGlobeData = JSON.parse(JSON.stringify(globeData));
		
		let daytime_img = world_day;
		if (daytime === "night") {
			daytime_img = world_night;
		}
		console.log(daytime_img);
		return (
			<div id="globe">
				<Globe
					pointsData={parsedGlobeData}
					pointAltitude="size"
					pointColor="color"
					width={600}
					height={600}
					globeImageUrl={daytime_img}
					backgroundImageUrl={require('./assets/night-sky.png')}
				/>
			</div>
		);
	}
	return(<span>Error reading globe data. Data should be an array, but is '{typeof(globeData)}'.</span>);
  }
}

export default withStreamlitConnection(StreamlitGlobe)