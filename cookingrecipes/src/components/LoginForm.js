import imagee from "../assets/—Pngtree—cute cartoon chef little girl_6434309.png";
export default function LoginForm({
  handelFormChange,
  userFormErrors,
  handleFormSubmit,
  userForm,
}) {
  return (
    <div className="card mb-3 mt-5 shadow">
      <div className="row g-0">
  
      <div className="col-md-4">
          <img src={imagee} className="img-fluid rounded-start card-img-top-sm" alt="..." />
        </div>


        <div className="col-md-6 mt-5">
          <div className="card-body">
           <p className="card-text fs-4 fw-light">Please Enter Your Email and Password</p>
            <form
              className=" m-auto mt-4  "
              onSubmit={(e) => handleFormSubmit(e)}
            >
              <div className="mb-3" controlid="formBasicEmail">
                <input
                  className="form-control w-100"
                  type="email"
                  placeholder="Enter email"
                  name="userEmail"
                  aria-describedby="useremail"
                  value={userForm.userEmail}
                  onChange={(e) => handelFormChange(e)}
                />
                <div id="useremail" className="text-danger form-text">
                  {userFormErrors.userEmailErr}
                </div>
              </div>
              <div
                className="mb-3 input-group m-auto"
                controlid="formBasicPassword"
              >
                <input
                  className="form-control w-100"
                  type="password"
                  placeholder="Password"
                  name="password"
                  aria-describedby="userpass"
                  value={userForm.password}
                  onChange={(e) => handelFormChange(e)}
                />
                <div id="userpass" className="text-danger form-text">
                  {userFormErrors.passwordErr}
                </div>
              </div>
              <div className="w-100">
                <button
                  disabled={
                    userFormErrors.userEmailErr || userFormErrors.passwordErr ||!userForm.userEmail || !userForm.password
                  }
                  className="btn btn-dark my-3 px-3"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
