import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth, firebaseDb } from "../../firebase/firebase.config";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { signupFields } from "../../constant/RegisterationConst";
import { showErrorToast, showSuccessToast } from "../../hoc/HocToast";
import { useMyState } from "../../context/myState";

const useRegisterationHook = () => {
  const { loading, setLoading, setUser } = useMyState();
  const navigate = useNavigate();

  /* -------------------------------------------------------------------------- */
  /*                                  common in both                            */
  /* -------------------------------------------------------------------------- */

  const [error, setError] = useState(null);

  const getCustomErrorMessage = (errorCode) => {
    // Create a mapping of Firebase error codes to custom error messages
    const errorMessages = {
      "auth/invalid-email":
        "Invalid email address. Please try with a different email.",
      "auth/email-already-in-use":
        "Email address is already in use. Please use a different email or login",
      "auth/wrong-password":
        "Wrong password. Please enter the correct password.",
      "auth/email-not-found":
        "Email not found. The provided email address is not registered.",
    };

    return (
      errorMessages[errorCode] || "An error occurred. Please try again later."
    ); // Default message
  };

  /* -------------------------------------------------------------------------- */
  /*                                   signup                                   */
  /* -------------------------------------------------------------------------- */

  const fieldsState = Object.fromEntries(
    signupFields.map((field) => [field.id, ""])
  );
  const [signupState, setSignupState] = useState(fieldsState);
  const isSignUpValid = Object.values(signupState).every(
    (value) => value.trim() !== ""
  );

  const handleSignUp = (e) => {
    const { id, value } = e.target;
    setSignupState({ ...signupState, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signupState.password !== signupState["confirm-password"]) {
      setError("Password and Confirm Password do not match");
    } else {
      createAccount();
    }
  };

  // Handle Signup API Integration here
  const createAccount = async () => {
    setLoading(true);
    const { email, password, name } = signupState;
    try {
      const users = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      await updateProfile(users.user, {
        displayName: name,
      });
      const user = {
        name: users.user.displayName,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(firebaseDb, "users");
      await addDoc(userRef, user);
      localStorage.setItem("user", JSON.stringify(users));
      localStorage.setItem("cart", "");
      localStorage.removeItem("finalPrice");
      showSuccessToast("Signup Succesfully");
      setLoading(false);
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = getCustomErrorMessage(errorCode);
      setLoading(false);
      setError(errorMessage);
      showErrorToast(errorMessage);
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                                    Login                                   */
  /* -------------------------------------------------------------------------- */

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const isLoginValid = Object.values(loginState).every(
    (value) => value && value.trim() !== ""
  );

  const handleLogin = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    accountLogin();
  };

  const accountLogin = async () => {
    setLoading(true);
    const { email, password } = loginState;
    try {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      localStorage.setItem("user", JSON.stringify(userCredential));
      const user = userCredential.user;
      setUser(user);
      showSuccessToast("Signin Successfully");
      setLoading(false);
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = getCustomErrorMessage(errorCode);
      setLoading(false);
      setError(errorMessage);
      showErrorToast(errorMessage);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      localStorage.setItem("user", JSON.stringify(result));
      const user = result.user;
      setUser(user);
      showSuccessToast("Signin with Google Successfully");
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError("Error signing in with Google");
      showErrorToast("Error signing in with Google");
    }
  };

  const handleForgotPassword = async () => {
    const email = prompt("Enter your email address:");
    if (email) {
      try {
        await sendPasswordResetEmail(firebaseAuth, email);
        showSuccessToast(
          "Password reset email sent successfully. Check your inbox."
        );
      } catch (error) {
        const errorMessage =
          error.message || "Error sending password reset email.";
        showErrorToast(errorMessage);
      }
    }
  };

  return {
    error,
    handleSubmit,
    handleSignUp,
    loading,
    setLoading,
    isSignUpValid,
    signupFields,
    signupState,
    accountLogin,
    handleLogin,
    handleSubmitLogin,
    isLoginValid,
    loginState,
    handleGoogleLogin,
    handleForgotPassword,
  };
};

export default useRegisterationHook;
