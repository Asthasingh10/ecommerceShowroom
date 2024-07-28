import React, { useState } from "react"
import loginIcon from "../assest/signin.gif"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import imageToBase64 from "../helpers/imageTobase64"
import SummerApi from "../common";
import {toast} from 'react-toastify'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });
const navigate=useNavigate(

)

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageToBase64(file);
    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
        const dataResponse = await fetch(SummerApi.SignUp.url, {
        method:SummerApi.SignUp.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data)
      })
      const dataAPI = await dataResponse.json();
      if(dataAPI.success){
        toast.success(dataAPI.message);
        navigate("/login")
      }
      if(dataAPI.error){
        toast.error(dataAPI.message);
      }
 
    } else {
      toast.error("Password do not match");
    }
  };

  console.log("Data", data);
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || loginIcon} alt="Login Icon" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>
          <form className="pt-6" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Email:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label>Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  required
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                </div>
              </div>
            </div>
            <div>
              <label>Confirm Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((preve) => !preve)}
                >
                  <span>
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Sign Up
            </button>
          </form>
          <p className="my-5">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-red-700 hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
