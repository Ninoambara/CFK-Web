import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncIngredients } from "../stores/actions/actionCreator";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../App.css";

const IngredientsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { ingredients } = useSelector((state) => {
    return state.ingredient;
  });
  
  useEffect(() => {
    dispatch(fetchAsyncIngredients(id));
  }, []);

  return (
    <div className="ingredients-container">
      <Card className="shadow">
        <Card.Header>
          <h1 className="text-center"> The Secret Ingredients</h1>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {ingredients.map((ingredient, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-center align-items-center"
              >
                {ingredient.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default IngredientsPage;
