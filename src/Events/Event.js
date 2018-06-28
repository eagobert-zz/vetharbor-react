import React, { Component } from 'react'

class Event extends Component {
    render(){
      
        return(
            <span>
                <div className="event-img">
                    {this.props.event.logo === null && <img src="http://placehold.it/175x175" alt="" />}

                    {this.props.event.logo !== null && <img src={this.props.event.logo.original.url} alt="" />}
                </div>
                <h4>{this.props.event.name.text}</h4>
                <p>{this.props.event.description.text}</p>
            </span>
            )
    }
}
export default Event