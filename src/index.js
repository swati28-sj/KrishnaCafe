import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createClient, Provider } from "urql";
import CartStateProvider from "./store/Store";

const client = createClient({
	url: "http://localhost/graphql",
});

ReactDOM.render(
	<Provider value={client}>
		<CartStateProvider>
			<App />
		</CartStateProvider>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
