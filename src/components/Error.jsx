import { useRouteError } from "react-router-dom";

export default function Error() {

  const error = useRouteError();

  return (
    <div className="vans-error-page error-page">
      <h1>{error.message}</h1>
      <pre>{error.status} - {error.statusText}</pre>
    </div>
  ) 
}
