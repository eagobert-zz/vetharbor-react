import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Profile from '../Profile/Profile'
import EventList from '../Events/EventList'
import Search from '../Search/Search'
import '../UserView/UserView.css'


class UserView extends Component{
    
    handleEventSave = (evt) => {
        console.log(evt.currentTarget.id)
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