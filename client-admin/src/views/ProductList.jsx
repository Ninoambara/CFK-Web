import React, { useState, useEffect } from "react";
import "../App.css";
import ProductRow from "../components/ProductRow";
import BeatLoader from "react-spinners/BeatLoader";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncItems } from "../stores/actions/actionCreator";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => {
    return state.product;
  });

  useEffect(() => {
    dispatch(fetchAsyncItems());
  }, []);
  return (
    <div className="container">
      <Outlet />
      <div className="row">
        <div className="col-md-6">
          <h1 className="mt-5">Product List</h1>
        </div>
        <div className="col-md-6 text-end">
          <Link to={"/add-product"} className="btn btn-primary mt-5 mb-5">
            Add New
          </Link>
        </div>
      </div>
      <div className="row bg-white rounded">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-bordered table-hover table-sm">
              <thead className="thead-dark">
                <tr className="text-center">
                  <th scope="col">NO</th>
                  <th scope="col">NAME</th>
                  <th scope="col">CATEGORY</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">CREATEDBY</th>
                  <th scope="col">INGREDIENTS</th>
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
                  products.map((product, index) => (
                    <ProductRow key={product.id} data={product} index={index} />
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

export default ProductList;
