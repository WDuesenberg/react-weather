import React from 'react';
import { Col, Card, CardHeader, CardBody} from 'reactstrap';
import styled from 'styled-components';

const border = "2px ridge skyblue"
const DayWrapper = styled.article `
        .card {
            border: ${props => props.isActive ? "4px solid royalblue" : "3px outset cornflowerblue"};
            text-align: center;
            margin-top: 25px;
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 8px 24px 0 rgba(0, 0, 0, 0.19); 
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