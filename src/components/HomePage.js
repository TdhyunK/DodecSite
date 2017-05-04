import React, { Component } from 'react';

export default class HomePage extends Component {
	render(){
		return(
			<div> 
				<div className="row">
					<div className="col-xs-6">
						<img id="pic1" src={"../happy-people-friends.jpg"}> </img>
					</div>
					<div className="col-xs-3" id="dodecSymbol">
						<img src={"../../img/DodecBanner2.png"}> </img>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-6">
						<iframe id="embedVideo" src="https://www.youtube.com/embed/bcdJgjNDsto?ecver=1" frameBorder="0" allowFullScreen></iframe>			
					</div>
					<div className="col-xs-3" id="UpcomingShows">
						<h4> UPCOMING SHOWS: </h4>
						<ul id="showList">
							<li> Transform Fashion Show 5/3 @ 7:30pm Collis Common Ground  </li>
							<li> Show w/ Sheba 5/3 @ 11:15pm Beta </li>
							<li> Artist Challenge 5/17 @ 7:00pm Dartmouth Hall Steps</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
