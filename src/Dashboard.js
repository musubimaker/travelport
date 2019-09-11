import React, { Component } from 'react'

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
                <section className="cityOverview">
                    <h1>Honolulu</h1>
                    <div className="currentWeather">Current Weather</div>
                </section>
                <section className="cityOverview">
                    <h1>Seattle</h1>
                    <div className="currentWeather">Current Weather</div>
                </section>
                <section className="cityOverview">
                    <h1>Dublin</h1>
                    <div className="currentWeather">Current Weather</div>
                </section>
            </div>

        )

    }

}