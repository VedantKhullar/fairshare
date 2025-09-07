import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Group from "./pages/Group";
import Login from "./pages/Login";
import Layout from "./components/Layout";

const AppRoutes = () => {
  return ( 
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/group/:id" element={<Group />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
