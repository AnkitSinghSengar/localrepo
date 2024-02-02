import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav">
        <Link className="nav-link active" to="/GroupChat">
          Group Chats
        </Link>
        <Link className="nav-link active" to="/ManageUsers">
          Manage Users
        </Link>
        <Link className="nav-link active" to="/ManageDocuments">
          Manage Documents
        </Link>
        <Link className="nav-link active" to="/Logouts">
          Logouts
        </Link>
      </div>
    </nav>
  );
}

export default Header;
