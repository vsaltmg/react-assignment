
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Personal Finance & Weather Dashboard</h1>
      <p>Manage your daily expenses and check the latest weather updates.</p>

      <div style={{ marginTop: "20px" }}>
        <Link
          to="/expenses"
          style={{
            marginRight: "20px",
            padding: "10px 15px",
            backgroundColor: "#61dafb",
            color: "#000",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Go to Expense Tracker
        </Link>

        <Link
          to="/weather"
          style={{
            padding: "10px 15px",
            backgroundColor: "#61dafb",
            color: "#000",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Go to Weather App
        </Link>
      </div>
    </div>
  );
};

export default Home;
