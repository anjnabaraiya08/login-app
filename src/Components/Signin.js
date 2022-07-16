import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signin() {
  const user = localStorage.getItem("user");
  const data = JSON.parse(user);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Atleast 6 characters required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if(!data) {
        alert("Register first!!!");
      } else if(data && data.email === values.email && data.password === values.password) {
        navigate("/dashboard");
      } else {
        alert("Invalid email or password!!!");
      }
    },
  });

  const { values, errors, touched, handleChange, handleSubmit, handleBlur, handleReset } = formik;
  return (
    <section className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-10">
            <div className="card p-4">
              <div className="card-header text-center pb-0">
                <h3>React App</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="signin-form col">
                    <div className="signin-header text-center">
                      <h3>Sign In</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="input-data">
                        <i className="fa-solid fa-envelope"></i>
                        <input
                          className=""
                          placeholder="Email"
                          type="email"
                          name="email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.email && errors.email ? (
                          <p className="error text-danger">{errors.email}</p>
                        ) : null}
                      </div>
                      <div className="input-data">
                        <i className="fa-solid fa-lock"></i>
                        <input
                          className=""
                          placeholder="Pasword"
                          type="password"
                          name="password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.password && errors.password ? (
                          <p className="error text-danger">{errors.password}</p>
                        ) : null}
                      </div>
                      <div className="d-block d-md-block d-lg-flex d-sm-flex justify-content-between align-items-center">
                        <div>
                          <input
                            type="checkbox"
                            name="remember"
                            className="mr-2"
                          />
                          <label className="" htmlFor="remember">
                            Remember me
                          </label>
                        </div>
                        <div>
                          <p className="float-lg-right">Forgot password?</p>
                        </div>
                      </div>
                      <div className="input-data">
                        <button type="submit" className="btn-login w-100">
                          Log In
                        </button>
                      </div>
                      Don't have an account?{" "}
                      <NavLink to="/signup">Sign up</NavLink>
                    </form>
                  </div>
                  <div className="signin-image d-md-block d-none col">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;
