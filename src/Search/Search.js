import React, { Component } from 'react'
import Event from '../Events/Event'
import '../Search/Search.css'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchInput: "",
            searchResults: []
        }
    }

handleSearch = (evt) => {
    this.setState({
        searchInput: evt.target.value
    })

}

handleSubmit = (evt) => {
    evt.preventDefault();

    //create a fetch request from the eventbrite api.  use interpolation to input keyword from search
    fetch(`https://www.eventbriteapi.com/v3/events/search/?token=DSOBPDFILDDO4LF47MRJ&q="veteran", "recreational therapy","${this.state.searchInput}"`)
    .then(r => r.json())
    .then(results => {
        this.setState({
            searchResults: results.events
        })
        console.log(this.state)
    })

}


    render(){

        return(
        <div className="search">
            <div className="search-input">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleSearch}/>
                    <button>Enter</button>
                </form>
            </div>
            
            <div className="search-display">
            {this.state.searchResults.map(event => {
               return <li key={event.id}><Event event={event}/><button id={event.id}onClick={this.props.handleEventSave}>Save</button></li>
            })}
         
            </div>
        </div>);
        
    }
}

export default Search