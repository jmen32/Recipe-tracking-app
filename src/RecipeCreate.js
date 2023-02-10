import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState})

  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData)
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange}></input>
            </td>
            <td>
              <input name="cuisine" type="text" placeholder="Cuisine" value={formData.cuisine} onChange={handleChange}></input>
            </td>
            <td>
              <input name="photo" type="url" placeholder="URL" value={formData.photo} onChange={handleChange}></input>
            </td>
            <td>
              <textarea name="ingredients" type="text" placeholder="Ingredients" rows="2" value={formData.ingredients} onChange={handleChange}></textarea>
            </td>
            <td>
              <textarea name="preparation" type="text" placeholder="Preparation" rows="2" onChange={handleChange} value={formData.preparation} required={true}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;