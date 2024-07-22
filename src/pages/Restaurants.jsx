import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import "../components/Restro.css";
import restaurantsData from "../data/restaurants";

const Restaurants = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [ratings, setRatings] = useState(0);
  const [Search, setSearch] = useState("");
  useEffect(() => {
    setRestaurants(
      restaurants.filter(
        (e) =>
          e.name.toLowerCase().includes(Search.toLowerCase()) &&
          e.reviews[0].rating >= ratings
      )
    );
    if (Search == "" && ratings == "") setRestaurants(restaurantsData);

    console.log(restaurants);
  }, [Search, ratings]);

  const totalPages = (restaurants.length + 1) % 4;
  const stars = (n) => {
    if (n == 1) return <img src="./star.png"></img>;
    if (n == 2)
      return (
        <>
          <img src="./star.png"></img>
          <img src="./star.png"></img>
        </>
      );
    if (n == 3)
      return (
        <>
          <img src="./star.png"></img>
          <img src="./star.png"></img>
          <img src="./star.png"></img>
        </>
      );
    if (n == 4)
      return (
        <>
          <img src="./star.png"></img>
          <img src="./star.png"></img>
          <img src="./star.png"></img>
          <img src="./star.png"></img>
        </>
      );

    if (n == 5)
      return (
        <>
          <img src="./star.png"></img>
          <img src="./star.png"></img>
          <img src="./star.png"></img>
          <img src="./star.png"></img>
          <img src="./star.png"></img>
        </>
      );
  };
  console.log(currentPage);
  return (
    <div className="restro-container">
      <h1>Restaurants at your service</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Searh by Food"
          value={Search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <label htmlFor="rating">
          Rating{" "}
          <input
            type="number"
            id="rating"
            placeholder="value"
            min={0}
            max={5}
            value={ratings}
            onChange={(e) => {
              setRatings(e.target.value);
            }}
          />
        </label>{" "}
      </div>
      <div className="restaurants">
        {restaurants.length == 0 && (
          <p style={{ color: "black" }}>No Data Available</p>
        )}
        {4 * (currentPage - 1) < restaurants.length && (
          <div className="res">
            <div
              style={{
                padding: "20px",
              }}
            >
              <p className="restro-name">
                {" "}
                {restaurants[4 * (currentPage - 1)].name}
              </p>
              <p className="restro-rating">
                {stars(restaurants[4 * (currentPage - 1)].reviews[0].rating)}
              </p>
            </div>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.7)",
                width: "100%",
                padding: "20px",
              }}
            >
              <p className="restro-address">
                <svg
                  fill="#ffffff"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 395.71 395.71"
                >
                  <g>
                    <path
                      d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                    />
                  </g>
                </svg>
                {restaurants[4 * (currentPage - 1)].address}
              </p>
              <p className="restro-cuisine">
                <svg
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="0 -3.84 122.88 122.88"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z" />
                  </g>
                </svg>
                {restaurants[4 * (currentPage - 1)].cuisine_type}
              </p>
            </div>
          </div>
        )}
        {4 * (currentPage - 1) + 1 < restaurants.length && (
          <div className="res">
            <div
              style={{
                padding: "20px",
              }}
            >
              <p className="restro-name">
                {" "}
                {restaurants[4 * (currentPage - 1) + 1].name}
              </p>
              <p className="restro-rating">
                {stars(
                  restaurants[4 * (currentPage - 1) + 1].reviews[0].rating
                )}
              </p>
            </div>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.7)",
                width: "100%",
                padding: "20px",
              }}
            >
              <p className="restro-address">
                <svg
                  fill="#ffffff"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 395.71 395.71"
                >
                  <g>
                    <path
                      d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                    />
                  </g>
                </svg>
                {restaurants[4 * (currentPage - 1) + 1].address}
              </p>
              <p className="restro-cuisine">
                <svg
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="0 -3.84 122.88 122.88"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z" />
                  </g>
                </svg>
                {restaurants[4 * (currentPage - 1) + 1].cuisine_type}
              </p>
            </div>
          </div>
        )}
        {4 * (currentPage - 1) + 2 < restaurants.length && (
          <div className="res">
            <div
              style={{
                padding: "20px",
              }}
            >
              <p className="restro-name">
                {" "}
                {restaurants[4 * (currentPage - 1) + 2].name}
              </p>
              <p className="restro-rating">
                {stars(
                  restaurants[4 * (currentPage - 1) + 2].reviews[0].rating
                )}
              </p>
            </div>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.7)",
                width: "100%",
                padding: "20px",
              }}
            >
              <p className="restro-address">
                <svg
                  fill="#ffffff"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 395.71 395.71"
                >
                  <g>
                    <path
                      d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                    />
                  </g>
                </svg>
                {restaurants[4 * (currentPage - 1) + 2].address}
              </p>
              <p className="restro-cuisine">
                <svg
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="0 -3.84 122.88 122.88"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z" />
                  </g>
                </svg>
                {restaurants[4 * (currentPage - 1) + 2].cuisine_type}
              </p>
            </div>
          </div>
        )}
        {4 * (currentPage - 1) + 3 < restaurants.length && (
          <div className="res">
            <div
              style={{
                padding: "20px",
              }}
            >
              <p className="restro-name">
                {" "}
                {restaurants[4 * (currentPage - 1) + 3].name}
              </p>
              <p className="restro-rating">
                {stars(
                  restaurants[4 * (currentPage - 1) + 3].reviews[0].rating
                )}
              </p>
            </div>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.7)",
                width: "100%",
                padding: "20px",
              }}
            >
              <p className="restro-address">
                <svg
                  fill="#ffffff"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 395.71 395.71"
                >
                  <g>
                    <path
                      d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                    />
                  </g>
                </svg>
                {restaurants[4 * (currentPage - 1) + 3].address}
              </p>
              <p className="restro-cuisine">
                <svg
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="0 -3.84 122.88 122.88"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z" />
                  </g>
                </svg>
                {restaurants[4 * (currentPage - 1) + 3].cuisine_type}
              </p>
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: "20px 0px" }}>
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Restaurants;
