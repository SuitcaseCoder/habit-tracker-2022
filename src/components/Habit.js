import React from "react";
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
    <div>
      <h2>{singleHabit}</h2>
      <ul>
        {createToggles()}
    </ul>
    </div>
  );
}
