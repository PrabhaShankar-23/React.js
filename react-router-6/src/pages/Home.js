import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Hello HOme page</h1>
      <section className="section">
        <Outlet />
      </section>
    </>
  );
};
export default Home;
