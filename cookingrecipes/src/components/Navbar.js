import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import logo from "../assets/—Pngtree—cute girl cartoon chef mascot_6681045.png"
export default function Navbar() {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch()
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null
    })
    window.localStorage.removeItem("auth")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-scroll navbar-dark bg-dark  bg-gradient sticky-top">
        <div className="container">
          <Link to={"/"}> <img className="navbar-brand " src={logo} alt="" style={{ width: "3.5rem" }} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item active">
                <Link className="nav-link active fs-5 text-white" to={"/"} exact="true">RECIPES</Link>
              </li>
            </ul>
            <ul className="navbar-nav flex-row">
              <li className="nav-item  mt-2"><Link className="text-decoration-none  px-3  w-100 text-center pointer text-white" to={`/${"Breakfast"}`}>Breakfast</Link></li>
              <li className="nav-item  mt-2"><Link className="text-decoration-none  px-3  w-100 text-center pointer text-white" to={`/${"Dinner"}`}>Dinner</Link></li>
              <li className="nav-item  mt-2"><Link className="text-decoration-none ps-3 pe-lg-5 pe-2 w-100 text-center pointer text-white" to={`/${"Appetizers"}`}>Appetizers</Link></li>
              <li className="nav-item">
                {auth ? <div className="d-flex" >
                  <p className=" mt-2 ps-lg-4 ps-2 text-white">{auth.userName}</p>
                  <Link className="text-decoration-none  mt-2 px-lg-5 px-2 w-100 text-center pointer text-white" to={""} onClick={logout}>Logout</Link>
                </div>
                  : <Link className="text-decoration-none d-inline-block py-2 px-2 ms-1 text-white" to={"/login"}>Login</Link>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}