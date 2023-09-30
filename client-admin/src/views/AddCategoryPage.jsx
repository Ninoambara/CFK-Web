import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addNewCategory } from "../stores/actions/actionCreator";
import Swal from "sweetalert2";

const AddCategoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [inputnewCategories, setinputnewCategories] = useState({
    name: "",
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const onChangeName = (event) => {
    const { target } = event;
    const { value, name } = target;

    setinputnewCategories({
      ...inputnewCategories,
      [name]: value,
    });
  };

  const onSubmitChange = (event) => {
    event.preventDefault();
    dispatch(addNewCategory(inputnewCategories, navigate))
    .then((data) => {
      navigate("/categories");
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.errorMessage,
      });
    })
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="p-4 shadow rounded"
        style={{
          width: "800px",
        }}
      >
        <form onSubmit={onSubmitChange}>
          <div className="d-flex">
            <h1 className="mb-4 ">Add new Product</h1>
            <img
              src="https://i.ibb.co/hBVVy6X/ayamkeepci.png"
              alt="Logo"
              width="150"
              style={{ marginLeft: "280px" }}
              className="rounded-circle text-end"
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Name</label>
            <input
              name="name"
              type="text"
              id="form2Example1"
              className="form-control"
              onChange={onChangeName}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Add New
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryPage;
