import { singInWithGooglePopUp } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await singInWithGooglePopUp();
    console.log(response);
  };

  return (
    <div>
      <h1>Sing in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
