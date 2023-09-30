import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchAsyncItemsById,
  editProduct,
  fetchAsyncCategorySuccess,
} from "../stores/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const EditProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { category } = useSelector((state) => {
    return state.category;
  });

  const { oneProduct } = useSelector((state) => state.product);

  const [editedProduct, setEditedProduct] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    authorId: "",
    categoryId: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(editProduct(id, editedProduct))
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

  useEffect(() => {
    dispatch(fetchAsyncItemsById(id));
    dispatch(fetchAsyncCategorySuccess());
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setEditedProduct({
        name: oneProduct.name,
        description: oneProduct.description,
        price: oneProduct.price,
        imgUrl: oneProduct.imgUrl,
        authorId: oneProduct.authorId,
        categoryId: oneProduct.categoryId,
        ingredient1: oneProduct.Ingredients[0]
          ? oneProduct.Ingredients[0].name
          : "",
        ingredient2: oneProduct.Ingredients[1]
          ? oneProduct.Ingredients[1].name
          : "",
        ingredient3: oneProduct.Ingredients[2]
          ? oneProduct.Ingredients[2].name
          : "",
        ingredient4: oneProduct.Ingredients[3]
          ? oneProduct.Ingredients[3].name
          : "",
      });
    }
  }, [oneProduct]);

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
            <h1 className="mb-4 ">Edit Product</h1>
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
              value={editedProduct.name}
              id="form2Example1"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Description</label>
            <input
              name="description"
              type="text"
              id="form2Example2"
              value={editedProduct.description}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Price</label>
            <input
              name="price"
              type="number"
              id="form2Example2"
              value={editedProduct.price}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">image url</label>
            <input
              name="imgUrl"
              type="text"
              id="form2Example2"
              value={editedProduct.imgUrl}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Category</label>
            <select
              name="categoryId"
              id="form2Example2"
              className="form-control"
              onChange={handleInputChange}
              value={editedProduct.categoryId}
            >
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
              value={editedProduct.ingredient1}
              id="form2Example2"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Ingredients2</label>
            <input
              name="ingredient2"
              type="text"
              id="form2Example2"
              value={editedProduct.ingredient2}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Ingredients3</label>
            <input
              name="ingredient3"
              type="text"
              className="form-control"
              value={editedProduct.ingredient3}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Ingredients4</label>
            <input
              name="ingredient4"
              type="text"
              className="form-control"
              value={editedProduct.ingredient4}
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

export default EditProductPage;
