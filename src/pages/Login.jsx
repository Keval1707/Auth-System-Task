import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

   if (foundUser) {
  dispatch(login(foundUser));
  toast.success("Login successful!");
  navigate("/dashboard");
} else {
  toast.error("Invalid email or password.");
}

  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label>Email:</label>
          <input type="email" {...register("email")} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div className="mb-4">
          <label>Password:</label>
          <input type="password" {...register("password")} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
