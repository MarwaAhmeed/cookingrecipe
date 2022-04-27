import React, { useEffect} from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getRecipeDetails } from "../store/action/recipe";
import CardRecipe from "../components/CardRecipe";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { deletrecipe } from "../store/action/recipe";

export default function ReciceeDetails() {
  let recipeDetails=useSelector((state)=>state.recipes.recipeDetails);  
  const { auth } = useSelector((state) => ({ ...state }));
  const params = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();


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
              navigate("/")
            
            } catch (err) {
              console.log(err.response);
              if (err.response.status === 401) {
                navigate("/login");
                dispatch({
                  type: "LOGOUT",
                  payload: null,
                });
                window.localStorage.removeItem("auth");
                console.log(err.response.status);
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
    dispatch(getRecipeDetails(params))
  }, []);

  return (
    <>
            <header className="text-center position-relative">
                 <img
        //   src="https://cdn.pixabay.com/photo/2017/10/16/09/01/hamburger-2856548_1280.jpg"
        //  src="https://www.pexels.com/@roman-odintsov/"
        src="https://gico.io/spcica/images/background/12.png"
        // src="https://gico.io/spcica/images/background/14.jpg"
          alt=""
          style={{width:"100%"}}
        />
        </header>
<div className="container my-2" >
{auth&& 
<div className="d-flex justify-content-end my-5">
<Link className=" btn btn-dark  text-decoration-none mt-2 me-2 px-3 text-white" to={`/edit-recipe/${params.id}`}>Edit Recipe</Link>
<button type="button" className="btn btn-dark mt-2 px-3  " onClick={()=>removeRecipe(params.id)}>Delete</button>
</div>} 
  <div className="row">
    <div className="col">
      <img src={recipeDetails.image} alt=" " className="w-100" style={{height:"500px"}} />
      <div className="border border-1 mt-2 p-3">
          <h3>{recipeDetails.title}</h3>
      </div>
    </div>

  </div>

  <div className="row mt-4">

  <div className="col-md-6">
      <div class="card">
            <h5 class="card-header bg-dark text-white">Recipe</h5>
            <div class="card-body">
            <p class="card-text">{recipeDetails.recipe}</p>
         </div>
         </div>
      </div>

      <div className="col-md-6">
         <div class="card">
            <h5 class="card-header bg-dark text-white">Ingerdient</h5>
            <div class="card-body">
            <p class="card-text">{recipeDetails.ingredient}</p>
         </div>
     </div>
      </div>

    

  </div>

</div> 
 </>
  );
}

