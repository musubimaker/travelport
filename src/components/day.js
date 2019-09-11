import React, { Component } from 'react'
import moment from 'moment'

export default class Day extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: props.date,
            temperature: props.temperature,
            description: props.description
        }
    }

    render() {

        var dateFormatted = moment(this.state.date).format('dddd D');

        return (
            <React.Fragment>
                <div
                    className="day"
                >
                    {dateFormatted}
                    <h1 className="tempForecast">{Math.ceil(this.state.temperature)}&deg;C</h1>
                    <p>{this.state.description}</p>
                </div>
            </React.Fragment>

        )

    }

}