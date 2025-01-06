import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import Userlist from "./Admin/Userlist";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function Dashboard() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading
  const navigate = useNavigate(); // For redirection

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("No such document!");
        }
        setLoading(false); // Stop loading once data is fetched
      } else {
        navigate("/login"); // Redirect to login if not authenticated
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  if (loading) {
    // Show a loading indicator while checking authentication
    return (
      <div>
        Loading 
        <br />
        <img
          src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
          width={"5%"}
          style={{ borderRadius: "50%" }}
          alt="User Profile"
        />
      </div>
    );
  }

  return (
    <div>
      <header style={styles.header}>
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg__AzXw2m6KyNZ85Qu8F0PR5NXBcviPks7-bLZ9ZBu1Gj89A"
            alt="Logo"
            style={{ width: "50px" }}
          />
        </div>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <a href="./profile">Home</a>
            </li>
            <li style={styles.navItem}>
              <a href="./Programs">Frameworks</a>
            </li>
            <li style={styles.navItem}>
              <a href="./Policys">Security Policy</a>
            </li>
            <li style={styles.navItem}>
              <a href="./Quiz">Quiz</a>
            </li>
            <li style={styles.navItem}>
              <a href="./Dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
        <button
          className="btn btn-primary"
          onClick={handleLogout}
          style={styles.logoutBtn}
        >
          Logout
        </button>
      </header>
      <div className="olap" style={styles.tableContainer}>
        {/* Table */}
        <Box height={10} />
        <Box width={1420} />
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 style={styles.tableHeader}>LEADERBOARD</h2>
          <Userlist />
        </Box>
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    backgroundColor: "#f5f5f5",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "5px",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
  logoutBtn: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  },
  tableContainer: {
    backgroundColor: "#f9f9f9",
    padding: "40px",
    paddingBottom:"300px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    width: "100%",
    margin: "auto",
  },
  tableHeader: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#007bff",
    fontSize: "1.8em",
    fontWeight: "bold",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableRow: {
    backgroundColor: "#e0f7fa",
    color: "#007bff",
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #ddd",
  },
  navItem: {
    marginRight: "20px",
    fontWeight: "bold", // Make the text bolder
    letterSpacing: "0.05em", // Slight spacing between letters
    textTransform: "uppercase", // Capitalize the text
    color: "#007bff", // Blue text color
    textDecoration: "none", // Remove underline
    cursor: "pointer", // Pointer on hover
  },
  navItemHover: {
    textDecoration: "underline", // Underline on hover
  },
};

export default Dashboard;
