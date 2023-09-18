import React from "react";
// import Head from "next/head";
import { useNewsContext } from "./Context/NewsContext";

export const LocalNewsPage = () => {
  const { cityInput, result, image } = useNewsContext();
  // const { cityInput, setCityInput, result, setResult } = useNewsContext();
  // console.log("7 LocalNewsPage: city, res", cityInput, result);

  return (
    <>
      <>
        <div className={"parent-div"}>
          <div className={"nav"}>
            <div className={"title"}>
              {cityInput ? (
                <a>{cityInput}</a>
              ) : (
                <a>Loading...</a>
              )}
            </div>
            <div className={"nav-element-container"}>
              <div className={"nav-element"}>Home</div>
              <div className={"nav-element"}>New</div>
              <div className={"nav-element"}>Popular</div>
              <div className={"nav-element"}>Trending</div>
              <div className={"nav-element"}>Categories</div>
            </div>
          </div>

          <div className={"image-container"}>
            <div className={"image-with-subtext"}>
              <div className={"blocks-image"}>
                <img
                  src={image}
                  alt="City image"
                  className={"limit-img-width"}
                />
              </div>

              <div className={"image-subtext"}>
                <div className={"catchy-title"}>A Vibrant Future in {cityInput}</div>
                <div className={"read-more-container"}>
                  <div className={"read-more-subtext"}>
                    {result && result[0].description}
                  </div>

                  <button className={"read-more-button"}>READ MORE</button>
                </div>
              </div>
            </div>

            <div className={"new-items"}>
              <div className={"new-items-header"}>New</div>

              <div className={"new-item"}>
                <h3 className={"bold-titles"}>
                  {result && result[1].title}
                </h3>
                <p> {result && result[1].description} </p>
              </div>

              <hr className={"hr-separator"} />

              <div className={"new-item"}>
                <h3 className={"bold-titles"}>
                  {result && result[2].title}
                </h3>
                <p> {result && result[2].description} </p>
              </div>

              <hr className={"hr-separator"} />

              <div className={"new-item"}>
                <h3 className={"bold-titles"}>
                  {result && result[3].title}
                </h3>
                <p> {result && result[3].description} </p>
              </div>
            </div>
          </div>

          <div className={"story-tiles"}>
            <div className={"story-tile"}>
              <div className={"story-number"}>Story 01</div>
              <h3 className={"bold-titles"}>
                  {result && result[4].title}
              </h3>
              {result && result[4].description}
            </div>
            <div className={"story-tile"}>
              <div className={"story-number"}>Story 02</div>
              <h3 className={"bold-titles"}>
                  {result && result[5].title}
              </h3>
              {result && result[5].description}
            </div>
            <div className={"story-tile"}>
              <div className={"story-number"}>Story 03</div>
              <h3 className={"bold-titles"}>
                  {result && result[6].title}
              </h3>
              {result && result[6].description}
            </div>
          </div>

          <hr className={"hr-separator"} />

          <div className={"attribution"}>
            Assets from
            <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>
            . Code by <a href="https://github.com/grafuj/local-news-GPT-react">grafuj</a>.
          </div>
        </div>
      </>
    </>
  );
};
