import React from "react";
import { useState } from "react";
import { DateTime } from 'luxon';


import Form from "./Form";
import Habit from "./Habit";
import Days from "./Days";
import ToggleBtn from "./ToggleBtn";
import Month from "./Month";

function createDates(){
    const dateList = [];
    for(let i = 0; i < DateTime.local().daysInMonth; i++ ){
        dateList.push(<li>{i + 1}</li>);
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
    <div>
      <Month />
      <Form setHabits={setHabits} habits={habits} />
      <hr />
      {habits.map((singleHabit) => (
        <Habit singleHabit={singleHabit} currentNumDays={currentNumDays} />
      ))}
      <Days days={days}/>
    </div>
  );
}

// main container component
