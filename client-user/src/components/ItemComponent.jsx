import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncItems,
  fetchAsyncItemsById,
} from "../stores/actions/actionCreator";
import ModalPage from "./ModalPage";
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from "react-router-dom";

const ItemComponent = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => {
    return state.product;
  });

  useEffect(() => {
    dispatch(fetchAsyncItems());
  }, []);

  return (
    <Container className="p-5 text-center shadow  blur-background mb-5 mt-5">
      <h1 className="">Our Products</h1>
      {loading ? (
        <BeatLoader
          color="#d63648"
          loading={loading}
          size={50}
          className="d-flex justify-content-center "
        />
      ) : (
        <Row className="mt-4">
          {products.map((product) => (
            <Col key={product.id} className="mt-2" md={3}>
              <Card className="shadow equal-height-card">
                <Card.Img
                  variant="top"
                  className="p-5 hover-fade-in"
                  src={product.imgUrl}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Rp.{product.price}</Card.Text>
                  <Link className="btn btn-primary" to={`/detail/${product.id}`}>See Detail</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ItemComponent;
