import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import BtnPurple from "../components/Buttons/BtnPurple";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
    const { user, admin, loginAdmin } = useContext(AuthContext);
    const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
      try {
        const res = await loginAdmin({ email, password });
        if (!res) {
          alert("Login Failed!");
        } else {
          alert("Login Successful");
          navigate("/dashboard");
        }
      } catch (err) {
        alert("Login Failed!");
      }
    }

    useEffect(() => {
        if(admin) {
            navigate("/dashboard");
        }
        if(user) {
            navigate("/")
        }
    }, [navigate, admin, user])

  return (
    <div className='flex items-center justify-center min-h-screen'>
        <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-opacity-50 cardsStyling w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
            Admin Login
        </h2>

        <div>
          <label className="block text-sm font-medium text-primaryText">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email",
              },
            })}
            className={`inputStyle ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-primaryText">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`inputStyle  ${errors.password ? "border-red-500" : ""}`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <BtnPurple type="submit" className=" bg-primaryBackground">
          Login
        </BtnPurple>
      </form>
    </div>
  )
}

export default AdminLoginPage