import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "./components/app.js";
import HomePage from "./components/HomePage.js";
import Members from "./components/Members.js";
import Biography from "./components/Biography.js";
import Tours from "./components/Tours.js";
import ContactUs from "./components/ContactUs.js";
import Donate from "./components/Donate.js";
import Video from "./components/Video.js";

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/members" component={Members} />
		<Route path="/biography" component={Biography} />
		<Route path="/tours" component={Tours} />
		<Route path="/contact" component={ContactUs} />
		<Route path="/donate" component={Donate} />
		<Route path="/video" component={Video} />
	</Route>
);