import React, { Component } from 'react'

class Login extends Component {

    //Set initial state of a new user
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         email: "",
    //         password: ""
    //     }
    // }

    //function to manage changes to input field
    handleFieldChange = function (e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }.bind(this)

    //function to manage registration of user form
    handleLogin = function (e) {
        e.preventDefault()

        // Determine if a user already exists in API
        fetch(`http://localhost:8088/users?email=${this.state.email}`)
            .then(r => r.json())
            .then(user => {
                // If a user length exists. Set local storage, and show home view
                   
                if (user.length) {

                    this.props.setActiveUser(user[0].id)
                    this.props.showView("home")

                // If user doesn't exist in API
                } else {
                    
                    this.props.setActiveUser(null)
                    this.props.showView("register")

                }

            })
    }.bind(this)

render() {

    return (
        <form onSubmit={this.handleLogin}>

            <h1>Log-In</h1>

            {/* Input for email */}
            <label className="">Email: </label>
            <input className="" type="email" name="email" autoComplete="email" onChange={this.handleFieldChange}></input>

            <br />

            {/* Input for password */}
            <label className="">Password: </label>
            <input className="" type="password" name="password" autoComplete="new-password" onChange={this.handleFieldChange}></input>

            <br />

            {/* Submit Button */}
            <button className="" type="submit">Log In</button>

            <p>New to VETHarbor?</p>
            <h4><a href="">Register as a new user </a></h4>


        </form>
    )

}
}

export default Login