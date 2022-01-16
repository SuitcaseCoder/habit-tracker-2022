import React from "react";
import { useState } from "react";
import { DateTime } from 'luxon';
import { Container, Row, Col } from "react-bootstrap";


import Form from "./Form";
import Habit from "./Habit";
import Days from "./Days";
import ToggleBtn from "./ToggleBtn";
import Month from "./Month";

function createDates(){
    const dateList = [];
    for(let i = 0; i < DateTime.local().daysInMonth; i++ ){
        dateList.push(<li key={i}>{i + 1}</li>);
    }   
    return dateList;
}


export default function Home() {
  const [habits, setHabits] = useState([]);
  const [currentNumDays, setCurrentNumDays] = useState(DateTime.local().daysInMonth);
  const [days, setDays] = useState(createDates());
  console.log("days: ",days);
  console.log("numDays: ", currentNumDays);


  return (
      <Container>
        <Row>
    {/* <div> */}
            {DateTime.local().weekYear}
            <Month />
        </Row>
        <Row>
            <Form setHabits={setHabits} habits={habits} />
            <hr />
        </Row>
        <Row>
            <Col xs md lg="2">
                <Days days={days}/>
            </Col>

      {habits.map((singleHabit) => (
            <Col>
                <Habit singleHabit={singleHabit} currentNumDays={currentNumDays} />
            </Col>
      ))}

      </Row>
    {/* </div> */}
    </Container>
  );
}

// main container component
