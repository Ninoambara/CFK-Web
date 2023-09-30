import React from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../stores/actions/actionCreator";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CategoryRow = ({ data, index }) => {
  const dispatch = useDispatch();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const deleteCat = (id) => {
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
        dispatch(deleteCategory(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <tr key={index} className="align-middle text-center">
      <th className="text-center">{index + 1}</th>
      <td>
        <span className="ms-2">{data.name}</span>
      </td>
      <td>{formatDate(data.createdAt)}</td>
      <td>{formatDate(data.updatedAt)}</td>
      <td>
        <Link to={`/edit-category/${data.id}`} className="btn btn-primary me-2">
          Edit
        </Link>
        <button
          onClick={() => deleteCat(data.id)}
          className="btn btn-danger me-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CategoryRow;
