import React, { Component } from 'react'

export default class Forecast extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: null,
            isVisible: props.isVisible
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="cityForecast">
                    forecast goes here
                </section>
            </React.Fragment>

        )

    }

}