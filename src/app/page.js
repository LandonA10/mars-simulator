"use client";

import React, { useEffect, useState } from "react";


export default function Simulator(){

  //states
  const [day, setDay] = useState(0);
  const [strength, setStrength] = useState(100);
  const [pressure, setPressure] = useState(Math.floor((Math.random() * 7) + 1));
  const [temperature, setTemperature] = useState(70)
  const [season, setSeason] = useState("Spring")
  const [radiation, setRadiation] = useState(0);

  let seasonChoose;
  //const array with different dome designs
  const biodome = [
    {
      id: 1, name: "Box Bio-Dome", strength: strength
    }
  ];

  //const object of conditions
  const conditions = {
    pressure: pressure,
    temperature: temperature,
    season: season,
    radiation: radiation
  };

  
  //useEffect here for funzies
  // useEffect(() =>{
  //   console.log("A day has passed");
  //   //code that runs
  //   return (() => {
  //     console.log("New Biome Strength", biodome[0].strength);
  //   })
  // }, [day]);
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
    console.log("updatedSterngth" , updatedStrength);
    
    createConditions();
    var damage = temperature / 4 + pressure + radiation;
    // console.log("init str", updatedStrength);
    while (updatedStrength > 0){
      newPressure = Math.floor((Math.random() * 8) + 1);
      // console.log("new pressure", newPressure);
      // updatedStrength -= (radiation + (temperature / 2) + (pressure / 2));
      updatedStrength -= damage;
      // console.log("Mathsss", radiation + (temperature / 2) + (pressure / 2));
      // console.log("updated stregnth", updatedStrength);
      days++;
    };

    if (updatedStrength <= 0){
      updatedStrength = 0;
    }
    // console.log("updated strength" , updatedStrength, "days", days);
    setStrength(updatedStrength);
    setDay(days);
    // console.log("strength" , strength);
  }

  function reset(){
    setDay(0);
    setStrength(100);
    seasonChoose = 0;
    damage = 0;
  }

  function createConditions(){

    
    seasonChoose = Math.floor(Math.random() * 4)
    // console.log("Whcih season", season);
    setRadiation((Math.random() * 5) + 1);
    console.log(seasonChoose == 0, seasonChoose == 1, seasonChoose == 2, seasonChoose == 3);
    let seasonvar = ""
    if (seasonChoose === 0 ){
      setTemperature((Math.random() * 70) + 10);
      setPressure((Math.random() * 2) + 5);
      setSeason("Spring");


      console.log("Conditions: Spring", temperature, pressure);
    }
    else if (seasonChoose === 1){
      setTemperature((Math.random() * 60) + 10);
      setPressure((Math.random() * 2) + 5);
      setSeason("Summer");


      console.log("Conditions: Summer", temperature, pressure);
    }
    else if (seasonChoose === 2){
      
      setTemperature((Math.random() * 70) + 10);
      setPressure((Math.random() * 1) + 5);
      setSeason("Fall");

      console.log("Conditions: Fall", temperature, pressure);
    }
    else {
      setTemperature((Math.random() * 70) + 30);
      setPressure((Math.random() * 1) + 5);
      setSeason("Winter");
      console.log("Conditions: Winter", temperature, pressure);
    }
    // setSeason("")
    // console.log(season);
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
        <p>The Dome lasted for {day} days</p>
        <p>Pressure: {conditions.pressure}</p>
        <p>Season: : {season}</p>
        <p>Temp: {temperature}</p>
        <p>Radi: {radiation}</p>
      </div>
    </>
  );
}



//use state updated state - day, useeffect is like side effects- damage to dome



