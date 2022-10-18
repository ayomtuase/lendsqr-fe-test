import { ReactComponent as Logo } from "../assets/lendsqr-logo.svg";

const NotFound = () => {
  return (
    <div className="error-page">
      <Logo height="50px" width="" />
      <h1>Page not found</h1>
      <p>You may have typed an invalid URL</p>
    </div>
  );
};

export default NotFound;
