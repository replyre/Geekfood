import React from "react";
import "./recipeTile.css";
import IngredientModel from "./IngredientModal";
// import IngredientModel from "./IngredientModel";

const RecipeTile = ({ recipe, index }) => {
  const [showIngredients, setShowIngredients] = React.useState(false);
  const [ingredientIndex, setIngredientIndex] = React.useState(-1);

  // displaying recipes tiles
  return (
    <div className="recipe_tile">
      <img src={recipe["recipe"].image} alt={recipe["recipe"]["label"]} />
      <p>{recipe["recipe"]["label"]}</p>
      {showIngredients && ingredientIndex === index ? (
        <IngredientModel
          recipe={recipe.recipe}
          setShowIngredients={setShowIngredients}
        />
      ) : (
        ""
      )}
      <div className="buttons">
        {/* button to display ingredients */}
        <button
          variant="contained"
          style={{ backgroundColor: "tomato" }}
          onClick={() => {
            setShowIngredients(true);
            setIngredientIndex(index);
          }}
        >
          Ingredients
        </button>
      </div>
    </div>
  );
};

export default RecipeTile;
