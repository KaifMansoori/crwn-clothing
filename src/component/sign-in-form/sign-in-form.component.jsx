import { useState } from "react";
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.style.scss';
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields=()=>{
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
}

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/invalid-credential'){
        alert('Incorrect Credentials')
      }
     console.log(error)
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Already have an account?</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
       

        
        <FormInput
        label="Email Address"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        
        <FormInput
       label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign in</Button>
        </div>
       
       
      </form>
    </div>
  );
};

export default SignInForm;
