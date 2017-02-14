import React, { Component } from 'react';
import './App.css';
import StudentList from './containers/StudentList';
import SearchBar from './containers/SearchBar';


class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <StudentList /> */}

				<SearchBar />

			</div>
		);
	}
}

export default App;
