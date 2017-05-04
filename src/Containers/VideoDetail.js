import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from "../actions/index";
import { bindActionCreators } from 'redux';


//Make a container when you want a component
//That can change Redux data directly
class VideoDetail extends Component {

	constructor(props){
		super(props);
	}

	//APPLICATION AND COMPONENT STATE ARE SEPARATE
	render(){
		if(!this.props.activeVideo){
			return(
				<div> 
					<h3 style={{textAlign:"center"}}> {this.props.video[0].title} </h3>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe id="videoDetail" 
						className="embed-responsive-item" 
						src={this.props.video[0].url} 
						frameBorder="0" 
						allowFullScreen></iframe>
					</div>
				</div>
			);
		}

		console.log(this.props.activeVideo);
		return(

			<div> 
				<h3 style={{textAlign:"center"}}> {this.props.activeVideo.title} </h3>
				<div className="embed-responsive embed-responsive-16by9">
					<iframe id="videoDetail" 
					className="embed-responsive-item" 
					src={this.props.activeVideo.url} 
					frameBorder="0" 
					allowFullScreen></iframe>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		video: state.videos,
		activeVideo: state.activeVideo
	};

}

function mapDispatchToProps(dispatch) {
	//Whenever selectBook is called, the result
	//is passed to all of our reducers through bindActionCreators
	//passing selectBook function as props.selectBook
	return bindActionCreators({ selectVideo: selectVideo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);