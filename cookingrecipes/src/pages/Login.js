import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import { login } from "../store/action/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const emailPattern = new RegExp("^[^\\s@]+@([^\\s@.,]+\\.)+[^\\s@.,]{2,}$");
  const dispatch = useDispatch();
  const [userForm, setUserForm] = useState({
    userEmail: "",
    password: "",
  });
  useEffect(() => {}, [userForm]);

 const [userFormErrors, setUserFormError] = useState({
  userEmailErr: null,
  passwordErr: null,
});
const handleFormSubmit=async (e)=>{
  e.preventDefault();
  try{
    let res = await login(userForm)
     if(res.data){
        //save user and token in localstorage
        window.localStorage.setItem("auth",JSON.stringify(res.data))
        //save user and token in redux
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        navigate("/");
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  const handelFormChange = (e) => {
    if (e.target.name === "userEmail") {
      setUserForm({
        ...userForm,
        userEmail: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        userEmailErr:
          e.target.value.length === 0
            ? "this filed is requird"
            : !emailPattern.test(e.target.value)
            ? "email not valid"
            : null,
      });
    } else if (e.target.name === "password") {
      setUserForm({
        ...userForm,
        password: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        passwordErr:
          e.target.value.length === 0
            ? "this filed is requird"
            : e.target.value.length < 5
            ? "must be 6 char"
            : null,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
          <LoginForm
            handelFormChange={handelFormChange}
            handleFormSubmit={handleFormSubmit}
            userForm={userForm}
            userFormErrors={userFormErrors}
          />
        </div>
      </div>
      </div>
    </>
  );
}
export default Login;
