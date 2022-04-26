import Home from "./pages/Home";
import { useState } from "react";
import About from "./pages/About";
import Products from "./pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const [user, setUser] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Products" element={<Products />} />
          <Route path="Products/:productsID" element={<SingleProduct />} />
          <Route path="Login" element={<Login setUser={setUser}></Login>} />
          <Route
            path="Dashboard"
            element={<Dashboard user={user}></Dashboard>}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
