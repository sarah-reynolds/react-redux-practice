// 1. Provider (react-redux
// 2. createStore (redux)
// 3. reducers to pass to createStore (./reducer) (rootReducer)
// 4. make a rootReducer to import other reducers
// 5. make a single reducer to import into rootReducer(4)
// 6. create the store (2) with the reducer (3)
// 7. wrap the Provider with store prop around App


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// React and redux to not know about each other. Separate libraries.
import { Provider } from 'react-redux';

// Get the createStore method from redux. We will use it to create a store and pass
// the store to all our reducers. That created store will go to the provider
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import reduxPromise from 'redux-promise';

// const theStore = createStore(reducers);
const theStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)


// Wrap Provider (from react-redux) around components. This will allow theStore (the redux brain) will allow them to talk
ReactDOM.render(
	<Provider store={theStoreWithMiddleware(reducers)}>
		<App />
	</Provider>,
	document.getElementById('root')
);
