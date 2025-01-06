import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function BlogHomepage() {
  const [userDetails, setUserDetails] = useState(null);

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
      } else {
        console.log("User is not logged in");
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

  const blogPosts = [
    {
      title: "What Is The IT Policies?",
      description: "",
      imageUrl:
        "https://t4.ftcdn.net/jpg/03/26/48/67/360_F_326486798_3qv1acjIrOn57hWgvYEH2g0qT1Y1F9b9.jpg",
      learnMoreLink: "./ITP",
    },
    {
      title: "Acceptable Use Policy (AUP)",
      description: "",
      imageUrl:
        "https://www.shutterstock.com/image-vector/validation-icon-vectoreditable-strokelinear-style-600nw-2424284533.jpg",
      learnMoreLink: "./AUP",
    },
    {
      title: "Password Management Policy",
      description: "",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5850/5850971.png",
      learnMoreLink: "./PMP",
    },
    {
      title: "Data Protection and Privacy Policy",
      description: "",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5403/5403545.png",
      learnMoreLink: "./DPAPP",
    },
    {
      title: "Incident Response Policy",
      description: "",
      imageUrl:
        "https://cdn-icons-png.freepik.com/256/13089/13089661.png?semt=ais_hybrid",
      learnMoreLink: "./IRP",
    },
    {
      title: "Access Control Policy",
      description: "",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/4926/4926120.png",
      learnMoreLink: "./ACP",
    },
    {
      title: "BYOD Policy",
      description: "",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/022/195/323/non_2x/byod-tour-icon-style-vector.jpg",
      learnMoreLink: "./BYOD",
    },
    {
      title: "Network Security Policy",
      description: "",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/8948/8948469.png",
      learnMoreLink: "./NSP",
    },
    {
      title: "Remote Access Policy",
      description: "",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/4403/4403212.png",
      learnMoreLink: "./RAP",
    },
    {
      title: "Backup and Disaster Recovery Policy",
      description: "",
      imageUrl:
        "https://www.shutterstock.com/image-vector/disaster-recovery-service-blue-concept-600nw-2264758889.jpg",
      learnMoreLink: "./BDRP",
    },
    {
      title: "Antivirus and Malware Protection Policy",
      description: "",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2333/2333316.png",
      learnMoreLink: "./AMPP",
    },
  ];

  return (
    <div style={styles.pageContainer}>
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

      {/* Blog Posts Section */}
      <section style={styles.blogSection}>
        <h2 style={{ textAlign: "center" }}>Cybersecurity Policies</h2>
        <br></br>
        <div style={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <div key={index} style={styles.blogCard}>
              <img
                src={post.imageUrl}
                alt={post.title}
                style={styles.blogImage}
              />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href={post.learnMoreLink} style={styles.learnMoreBtn}>
                Learn more
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  pageContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    backgroundColor: "#f5f5f5",
    paddingLeft: "20px",
    paddingRight: "20px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "50px",
  },
  navItem: {
    fontWeight: "bold",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#007bff",
    textDecoration: "none",
    cursor: "pointer",
  },
  logoutBtn: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  blogSection: {
    flex: 1,
    padding: "50px",
    backgroundColor: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  blogGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    width: "100%",
  },
  blogCard: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  blogImage: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  },
  learnMoreBtn: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    marginTop: "10px",
  },
};

export default BlogHomepage;
