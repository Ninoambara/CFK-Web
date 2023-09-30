import React, { useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import ItemComponent from "../components/ItemComponent";
import {useDispatch, useSelector} from "react-redux"
import { fetchAsyncItems } from "../stores/actions/actionCreator"

const HomePage = () => {
  
  return (
    <div className="homepage-container">
      
      <ItemComponent />
      
    </div>
  );
};

export default HomePage;
