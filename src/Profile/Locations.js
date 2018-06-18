import React, { Component } from 'react'

class Locations extends Component {

    constructor(props){
        super(props)
        this.state = {
            locations: []
        }
    }

    //Fetch interests from interest table in Api belonging to the active user
    componentDidMount(){
        //Get active user
        let ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"))
        fetch(`http://localhost:8088/locations?userId=${ActiveUser.id}`)
        .then(r => r.json())
        .then(locations => {
            this.setState({
                locations: locations
            })
            console.log(this.state)
        })
    }

    render(){
        return(
            <div className="locations">
            <h4>Locations</h4>
                {this.state.locations.map(location => {
                   return <span key={location.id}>{location.location}, </span>
                })}
            </div>
        )
    }
}

export default Locations