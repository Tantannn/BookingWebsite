import { useSelector } from "react-redux";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/login";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking Website</span>
        <div className="navItems">
          {auth.user.length>0 ? (
            <>
              <button className="navButton">
                <Link to="/">Hello {auth.user}</Link>{" "}
              </button>
              <button className="navButton">
                <Link to="/transactions">Transaction</Link>
              </button>
              <button className="navButton">
                <Link
                  to="/login"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Log Out
                </Link>
              </button>
            </>
          ) : (
            <>
              <button className="navButton">
                <Link to="/register">Register</Link>{" "}
              </button>
              <button className="navButton">
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
