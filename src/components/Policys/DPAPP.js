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
          <h1>Data Protection and Privacy Policy</h1>
          <br></br>
          <br></br>
          <p>The <strong>Data Protection and Privacy Policy</strong> outlines how the organization handles, stores, and protects sensitive data, ensuring that it remains secure and confidential. This policy applies to all employees, contractors, and third-party vendors who interact with the organization's data. Understanding this policy is important for everyone, as it helps protect both the organization and the personal information of customers, employees, and partners.</p>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5403/5403545.png"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>
<br></br>
<br></br>
<h3>Purpose of the Data Protection and Privacy Policy</h3>
<ul>
    <li>Ensure that sensitive data is protected from unauthorized access, theft, or misuse.</li>
    <li>Comply with legal and regulatory requirements for data privacy (e.g., GDPR, HIPAA).</li>
    <li>Clarify employees' responsibilities in maintaining data security and privacy.</li>
</ul>

<hr></hr>

<h3>What Is Covered Under the Data Protection and Privacy Policy?</h3>

<h4>1. What Is Considered Sensitive Data:</h4>
<ul>
    <li><strong>What this means:</strong> Sensitive data refers to any information that must be protected due to its confidential or personal nature.</li>
    <li><strong>What is expected:</strong> Employees must be aware of what constitutes sensitive data and handle it with care. This includes:
        <ul>
            <li><strong>Personal data:</strong> Such as names, addresses, phone numbers, or social security numbers.</li>
            <li><strong>Financial data:</strong> Including credit card information, bank account details, or payment information.</li>
            <li><strong>Health data:</strong> Patient records or any health-related information.</li>
            <li><strong>Confidential company data:</strong> Proprietary information, intellectual property, or business strategies.</li>
        </ul>
    </li>
    <li><strong>Example:</strong> When handling customer records containing personal information, employees must ensure this data is protected and not shared with unauthorized individuals.</li>
</ul>

<h4>2. Data Collection and Use:</h4>
<ul>
    <li><strong>What this means:</strong> The organization collects personal and sensitive data for specific purposes, such as providing services or managing employees.</li>
    <li><strong>What is expected:</strong> Employees must only collect data that is necessary for their work and must ensure that data is used for its intended purpose only.</li>
    <li><strong>Example:</strong> If you're collecting customer information to complete a sale, only gather the information you need, and do not use it for any other purpose without permission.</li>
</ul>

<h4>3. Data Access Control:</h4>
<ul>
    <li><strong>What this means:</strong> Not all employees should have access to all types of data. Access must be restricted based on the employee’s role and responsibilities.</li>
    <li><strong>What is expected:</strong> Employees should only access the data they need to perform their job and should never share access with unauthorized individuals.</li>
    <li><strong>Example:</strong> An employee in the finance department may need access to financial records, but they should not have access to sensitive health data.</li>
</ul>

<h4>4. Data Storage:</h4>
<ul>
    <li><strong>What this means:</strong> Sensitive data must be stored securely to prevent unauthorized access or theft.</li>
    <li><strong>What is expected:</strong> Employees must follow guidelines for secure data storage, including using encryption and password protection for electronic data, and storing physical documents in locked cabinets.</li>
    <li><strong>Example:</strong> When storing customer financial information, ensure that the data is encrypted, and access is limited to authorized personnel only.</li>
</ul>

<h4>5. Data Transmission:</h4>
<ul>
    <li><strong>What this means:</strong> When sensitive data is being shared or transmitted (e.g., via email, file transfer, etc.), it must be protected to ensure that it does not fall into the wrong hands.</li>
    <li><strong>What is expected:</strong> Employees should use secure methods to transmit data, such as encryption, secure email services, or virtual private networks (VPNs). Never send sensitive data through unsecured channels.</li>
    <li><strong>Example:</strong> If you need to send confidential financial reports to a colleague, use a secure, encrypted email service rather than a standard email.</li>
</ul>

<h4>6. Data Retention and Deletion:</h4>
<ul>
    <li><strong>What this means:</strong> The organization must only keep data for as long as it is needed and must dispose of it securely when it is no longer required.</li>
    <li><strong>What is expected:</strong> Employees should follow data retention schedules, ensuring that outdated or unnecessary data is deleted or destroyed according to company guidelines.</li>
    <li><strong>Example:</strong> After completing a project that involved customer information, ensure that any data that is no longer needed is securely deleted from systems or shredded if in paper form.</li>
</ul>

<h4>7. Data Breaches and Reporting:</h4>
<ul>
    <li><strong>What this means:</strong> A data breach occurs when sensitive data is exposed, lost, or stolen. It is critical to act quickly to minimize the damage.</li>
    <li><strong>What is expected:</strong> Employees must report any suspected or confirmed data breaches to the IT or security department immediately. Quick action can prevent further exposure and help the organization comply with reporting regulations.</li>
    <li><strong>Example:</strong> If a laptop containing confidential company data is lost, report it immediately so that the IT department can take steps to secure the data, such as remotely wiping the device.</li>
</ul>

<hr></hr>

<h3>Consequences of Violating the Data Protection and Privacy Policy</h3>
<p>Violating this policy can lead to serious consequences for both the organization and the employee involved. Consequences may include:</p>
<ul>
    <li>Legal and regulatory fines or penalties for non-compliance.</li>
    <li>Disciplinary action, which could range from a warning to termination, depending on the severity of the violation.</li>
    <li>Reputational damage to the organization if sensitive data is exposed or misused.</li>
</ul>
<p><strong>Example:</strong> If an employee improperly shares confidential customer information, this could result in a breach of privacy laws, leading to fines and damage to the company’s reputation.</p>

<hr></hr>

<h3>Why This Policy Matters</h3>
<ul>
    <li><strong>Protecting Sensitive Data:</strong> Following this policy helps prevent unauthorized access to personal, financial, and confidential information.</li>
    <li><strong>Compliance with Laws:</strong> Many laws and regulations require the organization to protect sensitive data. Complying with this policy ensures we meet those requirements and avoid fines or legal issues.</li>
    <li><strong>Maintaining Trust:</strong> Protecting data privacy is essential to maintaining the trust of customers, partners, and employees. When people know their information is secure, they are more likely to engage with the company.</li>
</ul>

<hr></hr>

<h3>What You Should Do</h3>
<ul>
    <li><strong>Handle sensitive data carefully:</strong> Always ensure that personal and confidential information is protected and only shared with authorized individuals.</li>
    <li><strong>Limit access to data:</strong> Only access the data you need to do your job, and never share access with unauthorized people.</li>
    <li><strong>Store and transmit data securely:</strong> Use encryption and secure methods for storing and sharing data to protect it from being accessed by unauthorized individuals.</li>
    <li><strong>Follow data retention and deletion policies:</strong> Dispose of data securely when it is no longer needed, according to company guidelines.</li>
    <li><strong>Report data breaches immediately:</strong> If you suspect that data has been lost, stolen, or exposed, report it to IT immediately so that the appropriate actions can be taken.</li>
</ul>

<p>By following the <strong>Data Protection and Privacy Policy</strong>, you help ensure that the organization’s sensitive information remains secure

and that we comply with privacy laws and regulations. This is key to protecting the company, our customers, and our reputation.</p>

      

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
