import { MdFavoriteBorder } from "react-icons/md";
import "./index.css"

const ProductCard=(props)=>{
    const {productDetails}=props
    const {title,thumbnail}=productDetails
    return(
        <li className="product">
            <img src={thumbnail} className="product-image" alt={title} />
            <h1 className="product-title">{title}</h1>
            <div className="description-favourite">
                <p className="product-description">Login or create an acoount to see pricing</p>
                <MdFavoriteBorder size={18} />
            </div>
        </li>
    )
}

export default ProductCard