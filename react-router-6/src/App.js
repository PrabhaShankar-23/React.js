import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Products" element={<Products />} />
          <Route path="Products/:IDofProduct" element={<SingleProduct />} />
          <Route path="Login" element={<Login setUser={setUser} />} />
          <Route path="Dashboard" element={<Dashboard user={user} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
