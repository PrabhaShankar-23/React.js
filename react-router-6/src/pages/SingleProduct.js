import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  // console.log(useParams());
  const { productsID } = useParams();
  const product = products.find((product) => product.id === productsID);
  const { name, image } = product;
  return (
    <section className="section product">
      <img src={image} alt="best Image" />
      <h5>{name}</h5>
      <Link to="/Products">Back to products</Link>
    </section>
  );
};

export default SingleProduct;
