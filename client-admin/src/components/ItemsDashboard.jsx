import React from "react";

const ItemsDashboard = ({itemsLength}) => {
  return (
    <div className="col border p-5 shadow rounded ">
      <h5>Product</h5>
      <h1 className="text-center">{itemsLength}</h1>
    </div>
  );
};

export default ItemsDashboard;
