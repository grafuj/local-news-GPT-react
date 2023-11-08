// import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { responseParser } from "./api/responseParser";
import { useNewsContext } from './Context/NewsContext';
import './index.css';

export const Lobby = () => {
  const { cityInput, setCityInput, result, setResult } = useNewsContext();
  // console.log("context contents9:", cityInput, setCityInput, result, setResult)
  const navigate = useNavigate();


  const onSubmit = async (event) => {
    event.preventDefault();
    try {

      // const response = await fetch("/api/generateCity", {
      const response = await fetch("https://local-news-api.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city: cityInput }),
      });
      console.log("line 22 response:", response);
      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("data26:", data); //data is there
      console.log("parsed data27:", responseParser(data.result)); //data is correctly parsed

      setResult(responseParser(data.result)); // this line doesn't work
      // console.log("result30:", result);

      setTimeout(() => {  //this is an attempt at delaying setResult so that it eventually gets set or to find out if a later console.log is different
        // setResult(responseParser(data.result));
        console.log("result35:", result);
        window.location.reload();
        navigate("/News"); //checking if staying on the page for longer fixes the problem
      }, 1500);

      // router.push("/News");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <main className="parent-div">
      <div className="main">
        <img className="city-image" src="/assets/images/building-user-solid.svg" style={{ width: '60px' }} />
        <h3>Local News GPT</h3>
        <p>This is a static version of a local news site. The version with active API is finished developing but working on deployment.</p>
        <h3>Select a City</h3>
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="city"
            placeholder="Enter a city"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
          <Link to="/News">
            <button type="submit" className="read-more-button" style={{ margin: 'auto' }}>Generate</button>
          </Link>
        </form>
      </div>
      <hr className={"hr-separator"} />
      <div className={"attribution"}>
        Code by <a href="https://github.com/grafuj/local-news-GPT-react">grafuj</a>.
      </div>
    </main>
  );
};
