import React from "react";
import { Col, Card, Row, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import prod1 from "../../images/dwa5.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteOneProduct } from "../../redux/actions/productsAction";
import notify from "../../hooks/useNotification";
import { ToastContainer } from "react-toastify";
const AdminAllProductsCard = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handlDelete = async () => {
    await dispatch(deleteOneProduct(item.id));
    setShow(false);
    notify("le produit est supprimer", "success");

    setTimeout(() => window.location.reload(), 1000);
  };
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">confirmation de suprission</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">tu es sure que tu veux supprimer</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="dark" onClick={handlDelete}>
            suppeimer
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div className="d-inline item-delete-edit" onClick={handleShow}>
              supprimer
            </div>
            <Link
              to={`/admin/editprodict/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-inline item-delete-edit">modifier</div>
            </Link>
          </Col>
        </Row>
        <Link to={`/products/${item.id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={`http://127.0.0.1:8000/products/${item.img}`}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title">{item.name} </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">4.5</div>
                <div className="d-flex">
                  <div className="card-price">{item.price}</div>
                  <div className="card-currency mx-1">mad</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;
