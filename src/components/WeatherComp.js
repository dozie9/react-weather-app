import React from 'react';

function WeatherComp(props) {
    let day = new Date(props.data.weather.dt * 1000);
    return (
        <main>

        <div className="weather">
            <h2 className={'weather-city'}>{props.data.weather.name}</h2>
            <div className={'weather-day'}>{props.days[day.getDay()].slice(0, 3)}</div>
            <div className={'weather-icon-single'}>
                <i className={`wi wi-owm-${props.data.weather.weather[0].id}`}></i>
            </div>
            <div className={'weather-temp'}>{props.data.weather.main.temp_max + ' / ' + props.data.weather.main.temp_min}</div>

        </div>
        </main>
    )
}

export default WeatherComp