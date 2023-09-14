// import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { responseParser } from "./api/responseParser";
import { useNewsContext } from './Context/NewsContext';


export const Lobby = () => {
  const { cityInput, setCityInput, result, setResult } = useNewsContext();
  // console.log("context contents9:", cityInput, setCityInput, result, setResult)
  const navigate = useNavigate();

  const onSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/generateCity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city: cityInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("data26:", data); //data is there
      console.log("parsed data27:", responseParser(data.result)); //data is correctly parsed
      setResult(responseParser(data.result)); // this line doesn't work

      console.log("result30:", result);

      setTimeout(() => {  //this is an attempt at delaying setResult so that it eventually gets set or to find out if a later console.log is different
        // setResult(responseParser(data.result));
        console.log("result35:", result);
        navigate("/News"); //checking if staying on the page for longer fixes the problem
      }, 1500);

      // router.push("/News");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <main>
      <img src="/dog.png" />
      <h3>Enter a City</h3>
      <form onSubmit={onSubmit}>
      {/* <form onSubmit={() => onSubmit}> */}
        <input
          type="text"
          name="city"
          placeholder="Enter a city"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <Link to="/News">
        <button type="submit">Generate</button>
        </Link>
      </form>
      {/* <div className={styles.result}>lobby 51{result && result[0].title}</div> */}
      {/* <div className={styles.result}>{result && result[0].descriptions}</div> */}
    </main>
  );
};
