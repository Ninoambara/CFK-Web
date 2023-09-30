import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncItemsById } from "../stores/actions/actionCreator";
import BeatLoader from "react-spinners/BeatLoader";
import { useParams } from "react-router-dom";
import "../App.css"
import { Container, Row, Col } from "react-bootstrap";

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { oneProduct, loading } = useSelector((state) => {
    return state.product;
  });

  useEffect(() => {
    dispatch(fetchAsyncItemsById(id));
  }, [dispatch, id]);

  return (
    <>
      <Container className="d-flex justify-content-center mt-5 mb-5">
        <Row>
          <Col>
            <div className="blur-background-detail shadow p-4">
              <h2>{oneProduct?.name}</h2>
              {loading ? (
                <BeatLoader
                  color="#d63648"
                  loading={loading}
                  size={50}
                  className="d-flex justify-content-center"
                />
              ) : (
                <>
                  <p>Description: {oneProduct?.description}</p>
                  <p>Price: Rp.{oneProduct?.price}</p>
                  <p>Ingredients:</p>
                  <ul>
                    {oneProduct?.Ingredients?.map((ingredient, index) => (
                      <li key={index}>{ingredient.name}</li>
                    ))}
                  </ul>
                  <img src={oneProduct?.imgUrl} alt={oneProduct?.name} />
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
    </>
  );
}

export default DetailPage;
