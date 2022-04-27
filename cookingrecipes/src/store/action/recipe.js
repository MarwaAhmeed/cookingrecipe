import { axiosInstance } from "../../network/axios";



export const getRecipesList = () => (dispatch) => {
    axiosInstance
      .get("/recipe")
      .then((res) =>
        dispatch({
          type: "GET_RECIPES_LIST",
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  export const getRecipeDetails = (params) => (dispatch) => {
    console.log(params.id);
    axiosInstance
      .get(`/recipe/${params.id}`)
      .then((res) =>
        dispatch({
          type: "GET_RECIPES_DETAILS",
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  export const addNewRecipe = async (recipeData,token) =>
  await axiosInstance.post("/recipe", recipeData, {
    headers: {
      authorization:token ,
    },
  });

  export const editeRecipe = async (params,recipeData,token) =>
  await axiosInstance.patch(`/recipe/${params.id}`, recipeData, {
    headers: {
      authorization:token||"" ,
    },
  });
  
export const deletrecipe = async (id,token) =>
  await axiosInstance.delete(`/recipe/${id}`,{
    headers: {
      authorization: token ,
    },
  });