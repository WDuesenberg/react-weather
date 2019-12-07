import React from 'react';
import { Col, Card, CardHeader, CardBody} from 'reactstrap';

const DayDetails = props => {

    return (
        <div>
            <h2>Detailed Weather Info for {props.day}:</h2>
            <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
            <p><strong>High:</strong> {props.high}</p>
            <p><strong>Low:</strong> {props.low}</p>
            <p><strong>Wind Speed:</strong> {props.windSpeed}</p>
            <p><strong>Wind Direction:</strong> {props.windDir}</p>
            <p><strong>Wind Gust Speed:</strong> {props.windGust}</p>

        </div>
    )
}

export default DayDetails;