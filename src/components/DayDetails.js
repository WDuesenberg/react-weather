import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import styled from 'styled-components';

const border = "2px solid green"
const DayWrapper = styled.article`
        .card {
            border: ${props => props.isActive ? "2px solid teal" : "1px solid blue"};
            text-align: center; 
        }
        img {
            width: 55px;
            border: ${border}
        }
    }
    
`

const DayDetails = props => {

    return (
        <div>
            <Col onClick={props.setSelectedDay}>
                <DayWrapper isActive={props.isActive}>
                    <h2>Detailed Weather Info for {props.day}:</h2>
                    <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
                    <p><strong>High:</strong> {props.high}</p>
                    <p><strong>Low:</strong> {props.low}</p>
                    <p><strong>UV Index:</strong> {props.uvIndex}</p>
                    <p><strong>Wind Speed:</strong> {props.windSpeed}</p>
                    <p><strong>Wind Gust Speed:</strong> {props.windGust}</p>
                    <p><strong>Wind Direction:</strong> {props.windDir}</p>
                    <p><strong>Probability of Precipitation:</strong> {props.probPrecip}</p>
                    <p><strong>Humidity:</strong> {props.humidity}</p>
                </DayWrapper>
            </Col>
        </div>
    )
}

export default DayDetails;