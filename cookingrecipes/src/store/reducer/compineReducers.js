import { combineReducers } from "redux";
import authReducer from "./auth";
import recipes from "./recipe";
export default combineReducers({
    auth:authReducer,
    recipes:recipes
});