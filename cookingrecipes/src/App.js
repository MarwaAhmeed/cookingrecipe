import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import Login from "./pages/Login";
import ReciceeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";

function App() {
  return (
  
<BrowserRouter>
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Recipes/>}  />
    <Route exact path='/recipe-details/:id' element={<ReciceeDetails/>}  />
    <Route exact path='/login' element={<Login/>}  />
    <Route exact path='/add-recipe' element={<AddRecipe/>}  />
    <Route exact path='/edit-recipe/:id' element={<EditRecipe/>}  />
  </Routes>
</BrowserRouter>
  );
}
export default App;
