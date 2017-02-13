import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// React and redux to not know about each other. Separate libraries.
import { Provider } from 'react-redux';

// Get the createStore method from redux. We will use it to create a store and pass
// the store to all our reducers. That created store will go to the provider
import { createStore } from 'redux';

import reducers from './reducers/index'

const theStore = createStore(reducers);


// Wrap Provider (from react-redux) around components. This will allow theStore (the redux brain) will allow them to talk
ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
