import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import ViewProductsDetailsHook from '../../hooks/products/view-products-details-hook';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getOneProduct } from '../../redux/actions/productsAction';

const ProductGallery = () => {
    const{id}=useParams()

    const [item,images]=ViewProductsDetailsHook(id)
    // console.log(item.img)
 
  
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  
        pt-2">
            <ImageGallery items={images}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
                style={{  marginTop: "20px", cursor: "pointer" }}
            />
        </div>
    )
}

export default ProductGallery
