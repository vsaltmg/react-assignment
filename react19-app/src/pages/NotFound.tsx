
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "#61dafb", textDecoration: "underline" }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
