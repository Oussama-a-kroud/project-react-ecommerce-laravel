
import notify from "../useNotification";
import React,{ useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { useEffect } from "react";
import { createProduct } from "../../redux/actions/productsAction";

const AdmineAddProductsHook = () => {
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

  //to change name state
  const onChangeProdName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };
  const onChangeProdDescription = (event) => {
    event.persist();
    setProdDescription(event.target.value);
  };
  const onChangePrice = (event) => {
    event.persist();
    setPrice(event.target.value);
  };
 

  // whene select category store id
  const onSelectCategory = (e) => {
    setCatId(e.target.value);
  };
  // to convert base 64 to  file
  const dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };
  // to save date
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    if (
      prodName === "" ||
      prodDescription === "" ||
      imgCover === "" ||
      catId === "" ||
      price === "prix"
    ) {
      notify("completer les donner", "error");
      return;
    }

    const formData = new FormData();
    formData.append("name", prodName);
    formData.append("desc", prodDescription);
    formData.append("price", price);
    formData.append("img", imgCover);
    formData.append("category", catId);
    setLoading(true);
    await dispatch(createProduct(formData));
    notify("les donner est enregister", "success");
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setCatId(0);
      setImages([]);
      setPrice("prix");
      setProdDescription("");
      setProdName("");
      setTimeout(() => setLoading(true), 1500);
      setLoading(true);
    }
  }, [loading]);

  return [
    onChangeProdName,
    onChangeProdDescription,
    onChangePrice,
    images,
    setImages,
    prodName,
    setProdName,
    prodDescription,
    setProdDescription,
    price,
    setPrice,
    onSelectCategory,
    category,
    handleSubmit,
  ];
};

export default AdmineAddProductsHook;
