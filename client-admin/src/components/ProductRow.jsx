import React from "react";
import { useDispatch } from "react-redux";
import { deleteItems } from "../stores/actions/actionCreator";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ProductRow = ({ data, index }) => {
  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteItems(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <tr key={index} className="align-middle text-center">
      <th className="text-center">{index + 1}</th>
      <td>
        <div className="d-flex align-items-center">
          <img src={data.imgUrl} width="100px" alt={data.name} />
          <span className="ms-2">{data.name}</span>
        </div>
      </td>
      <td>{data.Category.name}</td>
      <td>{data.price}</td>
      <td>{data.User.username}</td>

      <td>
        <Link to={`/ingredients/${data.id}`} className="btn btn-primary me-2">See Ingredients</Link>
      </td>

      <td>
        <Link to={`/edit-product/${data.id}`} className="btn btn-primary me-2">Edit</Link>
        <button
          onClick={() => deleteProduct(data.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
