
import React, { Component } from 'react'
import '../Header/Header.css'
import Typography from '@material-ui/core/Typography'


class Header extends Component {
    render() {
        return (
            <div className="heading">
                <h3 id="header">
                    VETHarbor
                </h3>
                <h3 id="subheader">
                    therapeautic resources for Veterans. . .
                </h3>
            </div>
        )
    }
}

export default Header