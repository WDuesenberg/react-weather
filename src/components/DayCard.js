import React from 'react';
import { Col, Card, CardHeader, CardBody} from 'reactstrap';
import styled from 'styled-components';

const border = "2px solid green"
const DayWrapper = styled.article `
        .card {
            border: ${props => props.isActive ? "2px solid teal" : "1px solid blue"};
            text-align: center;
            margin-top: 15px; 
        }
        img {
            width: 55px;
            border: ${border}
        }
    }
    
`

const DayCard = props => {
    console.log(props);

    return (
        <Col onClick={props.setSelectedDay}>
        <DayWrapper isActive={props.isActive}>
            <Card>
                <CardHeader>{props.day}</CardHeader>
                <CardBody>
                    <h2>{props.current}</h2>
                    <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
                    <p><strong>High:</strong> {props.high}</p>
                    <p><strong>Low:</strong> {props.low}</p>
                </CardBody>
            </Card>
        </DayWrapper>
        </Col>
    )
}

export default DayCard;