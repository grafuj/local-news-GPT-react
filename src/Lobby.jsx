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
      /*
      const response = await fetch("/api/generateCity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city: cityInput }),
      });
      console.log("line 22 response:", response)
      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("data26:", data); //data is there
      console.log("parsed data27:", responseParser(data.result)); //data is correctly parsed
      */
      // setResult(responseParser(data.result)); // this line doesn't work

      setResult([
        {
          title: 'Paris Fashion Week Unveils Latest Trends',
          description: 'Get ready to be mesmerized by the world of fashion as Paris Fashion Week showcases the latest haute couture creations.'
        },
        {
          title: 'New Art Exhibition at the Louvre',
          description: 'Explore the artistic wonders of the Louvre Museum with a new and captivating exhibition that brings history to life.'
        },
        {
          title: 'Parisian Cuisine at Its Finest',
          description: 'Savor the exquisite flavors of Paris with the opening of a Michelin-starred restaurant that promises a gastronomic journey.'
        },
        {
          title: 'Celebrating Bastille Day in Style',
          description: 'Join the festive atmosphere as Parisians celebrate Bastille Day with fireworks, parades, and cultural events.'
        },
        {
          title: 'Seine River Cruises',
          description: "A Romantic Escape: Experience the romance of Paris by embarking on a scenic cruise along the Seine River, taking in the city's enchanting skyline."
        },
        {
          title: 'Parisian Arts and Culture',
          description: "Immerse yourself in Paris's rich cultural scene, from world-class art galleries to captivating theatrical performances."
        },
        {
          title: 'Exploring Montmartre',
          description: 'The Bohemian Heart of Paris: Take a stroll through Montmartre, the charming and artistic neighborhood known for its vibrant history and picturesque streets.'
        }
      ]);

      // console.log("result30:", result);

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
  };

  return (
    <main className="parent-div">
      <div className="main">
        <img className="city-image" src="/assets/images/building-user-solid.svg" style={{ width: '60px' }} />
        <h3>Local News GPT</h3>
        <h3>Enter a City</h3>
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="city"
            placeholder="Enter a city"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
          {/* <Link to="/News"> */}
          <button type="submit" className="read-more-button" style={{ margin: 'auto' }}>Generate</button>
          {/* </Link> */}
        </form>
        {/* <div className={styles.result}>lobby 51{result && result[0].title}</div> */}
        {/* <div className={styles.result}>{result && result[0].descriptions}</div> */}
      </div>
      <hr className={"hr-separator"} />

      <div className={"attribution"}>
        Code by <a href="https://github.com/grafuj/news-homepage">grafuj</a>.
      </div>
    </main>
  );
};
