import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor(){
        super()
        this.state = {
            //These change in the app and will render()
            robots: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots: users}));
    }

    render(){
        const{robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot => {
            /*This will return the robots (in lower case) if it matches
            the value in the search box (in lower case). The lower case
            function is used here because it's easier to compare what's
            written.*/
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        /*What if there are a lot of users and it's slow? Add IF statement to see 
        if there are robots.*/
        return !robots.length ? <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots ={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);