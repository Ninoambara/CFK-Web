import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "../stores/actions/actionCreator";


const LoginPage = () => {
  const dispatch = useDispatch()
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  const onChangeName = (event) => {
    const { target } = event;
    const { value, name } = target;

    setInputLogin({
      ...inputLogin,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const onSubmitChange = (event) => {
    event.preventDefault();
    dispatch(login(inputLogin))
    .then((data) => {
      navigate("/products");
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.errorMessage,
      });
    });
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="p-4 shadow rounded"
        style={{
          width: "500px",
        }}
      >
        <form onSubmit={onSubmitChange}>
          <div className="d-flex">
            <h1 className="mb-4 ">Sign Up</h1>
            <img
              src="https://i.ibb.co/hBVVy6X/ayamkeepci.png"
              alt="Logo"
              width="150"
              style={{ marginLeft: "150px" }}
              className="rounded-circle text-end"
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Email address</label>
            <input
              name="email"
              type="email"
              id="form2Example1"
              className="form-control"
              onChange={onChangeName}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              id="form2Example2"
              className="form-control"
              onChange={onChangeName}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
