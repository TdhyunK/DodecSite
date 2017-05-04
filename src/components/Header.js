import React from 'react';
import { Link } from 'react-router';


export default (props) => {
	return(
		<div>
			<div className="container-fluid" id="banner">
				<Link to={"/"}> <img src={"../../img/DodecLogo.png"} /> </Link>
				<h3> ~ Dartmouth's oldest and premier acapella group ~ </h3>
			</div>

			<nav className="navbar navbar-default center" id="navbar">
			  <div className="container-fluid">
			    { /* <!-- Brand and toggle get grouped for better mobile display --> */ }
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			    </div>

			    { /* <!-- Collect the nav links, forms, and other content for toggling --> */ }
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				    <div className="navbar-inner">
				      <ul className="nav navbar-nav">
				        <li> <Link to="/"> Home </Link> </li>
				        <li className="dropdown">
				          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">~ About <span className="caret"></span></a>
				          <ul className="dropdown-menu">
				            <li><Link to="/biography">Biography</Link></li>
				            <li role="separator" className="divider"></li>
				            <li><Link to="/tours">Tours</Link></li>
				          </ul>
				        </li>
				        <li> <Link to="/members">~Members </Link> </li>
				        <li> <a href="#">~Audio </a> </li>
				        <li> <Link to="/video">~Video </Link> </li>
				        <li> <Link to="/donate">~Donate </Link> </li>
				        <li> <Link to="/contact">~Contact Us </Link> </li>
				      </ul>
				    </div> { /* <!-- /.navbar-collapse --> */ }
				  </div> { /* <!-- /.container-fluid --> */ }
			  </div>
			</nav>
		</div>
	);
}