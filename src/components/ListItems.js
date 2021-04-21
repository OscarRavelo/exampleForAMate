import React from "react";

const ListItems = ({clickRecipe, recipes}) => {
  return (
    
    <div>
    {recipes.map(recipe => (
      <button onClick={() =>clickRecipe(recipe.tag)} >{recipe.tag}</button>
    ))}
    </div>
  );
};

export default ListItems;