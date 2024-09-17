import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
//import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth } from "./firebase";

function SignInwithGoogle() {
  const provider = new GoogleAuthProvider();
  
  function googleLogin() {
    // Initiating Google login with redirect
    signInWithRedirect(auth, provider).then(() => {
      // Firebase automatically handles redirect flow, so we don't need to handle the result immediately here
      // The user will be redirected after authentication, and Firebase will handle returning to your app.
    }).catch((error) => {
      console.error("Error during Google Sign-In:", error);
      toast.error("Login failed", { position: "top-center" });
    });
  }

  return (
    <div>
      <p className="continue-p text-center">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={require("../assets/google.png")} width={"60%"} alt="Sign in with Google" />
      </div>
    </div>
  );
}

export default SignInwithGoogle;
