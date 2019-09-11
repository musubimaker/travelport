import React, { Component } from 'react'
import Day from './day';

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

        let forecastList = this.state.forecast;

        return (
            <React.Fragment>
                {
                    this.state.forecast ?
                        <div className="cityForecast">
                            {
                                forecastList.map((item, index) =>
                                    (
                                        <Day
                                            key={index}
                                            date={item.dt}
                                            temperature={item.main.temp}
                                            description={item.weather[0].description}
                                        />)
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