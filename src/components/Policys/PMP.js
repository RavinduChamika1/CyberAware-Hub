import React, { useEffect, useState } from "react";

function Profile() {
  const [userDetails] = useState({
    
  });



  useEffect(() => {
    // Here you can add any logic you want to run when the component mounts
  }, []);

  async function handleLogout() {
    // Logic to handle logout (redirect or local logout)
    window.location.href = "/login";
    console.log("User logged out successfully!");
  }

  return (
    <div>
      {userDetails ? (
        <>
          <header style={styles.header}>
            <div className="logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg__AzXw2m6KyNZ85Qu8F0PR5NXBcviPks7-bLZ9ZBu1Gj89A" alt="Logo" style={{ width: "50px" }} />
            </div>
            <nav>
              <ul style={styles.navList}>
                <li style={styles.navItem}><a href="./profile">Home</a></li>
                <li style={styles.navItem}><a href="./Programs">Frameworks</a></li>
                <li style={styles.navItem}><a href="./Policys">Security Policy</a></li>
                <li style={styles.navItem}><a href="./Quiz">Quiz</a></li>  
              </ul>
            </nav>
            <button className="btn btn-primary" onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </header>

          
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function BlogHomepage() {
  return (
    <div>
      {/* Including the Profile Component */}
      <Profile />

      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1>Password Management Policy</h1>
          <br></br>
          <br></br>
          <p>The <strong>Password Management Policy</strong> is designed to ensure that all employees create and use secure passwords to protect the organization’s systems and sensitive data. Passwords are the first line of defense against unauthorized access, so it’s important to follow the guidelines outlined in this policy.</p>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5850/5850971.png"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>

 
    <br></br>


    <h3>Purpose of the Password Management Policy</h3>
    <ul>
        <li>Ensure that all employees create strong, secure passwords.</li>
        <li>Prevent unauthorized access to systems and data.</li>
        <li>Minimize the risk of security breaches caused by weak or compromised passwords.</li>
    </ul>

    <hr></hr>
    <h3>What Is Covered Under the Password Management Policy?</h3>
    
    <h4>1. Creating Strong Passwords:</h4>
    <ul>
        <li><strong>What this means:</strong> A strong password is one that is difficult for others to guess or crack. It helps protect your account from unauthorized access.</li>
        <li><strong>What is expected:</strong> All employees must create strong passwords that meet the following criteria:
            <ul>
                <li>At least <strong>12 characters long</strong>.</li>
                <li>Contains a mix of <strong>upper and lower case letters</strong>, <strong>numbers</strong>, and <strong>special characters</strong> (e.g., !, @, #, $, etc.).</li>
                <li>Avoid using easily guessed information like your name, birthdate, or common words (e.g., "password123").</li>
            </ul>
        </li>
        <li><strong>Example:</strong> A strong password might look like this: <strong>P@ssw0rd$ecure#2023</strong></li>
    </ul>

    <h4>2. Password Updates:</h4>
    <ul>
        <li><strong>What this means:</strong> To ensure ongoing security, passwords should be changed regularly to prevent unauthorized access.</li>
        <li><strong>What is expected:</strong> Employees must update their passwords every <strong>90 days</strong>. If you suspect your password has been compromised, change it immediately.</li>
        <li><strong>Example:</strong> If your work password is 3 months old, you’ll receive a reminder to create a new one that follows the strong password guidelines.</li>
    </ul>

    <h4>3. Unique Passwords for Different Accounts:</h4>
    <ul>
        <li><strong>What this means:</strong> Using the same password for multiple accounts creates a security risk. If one account is compromised, all other accounts using the same password are also at risk.</li>
        <li><strong>What is expected:</strong> Employees must use unique passwords for each work-related system or account. Do not reuse passwords across multiple systems.</li>
        <li><strong>Example:</strong> The password you use to log into your company email should be different from the one used to access the company’s internal tools.</li>
    </ul>

    <h4>4. Multi-Factor Authentication (MFA):</h4>
    <ul>
        <li><strong>What this means:</strong> Multi-Factor Authentication (MFA) adds an extra layer of security by requiring a second form of verification, like a code sent to your phone, in addition to your password.</li>
        <li><strong>What is expected:</strong> Where available, employees must enable and use <strong>Multi-Factor Authentication (MFA)</strong> to access sensitive systems.</li>
        <li><strong>Example:</strong> After entering your password, you’ll receive a code on your phone that you must enter to complete the login process.</li>
    </ul>

    <h4>5. Password Storage:</h4>
    <ul>
        <li><strong>What this means:</strong> Storing passwords in an insecure manner (e.g., writing them down on paper or saving them in a text file) makes it easy for others to access your accounts.</li>
        <li><strong>What is expected:</strong> Never write down or store your password in an unprotected location. Use a <strong>password manager</strong> to store and manage your passwords securely.</li>
        <li><strong>Example:</strong> If you have trouble remembering multiple passwords, use a secure password manager instead of writing them on a sticky note.</li>
    </ul>

    <h4>6. Password Sharing:</h4>
    <ul>
        <li><strong>What this means:</strong> Sharing passwords with others creates a security risk, as it allows multiple people to access sensitive systems without accountability.</li>
        <li><strong>What is expected:</strong> Never share your password with anyone, even coworkers or IT staff. If someone needs access to a system, they should have their own credentials.</li>
        <li><strong>Example:</strong> If a colleague asks for your password to access a system, refer them to the IT department to get their own login credentials.</li>
    </ul>

    <h4>7. Reporting Password Compromises:</h4>
    <ul>
        <li><strong>What this means:</strong> If your password is stolen or you suspect someone has gained unauthorized access to your account, immediate action is needed to prevent further damage.</li>
        <li><strong>What is expected:</strong> If you believe your password has been compromised, report it to the IT department right away and change your password immediately.</li>
        <li><strong>Example:</strong> If you receive a notification that someone tried to log into your account from an unknown location, report it and change your password right away.</li>
    </ul>

    <hr></hr>
    <h3>Consequences of Violating the Password Management Policy</h3>
    <p>If employees do not follow this policy, they may unintentionally expose the organization to security risks. Failing to comply with this policy may result in:</p>
    <ul>
        <li>Restricted access to systems or data.</li>
        <li>Disciplinary action, depending on the severity of the violation.</li>
        <li>Increased vulnerability to security breaches.</li>
    </ul>
    <p><strong>Example:</strong> If an employee reuses weak passwords and those passwords are compromised in a cyberattack, they may be held responsible for the security breach, and disciplinary action could follow.</p>

    <hr></hr>

    <h3>Why This Policy Matters</h3>
    <ul>
        <li><strong>Security:</strong> Strong, unique passwords help protect the company’s systems from hackers and prevent unauthorized access to sensitive information.</li>
        <li><strong>Accountability:</strong> Passwords are tied to individual accounts, so protecting them ensures that access to company systems is properly controlled.</li>
        <li><strong>Preventing Cyberattacks:</strong> Weak or reused passwords are a common way for cybercriminals to break into systems. This policy helps reduce that risk.</li>
    </ul>

    <hr></hr>

    <h3>What You Should Do</h3>
    <ul>
        <li><strong>Create strong passwords</strong> that follow the guidelines (at least 12 characters, with a mix of letters, numbers, and symbols).</li>
        <li><strong>Change your passwords</strong> every 90 days or immediately if you suspect they’ve been compromised.</li>
        <li><strong>Use unique passwords</strong> for each system or account—don’t reuse the same password.</li>
        <li><strong>Enable Multi-Factor Authentication (MFA)</strong> whenever possible for an extra layer of security.</li>
        <li><strong>Never share your password</strong> with anyone, and always use a <strong>password manager</strong> to store passwords securely.</li>
        <li><strong>Report any suspicious activity</strong> or potential password compromises to IT immediately.</li>
    </ul>

    <p>By following the <strong>Password Management Policy</strong>, you are helping to protect the organization’s sensitive data, prevent cyberattacks, and maintain the overall security of the company’s systems.</p>

      

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
  navItem: {
    marginRight: "20px",
    fontWeight: "bold",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#007bff",
    textDecoration: "none",
    cursor: "pointer",
  },
  navItemHover: {
    textDecoration: "underline",
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

  // Additional styles from your earlier CSS
  body: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f4f9",
    color: "#333",
    lineHeight: "1.6",
    margin: 0,
    padding: "20px",
  },
  h1: {
    fontSize: "2.5em",
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  h2: {
    fontSize: "1.8em",
    marginBottom: "10px",
    borderBottom: "2px solid #3498db",
    paddingBottom: "5px",
  },
  h3: {
    fontSize: "1.4em",
    marginBottom: "8px",
    color: "#3498db",
  },
  ul: {
    listStyleType: "none",
    paddingLeft: 0,
  },
  ulLi: {
    backgroundColor: "#e7f1fd",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  ulLiStrong: {
    color: "#2980b9",
  },
  p: {
    marginBottom: "20px",
  },
  pStrong: {
    color: "#e74c3c",
  },
  pStrongExample: {
    backgroundColor: "#f9ecec",
    padding: "5px",
    display: "inline-block",
    borderLeft: "4px solid #e74c3c",
    marginTop: "10px",
  },
  hr: {
    border: 0,
    height: "2px",
    backgroundColor: "#3498db",
    margin: "40px 0",
  },
  btn: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "white",
    textAlign: "center",
    borderRadius: "5px",
    textDecoration: "none",
    marginTop: "20px",
  },
  btnHover: {
    backgroundColor: "#2980b9",
  },
  
  // Responsive styles
  responsive: {
    '@media (max-width: 768px)': {
      h1: {
        fontSize: "2em",
      },
      h2: {
        fontSize: "1.6em",
      },
      h3: {
        fontSize: "1.2em",
      },
    },
  },
};


export default BlogHomepage;
