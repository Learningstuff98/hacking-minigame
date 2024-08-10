import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <div className="log-in-button" onClick={() => loginWithRedirect()}>
    Log In
  </div>
};

export default LoginButton;
