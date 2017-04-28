import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./App.jsx";
import Contact from "./Contact.jsx";

export default () => {
	return (
		<Route path="/" component={App}>
			<IndexRoute component={Contact} />
			<Route path="/send" component={Contact} />
		</Route>
	);
};