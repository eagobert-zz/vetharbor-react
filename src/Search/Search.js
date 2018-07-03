import React, { Component } from 'react'
import Event from '../Events/Event'
import '../Search/Search.css'
import { Grid, Button } from '@material-ui/core'

class Search extends Component {
    constructor(props) {
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
    componentDidMount() {
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


    render() {

        return (
            <Grid item id="search">
                <Grid container direction="column">
                        <form onSubmit={this.handleSubmit}>
                    <Grid container id="search-input" direction="column" spacing={8} justify="center">
                            <Grid item xs={10}>
                                <input type="text" placeholder="Search for events here..." onChange={this.handleSearch} />
                            </Grid>
                            <Grid id="button" item xs={10}>
                                <Button id="search-button" variant="contained">Enter</Button>
                            </Grid>
                    </Grid>
                        </form>

                    <Grid item id="search-display">
                        <Grid container spacing={16} justify="space-around" wrap="wrap">
                            {this.state.searchResults.length === 0 &&
                                this.state.onLoadSearchResults.map(event => {
                                    return <Grid item xs={4} key={event.id}><Event event={event} handleEventSave={this.props.handleEventSave}/>
                                    {/* <button id={event.id} onClick={this.props.handleEventSave}>Save</button> */}
                                    </Grid>
                                })}

                            {this.state.searchResults.length > 0 &&
                                this.state.searchResults.map(event => {
                                    return <Grid item xs={4} key={event.id}><Event event={event} handleEventSave={this.props.handleEventSave}/>
                                    {/* <button id={event.id} onClick={this.props.handleEventSave}>Save</button> */}
                                    </Grid>
                                })
                            }
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>);

    }
}

export default Search