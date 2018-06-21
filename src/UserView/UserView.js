import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Profile from '../Profile/Profile'
import EventList from '../Events/EventList'
import Search from '../Search/Search'
import '../UserView/UserView.css'


class UserView extends Component{
    
    handleEventSave = (evt) => {
        const ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"))

        //fetch events and post user's saved events
        fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: (evt.currentTarget.id),
                userId: ActiveUser.id
            })
        })

        console.log("event target id", evt.currentTarget.id)
    }

    render(){
        return(
        <div className="user-view">

                <Navbar showView={this.props.showView}/>

            <div className="display">
                <Profile />
                <Search handleEventSave={this.handleEventSave}/>
                <EventList />
            </div>
           
        </div>
        )
    }
}

export default UserView