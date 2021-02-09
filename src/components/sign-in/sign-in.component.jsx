import { useState } from "react";
import { FormInput, Button } from "../index";
import { auth } from "../../firebase/firebase.utils";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      updateEmail("");
      updatePassword("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case "email": {
        updateEmail(value);
        break;
      }
      case "password": {
        updatePassword(value);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="password"
          required
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
