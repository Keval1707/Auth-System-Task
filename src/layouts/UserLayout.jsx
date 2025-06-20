import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Outlet />
    </div>
  );
};

export default UserLayout;
