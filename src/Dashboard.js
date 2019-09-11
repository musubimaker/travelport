import React, { Component } from 'react'
import City from './components/city'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: null,
            groupBy: 'week',
            isLoaded: false
        }
    }

    render() {

        return (

            <div className="dashboard">
                <City />
            </div>

        )

    }

}