import React, { useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import {  useDispatch } from "react-redux";
import { createCategory} from "../../redux/actions/categoryAction";
import { useEffect } from "react";
import notify from "../../hooks/useNotification";
import {ToastContainer} from "react-toastify";

const AdminAddCategory = () => {
  const dispatch = useDispatch();

    const [img,setImg]=useState(avatar)
    const [name,setName]=useState("")
    const [selectedFile,setselectedFile]=useState(null)
    const [loading,setsLoading]=useState(true)
    const [isPress,setsIsPress]=useState(false)
   

    //  when image change save it
    const onImageChange=(event)=>{
        if(event.target.files && event.target.files[0])
        {
            setImg(URL.createObjectURL(event.target.files[0]))
            setselectedFile(event.target.files[0])
        }
    }
// save data in database

    const handelSubmit=async(e)=>{
        e.preventDefault();
if(name==="" || selectedFile===null){
  notify("il y a un problem completer les donner ",'error');
  return;
}
        const formData=new FormData()
        formData.append("name",name)
        formData.append("img",selectedFile)
        
       setsLoading(true)
       setsIsPress(true)
       await dispatch(createCategory(formData))
       setsLoading(false)

    }
    useEffect(()=>{
if(loading===false){
  setName('')
  setImg(avatar)
  setselectedFile(null)
  notify("data enregistrer","success")

  setsLoading(true)
  setTimeout(() =>   setsIsPress(false), 1000);

}
    },[loading])
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> ajouter une categorie</div>
        <Col sm="8">
          <div className="text-form pb-2">image de la categorie </div>
          <div>
            <label for="upload_photo">
              <img
                src={img}
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
            </div>
          <input
          onChange={(e)=>{setName(e.target.value)   }}
          value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder=" nom de la categorie"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handelSubmit}>
            enregistrer les modifications{" "}
          </button>
        </Col>
      </Row>
      {
        isPress ? loading ? <Spinner animation="border" variant="primary" />: <h4>finish</h4>:null
      }
      <ToastContainer/>
    </div>
  );
};

export default AdminAddCategory;
