import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesByType, getRecipesList } from "../store/action/recipe";
import CardRecipe from "../components/CardRecipe";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { deletrecipe } from "../store/action/recipe";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
export default function Recipes() {
  let recipes = useSelector((state) => state.recipes.recipesList);
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const params = useParams();  
  const removeRecipe = (id) => {
    console.log(id);
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await deletrecipe(id, auth.token || "");
              dispatch(getRecipesList());
            } catch (err) {
              if (err.response.status === 401) {
                navigate("/login");
                dispatch({
                  type: "LOGOUT",
                  payload: null,
                });
                window.localStorage.removeItem("auth");
              }
            }
          },
        },
        {
          label: "No",
          onClick: () => console.log("no"),
        },
      ],
    });
  };

  useEffect(() => {
    if (params.recipeType) {
      console.log(params.recipeType)
      dispatch(getRecipesByType(params))
    } else {
      console.log("no type")
      dispatch(getRecipesList());
    }
  }, [params.recipeType]);
  console.log(recipes,"recipesssss")
  return (
    <>
      <Header />
      <div className="container mt-5">
        {auth ? (
          <div className="d-flex justify-content-end">
              <Link
                className=" btn btn-dark  mb-5 me-5 text-decoration-none  mt-2 px-4 text-white"
                to={"/add-recipe"}
              >
                Add Recipe
              </Link>
          </div>
        ) : (
          <div className="d-flex justify-content-end">
       <Link
          className="btn btn-dark me-5 mb-5 text-decoration-none  mt-2 px-3 text-white"
          to={"/login"}
        >
          Login to Add
        </Link>
      </div>
       
       
        )}
        <div className="row mt-3">
          <h4 className="fw-bold text-uppercase m-5 ps-5">
            {params.recipeType? params.recipeType:"All Recipes"}
          </h4>
          {recipes.map((recipe) => {
            return (
              <CardRecipe
                recipe={recipe}
                removeRecipe={removeRecipe}
                key={recipe._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
