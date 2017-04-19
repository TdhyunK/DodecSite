import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "./components/app.js";
import HomePage from "./components/HomePage.js";
import Members from "./components/Members.js";

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/members" component={Members} />
	</Route>
);