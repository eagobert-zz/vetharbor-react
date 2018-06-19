import React, { Component } from 'react'

class Event extends Component {
    render(){
        return(
            <span>
                <div className="event-img">
                    <img src={this.props.event.logo.original.url} alt="" />
                </div>
                <h4>{this.props.event.name.text}</h4>
                <p>{this.props.event.description.text}</p>
            </span>
            )
    }
}
export default Event