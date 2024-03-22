import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const loggedGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef =  await createUserDocumentFromAuth(user);
    }
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={loggedGoogleUser}>Signup with Google</button>
    </div>
  )
}

export default SignIn;

