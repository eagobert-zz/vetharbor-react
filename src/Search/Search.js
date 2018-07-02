import React, { Component } from 'react'
import Event from '../Events/Event'
import '../Search/Search.css'
import { Grid } from '@material-ui/core'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchInput: "",
            searchResults: [],
            onLoadSearchResults: [],
            userCity: ""
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
    fetch(`https://www.eventbriteapi.com/v3/events/search/?token=DSOBPDFILDDO4LF47MRJ&q="veteran", "therapy","${this.state.searchInput}"`)
    .then(r => r.json())
    .then(results => {
        this.setState({
            searchResults: results.events
        })
        console.log(this.state)
    })

}

//on load fetch search from eventbrite based on user's location
componentDidMount(){
    //get active user
    const ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"))

    //fetch user's home location from vetharbor api
    fetch(`http://localhost:8088/users/${ActiveUser.id}`)
    .then(r => r.json())
    .then(user => {
        this.setState({
            userCity: user.city
        })
        return fetch(`https://www.eventbriteapi.com/v3/events/search/?location.address=${this.state.userCity}&token=DSOBPDFILDDO4LF47MRJ&q="veterans","therapy"`)
    })
    .then(r => r.json())
    .then(results => {
        this.setState({
            onLoadSearchResults: results.top_match_events
        })
    })
}


    render(){

        return(
        <Grid item>
            <Grid className="search" container direction="column">
                    <Grid item className="search-input">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" onChange={this.handleSearch} />
                            <button>Enter</button>
                        </form>
                    </Grid>

                    <Grid item className="search-display">

                        {this.state.searchResults.length === 0 &&
                            this.state.onLoadSearchResults.map(event => {
                                return <li key={event.id}><Event event={event} /><button id={event.id} onClick={this.props.handleEventSave}>Save</button></li>
                            })}

                        {this.state.searchResults.length > 0 &&
                            this.state.searchResults.map(event => {
                                return <li key={event.id}><Event event={event} /><button id={event.id} onClick={this.props.handleEventSave}>Save</button></li>
                            })
                        }
                    </Grid>
            </Grid>
        </Grid>);
        
    }
}

export default Search