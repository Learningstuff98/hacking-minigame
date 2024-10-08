import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <div className="log-out-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    Log Out
  </div>
};

export default LogoutButton;
