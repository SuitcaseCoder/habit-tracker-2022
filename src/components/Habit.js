import React from "react";
import { Col } from "react-bootstrap";
import ToggleBtn from "./ToggleBtn";



export default function Habit({ singleHabit, currentNumDays }) {
  console.log(singleHabit, currentNumDays);

  const createToggles = () => {
      console.log(currentNumDays);
    const toggleList = [];
    for(let i = 0; i <= currentNumDays; i++ ){
        toggleList.push(<li><ToggleBtn /></li>);
    }   
    return toggleList;
}

  return (
      <Col>
    <div>
      <h2>{singleHabit}</h2>
      <ul>
        {createToggles()}
    </ul>
    </div>
    </Col>
  );
}
