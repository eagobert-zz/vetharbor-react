import React, { Component } from 'react'
import { Button, Card, CardActions, CardHeader, CardContent } from '@material-ui/core'

class Event extends Component {
    render() {

        return (
            <Card id="event-card">
                <CardHeader id="event-title" subheader={this.props.event.name.text}>
                </CardHeader>

                {this.props.event.logo === null && <div className="event-img"><img src="http://placehold.it/175x175" alt="" /></div>}

                {this.props.event.logo !== null && <div className="event-img"><img src={this.props.event.logo.original.url} alt="" /></div>}

                <CardContent id="event-description">
                    <p>{this.props.event.description.text}</p>
                </CardContent>
                <CardActions>
                    <Button variant="contained" id={this.props.event.id} onClick={this.props.handleEventSave} fullWidth>Save</Button>
                </CardActions>
            </Card>
        )
    }
}
export default Event