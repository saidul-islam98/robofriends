import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'



class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(response => {
			return response.json();
		})
		.then(users => {
			this.setState({ robots: users})
		})
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		//console.log(filteredBots)
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredBots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if(!robots.length){
			return <h1>Loading</h1>
		}
		else{
			return (
				<div className="tc">
					<h1> Bot Friends </h1>
					<SearchBox searchChange={ this.onSearchChange }/>
					<Scroll>
				 		<ErrorBoundary>
				 			<CardList robots={ filteredBots } />
				 		</ErrorBoundary>
				 	</Scroll>
				</div>	
			);
		}
	};
}

export default App;