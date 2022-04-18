import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="dashboard" element={<div>Dashing</div>}>
          <Route path="stats" element={<div>Stats</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
