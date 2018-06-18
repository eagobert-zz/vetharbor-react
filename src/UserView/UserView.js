import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Profile from '../Profile/Profile'
import Events from '../Events/EventList'
import Search from '../Search/Search'

class UserView extends Component{
    

    render(){
        return(
        <div>
            <Navbar showView={this.props.showView}/>
            <Profile />
            <Events />
            <Search />
        </div>)
    }
}

export default UserView