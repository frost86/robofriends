import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            //These change in the app and will render()
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        //To update state of searchfield
        this.setState({searchfield: event.target.value})
    }

    render(){
        const{robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            /*This will return the robots (in lower case) if it matches
            the value in the search box (in lower case). The lower case
            function is used here because it's easier to compare what's
            written.*/
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        /*What if there are a lot of users and it's slow? Add IF statement to see 
        if there are robots.*/
        return !robots.length ? <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots ={filteredRobots}/>
                </Scroll>
            </div>
        );    
    }
}

export default App;