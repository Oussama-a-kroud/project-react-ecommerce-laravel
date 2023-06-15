import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  getOneProduct,
  updateProduct,
} from "../../redux/actions/productsAction";
import { useEffect } from "react";
import notify from "../../hooks/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { useState } from "react";

const AdminEditProducts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneProduct(id));
      await dispatch(getAllCategory());
    };
    run();
  }, []);

  const item = useSelector((state) => state.allproducts.oneProduct);
  const category = useSelector((state) => state.allCategory.category);
  // console.log(item.data);
  // value image products
  const [images, setImages] = useState([]);
  //   value state
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [price, setPrice] = useState("prix");
  const [catId, setCatId] = useState("");
  useEffect(() => {
    if (item.data) {
      setProdName(item.data.data.name);
      setPrice(item.data.data.price);
      setProdDescription(item.data.data.desc);
      setImages(`http://127.0.0.1:8000/products/${item.data.data.img}`);

      setCatId(item.data.data.category);
    }
  }, [item]);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImages(URL.createObjectURL(event.target.files[0]));
    }
  };
  // whene select category store id
  const onSelectCategory = (e) => {
    setCatId(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      prodName === "" ||
      prodDescription === "" ||
      catId === "" ||
      price === "prix"
    ) {
      notify("completer les donner", "error");
      return;
    }
 
    

    const formData= new FormData();
    formData.append("img",images);
    formData.append("name",prodName);
    formData.append("desc",prodDescription);
    formData.append("price",price);
    formData.append("category",catId);
    console.log(formData)
    await dispatch(updateProduct(id,formData))
    notify('les donner est enregister','success')
  };

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">
          modifier le produit - {prodName}
        </div>
        <Col sm="8">
          <div className="text-form pb-2"> photo de produit </div>
          {/* <img src={avatar} alt="" height="100px" width="120px" /> */}

          <label for="upload_photo">
            <img
              src={images}
              alt="tswira"
              height="100px"
              width="120px"
              style={{ cursor: "pointer" }}
            />
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload_photo"
            />
          </label>

          <input
            value={prodName}
            onChange={(e) => {
              setProdName(e.target.value);
            }}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="nom de produit "
          />
          <textarea
            value={prodDescription}
            onChange={(e) => {
              setProdDescription(e.target.value);
            }}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="description "
          />
          <input
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="prix "
          />
    
          <select
            name="cat"
            value={catId}
            onChange={onSelectCategory}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">categories </option>
            {category
              ? category.map((item) => {
                  return <option value={item.id}>{item.name} </option>;
                })
              : null}
          </select>

          
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>
            enregistrer la modification
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminEditProducts;
