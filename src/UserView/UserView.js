import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Profile from '../Profile/Profile'
import EventList from '../Events/EventList'
import Search from '../Search/Search'
import '../UserView/UserView.css'
import { Grid } from '@material-ui/core'


class UserView extends Component{
    constructor(props){
        super(props)
        this.state = {
            eventId: '',
            ActiveUser: JSON.parse(localStorage.getItem("ActiveUser"))
        }
    }
    
    
    handleEventSave = (evt) => {

        //fetch events and post user's saved events
        fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: (evt.currentTarget.id),
                userId: this.state.ActiveUser.id
            })
        })
        .then(r => r.json())
        .then(event => {
            this.setState({
                eventId: event.id
            })
        })

        console.log("event target id", evt.currentTarget.id)
    }

    render(){
        return(
        <Grid container className="user-view" spacing={40} direction="row">
                <Grid item xs={12}>
                    <Navbar showView={this.props.showView}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid className="main-display" container spacing={16}>
                        <Grid id="profile" item xs={2}>
                            <Profile key={this.state.ActiveUser.id}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Search handleEventSave={this.handleEventSave}/>
                        </Grid>
                        <Grid item xs={3}>
                            <EventList key={this.state.eventId}/>
                        </Grid>
                    
                    </Grid>
                </Grid>
   
    
        </Grid>
        )
    }
}

export default UserView