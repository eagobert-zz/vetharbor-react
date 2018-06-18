//Purpose:  Component to displa a list of user interests by authenticated user
import React, { Component } from 'react'

class Interests extends Component {

    constructor(props){
        super(props)
        this.state = {
            interests: []
        }
    }

    //Fetch interests from interest table in Api belonging to the active user
    componentDidMount(){
        //Get active user
        let ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"))
        fetch(`http://localhost:8088/interests?userId=${ActiveUser.id}`)
        .then(r => r.json())
        .then(interests => {
            this.setState({
                interests: interests
            })
            console.log(this.state)
        })
    }
    //Map through interests

    //Display results
    render(){
        return(
            <div className="interests">
                {this.state.interests.map(interest => {
                   return <span key={interest.id}>{interest.keyword}, </span>
                })}
            </div>
        )
    }
}

export default Interests