import { useEffect, useState } from "react";
import AddRecipeForm from "../components/AddRecipeForm";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { addNewRecipe } from "../store/action/recipe";
import { useNavigate } from "react-router-dom";

export default function AddRecipe({ history }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const [recipeForm, setrecipeForm] = useState({
    title: "",
    recipeType:"Dinner",
    ingredients: [],
    instructions: [],
    image: "",
  });
  useEffect(() => { }, [recipeForm]);

  const [recipeFormErrors, setrecipeFormError] = useState({
    title: null,
    recipeType:null,
    ingredients: null,
    instructions: null,
    image: null,
  });
  const handleFormSubmit = async (e) => {
    console.log("in form submit");
    e.preventDefault();
    console.log(recipeForm, auth.token);
    try {
      await addNewRecipe(recipeForm, auth.token);
      toast.success("Success");
      navigate("/");
    } catch (err) {
      if (err.response.status === 401) {
        navigate("/login");
        dispatch({
          type: "LOGOUT",
          payload: null,
        });
        window.localStorage.removeItem("auth");
        console.log(err.response.status);
      }
      toast.error(err.response.data);
    }
  };
  const handleAddField = (name) => {
    setrecipeForm((prevState) => ({
      ...prevState,
      [name]: [...prevState[name], ''],
    }));
  }
  const handleRemoveField = (name, index) => {
    recipeForm[name].splice(index,1)
    console.log(recipeForm)
    setrecipeForm({...recipeForm})
 }
  const handelFormChange = (e,index=null) => {
    // if (e.target.name === "ingredients") {
    //   setrecipeForm({
    //     ...recipeForm,
    //     ingredients: e.target.value,
    //   });
    //   setrecipeFormError({
    //     ...recipeFormErrors,
    //     ingredientsErr:
    //       e.target.value.length === 0 ? "this filed is requird" : null,
    //   });
    // } else if (e.target.name === "title") {
    //   setrecipeForm({
    //     ...recipeForm,
    //     title: e.target.value,
    //   });
    //   setrecipeFormError({
    //     ...recipeFormErrors,
    //     titleErr: e.target.value.length === 0 ? "this filed is requird" : null,
    //   });
    // } else if (e.target.name === "instructions") {
    //   setrecipeForm({
    //     ...recipeForm,
    //     recipe: e.target.value,
    //   });
    //   setrecipeFormError({
    //     ...recipeFormErrors,
    //     recipeErr: e.target.value.length === 0 ? "this filed is requird" : null,
    //   });
    // } else if (e.target.name === "image") {
    //   setrecipeForm({
    //     ...recipeForm,
    //     image: e.target.value,
    //   });
    //   setrecipeFormError({
    //     ...recipeFormErrors,
    //     imageErr: e.target.value.length === 0 ? "this filed is requird" : null,
    //   });
    // }
    const { name, value } = e.target;
    const newRecipeData = { ...recipeForm };
    const newRecipeDataErrors = { ...recipeFormErrors };
    // Update the recipeData object

    if (index !== null) {
      newRecipeData[name][index] = value;
    } else {
      newRecipeData[name] = value;
    }

    // Validate the input field
    if (value.trim() === '') {
      newRecipeDataErrors[name] = `Please enter a ${name}.`;
    } else {
      newRecipeDataErrors[name] = null;
    }
    setrecipeForm(newRecipeData)
    setrecipeFormError(newRecipeDataErrors)
    console.log(newRecipeData)
  };
  return (
    <>
      <header className="text-center position-relative">
        <img
          src="https://gico.io/spcica/images/background/10.jpg"
          alt=""
          style={{ width: "100%" }}
        />
        <div className="header-content2 text-white py-lg-3 px-lg-3 pb-5 px-3">
          <h2 className="text-white text-center fw-light fst-italic">
            -Add Recipe -
          </h2>
        </div>
      </header>
      <ToastContainer position="top-center" />
      <div className="container">
        <div className="row d-flex flex-column align-content-center">
          <AddRecipeForm
            handelFormChange={handelFormChange}
            handleFormSubmit={handleFormSubmit}
            recipeForm={recipeForm}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
            recipeFormErrors={recipeFormErrors}
          />
        </div>
      </div>
    </>
  );
}
