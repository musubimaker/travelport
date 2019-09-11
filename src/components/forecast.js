import React, { Component } from 'react'

export default class Forecast extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cityName: props.cityName,
            forecast: null,
            apiUrl: "http://api.openweathermap.org/data/2.5/forecast?q=" + this.props.cityName + "&APPID=bd8326266ffeb1b662cf75fadf5dee2a&units=metric"
        }
    }

    componentDidMount() {

        fetch(this.state.apiUrl)
            .then(res => res.json())
            .then(
                (result) => {

                    // limit results to next three days
                    const fullForecast = result.list;
                    let nextThreeDays = fullForecast.slice(0, 3);

                    this.setState({
                        isLoaded: true,
                        forecast: nextThreeDays
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

    render() {

        console.log(this.state.forecast);

        const forecastList = this.state.forecast;

        return (
            <React.Fragment>
                {
                    this.state.forecast ?
                        <div className="cityForecast">

                            {
                                forecastList.map((item, index) =>
                                    (
                                        <div
                                            key={index}
                                            className="day"
                                        >
                                            {item.dt}
                                            <h3>{Math.ceil(item.main.temp)}&deg;C</h3>
                                            <p>{item.weather[0].description}</p>
                                        </div>)
                                )
                            }


                        </div>
                        :
                        ''

                }
            </React.Fragment>

        )

    }

}