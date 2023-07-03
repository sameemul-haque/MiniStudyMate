import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase-config";
import "./App.css";
import { FcGoogle } from "react-icons/fc";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {user ? (
        <div>
          <Form />
        </div>
      ) : (
        <div>
          {" "}
          <br />
          <br />
          <br />
          <br />
          <SignIn />
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button
        className="sign-in"
        id="signin"
        style={{ position: "relative", margin: "0 auto" }}
        onClick={signInWithGoogle}
      >
        <FcGoogle /> &nbsp;Sign in with Google
      </button>
    </>
  );
}

export default App;
