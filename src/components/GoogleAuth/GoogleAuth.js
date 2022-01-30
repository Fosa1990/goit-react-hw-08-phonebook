import { GoogleLogin } from 'react-google-login';

const GOOGLE_CLIENT_ID =
  '1052475807544-hl5ilhli1cbl912v0kseaok7mmk2guob.apps.googleusercontent.com';

const responseGoogle = response => {
  console.log(response);
};

const rejectedGoogle = response => {
  console.log(response);
};

export default function GoogleAuth(params) {
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={rejectedGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
}

/* http://localhost:3000/ */
/* https://great-phonebook.netlify.app/ */
