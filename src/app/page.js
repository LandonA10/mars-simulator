"use client";

import React, { useEffect, useState } from "react";


export default function Simulator(){

  //vars
  let domeStrength = 10000;
  let seasonChoose;

  //states
  const [day, setDay] = useState(0);
  const [strength, setStrength] = useState(domeStrength);
  const [pressure, setPressure] = useState(Math.floor((Math.random() * 7) + 1));
  const [temperature, setTemperature] = useState(70)
  const [season, setSeason] = useState("Spring")
  const [radiation, setRadiation] = useState(0);

  
  //const array with different dome designs
  const biodome = [
    {
      id: 1, name: "Box Bio-Dome", strength: strength
    }
    //2nd round bio dome, strength 15,000
  ];

  //const object of conditions
  const conditions = {
    pressure: pressure,
    temperature: temperature,
    season: season,
    radiation: radiation
  };
  
  //main simulator function
  function runSim(){

    //vars for updated states
    var updatedStrength = strength;
    var days = 0;
    
    //calls createConditions function to create new weather conditions
    createConditions();
    var damage = temperature / 4 + pressure + radiation;

    //while loop until strength is below 0
    while (updatedStrength > 0){

      //updates strength and days
      updatedStrength -= damage;
      days++;

    };

    //if strenght is less than 0, sets it to 0 
    if (updatedStrength <= 0){

      updatedStrength = 0;

    }

    //sets new values to states
    setStrength(updatedStrength);
    setDay(days);

  }

  //resets everything back 
  function reset(){

    setDay(0);
    setStrength(domeStrength);

    seasonChoose = 0;
    damage = 0;

  }

  //createConditions function to create random conditions
  function createConditions(){

    //chooses random season
    seasonChoose = Math.floor(Math.random() * 4) // set 0 for spring, 1 for summer, 2 for fall, 3 for winter
    setRadiation((Math.random() * 5) + 1); //random radiation

    //conditional statements to check which season has been chosen
    if (seasonChoose === 0 ){

      //sets new conditions to states
      setTemperature((Math.random() * 70) + 10);
      setPressure((Math.random() * 2) + 5);
      setSeason("Spring");

    }
    else if (seasonChoose === 1){

      setTemperature((Math.random() * 60) + 10);
      setPressure((Math.random() * 2) + 5);
      setSeason("Summer");

    }
    else if (seasonChoose === 2){
      
      setTemperature((Math.random() * 70) + 10);
      setPressure((Math.random() * 1) + 5);
      setSeason("Fall");

    }
    else {

      setTemperature((Math.random() * 70) + 30);
      setPressure((Math.random() * 1) + 5);
      setSeason("Winter");

    }

}
  //html for webpage
  return (
    <>
      {/* buttons to start and reset sim */}
      <button onClick={runSim}>Start</button>
      <button onClick={reset}>Reset</button>

      {/* div with dome stats */}
      <div className="domeStats">

        <p>Dome Name: {biodome[0].name}</p>
        <p>Dome Strength: {biodome[0].strength}</p> 
        
      </div>

      {/* div with final stats from sim for funzies */}
      <div className="EnviromentDiv">

        <p>Day: {day}</p>
        <p>The Dome lasted for {day} days</p>
        <p>Pressure: {conditions.pressure}</p>
        <p>Season: {season}</p>
        <p>Temp: {temperature}</p>
        <p>Radi: {radiation}</p>

      </div>
    </>
  );
}



