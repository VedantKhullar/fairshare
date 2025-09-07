import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 bg-gray-50">
        <Outlet />
      </main>
      <footer className="bg-white shadow p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fairshare
      </footer>
    </div>
  );
};

export default Layout;
