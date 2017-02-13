// The master reducer doesn't manade any state on its own.
// It manages the reducers. The reducers manage state, the master
// reducer manages the reducers. Export all reducers as an object
// using "combineReduecers". And each property we export, will be
// available as state.PROPERTY

// First we need combineReducers from redux
import { combineReducers } from 'redux';
// bring in the reducer (module) that manages students
import StudentReducer from './StudentReducer';

const rootReducer = combineReducers({
	// each key/property in this object, will be availebl on the redux
	students: StudentReducer
});

export default rootReducer;