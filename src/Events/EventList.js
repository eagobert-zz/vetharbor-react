import React, { Component } from 'react'
import '../Events/Events.css'

class EventList extends Component {

    constructor(props){
        super(props)
        this.state = {
            userEvents: []
        }
    }

    //Create a function to load active user's saved events in api
    loadEvents = () => {

        //Get active user's events from vetharbor.json
        
        //Loop thru the events and for each event

        //Then make a get request to eventbrite

        //Set state of user events

    }
    

    //run the function in a component did mount
    componentDidMount(){
        this.loadEvents()
    }

    render() {

        return (
            <div className="event-list">
                
            </div>
            );

    }
}

export default EventList