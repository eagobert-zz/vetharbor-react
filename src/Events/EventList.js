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
                    this.setState({
                        userEvents: events
                    })
                })
            })
            
        })

    }

    componentDidUpdate(nextState){
        if(this.state.userEvents !== nextState.userEvents){
            return true;
        }
    }

    //run the function in a component did mount
    componentDidMount(){
        console.log("component did mount")
        this.loadEvents()
    }

    render() {

        console.log("render called", this.state.userEvents)
        
        return (
            <div className="event-list">
            <h3>These are events</h3>
            {this.state.userEvents.map(ues => {
               return <h1 key={ues.id}>{ues.name.text}</h1>
            })}
            
            </div>
            );

    }
}

export default EventList