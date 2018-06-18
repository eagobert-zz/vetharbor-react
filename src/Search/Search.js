import React, { Component } from 'react'
import EventSearch from '../Events/EventSearch'
import '../Events/Events.css'

class Search extends Component {
    render(){

        return(
        <div className="search">
            <div className="search-input">
                <input type="text"/>
            </div>
            
            <div className="search-display">
                <EventSearch />
            </div>
        </div>);
        
    }
}

export default Search