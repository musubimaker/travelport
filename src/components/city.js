import React, { Component } from 'react'
import Forecast from './forecast'

export default class City extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: null,
            isDetailView: false,
            isLoaded: false
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="cityOverview">
                    <h1>Honolulu</h1>
                    <div className="currentWeather">Current Weather</div>
                </section>
                <Forecast
                    isVisible={true}
                />
            </React.Fragment>

        )

    }

}