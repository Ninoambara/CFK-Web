import React from "react";

const CategoryDashboard = ({categoryLength}) => {
  return (
    <div className="col border p-5 me-5 shadow rounded">
      <h5>Category</h5>
      <h1 className="text-center">{categoryLength}</h1>
    </div>
  );
};

export default CategoryDashboard;
