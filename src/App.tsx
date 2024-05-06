import { Route, Routes } from "react-router-dom";
import AppRouter from "./layout";
import Home from "./pages/home";
import Orders from "./pages/cart";
import Client from "./pages/client";
import SMS from "./pages/email";
import Settings from "./pages/settings";
import Servece from "./pages/service";
import Login from "./pages/login";




const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppRouter />}>
          <Route path="/" element={<Home/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/sms" element={<SMS/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/service" element={<Servece />} />
        </Route>
        <Route path="/login" element={<Login />} />

      
      </Routes>
    </>
  );
};

export default App;
