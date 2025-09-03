import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);

  // Track which tab is active
  const [activeTab, setActiveTab] = useState("patient");

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo?.value || "";
    const specialization = form.specialization?.value || "";

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password!",
        text: "Password must include uppercase, lowercase, number, and special character (min 6 chars).",
        confirmButtonColor: "#d33",
      });
      return;
    }

    // Firebase Authentication
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        updateUserProfile(name, photo).then(() => {
          Swal.fire({
            icon: "success",
            title: `${activeTab === "patient" ? "Patient" : "Doctor"} Registered!`,
            text: "Redirecting to homepage...",
            confirmButtonColor: "#3085d6",
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
          });

          form.reset();
          setTimeout(() => {
            navigate("/");
          }, 2000);
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed!",
          text: error.message,
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div>
      <section className="pt-[10%] relative flex items-center justify-center">
        <div className="w-[500px] bg-gray-900 bg-opacity-60 backdrop-blur-xl text-center p-8 text-white z-10 rounded-xl shadow-lg">
          <p className="text-xl sm:text-2xl font-semibold mt-3">
            {activeTab === "patient"
              ? "Patient Registration"
              : "Doctor Registration"}
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mt-4 mb-6">
            <button
              onClick={() => setActiveTab("patient")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "patient"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              Patient
            </button>
            <button
              onClick={() => setActiveTab("doctor")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "doctor"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              Doctor
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-2 rounded-lg text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full px-4 py-2 rounded-l text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {activeTab === "doctor" && (
              <input
                type="text"
                name="specialization"
                placeholder="Enter Your Specialization"
                required
                className="w-full px-4 py-2 rounded-lg text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            <input
              type="text"
              name="photo"
              placeholder="Enter Your Photo URL (optional)"
              className="w-full px-4 py-2 rounded-lg text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 rounded-lg  text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="btn btn-info lg:w-[393px] mt-3"
            >
              <span className="p-4 text-white font-bold text-xl">
                Register as {activeTab === "patient" ? "Patient" : "Doctor"}
              </span>
            </button>

            <p className="mt-4 text-gray-300">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="underline text-blue-400 hover:text-pink-400"
              >
                LogIn
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
