import React from "react";

function RecipeView ({recipe, index, deleteRecipe}) {
   return (
   <tr key={index}>
       <td>{recipe.name}</td>
       <td>{recipe.cuisine}</td>
       <td><img alt={recipe.name} name={recipe} src={recipe.photo}/></td>
       <td className="content_td"><p>{recipe.ingredients}</p></td>
       <td className="content_td"><p>{recipe.preparation}</p></td>
       <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
   </tr>
   )
}

export default RecipeView;