import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loading message="Fetching your data..." />;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Dashboard</h1>

      <div className="mb-4">
        <p className="text-lg text-gray-700">
          <strong>Logged in as:</strong> {user?.email}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Authenticated user data loaded from <strong>Redux + LocalStorage</strong>
        </p>
      </div>

      <div className="border-t pt-4 mt-6">
        <h2 className="text-xl font-semibold mb-2">✅ Features Implemented</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Email & password-based authentication</li>
          <li>Form validation with React Hook Form + Yup</li>
          <li>Protected routes using React Router</li>
          <li>User data stored in localStorage</li>
          <li>State managed using Redux Toolkit</li>
          <li>Session persistence on page refresh</li>
          <li>Responsive UI with Tailwind CSS</li>
          <li>Toast notifications for feedback</li>
        </ul>
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
