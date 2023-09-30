import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewProduct,
  fetchAsyncCategorySuccess,
} from "../stores/actions/actionCreator";
import Swal from "sweetalert2";


const AddProductPage = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => {
    return state.category;
  });

  const [inputNewProduct, setinputNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    authorId: localStorage.getItem("id"),
    categoryId: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
  });
  const navigate = useNavigate();

  const onChangeName = (event) => {
    const { target } = event;
    const { value, name } = target;

    setinputNewProduct({
      ...inputNewProduct,
      [name]: value,
    });
  };

  const onSubmitChange = (event) => {
    event.preventDefault();
    dispatch(addNewProduct(inputNewProduct))
      .then((data) => {
        navigate("/products")
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.errorMessage,
        });
      })
  };

  useEffect(() => {
    dispatch(fetchAsyncCategorySuccess());
  }, []);
  console.log(inputNewProduct)
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
          <div className="form-outline mb-4">
            <label className="form-label">Description</label>
            <input
              name="description"
              type="text"
              id="form2Example2"
              className="form-control"
              onChange={onChangeName}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Price</label>
            <input
              name="price"
              type="number"
              id="form2Example2"
              className="form-control"
              onChange={onChangeName}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">image url</label>
            <input
              name="imgUrl"
              type="text"
              id="form2Example2"
              className="form-control"
              onChange={onChangeName}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Category</label>
            <select
              name="categoryId"
              id="form2Example2"
              className="form-control"
              onChange={onChangeName}
            >
              <option selected disabled>
                Select one
              </option>
              {category.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Ingredients1</label>
            <input
              name="ingredient1"
              type="text"
              id="form2Example2"
              className="form-control"
              onChange={onChangeName}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Ingredients2</label>
            <input
              name="ingredient2"
              type="text"
              id="form2Example2"
              className="form-control"
              onChange={onChangeName}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Ingredients3</label>
            <input
              name="ingredient3"
              type="text"
              className="form-control"
              onChange={onChangeName}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Ingredients4</label>
            <input
              name="ingredient4"
              type="text"
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

export default AddProductPage;
