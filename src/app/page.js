"use client";

import React, { useEffect, useState } from "react";


export default function Simulator(){


  const [day, setDay] = useState(0);
  const [strength, setStrength] = useState(80);
  const biodome = [
    {id: 1, name: "Bio Dome", strength: strength}
  ];
  const conditions = {
    pressure: Math.floor((Math.random() * 8) + 1)
  };

  
  
  useEffect(() =>{
    // console.log(biodome[0].strength, "pressure: ", conditions.pressure, "newStrength" , newStrength);
    // console.log("newStrength" , newStrength)
    console.log("A day has passed");
    //code that runs
    return (() => {
      console.log("New Biome Strength", biodome[0].strength);
    })
  }, [day]);
   //what useeffect listens too 
  
  var newStrength;
  function increaseDay(){
    
    setDay(prevDay => prevDay + 1);
    
    newStrength = biodome[0].strength - conditions.pressure;
    // if (newStrength <= 0){
    //   this.newStrength = 0;
      
    // } trying to set newStrength to 0 when it goes into negative value!
    setStrength(biodome[0].strength = newStrength);
    
  }
  function decreaseDay(){
    if (day <= 0){
      return;
    }
    setDay(prevDay => prevDay - 1);
    newStrength = biodome[0].strength + conditions.pressure;
    setStrength(biodome[0].strength = newStrength);
  }

  return (
    <>
      <button onClick={decreaseDay}>Remove Day</button>
      <span>{day}</span>
      <button onClick={increaseDay}>Add Day</button>

      <div className="domeStats">
        <p>{biodome[0].strength}</p>
      </div>
    </>
  );
}


//use state updated state - day, useeffect is like side effects- damage to dome



