import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/About";
import Product from "./pages/Product";
import Login from "./pages/Login";
import AdminHome from "./pages/admin/AdminHome";
import Roles from "./pages/admin/Roles";
import GstMaster from "./pages/admin/gstMaster/GstMaster";
import UpdateRole from "./pages/admin/UpdateRole";
import Card from "./components/Card";
import UpdateGst from "./pages/admin/gstMaster/UpdateGst";
import AccessManagement from "./pages/admin/accessmanagement/AccessManagement";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/home/roles" element={<Roles />} />
          <Route path="/admin/home/roles/:id" element={<UpdateRole />} />
          <Route path="/admin/home/gstMaster/gst" element={<GstMaster />} />
          <Route path="/admin/home/gstMaster/gst/:id" element={<UpdateGst />} />
          <Route
            path="/admin/home/accessmanagement/access"
            element={<AccessManagement />}
          />
          <Route path="/card" element={<Card />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
