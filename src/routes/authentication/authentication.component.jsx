import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import './authentication.style.scss';

const Authentication = () => {
    

  //   const loggedGoogleRedirect = async () => {
  //     const {user} = await signInWithGoogleRedirect();
  //     console.log({user})
  // }

  return (
    <div className="authenticatoin-container">
      <SignInForm/>
      <SignUpForm/>

    </div>
  )
}

export default Authentication;

