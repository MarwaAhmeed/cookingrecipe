export default function AddRecipeForm({
  handelFormChange,
  recipeFormErrors,
  handleFormSubmit,
  handleAddField,
  handleRemoveField,
  recipeForm,
}) {
  console.log(recipeForm, "innnnnndddddddd")
  return (
    <>
      <div className="card my-5 w-75 shadow">
        <div className="card-body">
          <h4 className="card-text mb-5 mt-3 ms-3 fw-lighter">Please fill up all fields to submit the recipe</h4>
          <form className="mt-2 mx-3" onSubmit={(e) => handleFormSubmit(e)}>
            <div className="input-group" controlid="formBasicTitle">
              <label htmlFor="title" className="form-label fs-5 fw-bold">Recipe Title</label>
              <input
                className="form-control p-2 w-100"
                id="title"
                type="text"
                placeholder="Enter Title"
                name="title"
                aria-describedby="title"
                value={recipeForm.title}
                onChange={(e) => handelFormChange(e)}
              />
            </div>
            <div id="title" className="text-danger form-text mb-3">
              {recipeFormErrors.title}
            </div>
            <div className="input-group" controlid="formBasicIngredient">
              <label htmlFor="ingredients" className="form-label fs-5 fw-bold">Ingredients:</label>
              <ul className="w-100">
                {recipeForm.ingredients.map((ingredient, index) => (
                  <li key={index} className="mb-2">
                    <input
                      className="form-control p-2"
                      name="ingredients"
                      id="ingredients"
                      placeholder="Enter Ingerdient"
                      aria-describedby="ingredients"
                      value={ingredient}
                      onChange={(e) => handelFormChange(e, index)}
                    />
                    <button type="button" className="btn btn-danger px-4" onClick={() => handleRemoveField('ingredients', index)}>
                      Remove Ingredient
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button type="button" className="btn btn-dark px-4" onClick={() => handleAddField('ingredients')}>
              Add Ingredient
            </button>
            <div id="ingredient" className="text-danger form-text mb-3">
              {recipeFormErrors.ingredients}
            </div>
            <div className="input-group" controlid="formBasicInstructions">
              <label htmlFor="instructions" className="form-label fs-5 fw-bold">Instructions:</label>
              <ol className="w-100">
                {recipeForm.instructions.map((instruction, index) => (
                  <li key={index} className="mb-2">
                    <textarea
                      className="form-control p-2 w-100"
                      name="instructions"
                      id="instructions"
                      placeholder="Enter instruction"
                      aria-describedby="instruction"
                      rows="1"
                      value={instruction}
                      onChange={(e) => handelFormChange(e, index)}
                    />
                    <button type="button" className="btn btn-danger px-4 " onClick={() => handleRemoveField('instructions', index)}>
                      Remove instruction
                    </button>
                  </li>
                ))}
              </ol>
            </div>
            <button type="button" className="btn btn-dark px-4" onClick={() => handleAddField('instructions')}>
              Add instruction
            </button>
            <div id="instructions" className="text-danger form-text  mb-3">
              {recipeFormErrors.instructions}
            </div>
            <div className="input-group" controlid="formBasicrecipe">
              <label htmlFor="image" className="form-label fs-5 fw-bold">Image url</label>
              <input
                className="form-control  p-2 w-100"
                type="text"
                id="image"
                placeholder="Image URL"
                name="image"
                aria-describedby="image"
                value={recipeForm.image}
                onChange={(e) => handelFormChange(e)}
              />
            </div>
            <div id="image" className="text-danger form-text mb-3">
              {recipeFormErrors.image}
            </div>
            <div className="" controlid="formBasicrecipe">
              <label htmlFor="recipeType" className="form-label fs-5 fw-bold">Recipe Type </label>
              <select value={recipeForm.recipeType}
                onChange={(e) => handelFormChange(e)}
                name="recipeType"
                className="btn btn-dark ms-md-3 px-4"
              >
                <option value={"Dinner"}>Dinner</option>
                <option value={"Breakfast"}>Breakfast</option>
                <option value={"Appetizers"}>Appetizers</option>

              </select>
            </div>
            <div id="recipeType" className="text-danger form-text mb-3">
              {recipeFormErrors.recipeType}
            </div>
            <div className="d-flex w-100 justify-content-center">
              <button
                disabled={
                  recipeFormErrors.title ||
                  recipeFormErrors.ingredients ||
                  recipeFormErrors.instructions ||
                  recipeFormErrors.image ||
                  !recipeForm.title ||
                  !recipeForm.ingredients ||
                  !recipeForm.image ||
                  !recipeForm.instructions
                }
                className="btn btn-dark m-3 px-4"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
