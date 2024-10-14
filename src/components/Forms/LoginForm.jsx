import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import BtnPurple from "../Buttons/BtnPurple";
import { AuthContext } from "../../context/AuthContext";

export default function LoginForm({ closeModal }) {
  const { login, loginAdmin, signup } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // to watch password for confirming password
    reset, // to reset form after submission
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password, name } = data;

    if (isLogin) {
      try {
        const res = isAdmin
          ? await loginAdmin({ email, password })
          : await login({ email, password })
        if (res) {
          alert(`${isAdmin ? "Admin" : "User"} Login Successful`);
          closeModal();
        }
      } catch (err) {
        alert("Login Failed!");
      }
    } else {
      try {
        const res = await signup({ email, password, name });
        if (!res) {
          alert("Signup Failed!");
        } else {
          alert("Signup Successful");
          closeModal();
        }
      } catch (err) {
        alert("Signup Failed!");
      }
    }
    // reset();
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const toggleAdminLogin = () => {
    setIsAdmin(!isAdmin); // Toggle between admin and user login
  };

  return (
    <div className="flex items-center text-primaryText">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-opacity-50 cardsStyling w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
          {isLogin ? (isAdmin ? "Admin Login" : "Login") : "Signup"}
        </h2>

        {!isLogin && (
          <>
            <div>
              <label className="block text-sm font-medium text-primaryText">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`inputStyle ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
          </>
        )}

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

        {!isLogin && (
          <>
            <div>
              <label className="block text-sm font-medium text-primaryText">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className={`inputStyle ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </>
        )}

        <div className="flex items-center">
          <input
            type="checkbox"
            id="adminLogin"
            onChange={toggleAdminLogin}
            checked={isAdmin}
            className="mr-2"
          />
          <label htmlFor="adminLogin" className="text-primaryText">
            Login as Admin
          </label>
        </div>

        <BtnPurple type="submit" className=" bg-primaryBackground">
          {isLogin ? "Login" : "Signup"}
        </BtnPurple>

        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            className="text-purple underline"
            onClick={toggleForm}
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
}
