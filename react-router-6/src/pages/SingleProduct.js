import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  console.log(useParams());
  const { IDofProduct } = useParams(); //this IDofProduct should be same in App.js or we can say useParams is getting the id from url. IDofProduct has been destructured from
  console.log(IDofProduct);
  const product = products.find((product) => product.id === IDofProduct);
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
// Notice rerendering of the page as per chanded content.
