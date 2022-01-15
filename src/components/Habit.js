import React from "react";

export default function Habit({ singleHabit, currentNumDays }) {
  console.log(singleHabit);

  return (
    <div>
      <h2>{singleHabit}</h2>
      <ul>{currentNumDays}</ul>
    </div>
  );
}
