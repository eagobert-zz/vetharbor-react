import React, { Component } from 'react'
import '../Navbar/Navbar.css'

class Navbar extends Component {
    render(){
        const UserName = this.props.activeUser.username
        return(
        <div className="navbar">
            <nav>
                <div>Hello {UserName} !</div>
                <button type="submit"> Logout </button>
            </nav>
        </div>);
        
    }
}

export default Navbar