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
          <h1>Acceptable Use Policy (AUP)</h1>
          <br></br>
          <br></br>
          <br></br>
          <p>The <strong>Acceptable Use Policy (AUP)</strong> is one of the most important policies in the organization because it outlines how employees are allowed to use the company's IT resources—such as computers, the internet, email, and software—while ensuring that these resources are used responsibly and securely.</p>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://www.shutterstock.com/image-vector/validation-icon-vectoreditable-strokelinear-style-600nw-2424284533.jpg"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>

  

      <br></br>
<br></br>

<h3><strong>Purpose of the Acceptable Use Policy</strong></h3>

<p>The goal of this policy is to:</p>
<ul>
    <li>Ensure that company-owned IT resources are used properly.</li>
    <li>Protect the organization from potential security threats like malware, data breaches, and unauthorized access.</li>
    <li>Make sure employees understand what is acceptable and what is not when using company devices and networks.</li>
</ul>

<hr></hr>

<h3><strong>What Is Covered Under the Acceptable Use Policy?</strong></h3>

<ol>
    <li><strong>Use of IT Resources</strong>:
        <ul>
            <li><strong>What this means:</strong> Employees are given access to computers, internet, software, and other digital tools to do their work.</li>
            <li><strong>What is expected:</strong> Use these resources for work-related purposes only. Personal use should be limited and should not interfere with your job or the company’s operations.</li>
            <li><strong>Example:</strong> It’s okay to quickly check personal email during lunch, but streaming movies during work hours is not acceptable.</li>
        </ul>
    </li>

    <li><strong>Internet Usage</strong>:
        <ul>
            <li><strong>What this means:</strong> Internet access is provided so you can do your job, like researching, communicating with clients, or collaborating with your team.</li>
            <li><strong>What is expected:</strong> Avoid visiting websites that are illegal, inappropriate, or unrelated to work. This includes sites that promote violence, pornography, or gambling.</li>
            <li><strong>Example:</strong> Accessing business-related websites for research is fine, but visiting inappropriate or illegal sites is prohibited.</li>
        </ul>
    </li>

    <li><strong>Email and Communication Tools</strong>:
        <ul>
            <li><strong>What this means:</strong> The company provides you with email and communication tools (like Slack, Teams, etc.) to collaborate and communicate efficiently.</li>
            <li><strong>What is expected:</strong> Only use your company email for work-related communication. Personal emails should be sent through your personal email account.</li>
            <li><strong>Example:</strong> Sending a business proposal to a client via your company email is acceptable, but forwarding personal chain emails to coworkers is not.</li>
        </ul>
    </li>

    <li><strong>Downloading Software and Files</strong>:
        <ul>
            <li><strong>What this means:</strong> Software and files are essential for your work, but downloading unauthorized or unapproved programs can be risky.</li>
            <li><strong>What is expected:</strong> Only download and install software that has been approved by the IT department. Avoid downloading unverified files or software from unknown sources.</li>
            <li><strong>Example:</strong> If you need a new tool for a project, request approval from IT rather than downloading it on your own. This helps prevent malware from infecting the company’s systems.</li>
        </ul>
    </li>

    <li><strong>Protecting Company Data</strong>:
        <ul>
            <li><strong>What this means:</strong> Employees may handle sensitive or confidential information as part of their work.</li>
            <li><strong>What is expected:</strong> Protect company data by using secure passwords, logging out of systems when not in use, and not sharing sensitive information with unauthorized people.</li>
            <li><strong>Example:</strong> Don’t share login details or confidential documents with anyone who doesn’t need access, even if they work at the company.</li>
        </ul>
    </li>

    <li><strong>Monitoring and Privacy</strong>:
        <ul>
            <li><strong>What this means:</strong> The company has the right to monitor the use of its IT resources, including internet activity, emails, and software usage, to ensure compliance with the policy.</li>
            <li><strong>What is expected:</strong> Employees should understand that there is no guarantee of complete privacy when using company devices and resources.</li>
            <li><strong>Example:</strong> The IT department may monitor your activity to ensure company resources are being used responsibly.</li>
        </ul>
    </li>
</ol>

<hr></hr>

<h3><strong>Consequences of Violating the Acceptable Use Policy</strong></h3>

<p>If an employee violates this policy, they could face disciplinary action. This could range from a warning to more serious consequences, like being suspended or terminated, depending on the severity of the violation.</p>

<p><strong>Example:</strong> If an employee knowingly downloads malicious software that harms the company’s network, they may face serious consequences, including termination of employment.</p>

<hr></hr>

<h3><strong>Why This Policy Matters</strong></h3>

<ul>
    <li><strong>Security</strong>: Following the Acceptable Use Policy helps keep company data safe and reduces the risk of cyberattacks or data breaches.</li>
    <li><strong>Efficiency</strong>: It ensures that IT resources are used for their intended purposes, helping everyone stay productive and focused on their work.</li>
    <li><strong>Professionalism</strong>: The policy sets clear expectations for how employees should use company resources, which reflects positively on the organization as a whole.</li>
</ul>

<hr></hr>

<h3><strong>What You Should Do</strong></h3>

<ul>
    <li>Use IT resources responsibly and for work-related tasks.</li>
    <li>Be mindful of the websites you visit and the content you access.</li>
    <li>Keep personal use of company resources to a minimum and within reasonable limits.</li>
    <li>Always protect sensitive company data.</li>
    <li>Report any suspicious activity or security risks to the IT department immediately.</li>
</ul>

<p>By following the <strong>Acceptable Use Policy</strong>, you help protect the organization from potential risks while ensuring a productive and secure work environment.</p>
      

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
