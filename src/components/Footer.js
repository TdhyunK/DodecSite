import React from 'react';

export default (props) => {
	return(
		<footer className="text-center" id="footer">
	        <div className="footer-below">
	            <div className="container">
	                <div className="row">
	                <div className="col-xs-1">
	                		<img src={"../../img/social-1_logo-facebook.svg"} />
	                	</div>
	                	<div className="col-xs-1">
	                		<img src={"../../img/social-1_logo-instagram.svg"} />
	                	</div>
	                	<div className="col-xs-1">
	                		<img src={"../../img/social-1_logo-spotify.svg"} />
	                	</div>
	                    <div className="col-xs-6" id="footer-text">
	                        Copyright &copy; The Dartmouth Dodecaphonics 2017
	                    </div>
	                </div>
	              
	            </div>
	        </div>
	    </footer>
	);
}