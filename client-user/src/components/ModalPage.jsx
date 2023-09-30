import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncItemsById } from "../stores/actions/actionCreator";
import BeatLoader from "react-spinners/BeatLoader";

function ModalPage({ productId }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    dispatch(fetchAsyncItemsById(productId));
  };

  const { oneProduct, loading } = useSelector((state) => {
    return state.product;
  });

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Detail
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{oneProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <BeatLoader
              color="#d63648"
              loading={loading}
              size={50}
              className="d-flex justify-content-center "
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPage;
