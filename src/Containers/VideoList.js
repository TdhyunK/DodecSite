import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from "../actions/index";
import { bindActionCreators } from 'redux';

class VideoList extends Component{

	renderList(){
		return this.props.videos.map((video) => {
			return (
				<div>
					<li 
					key={video.title}
					onClick = {() => this.props.selectVideo(video)}
					className="list-group-item"> 
					{video.title} 
					<br> </br>
					<img width={"100%"} height={"100%"} src={video.thumbnail} />
					</li>
				</div>
			);
		});
	}

	render(){
		return(
			<div>
				<h3> PLAYLIST </h3>
				<ul id="videoList">
					{this.renderList()}
				</ul>
			</div>
		)
	}
}


//The glue between React and Redux
function mapStateToProps(state) {
	//Whatever is returned here will appear as props inside BookList 
	return{
		videos: state.videos
	};
}


//Anything returned from this function will end up 
//as props on the BookList container
//Different from mapStateToProps because this passes the function as a prop 
//into the reducer so all containers can use this function.
function mapDispatchToProps(dispatch) {
	//Whenever selectBook is called, the result
	//is passed to all of our reducers through bindActionCreators
	//passing selectBook function as props.selectBook
	return bindActionCreators({ selectVideo: selectVideo }, dispatch)
}

//When export containers, don't export the class
//Export the container
//Promote BookList from a component to a container
//Must know about the new dispatch method, selectBook.
//Makes it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);