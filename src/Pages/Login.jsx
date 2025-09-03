import { Link, useLocation, useNavigate } from "react-router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import auth from "../Firebase/firebaselogin"
import Swal from "sweetalert2";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate(location?.state ? location.state : "/");

        Swal.fire({
          icon: "success",
          title: "LogIn Successful!",
          text: "Successfully LoggedIn",
          confirmButtonColor: "#3085d6",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: "Google login was not successful. Please try again.",
          confirmButtonColor: "#d33",
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");

        Swal.fire({
          icon: "success",
          title: "LogIn Successful!",
          text: "Successfully LoggedIn",
          confirmButtonColor: "#3085d6",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: "Email or Password does not match!",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div>
      <section className=" pt-[10%] relative flex items-center justify-center p-2">
        <div className="w-[500px] sm:w-[500px] bg-gray-900 bg-opacity-60 backdrop-blur-xl text-center p-8 text-white z-10 rounded-xl shadow-lg">
        
          <p className="text-xl sm:text-2xl font-semibold">LOGIN HERE</p>

          <hr className="my-4 border-gray-600" />

          <div className="text-center mt-6 mb-6">
            <button
              onClick={handleGoogleLogin}
              className="bg-white p-2 text-black shadow-2xl rounded-md cursor-pointer hover:bg-blue-200"
            >
              <div className="flex items-center gap-3">
                <img
                  className="w-7"
                  src="https://cdn-icons-png.freepik.com/256/2504/2504914.png"
                  alt="Google Logo"
                />
                <p className="text-xl font-semibold">Login with Google</p>
              </div>
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full px-4 py-2 rounded-lg  text-base sm:text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full pl-3 text-base sm:text-lg focus:outline-none border border-gray-300 rounded-lg py-2"
            />

            <button type="submit" className="btn btn-info lg:w-[393px] mt-3">
              <span className="p-4 text-white font-bold text-xl">LOGIN</span>
            </button>

            <p className="mt-4 text-gray-300">
              If you're new here, click to{" "}
              <Link
                to="/auth/signup"
                className="underline hover:text-pink-300 text-blue-400"
              >
                SIGNUP
              </Link>
            </p>
          </form>
        </div>
      </section>

 
    </div>
  );
};

export default Login;
