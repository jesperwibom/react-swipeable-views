import React from 'react';
import {render} from 'react-dom';

import SwipeableViews from './SwipeableViews.jsx';

class ExampleApp extends React.Component {
	render(){
		return (
			<SwipeableViews query={"view"} index={1}>
				<div className="view">
					<h1>Left view</h1>
				</div>
				<div className="view">
					<h1>Middle view</h1>
				</div>
				<div className="view">
					<h1>Right view</h1>
				</div>
			</SwipeableViews>
		);
	}
}

render(<ExampleApp />, document.getElementById('app'));
