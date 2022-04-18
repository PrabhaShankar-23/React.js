import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="section">
      <h2> 404 Error</h2>
      <Link to="/" className="btn">
        Back to Home Page
      </Link>
    </section>
  );
};
export default Error;
