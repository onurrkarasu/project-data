import "./Product.css";
import PropType from "prop-types";

const Product = ({product :{name,color,price,discount,img}}) => {
  return (
    <div className="product">
      <img src={img} alt="" />
      <h3 className="name">{name}</h3>
      <div className="info">
        <p className="color">{color}</p>
        <span className="price">price: {price}</span>
      </div>
      <span className="discount">
        {
            discount ? "İndirimde " : 'İndirimde Değil'
        }
      </span>
    </div>
  );
};

export default Product;
Product.propTypes = {
    product :PropType.object,
}