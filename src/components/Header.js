import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("loggedInUserEmail");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav">
        <Link className="nav-link active" to="/login/login-success/group-chat">
          Group Chats
        </Link>
        <Link className="nav-link active" to="/login/login-success/manage-user">
          Manage Users
        </Link>
        <Link
          className="nav-link active"
          to="/login/login-success/manage-document"
        >
          Manage Documents
        </Link>
        <button onClick={logout} className="nav-link active">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Header;
