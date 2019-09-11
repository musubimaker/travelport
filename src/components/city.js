import React, { Component } from 'react'
import Forecast from './forecast'

export default class City extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cityName: props.cityName,
            weather: null,
            isDetailView: false,
            isLoaded: false,
            apiUrl: "http://api.openweathermap.org/data/2.5/weather?q=" + this.props.cityName + "&APPID=bd8326266ffeb1b662cf75fadf5dee2a&units=metric"
        }

        this.toggleDetailView = this.toggleDetailView.bind(this)
    }

    componentDidMount() {

        fetch(this.state.apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        weather: result.main
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            )
    }

    toggleDetailView() {

        this.setState({
            isDetailView: (this.state.isDetailView ? false : true)
        });

    }

    render() {

        return (
            <React.Fragment>
                {
                    this.state.isLoaded ?

                        <section className="cityOverview"
                            onClick={this.toggleDetailView}
                        >
                            <h1>{this.state.cityName}</h1>
                            <div className="currentWeather">Current Weather</div>
                            <h2>{Math.ceil(this.state.weather.temp)}&deg;C</h2>

                            {
                                this.state.isDetailView
                                    ?
                                    <Forecast
                                        cityName={this.state.cityName}
                                    />
                                    :
                                    ''
                            }

                        </section>
                        :
                        <p>Loading</p>
                }
            </React.Fragment>

        )

    }

}