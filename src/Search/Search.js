import React, { Component } from 'react'
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
    //alert(`Your search for ${this.state.searchInput} has been submitted`)

 //create a fetch request from the eventbrite api.  use interpolation to input keyword from search
    fetch(`https://www.eventbriteapi.com/v3/events/search/?token=DSOBPDFILDDO4LF47MRJ&q="veteran", "recreational therapy","${this.state.searchInput}"`)
    .then(r => r.json())
    .then(results => {
        this.setState({
            searchResults: results.events
        })
        console.log(this.state)
    })
 //convert data to json

 //return display results in render below

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
               return <li key={event.id}>{event.name.text}</li>
            })}
         
            </div>
        </div>);
        
    }
}

export default Search