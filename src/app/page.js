"use client";

import React, { useEffect, useState } from "react";


export default function Simulator(){

  //states
  const [day, setDay] = useState(0);
  const [strength, setStrength] = useState(10000);
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
    //2nd round bio dome, strength 15,000
  ];

  //const object of conditions
  const conditions = {
    pressure: pressure,
    temperature: temperature,
    season: season,
    radiation: radiation
  };
  
  function runSim(){

    var newPressure;
    var updatedStrength = strength;
    var days = 0;
    console.log("updatedSterngth" , updatedStrength);
    
    createConditions();
    var damage = temperature / 4 + pressure + radiation;
    while (updatedStrength > 0){
      newPressure = Math.floor((Math.random() * 8) + 1);

      updatedStrength -= damage;

      days++;
    };

    if (updatedStrength <= 0){
      updatedStrength = 0;
    }
    setStrength(updatedStrength);
    setDay(days);
  }

  function reset(){
    setDay(0);
    setStrength(10000);
    seasonChoose = 0;
    damage = 0;
  }

  function createConditions(){

    
    seasonChoose = Math.floor(Math.random() * 4)
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

}

  return (
    <>
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



