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
    ingredient: "",
    recipe: "",
    image: "",
  });
  useEffect(() => {}, [recipeForm]);

  const [recipeFormErrors, setrecipeFormError] = useState({
    titleErr: null,
    ingredientErr: null,
    recipeErr: null,
    imageErr: null,
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
  const handelFormChange = (e) => {
    if (e.target.name === "ingredient") {
      setrecipeForm({
        ...recipeForm,
        ingredient: e.target.value,
      });
      setrecipeFormError({
        ...recipeFormErrors,
        ingredientErr:
          e.target.value.length === 0 ? "this filed is requird" : null,
      });
    } else if (e.target.name === "title") {
      setrecipeForm({
        ...recipeForm,
        title: e.target.value,
      });
      setrecipeFormError({
        ...recipeFormErrors,
        titleErr: e.target.value.length === 0 ? "this filed is requird" : null,
      });
    } else if (e.target.name === "recipe") {
      setrecipeForm({
        ...recipeForm,
        recipe: e.target.value,
      });
      setrecipeFormError({
        ...recipeFormErrors,
        recipeErr: e.target.value.length === 0 ? "this filed is requird" : null,
      });
    } else if (e.target.name === "image") {
      setrecipeForm({
        ...recipeForm,
        image: e.target.value,
      });
      setrecipeFormError({
        ...recipeFormErrors,
        imageErr: e.target.value.length === 0 ? "this filed is requird" : null,
      });
    }
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
            recipeFormErrors={recipeFormErrors}
          />
        </div>
      </div>
    </>
  );
}
