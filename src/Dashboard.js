import React, { Component } from 'react'
import City from './components/city'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: null,
            isLoaded: false,
            cityList: ['Honolulu', 'Seattle', 'Dublin']
        }
    }

    render() {

        const cityList = this.state.cityList;

        return (

            <div className="dashboard">
                {
                    cityList.map((item, index) =>
                        (<City
                            key={index}
                            cityName={item}
                        />)
                    )
                }
            </div>

        )

    }

}