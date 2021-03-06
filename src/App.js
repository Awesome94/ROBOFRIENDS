import React, { Component } from 'react'
import CardList from './cardList';
import SearchBox from './SearchBoxComponent';
import Scroll from "./ScrollComponent";
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            SearchField: ''
        };
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({robots: users }));
    };

    onSearchChange = (event) => {
        this.setState(
            {
                SearchField: event.target.value
            }
        )
        console.log(event.target.value);
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}
export default App;