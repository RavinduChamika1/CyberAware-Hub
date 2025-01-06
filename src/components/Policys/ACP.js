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
          <h1>Access Control Policy</h1>
          <br></br>
          <br></br>
          <p>The <strong>Access Control Policy</strong> outlines the rules for managing who can access the company’s systems, data, and physical resources. This policy ensures that only authorized individuals can access sensitive information or critical systems, reducing the risk of security breaches or data theft. Proper access control protects both the organization and its employees.</p>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4926/4926120.png"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>

    <br></br>
    <br></br>
    <h3>Purpose of the Access Control Policy</h3>
    <ul>
        <li>Ensure that only authorized personnel have access to company systems and sensitive information.</li>
        <li>Prevent unauthorized access, which could lead to data breaches or security risks.</li>
        <li>Protect the confidentiality, integrity, and availability of company data and resources.</li>
    </ul>

    <hr></hr>

    <h3>What Is Covered Under the Access Control Policy?</h3>

    <h4>1. User Access Levels</h4>
    <ul>
        <li><strong>What this means:</strong> Different employees need different levels of access to systems and data based on their job roles and responsibilities. This policy ensures that users only have access to what they need to perform their tasks—this is known as the <strong>principle of least privilege</strong>.</li>
        <li><strong>What is expected:</strong> Employees will only have access to the systems, applications, and data that are necessary for their job duties. If additional access is required, it must be approved by management or the IT department.</li>
        <li><strong>Example:</strong> A sales representative might need access to customer records but not to the company’s financial systems.</li>
    </ul>

    <h4>2. Account Creation and Management</h4>
    <ul>
        <li><strong>What this means:</strong> The process for creating, updating, and deactivating user accounts must be managed carefully to ensure that only authorized individuals have active access.</li>
        <li><strong>What is expected:</strong> New accounts are created based on approval from management. When an employee changes roles or leaves the company, their access should be modified or removed to reflect their current status.</li>
        <li><strong>Example:</strong> When an employee leaves the organization, their accounts should be deactivated immediately to prevent unauthorized access.</li>
    </ul>

    <h4>3. Password Protection</h4>
    <ul>
        <li><strong>What this means:</strong> Passwords are a key part of access control. Employees must use strong, secure passwords to protect their accounts from unauthorized access.</li>
        <li><strong>What is expected:</strong> Employees should follow the <strong>Password Management Policy</strong> by creating strong passwords (at least 12 characters, with a mix of upper- and lower-case letters, numbers, and special characters). Passwords should not be shared with anyone.</li>
        <li><strong>Example:</strong> An employee's account might be compromised if they use weak or easily guessed passwords, so strong password rules are enforced to protect systems.</li>
    </ul>

    <h4>4. Multi-Factor Authentication (MFA)</h4>
    <ul>
        <li><strong>What this means:</strong> Multi-Factor Authentication (MFA) adds an extra layer of security by requiring employees to provide two or more forms of verification when logging in.</li>
        <li><strong>What is expected:</strong> Employees must use MFA for accessing critical systems or sensitive data. This typically involves entering a password plus a code sent to their phone or email.</li>
        <li><strong>Example:</strong> After entering your password, you may be required to enter a verification code sent to your phone to access a secure application.</li>
    </ul>

    <h4>5. Access Review and Auditing</h4>
    <ul>
        <li><strong>What this means:</strong> Regular reviews of who has access to systems and data help ensure that access levels are appropriate and up to date. Access logs are also audited to track who is accessing sensitive systems and data.</li>
        <li><strong>What is expected:</strong> The IT department will regularly review and audit user access to ensure that employees only have access to the resources they need. Any inappropriate access will be corrected immediately.</li>
        <li><strong>Example:</strong> During an access review, it may be determined that an employee who changed roles still has access to systems they no longer need. This access will be removed.</li>
    </ul>

    <h4>6. Remote Access</h4>
    <ul>
        <li><strong>What this means:</strong> Employees may need to access company systems remotely, especially when working from home or traveling. This section ensures that remote access is secure.</li>
        <li><strong>What is expected:</strong> Employees who need remote access must use secure methods such as <strong>Virtual Private Networks (VPNs)</strong> to connect to the company’s systems. MFA may also be required for remote access.</li>
        <li><strong>Example:</strong> When working from home, an employee will use a VPN to securely connect to the company network and access internal systems.</li>
    </ul>

    <h4>7. Physical Access Control</h4>
    <ul>
        <li><strong>What this means:</strong> Physical access to critical areas, such as data centers or server rooms, must be controlled to prevent unauthorized individuals from accessing sensitive hardware or data.</li>
        <li><strong>What is expected:</strong> Only authorized personnel will have access to these secure areas, and physical access will be logged and monitored. Employees must use their keycards or other credentials to enter restricted areas.</li>
        <li><strong>Example:</strong> Only IT staff may have access to the server room, and their entry will be recorded in a log for security purposes.</li>
    </ul>

    <hr></hr>

    <h3>Consequences of Violating the Access Control Policy</h3>
    <p>Failure to comply with this policy could lead to serious security breaches, data loss, or unauthorized access to sensitive information. Violations of the Access Control Policy may result in:</p>
    <ul>
        <li>Restricted access to systems or accounts.</li>
        <li>Disciplinary action, which may range from a warning to termination depending on the severity of the violation.</li>
        <li>Increased risk of data theft or system compromise, which could lead to financial losses and damage to the company’s reputation.</li>
    </ul>
    <p><strong>Example:</strong> If an employee shares their login credentials with someone who is not authorized to access the system, they could face disciplinary action, and the company may suffer a security breach.</p>

    <hr></hr>

    <h3>Why This Policy Matters</h3>
    <ul>
        <li><strong>Protecting Sensitive Information:</strong> By controlling who has access to data and systems, this policy helps prevent unauthorized access and protects confidential information.</li>
        <li><strong>Preventing Data Breaches:</strong> Limiting access reduces the risk of cyberattacks or insider threats, where individuals could misuse their access to harm the company.</li>
        <li><strong>Compliance with Regulations:</strong> Many laws and regulations, such as <strong>GDPR</strong> and <strong>HIPAA</strong>, require companies to have strong access controls in place to protect personal and sensitive data. Following this policy helps the company comply with these legal obligations.</li>
    </ul>

    <hr></hr>

    <h3>What You Should Do</h3>
    <ul>
        <li><strong>Only access what you need:</strong> Use your access rights responsibly and only access the systems or data necessary for your job.</li>
        <li><strong>Keep your passwords secure:</strong> Never share your passwords with anyone and follow the guidelines for creating strong passwords.</li>
        <li><strong>Use Multi-Factor Authentication (MFA):</strong> Whenever MFA is required, make sure you complete the additional steps to secure your login.</li>
        <li><strong>Report security concerns:</strong> If you notice that you have access to systems or data that you shouldn’t, report it to the IT department immediately.</li>
        <li><strong>Secure remote access:</strong> Always use secure methods, such as VPNs, when accessing company systems remotely.</li>
        <li><strong>Follow physical security protocols:</strong> Only enter restricted areas if you are authorized, and use your credentials to access those spaces.</li>
    </ul>

    <p>By following the <strong>Access Control Policy</strong>, you help protect the company’s sensitive information and ensure that our systems remain secure from unauthorized access. This policy is essential for maintaining the integrity of our IT infrastructure and preventing data breaches.</p>

      

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
