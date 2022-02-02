import { useState } from 'react';
import { GoogleLogin /*, GoogleLogout*/ } from 'react-google-login';
import axios from 'axios';
import toast from 'react-hot-toast';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const GOOGLE_CLIENT_ID =
  '1052475807544-hl5ilhli1cbl912v0kseaok7mmk2guob.apps.googleusercontent.com';

const rejectedGoogle = response => {
  console.log('rejectedGoogle', response);
};

// const logout = () => {
//   console.log('onLogoutSuccess');
// };

export default function GoogleAuth() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [googleToken, setGoogleToken] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const responseGoogle = response => {
    try {
      console.log('responseGoogle', response);
      console.log('responseGoogle.profileObj', response.profileObj);

      setName(response.profileObj.name);
      setEmail(response.profileObj.email);
      setAvatar(response.profileObj.imageUrl);
      setGoogleToken(response.accessToken);
      setIsSignedIn(true);

      token.set(response.accessToken);

      console.log('axios-header', axios.defaults.headers.common.Authorization);

      //imitation of ours "data"
      // const data = {
      //   token: response.accessToken,
      //   user: {
      //     name: response.profileObj.name,
      //     email: response.profileObj.email,
      //   },
      // };

      // console.log('data', data);
      // return data;
      //imitation of ours "data"

      return response;
    } catch (error) {
      toast.error('An error has occurred, check the entered data');
      console.log(error);
      throw new Error(error);
    }
  };

  return (
    <>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={rejectedGoogle}
        cookiePolicy={'single_host_origin'}
      />

      {/* <GoogleLogout
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={logout}
      /> */}
    </>
  );
}

// console.log('name', name);
// console.log('email', email);
// console.log('avatar', avatar);
// console.log('googleToken', googleToken);
// console.log('isSignedIn', isSignedIn);

/* http://localhost:3000/ */
/* https://great-phonebook.netlify.app/ */

/* notes */
/* https://anthonyjgrove.github.io/react-google-login/?path=/info/google-login-button--default-button */
