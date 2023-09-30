import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchAsyncItemsById,
  editProduct,
  fetchAsyncCategorySuccess,
  fetchAsyncCategoryById,
  editCategory,
} from "../stores/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";


const EditCategoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { oneCategory } = useSelector((state) => state.category);
  const [editedCategory, setEditedCategory] = useState({
    name: "",
  });

  console.log(editedCategory, oneCategory, "<<< di form")
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCategory({
      ...editedCategory,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(editCategory(id, editedCategory))
      .then((data) => {
        navigate("/categories");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.errorMessage,
        });
      });
  };

  useEffect(() => {
    dispatch(fetchAsyncCategoryById(id));
    dispatch(fetchAsyncCategorySuccess());
  }, []);

  useEffect(() => {
    if (oneCategory) {
      setEditedCategory(oneCategory);
    }
  }, [oneCategory]);

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
        <form onSubmit={handleSubmit}>
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
              value={editedCategory.name}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCategoryPage;
