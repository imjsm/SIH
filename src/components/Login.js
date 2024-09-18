import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "./firebase";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import SignInwithGoogle from "./signInWIthGoogle";

// up means sign up (register), in means login

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpenUp, setIsModalOpenUp] = useState(false);
  const [isModalOpenIn, setIsModalOpenIn] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if the user is authenticated and fetch profile details
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
      }
      setIsLoading(false);
    });
  }, []);

  // Function to open the registration modal
  const openModalUp = (e) => {
    e.preventDefault();
    setIsModalOpenUp(true);
  };

  // Function to close the modal
  const closeModalUp = () => {
    setIsModalOpenUp(false);
  };
  const closeModalIn = () => {
    setIsModalOpenIn(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      alert("User logged in successfully");
      
      window.location.href = "/";
    } catch (error) {
      console.log(error.message);
      // Show an alert or toast when login fails
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        alert("Incorrect email or password. Please try again.");
       
      } else {
        toast.error("Error: " + error.message, {
          position: "bottom-center",
        });
      }
    }
  };

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUserDetails(null);
      window.location.href = "/login";
      toast.success("User logged out successfully", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Error logging out: " + error.message, {
        position: "top-center",
      });
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm space-y-8 bg-white p-6 shadow-md rounded-md">
        {userDetails ? (
          // Display profile if user is logged in
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={userDetails.photo}
                width={"40%"}
                alt="Profile"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <h3>Welcome {userDetails.firstName} 🙏</h3>
            <p>Email: {userDetails.email}</p>
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={handleLogout}
            >                             
            </button>
          </>
        ) : (
          // Display login form if user is not logged in
          <>
            <h2 className="text-center text-2xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-blue-500 placeholder-gray-500 text-gray-900 bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-blue-500 placeholder-gray-500 text-gray-900 bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="/#"
                    onClick={openModalUp}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    New user? Register here
                  </a>
                  <span className="mx-8">                    </span> {/* Adds a separator between the two links */}
    <a
      href="/#"
      className="font-medium text-indigo-600 hover:text-indigo-500"
    >
      Forgot password?
    </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign In
                </button>
              </div>

              <div className="mt-4">
                <SignInwithGoogle />
              </div>
            </form>

            {/* Modal for Register */}
            <ModalRegister isOpen={isModalOpenUp} onClose={closeModalUp} />
            <ModalLogin />
           </>
        )}
      </div>
    </div>
  );
}

export default Login;
