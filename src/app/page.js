"use client";

import React, { useEffect, useState } from "react";


export default function Simulator(){

  //states
  const [day, setDay] = useState(0);
  const [strength, setStrength] = useState(80);
  const [pressure, setPressure] = useState(Math.floor((Math.random() * 8) + 1));
  //const array with different dome designs
  const biodome = [
    {id: 1, name: "Bio Dome", strength: strength}
  ];

  //const object of conditions
  const conditions = {
    pressure: pressure
  };

  
  //useEffect here for funzies
  useEffect(() =>{
    console.log("A day has passed");
    //code that runs
    return (() => {
      console.log("New Biome Strength", biodome[0].strength);
    })
  }, [day]);
   //what useeffect listens too 
  
   //Strength variable that is manipulated for strength of dome
  var newStrength;

  //increases day and changes strength depending on pressure 
  function increaseDay(){
    
    //increases day
    setDay(prevDay => prevDay + 1);
    
    //creates new strength
    newStrength = biodome[0].strength - conditions.pressure;

    //if strength goes below 0, sets strgth to 0 and returns
    if (newStrength <= 0){
      setStrength(0);
      return;
    }
    
    //otherwise, sets strgth
    setStrength(newStrength);
    
  }

  //decreases day and updates strght
  function decreaseDay(){

    //if day < 0, returns
    if (day <= 0){
      return;
    }

    //sets day
    setDay(prevDay => prevDay - 1);

    //rebuilds strgth
    newStrength = biodome[0].strength + conditions.pressure;
    
    //sets strgth
    setStrength(newStrength);
  }

  function runSim(){

    var newPressure;
    var updatedStrength = strength;
    var days = 0;

    console.log("init str", updatedStrength);
    while (updatedStrength > 0){
      newPressure = Math.floor((Math.random() * 8) + 1);
      console.log("new pressure", newPressure);
      updatedStrength = updatedStrength - newPressure;
      console.log("updated stregnth", updatedStrength);
      days++;
    };

    if (updatedStrength <= 0){
      updatedStrength = 0;
    }
    console.log("updated strength" , updatedStrength, "days", days);
    setStrength(updatedStrength);
    setDay(days);
    console.log("strength" , strength);
  }

  function reset(){
    setDay(0);
    setStrength(80);
  }
  return (
    <>
      {/* <button onClick={decreaseDay}>Remove Day</button>
      <span>{day}</span>
      <button onClick={increaseDay}>Add Day</button> */}

      
      <button onClick={runSim}>Start</button>
      <button onClick={reset}>Reset</button>
      <div className="domeStats">
        <p>Dome Name: {biodome[0].name}</p>
        <p>Dome Strength: {biodome[0].strength}</p> 
        
      </div>

      <div className="EnviromentDiv">
        <p>Day: {day}</p>
        <p>Pressure: {conditions.pressure}</p>
      </div>
    </>
  );
}


//use state updated state - day, useeffect is like side effects- damage to dome



