import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h3 style={styles.heading}>Account Login</h3>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputBox}>
            <label style={styles.label}>Email address</label>
            <input
              type="email"
              style={styles.input}
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              style={styles.input}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>
              Login
            </button>
          </div>
        </form>

        <p style={styles.textCenter}>
          Don't have an account?{" "}
          <a href="/register" style={styles.link}>
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
    backgroundColor: "#f5f5f5",
  },
  loginBox: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontWeight: "600px",
  },
  inputBox: {
    marginBottom: "20px",
  },
  label: {
    marginBottom: "5px",
    display: "block",
    fontWeight: "500",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  rememberMe: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  buttonContainer: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  textCenter: {
    textAlign: "center",
    marginTop: "20px",
    color: "#555",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default Login;
