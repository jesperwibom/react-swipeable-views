import React from 'react';
import './style.scss';

// 1 get props
// 2 get list of divs
// 3 calculate total width
// 4 calculate center points

class SwipeableViews extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
			totalSize: {
				x: 0,
				y: 0
			},
			currentPosition: {
				x: 0,
				y: 0
			},
			centerPoints: []
		};
  }

	render(){
		return (
			<div>
				<h4>Before</h4>
				{this.props.children}
				<h4>After</h4>
			</div>
		);
	}
}

export default SwipeableViews;
