const INITIAL_STATE ={
    recipesList:[],
    recipeDetails:{}
}
export default function recipes(state = INITIAL_STATE, action) {
    console.log(action.type);
    switch (action.type) {
      case "GET_RECIPES_LIST":
        return {
          ...state,
          recipesList: action.payload,
        };
      case "GET_RECIPES_DETAILS":
        return {
          ...state,
          recipeDetails: action.payload,
        };
      default:
        return state;
    }
  }
  