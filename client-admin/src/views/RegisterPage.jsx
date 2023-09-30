import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../stores/actions/actionCreator";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputRegister, setinputRegister] = useState({});

  const onChangeName = (event) => {
    const { target } = event;
    const { value, name } = target;

    setinputRegister({
      ...inputRegister,
      [name]: value,
    });
  };
  const onSubmitChange = (event) => {
    event.preventDefault();
    dispatch(register(inputRegister, navigate))
      .then((data) => {
        navigate("/");
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
            <h1 className="mb-4 ">Sign In</h1>
            <img
              src="https://i.ibb.co/hBVVy6X/ayamkeepci.png"
              alt="Logo"
              width="150"
              style={{ marginLeft: "176px" }}
              className="rounded-circle text-end"
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">username</label>
            <input
              name="username"
              type="text"
              className="form-control"
              onChange={onChangeName}
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
          <div className="form-outline mb-4">
            <label className="form-label">phoneNumber</label>
            <input
              name="phoneNumber"
              type="number"
              className="form-control"
              onChange={onChangeName}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Address</label>
            <input
              name="address"
              type="text"
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

export default RegisterPage;
