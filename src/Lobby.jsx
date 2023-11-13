import { useNavigate, Link, json } from "react-router-dom";
import { responseParser } from "./api/responseParser";
import { useNewsContext } from './Context/NewsContext';
import './index.css';

export const Lobby = () => {
  const { cityInput, setCityInput, result, setResult, loading, setLoading } = useNewsContext();
  // console.log("context contents10:", cityInput, setCityInput, result, setResult)
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // const response = await fetch("http://localhost:5000/generateCity", { // local server
      const response = await fetch("https://local-news-api.onrender.com/generateCity", { // live render server
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city: cityInput }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      // console.log("data31:", data.result); //data is there
      // console.log("parsed data32:", responseParser(data.result)); //data is correctly parsed

      setResult(responseParser(data.result)); // this line doesn't work

      // console.log("result36:", result); //not set yet

      // setTimeout(() => {  //this is an attempt at delaying setResult so that it eventually gets set or to find out if a later console.log is different
      // setResult(responseParser(data.result));
      // console.log("result35:", result); // not set yet
      // window.location.reload();
      navigate("/News"); //checking if staying on the page for longer fixes the problem
      setLoading(false);
      // }, 500);

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
        <p>This site uses Open AI's open API to generate local news for any city you input.</p>
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
          {loading &&             <div className="loader"></div>} 
          {/* </Link> */}
        </form>
      </div>
      <hr className={"hr-separator"} />
      <div className={"attribution"}>
        Code by <a href="https://github.com/grafuj/local-news-GPT-react">grafuj</a>.
      </div>
    </main>
  );
};
