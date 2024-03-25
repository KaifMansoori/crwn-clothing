import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const loggedGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef =  await createUserDocumentFromAuth(user);
    }

    const loggedGoogleRedirect = async () => {
      const {user} = await signInWithGoogleRedirect();
      console.log({user})
  }

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={loggedGoogleUser}>Signup with Google</button>
      <button onClick={loggedGoogleRedirect}>Signup with Redirect</button>
      <SignUpForm/>

    </div>
  )
}

export default SignIn;

