import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Signup() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Atleast 6 characters required"),
    confirmPassword: Yup.string()
      .required("Confirm password required")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      alert("Registered successfully!!!");
      const user = {
        email: values.email,
        password: values.password
      };
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
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
                  <div className="signup-image d-md-block d-none col">
                  </div>
                  <div className="signup-form col">
                    <div className="signin-header text-center">
                      <h3>Sign up</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="input-data">
                        <i className="fa-solid fa-user"></i>
                        <input
                          className=""
                          placeholder="Name"
                          type="text"
                          name="name"
                          id="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.name && errors.name ? (
                          <p className="error text-danger">{errors.name}</p>
                        ) : null}
                      </div>
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
                          placeholder="Password"
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
                      <div className="input-data">
                        <i className="fa-solid fa-lock"></i>
                        <input
                          className=""
                          placeholder="Confirm Password"
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.confirmPassword && errors.confirmPassword ? (
                          <p className="error text-danger">
                            {errors.confirmPassword}
                          </p>
                        ) : null}
                      </div>
                      <div className="input-data">
                        <button type="submit" className="btn-signup w-100">
                          Register
                        </button>
                      </div>
                      Already have an account? <NavLink to="/">Login</NavLink>
                    </form>
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

export default Signup;
