export default function AddRecipeForm({
  handelFormChange,
  recipeFormErrors,
  handleFormSubmit,
  recipeForm,
}) {
  return (
    <>
      <div className="card my-5 w-75 shadow">
        <div className="card-body">
          <h4 className="card-text mb-5 mt-3 ms-3">Please Fill up all Fields For Submit a Recipe</h4>
          <form className="mt-2 mx-3" onSubmit={(e) => handleFormSubmit(e)}>
            <div className="input-group " controlid="formBasicTitle">
            <label for="title" className="form-label fs-5">Recipe Title</label>
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
              {recipeFormErrors.titleErr}
            </div>
            <div className="input-group" controlid="formBasicIngredient">
            <label for="ingredient" className="form-label fs-5">Ingredient</label>
              <textarea
                className="form-control p-2 w-100"
                name="ingredient"
                id="ingredient"
                placeholder="Enter Ingerdient"
                aria-describedby="ingredient"
                rows="3"
                value={recipeForm.ingredient}
                onChange={(e) => handelFormChange(e)}
              />
            </div>
            <div id="ingredient" className="text-danger form-text mb-3">
              {recipeFormErrors.ingredientErr}
            </div>
            <div className="input-group" controlid="formBasicRecipe">
            <label for="recipe" className="form-label fs-5">Recipe</label>
              <textarea
                className="form-control p-2 w-100"
                name="recipe"
                aria-describedby="recipe"
                placeholder="Enter Recipe"
                rows="6"
                value={recipeForm.recipe}
                onChange={(e) => handelFormChange(e)}
              />
            </div>
            <div id="recipe" className="text-danger form-text  mb-3">
              {recipeFormErrors.recipeErr}
            </div>
            <div className="input-group" controlid="formBasicrecipe">
            <label for="image" className="form-label fs-5">Image url</label>
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
              {recipeFormErrors.imageErr}
            </div>
            <div className="d-flex w-100 justify-content-center">
              <button
                disabled={
                  recipeFormErrors.titleErr ||
                  recipeFormErrors.ingredientErr ||
                  recipeFormErrors.recipeErr ||
                  recipeFormErrors.imageErr||
                  !recipeForm.title||
                  !recipeForm.ingredient||
                  !recipeForm.image||
                  !recipeForm.recipe
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
