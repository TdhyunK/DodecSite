import React, { Component } from 'react';

export default class HomePage extends Component {
	render(){
		return(
			<div> 
				<div id="left-container">
					<div className="row">
						<div className="col-xs-6">
							<img id="pic1" src={"../happy-people-friends.jpg"}> </img>
						</div>
						<div className="col-xs-6" id="dodecSymbol">
							DODECS BANNER
						</div>
					</div>
					<div className="row">
						<div className="col-xs-8">
							<iframe id="embedVideo" src="https://www.youtube.com/embed/bcdJgjNDsto?ecver=1" frameBorder="0" allowFullScreen></iframe>			
						</div>
						<div className="cols-xs-4">
							<h6> UPCOMING SHOWS: </h6>
							<ul>
								<li> 4/20/17 at Beta </li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
