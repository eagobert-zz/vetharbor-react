import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Profile from '../Profile/Profile'
import EventList from '../Events/EventList'
import Search from '../Search/Search'
import '../UserView/UserView.css'


class UserView extends Component{
    

    render(){
        return(
        <div className="user-view">

            <div className="navbar">
                <Navbar showView={this.props.showView}/>
            </div>

            <div className="display">
                <Profile />
                <Search />
                <EventList />
            </div>
           
        </div>)
    }
}

export default UserView