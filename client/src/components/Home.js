import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: -6.947997344476877, lng: 107.70346901054427}}
					height='600px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default Home;
