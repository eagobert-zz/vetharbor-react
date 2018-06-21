import React, { Component } from 'react'

class Locations extends Component {

    constructor(props){
        super(props)
        this.state = {
            locations: [],
            userHome: ''
        }
    }

    setUserLocation = () => {
        //Get active user
        let ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"))

        //fetch active users home location
        fetch(`http://localhost:8088/users/${ActiveUser.id}`)
        .then(r => r.json())
        .then(activeUser => {
            //console.log("active user", activeUser)
            this.setState({
                userHome: activeUser.city + ", " + activeUser.state
            })

            //fetch active user's locations of interest
            return fetch(`http://localhost:8088/locations?userId=${ActiveUser.id}`)
        })
        .then(r => r.json())
        .then(locations => {
            this.setState({
                locations: locations
            })
            console.log(this.state)
        })
    }
    //Fetch interests from interest table in Api belonging to the active user
    componentDidMount(){
        this.setUserLocation()
    }

    render(){
        return(
            <div className="locations">
                <h4>Locations</h4>
                <span>{this.state.userHome}, </span> 
                {this.state.locations.map(location => {
                   return <span key={location.id}>{location.location}, </span>
                })}
            </div>
        )
    }
}

export default Locations