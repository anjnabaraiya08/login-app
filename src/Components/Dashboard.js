import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const user = localStorage.getItem("user");
  const data = JSON.parse(user);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <>
      {data ? (
        <div className="home_page">
          <div className="welcome">Welcome to home page</div>
          <button className="logout_button" onClick={logout}>Log out</button>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Dashboard;
