import { useState } from "react";
import MyNavbar from "../../components/Navbar/Navbar";
import "./Login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const submitHandler = () => {
    if (userName == "admin" && password == "123456") {
      document.cookie =
        "userName=admin; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
      navigate("/panel");
    } else {
      Swal.fire({
        title: "Error!",
        text: "نام کاربری و یا رمز عبور اشتباه است",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="username"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <button onClick={submitHandler} type="button">
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
