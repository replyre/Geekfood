import axios from "axios";
import React, { useState } from "react";
import "../components/Food.css";
import RecipeTile from "../components/RecipeTile";
const Food = () => {
  const [recipeQuery, setRecipeQuery] = React.useState(""); // for searching of ingredients, dishes etc.
  const [Recipes, setRecipes] = React.useState([]); // getting the recipes of searched item
  const [loading, setLoading] = useState(false);
  useState(() => {
    getRecipes();
  }, []);

  // API  setting calling
  // EDAMAM api is used to build this project
  // to use the API,
  // 1)  user has to Login then select Recipe Search Api
  // 2)  under Developer section, click on Get Started
  // 3)  go to your dashboard then Application and click on View button
  // 4)  get the APP ID and APP Key and replace here
  // API URL
  // functon to fetch data from API
  async function getRecipes() {
    setLoading(true);
    await axios
      .get(
        `https://api.edamam.com/search?q=${recipeQuery}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`
      )
      .then((res) => setRecipes(res.data.hits))
      .catch((err) => console.error(err));

    setLoading(false);
  }
  //   console.log(Recipes);
  return (
    <div style={{ paddingTop: "100px", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="search"
          className="searchRecipe"
          placeholder="Enter recipe name"
          onChange={(e) => setRecipeQuery(e.target.value)}
        />
        <button onClick={() => getRecipes()}>Search</button>
      </div>
      {!loading && (
        <>
          <div className="recipes_Container">
            {Recipes.map((recipe, index) => {
              return <RecipeTile recipe={recipe} index={index} key={index} />;
            })}
          </div>
        </>
      )}
      {/* {console.log(loading)} */}
      {loading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 150"
          style={{ marginTop: "100px", transform: "scale(0.5)" }}
        >
          <path
            fill="none"
            stroke="blue"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="300 385"
            stroke-dashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
          >
            <animate
              attributeName="stroke-dashoffset"
              calcMode="spline"
              dur="2"
              values="685;-685"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animate>
          </path>
        </svg>
      )}
    </div>
  );
};

export default Food;
