// import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { responseParser } from "./api/responseParser";
import { useNewsContext } from './Context/NewsContext';
import './index.css';



export const Lobby = () => {
  const { cityInput, setCityInput, result, setResult, image, setImage } = useNewsContext();
  // console.log("context contents9:", cityInput, setCityInput, result, setResult)
  const navigate = useNavigate();


  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   try {

  //     // const response = await fetch("/api/generateCity", {
  //     const response = await fetch("https://local-news-api.onrender.com", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ city: cityInput }),
  //     });
  //     console.log("line 22 response:", response);
  //     const data = await response.json();
  //     if (response.status !== 200) {
  //       throw data.error || new Error(`Request failed with status ${response.status}`);
  //     }
  //     console.log("data26:", data); //data is there
  //     console.log("parsed data27:", responseParser(data.result)); //data is correctly parsed

  //     setResult(responseParser(data.result)); // this line doesn't work
  //     /*
  //     setResult([
  //       {
  //         title: 'Paris Fashion Week Unveils Latest Trends',
  //         description: 'Get ready to be mesmerized by the world of fashion as Paris Fashion Week showcases the latest haute couture creations.'
  //       },
  //       {
  //         title: 'New Art Exhibition at the Louvre',
  //         description: 'Explore the artistic wonders of the Louvre Museum with a new and captivating exhibition that brings history to life.'
  //       },
  //       {
  //         title: 'Parisian Cuisine at Its Finest',
  //         description: 'Savor the exquisite flavors of Paris with the opening of a Michelin-starred restaurant that promises a gastronomic journey.'
  //       },
  //       {
  //         title: 'Celebrating Bastille Day in Style',
  //         description: 'Join the festive atmosphere as Parisians celebrate Bastille Day with fireworks, parades, and cultural events.'
  //       },
  //       {
  //         title: 'Seine River Cruises',
  //         description: "A Romantic Escape: Experience the romance of Paris by embarking on a scenic cruise along the Seine River, taking in the city's enchanting skyline."
  //       },
  //       {
  //         title: 'Parisian Arts and Culture',
  //         description: "Immerse yourself in Paris's rich cultural scene, from world-class art galleries to captivating theatrical performances."
  //       },
  //       {
  //         title: 'Exploring Montmartre',
  //         description: 'The Bohemian Heart of Paris: Take a stroll through Montmartre, the charming and artistic neighborhood known for its vibrant history and picturesque streets.'
  //       }
  //     ]);
  //     */
  //     // console.log("result30:", result);

  //     setTimeout(() => {  //this is an attempt at delaying setResult so that it eventually gets set or to find out if a later console.log is different
  //       // setResult(responseParser(data.result));
  //       console.log("result35:", result);
  //       window.location.reload();
  //       navigate("/News"); //checking if staying on the page for longer fixes the problem
  //     }, 1500);

  //     // router.push("/News");
  //   } catch (error) {
  //     console.error(error);
  //     alert(error.message);
  //   }
  // };



  const setParis = () => {
    setCityInput("Paris");
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
    setImage("/assets/images/paris.jpg");
  };

  const setLondon = () => {
    setCityInput("London");
    setResult([
      {
        title: 'London Fashion Week Extravaganza',
        description: 'Experience the glamour and creativity of London Fashion Week, where top designers showcase cutting-edge fashion trends.'
      },
      {
        title: 'British Museum: A Journey Through History',
        description: 'Explore the treasures of human history at the British Museum, home to an extensive collection of artifacts from around the world.'
      },
      {
        title: 'Fine Dining in London\'s Culinary Scene',
        description: 'Indulge your taste buds with the diverse culinary offerings of London, from Michelin-starred restaurants to street food markets.'
      },
      {
        title: 'Celebrating London\'s Rich Cultural Heritage',
        description: 'Immerse yourself in London\'s vibrant arts and culture scene, featuring world-class theaters, galleries, and music venues.'
      },
      {
        title: 'Cruising the Thames: London\'s Iconic River',
        description: 'Discover the beauty of London from the Thames River, where you can enjoy scenic cruises and stunning views of the city\'s landmarks.'
      },
      {
        title: 'Exploring the Historic Streets of Greenwich',
        description: 'Step back in time as you explore the historic streets of Greenwich, home to the Royal Observatory, Cutty Sark, and more.'
      },
      {
        title: 'London\'s Green Oasis: Hyde Park',
        description: 'Relax and unwind in the heart of London at Hyde Park, a vast green space offering recreational activities and serene natural beauty.'
      }
    ]);
    setImage("/assets/images/london.jpeg");
  };

  const setMadrid = () => {
    setCityInput("Madrid");
    setResult([
      {
        title: 'Madrid Fashion Scene: Where Style Meets Passion',
        description: 'Experience the vibrant fashion culture of Madrid, where passion and style collide on the runways and in the streets.'
      },
      {
        title: 'Prado Museum: Spain\'s Artistic Treasure Trove',
        description: 'Delve into the world of art at the Prado Museum, home to a remarkable collection of European masterpieces and Spanish art.'
      },
      {
        title: 'Gastronomic Delights of Madrid',
        description: 'Savor the rich and diverse flavors of Madrid, from traditional tapas bars to modern Michelin-starred restaurants.'
      },
      {
        title: 'Discovering Spanish Heritage in Madrid',
        description: 'Immerse yourself in Spain\'s heritage and history with visits to iconic landmarks like the Royal Palace and Plaza Mayor.'
      },
      {
        title: 'Retiro Park: Green Oasis in the Heart of Madrid',
        description: 'Relax in the lush beauty of Retiro Park, a tranquil retreat in the heart of Madrid offering boating, gardens, and more.'
      },
      {
        title: 'Nightlife in Madrid: A City that Never Sleeps',
        description: 'Experience the lively nightlife of Madrid, where the party goes on into the early hours at clubs, bars, and flamenco venues.'
      },
      {
        title: 'Exploring the Historic Streets of La Latina',
        description: 'Wander through the charming streets of La Latina, a historic neighborhood in Madrid known for its tapas, markets, and vibrant atmosphere.'
      }
    ]);
    setImage("/assets/images/madrid.jpeg");
  };


  return (
    <main className="parent-div">
      <div className="main">
        <img className="city-image" src="/assets/images/building-user-solid.svg" style={{ width: '60px' }} />
        <h3>Local News GPT</h3>
        <p>This is a static version of a local news site. The version with active API is finished developing but working on deployment.</p>
        <h3>Select a City</h3>
        {/* <form onSubmit={onSubmit} className="form"> */}
        <form className="form">
          {/* <input
            type="text"
            name="city"
            placeholder="Enter a city"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          /> */}
          {/* <Link to="/News"> */}
          {/* </Link> */}
          {/* <button type="submit" className="read-more-button" style={{ margin: 'auto' }}>Paris</button> */}
          <div className="button-row">
            <Link className="text-link" to="/News">
              <button onClick={setParis} className="read-more-button" style={{ margin: 'auto' }}>Paris</button>
            </Link>
            <Link className="text-link" to="/News">
              <button onClick={setLondon} className="read-more-button" style={{ margin: 'auto' }}>London</button>
            </Link>
            <Link className="text-link" to="/News">
              <button onClick={setMadrid} className="read-more-button" style={{ margin: 'auto' }}>Madrid</button>
            </Link>
          </div>
        </form>
      </div>
      <hr className={"hr-separator"} />
      <div className={"attribution"}>
        Code by <a href="https://github.com/grafuj/local-news-GPT-react/tree/static-pages">grafuj</a>.
      </div>
    </main>
  );
};
