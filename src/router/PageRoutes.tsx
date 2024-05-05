import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ForgotPassword from "../pages/forgot-password/ForgotPassword";
import Profile from "../pages/profile/Profile";
import Layout from "../pages/home";
import Home from "../pages/home/Home";
import Orders from "../pages/orders/Orders";
import Customers from "../pages/customers/Customers";
import Marketing from "../pages/marketing/Marketing";
import Services from "../pages/services/Services";
import Settings from "../pages/settings/Settings";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />
        <Route
          path="/customers"
          element={
            <Layout>
              <Customers />
            </Layout>
          }
        />
        <Route
          path="/smm"
          element={
            <Layout>
              <Marketing />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
