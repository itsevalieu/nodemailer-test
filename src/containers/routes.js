import React from "react";
import { Route, IndexRoute } from "react-router";

import Contact from "./Contact/Contact.jsx";

export default () => {
	return (
		<Route path="/" component={Contact}>
			<IndexRoute component={Contact} />
			<Route path="/contact" component={Contact} />
		</Route>
	);
};