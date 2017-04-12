import React, { Component } from 'react';
import Header from './Header';
import Footer from "./Footer";

export default class HomePage extends Component {
	render(){
		return(
			<div> 
				<Header />
				<div id="left-container">
					<img id="pic1" src={"../happy-people-friends.jpg"}> </img>
					<iframe id="embedVideo" src="https://www.youtube.com/embed/bcdJgjNDsto?ecver=1" frameborder="0" allowfullscreen></iframe>				</div>
				<Footer />
			</div>
		);
	}
}
