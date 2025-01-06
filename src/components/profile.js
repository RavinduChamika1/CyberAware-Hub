import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";


let UID = 0;

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        UID = user.uid;
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
      localStorage.setItem("User ID: ", UID);
      
      
      
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
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
              <a href="./programs">Frameworks</a>
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
      {userDetails ? (
        <>
        <h1>
        <b>User Awareness And Training Portal</b>
      </h1>
         <div
  style={{
    textAlign: "center",
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "auto",
    fontFamily: "'Roboto', sans-serif",
  }}
>
  <img
    src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
    width={"25%"}
    style={{ borderRadius: "50%", marginBottom: "15px" }}
    alt="User Profile"
  />
  <h3
    style={{
      fontSize: "24px",
      margin: "10px 0",
      color: "#344",
      fontWeight: "bold",
    }}
  >
    Welcome {userDetails.firstName}
  </h3>
  <div
    style={{
      backgroundColor: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }}
  >
    <p style={{ fontSize: "16px", color: "#555", marginBottom: "8px" }}>
      Email: {userDetails.email}
    </p>
    <p style={{ fontSize: "16px", color: "#555", marginBottom: "8px" }}>
      First Name: {userDetails.firstName}
    </p>
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <p
        style={{
          fontSize: "16px",
          color: "#333",
          padding: "5px 10px",
          border: "1px solid blue",
          borderRadius: "5px",
        }}
      >
        Final Score: {userDetails.FinalScore}/27
      </p>
      <p
        style={{
          fontSize: "16px",
          color: "#333",
          padding: "5px 10px",
          border: "1px solid blue",
          borderRadius: "5px",
        }}
      >
        Initial Score: {userDetails.InitialScore}/10
      </p>
    </div>
    {console.log("User ID: ", UID)}
    {localStorage.setItem("UID", UID)}
  </div>
</div>

        </>
      ) : (
        <p>
          <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"width={"5%"}
              style={{ borderRadius: "50%" }}
              alt="User Profile"/>
        </p>
      )}
    </div>
  );
}

function BlogHomepage() {
  return (
    <div>
      {/* Including the Profile Component */}
      <Profile />

      

      <br></br>
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1>Initial Quiz</h1>
          <br></br>
          <p>
            <b>
              This Initial Quiz assesses your current idea and knowledge about
              security frameworks and policies.
            </b>
          </p>
          <br></br>
          <a href="./IQuiz" style={styles.learnMoreBtn}>
            Attempt The Quiz
          </a>
        </div>
        <div style={styles.heroImage}>
          <img
            src="https://www.teamly.com/blog/wp-content/uploads/2023/04/employee-training-and-development.png"
            alt="Framework Illustration"
            style={{ width: "50%" }}
          />
        </div>
      </div>

      <section style={styles.frameworks}>
        <h2>Our Frameworks</h2>
        <p>Certified Cybersecurity Experts 25+</p>
        <div style={styles.frameworkLogos}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAclBMVEX///8AAACAgICFhYWmpqafn596enpNTU3Hx8dCQkKqqqorKyvR0dHi4uKSkpLY2NgQEBC+vr719fU6OjrMzMzt7e0yMjKysrJsbGy6uroPDw+QkJD39/dkZGRXV1eKioojIyMaGho3NzdwcHBSUlKZmZkafu56AAADk0lEQVR4nO3aeVeyQBTH8XGBkkTTXLIss+X9v8XHMunOHbZBBs55zvfzp8B1fspyGTAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDINJnNosW6zqrzeHgx+/kgyT6IF/aqy9toNGxXnDaJl8aDX5tt9dq3g8zDzwfx3wdfcsXtZBDAtEHAoSxwnHsknOiE0d9qixDxGiXc36kS41YSPgYK6J9w79aIyreolfAhVED/hHlD2V2dMMgR2CxhlFvl9sqEQ7dkbwkLypSdbqoTzgMG9E04LqpTctWpThjuIPRPWHy8LJsnDPoX+iYsLnS/b5ww5FHomzAVW35+2ZU2jRPKKpOxr0T8QJvEWRzV6iwzUzEWZ++aNEy4FDUevYZzthK/eoPNbSLhnT32by/5G1UllD9U4a5eQtS/aRosoxKarR0xrhpBbkKnM/cUNKFRx+JzxQhyE4q9rPBYLhM2oRnZEfO6cJ+91O+04NS/PqEYzG9CfU+Q06L6nGmaDDF0QvNqR1yVjSD/anEvNn8ajko9J871LXhC3ec4LWplQrWnV3pZFdUPlNC82QPQx1JlwnTga5Lm1w+VUN8Uqxa1uvO+8Y4o77o7SGjW9rcffRP6/4ny2ttFQj3Ed8+EZtYg4qjThFbDqr+pziyGOiHXsnDrB0yo5wJli1prJqpJxH2nCU1if7toUevNJh78E44CJBTHm06oW9SZZ0Iz33hH7DihvlVPPBOeWnDfWeFtxwnNi/39OWeC8oQn811SLjqKb3gMmvA+Z7G6ck/9E9YgduYnXb/VhE95y9/tiKkeQRsJxe3kQNcP/h8ac7QjrtUI2kgoJ66Wqn4HCeW93re9+d8S6hb1zVi7VRsJ5fSX/qCLhLpFfbCmq84Jxf3g0HsIe3G/fB5DqISDonXkmeDkXV4mz82c7LM/ym/pHbGs/dFPwrLH1ee5uF3xCn52PSXULapwfs64LlzuyfSV0DyXD6mtJ77P/SU0sTOaH5duvKXXLkyPCXWLqjdp5ZHo5dF6PwlzJ5f+JgHbOBKz27OeEhr3bk/O+K+cpb4OWa2+Ejr/ov1+mJrY8Saq9ZbQfjHlTr/KsPy8It+rnHXuL6FZZs3LzSJn8TT/dFQtth8cOJ39NZaH2cWheu2TdDGOtqvCJ7vTbeRpvHDea0m/sqU13pQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJT7B8wrMF4JD1vAAAAAAElFTkSuQmCC"
            alt="NIST"
            style={styles.frameworkLogoImg}
          />
          <img
            src="data:image/png;base64,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"
            alt="HIPAA"
            style={styles.frameworkLogoImg}
          />
          <img
            src="data:image/png;base64,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"
            alt="PCI DSS"
            style={styles.frameworkLogoImg}
          />
          <img
            src="data:image/png;base64,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"
            alt="ITIL"
            style={styles.frameworkLogoImg}
          />
          <img
            src="data:image/png;base64,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"
            alt="MITRE ATT&CK"
            style={styles.frameworkLogoImg}
          />
        </div>
      </section>

      <section style={styles.securityInfo}>
        <div style={styles.infoItem}>
          <h3>Certified Cyber Security Professionals</h3>
          <p>
            “ Protecting your digital world through expert solutions and
            services. A trusted cybersecurity company dedicated to ensuring your
            online safety.”
          </p>
        </div>
        <div style={styles.infoItem}>
          <h3>GRC</h3>
          <br></br>
          <p>
            “Governance, Risk, and Compliance (GRC) - aligning IT with business
            goals while managing risks and meeting all industry and government
            regulations.”
          </p>
        </div>
        <div style={styles.infoItem}>
          <h3>About Us</h3>
          <br></br>
          <p>
            Harnessing Innovation, Ensuring Cyber Resilience , Enabling Secure
            Digital Transformation.{" "}
          </p>
        </div>
      </section>

      <section style={styles.clients}>
        <h2>Our Service Commitment to Excellence</h2>
        <p>
          “We adhere to a range of comprehensive compliances and standards,
          ensuring high-level service delivery and enabling our commitment to
          excellence for our clientele”
        </p>
        <div style={styles.clientLogos}>
          <img
            src="https://aioncybersecurity.com/wp-content/uploads/2023/07/AION-CS-hh.png"
            alt="Client 1"
            style={styles.clientLogoImg}
          />
        </div>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2024 Information Security Frameworks. All rights reserved.</p>
      </footer>
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
  hero: {
    display: "flex",
    justifyContent: "space-between",
    padding: "50px",
    backgroundColor: "#e0f7fa",
  },
  heroContent: {
    maxWidth: "50%",
  },
  learnMoreBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "5px",
  },
  frameworks: {
    textAlign: "center",
    padding: "50px",
  },
  frameworkLogos: {
    display: "flex",
    justifyContent: "center",
    gap: "60px",
  },
  frameworkLogoImg: {
    width: "100px",
  },
  securityInfo: {
    display: "flex",
    justifyContent: "space-between",
    padding: "50px",
    backgroundColor: "#f9f9f9",
  },
  infoItem: {
    maxWidth: "30%",
    textAlign: "center",
  },
  clients: {
    textAlign: "center",
    padding: "50px",
  },
  clientLogos: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  clientLogoImg: {
    width: "100px",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    marginTop: "20px",
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

export default BlogHomepage;
