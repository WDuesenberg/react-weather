import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import styled from 'styled-components';

const border = "3.3px inset deepskyblue"
const DayWrapper = styled.article`
        .card {
            border: ${props => props.isActive ? "4px solid teal" : "5px outset mediumblue"};
            text-align: center;
            margin-top: 35px; 
            margin-bottom: 35px;
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 24px 0 rgba(0, 0, 0, 0.19);
        }
        img {
            width: 175px;
            border: ${border}
        }
    }
    
`

const DayDetails = props => {

    return (
        <div>
            <Col onClick={props.setSelectedDay}>
                <DayWrapper isActive={props.isActive}>
                    <Card>
                        <CardHeader><h2>Detailed Weather Info for {props.day}</h2></CardHeader>
                        <CardBody>
                            <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
                            <p><strong>High:</strong> {props.high}</p>
                            <p><strong>Low:</strong> {props.low}</p>
                            <p><strong>UV Index:</strong> {props.uvIndex}</p>
                            <p><strong>Wind Speed:</strong> {props.windSpeed}</p>
                            <p><strong>Wind Gust Speed:</strong> {props.windGust}</p>
                            <p><strong>Wind Direction:</strong> {props.windDir}</p>
                            <p><strong>Probability of Precipitation:</strong> {props.probPrecip}</p>
                            <p><strong>Humidity:</strong> {props.humidity}</p>
                            <p><strong>Snow:</strong> {props.snow}</p>
                            <p><strong>Snow Depth:</strong> {props.snowDepth}</p>
                        </CardBody>
                    </Card>
                </DayWrapper>
            </Col>
        </div>
    )
}

export default DayDetails;