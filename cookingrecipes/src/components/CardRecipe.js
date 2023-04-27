import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function CardRecipe({recipe,removeRecipe}){
    const { auth } = useSelector((state) => ({ ...state }));
    return(
     <div className="col-lg-3 col-md-6">
        <div className="card border-0 mb-5  bg-transparent text-center">
           <Link to={`/recipe-details/${recipe._id}`} ><img src={recipe.image} className="card-img-top shadow  rounded-circle  mx-auto d-block" alt="" style={{width:"200px" ,height:"200px"}}/></Link> 
           <div className="card-body">
            <h5 className="card-title fs-5">{recipe.title}</h5>
            <Link to={`/recipe-details/${recipe._id}`} className="btn btn-outline-dark px-3 mt-4 rounded-pill">Full Recipe</Link>
            {auth && <button type="button" className="btn btn-outline-dark px-3 mt-4 ms-3 rounded-pill" onClick={()=>removeRecipe(recipe._id)}>Delete</button>}
          </div>
        </div>
      </div>
    )    
}