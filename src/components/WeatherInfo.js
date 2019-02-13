import React, {Component} from 'react';

import WeatherComp from './WeatherComp';
import FormComp from './FormComp'

class WeatherInfo extends Component {
    constructor(props) {
        super();
        this.state = {
            weather: {},
            isLoading: true,
            location: 'Abuja',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };


    componentDidMount() {

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=imperial&id=2172797&appid=ade9e3bfdff2b199b9b172531e88bdd3`)
            .then(response => response.json())
            .then(resp => {
                this.setState({
                    weather: resp,
                    isLoading: false
                });
                console.log(this.state.weather)
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.componentDidMount()
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return (
            this.state.isLoading ?
                <h2>Loading... </h2>
                :
                <div>
                    <FormComp handleChange={this.handleChange} handleSubmit={this.handleSubmit} data={this.state}/>
                    <WeatherComp days={days} data={this.state}/>
                </div>
        );
    }
}

export default WeatherInfo;
