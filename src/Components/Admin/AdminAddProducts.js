import React from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import MultiImageInput from "react-multiple-image-input";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { useEffect } from "react";
import { createProduct } from "../../redux/actions/productsAction";
import {ToastContainer} from "react-toastify";
import notify from './../../hooks/useNotification'

const AdminAddProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.allCategory.category);

  // value image products
  const [images, setImages] = useState([]);
  //   value state
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [price, setPrice] = useState("prix");
  const [catId, setCatId] = useState("");
  const [loading, setLoading] = useState(true);

  // whene select category store id
  const onSelectCategory = (e) => {
    setCatId(e.target.value);
  };
  // to convert base 64 to  file
  const dataURLtoFile=(dataurl, filename)=>{
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}
  // to save date
 const handleSubmit=async(e)=>{
  e.preventDefault()
  const imgCover=dataURLtoFile(images[0],Math.random()+".png")
  if(prodName==="" || prodDescription==="" || imgCover==="" || catId==="" ||price==="prix"){
    notify("completer les donner","error");
    return;
  }

const formData= new FormData();
formData.append("name",prodName);
formData.append("desc",prodDescription);
formData.append("price",price);
formData.append("img",imgCover);
formData.append("category",catId);
setLoading(true)
await dispatch(createProduct(formData))
notify('les donner est enregister','success')
setLoading(false)

 }
 
useEffect(()=>{
  if(loading === false){
    setCatId(0)
    setImages([])
    setPrice("prix")
    setProdDescription("")
    setProdName("")
    setTimeout(() => setLoading(true),1500);
    setLoading(true)
    
  }
},[loading])

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">ajouter un produit</div>
        <Col sm="8">
          <div className="text-form pb-2"> photo de produit </div>
          {/* <img src={avatar} alt="" height="100px" width="120px" /> */}
          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={4}
            
          />

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
          {/* <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" quantite"
                    /> */}

          <select
            name="cat"
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
      <ToastContainer/>
    </div>
  );
};

export default AdminAddProducts;
