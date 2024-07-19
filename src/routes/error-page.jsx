import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return <h2 className="green">
    <div>An unexpected error has occured:</div>
    {error.statusText || error.message}
  </h2>
}

export default ErrorPage
