import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField, requestRobots } from '../actions';
//import { request } from 'http';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
        const {searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            /*This will return the robots (in lower case) if it matches
            the value in the search box (in lower case). The lower case
            function is used here because it's easier to compare what's
            written.*/
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        /*What if there are a lot of users and it's slow? Add IF statement to see 
        if there are robots.*/
        return isPending ? 
        <h1>Loading</h1> :
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