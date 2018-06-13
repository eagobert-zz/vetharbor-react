//Purpose:  Component to register a new user
import React, { Component } from 'react'
//import State from './States'

class Register extends Component {

    //Set initial state of a new user
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            city: "",
            state: "",
            email: "",
            password: ""
        }
    }

    //function to manage changes to input field
    handleFieldChange = function (e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }.bind(this)

    //function to manage registration of user form
    handleRegister = function (e) {
        e.preventDefault()

        // ??? Determine if a user already exists in API
        fetch(`http://localhost:8088/users?email=${this.state.email}`)
            .then(r => r.json())
            .then(user => {
                // If a user length exists. Set local storage, and show home view
                if (user.length) {
                    this.props.setActiveUser(user[0].id)
                    //this.props.showView("home")

                // If user doesn't exist in API
                } else {
                    // Create user in API
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: this.state.username,
                            city: this.state.city,
                            state: this.state.state,
                            email: this.state.email,
                            password: this.state.password
                        })
                    })

                        // Set local storage with newly created user's id and show home view
                        .then(newUser => {
                            this.props.setActiveUser(newUser.id)
                           // this.props.showView("home")
                        })
                }

            })
    }.bind(this)

render() {

    return (
        <form onSubmit={this.handleRegister}>

            {/* Input for userName */}
            <label className="">User Name: </label>
            <input className="" type="text" name="username" autoComplete="username" onChange={this.handleFieldChange}></input>

            <br />

            {/* Input for city */}
            <label className="">City: </label>
            <input className="" type="text" name="city" autoComplete="address-level2" onChange={this.handleFieldChange}></input>

            {/* Input for state */}
            <label className="">State: </label>
            <input className="" type="text" name="state" autoComplete="address-level1" onChange={this.handleFieldChange}></input>
            {/* <State /> */}

            <br />

            {/* Input for email */}
            <label className="">Email: </label>
            <input className="" type="email" name="email" autoComplete="email" onChange={this.handleFieldChange}></input>

            <br />

            {/* Input for password */}
            <label className="">Password: </label>
            <input className="" type="password" name="password" autoComplete="new-password" onChange={this.handleFieldChange}></input>

            <br />

            {/* Submit Button */}
            <button className="" type="submit">Register</button>

        </form>
    )

}
}

export default Register