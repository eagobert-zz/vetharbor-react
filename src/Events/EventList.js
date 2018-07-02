import React, { Component } from 'react'
import '../Events/Events.css'
import { Grid, Typography } from '@material-ui/core'

class EventList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userEvents: []
        }
    }

    //Create a function to load active user's saved events in api
    loadEvents = () => {
        const ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"))

        //Get active user's events from vetharbor.json
        fetch(`http://localhost:8088/events?userId=${ActiveUser.id}`)

            //convert get to json data
            .then(r => r.json())

            .then(allEvents => {
                let events = []
                //for each event tied to active user's id, loop thru and ...
                allEvents.forEach(event => {

                    //make a fetch request to eventbrite with the event's id
                    fetch(`https://www.eventbriteapi.com/v3/events/${event.id}/?token=DSOBPDFILDDO4LF47MRJ`)

                        //convert response to json
                        .then(r => r.json())

                        //return the data???
                        .then(ue => {
                            events.push(ue)
                            // this.userEvents = events
                            this.setState({
                                userEvents: events
                            })
                        })
                })
            })
    }

    //run the function in a component did mount
    componentDidMount() {
        console.log("component did mount")
        this.loadEvents()
    }

    render() {

        return (
            <Grid item className="event-list" xs={3}>
      
                  
                        <Typography>These are events</Typography>
                   
                   
                         {this.state.userEvents.map(ues => {
                                return <Typography key={ues.id}>{ues.name.text}</Typography>
                         })}
                   
    

            </Grid>
        );

    }
}

export default EventList