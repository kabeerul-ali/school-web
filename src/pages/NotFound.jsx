
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <span>404</span>
      <h1>School Not Found</h1>
      <p>The school website you are looking for doesn't exist.</p>
      <Link to="/">Back to Home</Link>
    </main>
  );
}

export default NotFound;
