import React from "react";
import { useState } from "react";

import Form from "./Form";
import Habit from "./Habit";
import Days from "./Days";
import ToggleBtn from "./ToggleBtn";
import Month from "./Month";

export default function Home() {
  const [habits, setHabits] = useState([]);
  const [currentNumDays, setCurrentNumDays] = useState("");

  return (
    <div>
      <Month />
      <Form setHabits={setHabits} habits={habits} />
      <hr />
      {habits.toString()}
      {habits.map((singleHabit) => (
        <Habit singleHabit={singleHabit} currentNumDays={currentNumDays} />
      ))}
      <Days />
      <ToggleBtn />
    </div>
  );
}

// main container component
