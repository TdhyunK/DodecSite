import React, { Component } from 'react';
import VideoDetail from "../Containers/VideoDetail.js";
import VideoList from "../Containers/VideoList.js";
import { connect } from 'react-redux';



export default class HomePage extends Component {

	render(){

		return(
			<div> 
				<div className="row">
					<div className="col-xs-9">
						<VideoDetail />
					</div>
					<div className="col-xs-3" id="videoList">
						<VideoList />
					</div>
				</div>
			</div>
		);
	}
}
