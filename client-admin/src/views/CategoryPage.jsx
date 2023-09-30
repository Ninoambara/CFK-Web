import React, { useEffect, useState } from "react";
import "../App.css";
import CategoryRow from "../components/CategoryRow";
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCategorySuccess } from "../stores/actions/actionCreator";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { category, loading } = useSelector((state) => {
    return state.category;
  });

  useEffect(() => {
    dispatch(fetchAsyncCategorySuccess());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="mt-5">Category List</h1>
        </div>
        <div className="col-md-6 text-end">
          <Link to={"/add-category"} className="btn btn-primary mt-5 mb-5">
            Add New
          </Link>
        </div>
      </div>
      <div className="row bg-white rounded">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-bordered table-hover table-sm ">
              <thead className="thead-dark">
                <tr className="text-center">
                  <th scope="col">NO</th>
                  <th scope="col">NAME</th>
                  <th scope="col">UPDATE AT</th>
                  <th scope="col">CREATED AT</th>
                  <th scope="col">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      <BeatLoader
                        color="#d63648"
                        loading={loading}
                        size={50}
                        className="d-flex justify-content-center "
                      />
                    </td>
                  </tr>
                ) : (
                  category.map((category, index) => (
                    <CategoryRow
                      key={category.id}
                      data={category}
                      index={index}
                      isCategory={true}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
