import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Rut from "../pages/Rut";
import Cedula from "../pages/Cedula";
import NotFound from "../pages/NotFound";

import Layout from "../components/Layout";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/rut" element={<Rut />} />
        <Route path="/cedula" element={<Cedula />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;