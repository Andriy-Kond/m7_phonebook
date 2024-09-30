import { Link, Outlet } from "react-router-dom";

export default function SharedLayoutPage() {
  return (
    <>
      <Link to="/">Home Page</Link>
      <Link to="/login">Login Page</Link>

      <Outlet />
    </>
  );
}
