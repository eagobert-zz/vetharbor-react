import React, { Component } from 'react'
import '../Navbar/Navbar.css'

class Navbar extends Component {

        //function to handle logout
        handleLogout = function(e) {
            e.preventDefault()
            this.props.showView("logout")
            localStorage.removeItem("ActiveUser")
        }.bind(this)

        handleEditProfile = function(e) {
            e.preventDefault()
            this.props.showView("profile")
        }.bind(this)

    render(){
        const UserName = this.props.activeUser.username
        return(
        <div className="navbar">
            <nav>
                <div>Hello {UserName} !</div>

                <button onClick={this.handleEditProfile}> Edit Profile </button>
                <button onClick={this.handleLogout}> Logout </button>
            </nav>
        </div>);
        
    }
}

export default Navbar