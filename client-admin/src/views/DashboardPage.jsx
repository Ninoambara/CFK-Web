import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux" 
import { fetchAsyncCategorySuccess, fetchAsyncItems } from "../stores/actions/actionCreator";
import CategoryDashboard from "../components/CategoryDashboard";
import ItemsDashboard from "../components/ItemsDashboard";

const DashboardPage = () => {
  const dispatch = useDispatch()

  const {products} = useSelector((state) => {
    return state.product
  })

  const {category} = useSelector((state) => {
    return state.category
  })
  
  const categoryLength = category.length
  const itemsLength = products.length
  

  useEffect(() => {
    dispatch(fetchAsyncCategorySuccess())
    dispatch(fetchAsyncItems())
  },[])
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
        >
        <div className="row p-5 border shadow rounded">
          <CategoryDashboard categoryLength={categoryLength} />
         <ItemsDashboard itemsLength={itemsLength}/>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
