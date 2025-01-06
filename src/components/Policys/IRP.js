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
          <h1>Incident Response Policy</h1>
          <br></br>
          <br></br>
          <p>The <strong>Incident Response Policy</strong> is designed to guide employees on how to respond if a cybersecurity incident occurs, such as a data breach, malware attack, or any other security threat. A quick and organized response is essential to minimizing damage, protecting sensitive data, and ensuring business continuity.</p>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://cdn-icons-png.freepik.com/256/13089/13089661.png?semt=ais_hybrid"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <br></br>
      <br></br>

    <h3>Purpose of the Incident Response Policy</h3>
    <ul>
        <li>Provide clear steps for identifying, reporting, and addressing security incidents.</li>
        <li>Ensure that all employees know their roles in responding to incidents.</li>
        <li>Minimize the impact of security breaches on the organization.</li>
        <li>Comply with legal and regulatory requirements for reporting and managing incidents.</li>
    </ul>

    <hr></hr>

    <h3>What Is Covered Under the Incident Response Policy?</h3>

    <h4>1. What Is a Security Incident?</h4>
    <ul>
        <li><strong>What this means:</strong> A security incident refers to any event that threatens the confidentiality, integrity, or availability of the organization’s systems or data.</li>
        <li><strong>Examples of incidents:</strong>
            <ul>
                <li>Unauthorized access to systems or data.</li>
                <li>A malware or ransomware attack.</li>
                <li>A lost or stolen device containing company data.</li>
                <li>Phishing attempts aimed at stealing login credentials.</li>
            </ul>
        </li>
        <li><strong>Example:</strong> If an employee accidentally clicks on a phishing email, providing login credentials to a malicious actor, this is considered a security incident.</li>
    </ul>

    <hr></hr>

    <h4>2. Steps to Take When a Security Incident Occurs</h4>
    <p>The <strong>Incident Response Plan</strong> involves several key steps to ensure an organized approach to handling security threats.</p>

    <h4>1. Identify the Incident</h4>
    <ul>
        <li><strong>What this means:</strong> The first step is to recognize when something is wrong. Employees should be aware of signs that a security breach might have occurred, such as unusual activity on their accounts, strange emails, or unauthorized access to data.</li>
        <li><strong>What is expected:</strong> If you suspect something unusual, report it to the IT or security department immediately.</li>
        <li><strong>Example:</strong> If you notice that your system is running unusually slow or you’re locked out of your account, report it to IT so they can investigate.</li>
    </ul>

    <h4>2. Contain the Incident</h4>
    <ul>
        <li><strong>What this means:</strong> Once the incident is identified, the goal is to contain it and prevent further damage. This may involve isolating the affected systems or devices to stop the spread of malware or other threats.</li>
        <li><strong>What is expected:</strong> Employees should follow instructions from the IT team on how to help contain the incident, such as disconnecting from the network or shutting down affected devices.</li>
        <li><strong>Example:</strong> If your computer is infected with malware, IT may instruct you to disconnect from the network immediately to prevent the malware from spreading to other systems.</li>
    </ul>

    <h4>3. Report the Incident</h4>
    <ul>
        <li><strong>What this means:</strong> Prompt reporting is critical to ensure that the security team can act quickly. All employees are responsible for reporting any suspicious activity or security issues to the appropriate department.</li>
        <li><strong>What is expected:</strong> If you discover or suspect a security incident, report it immediately to the IT or security department through the designated channels (such as email or phone hotline).</li>
        <li><strong>Example:</strong> If you accidentally open a phishing email or notice unusual login attempts on your account, notify IT right away.</li>
    </ul>

    <h4>4. Eradicate the Threat</h4>
    <ul>
        <li><strong>What this means:</strong> After containing the incident, the next step is to eliminate the cause of the problem, such as removing malware or closing any security gaps that allowed the breach to happen.</li>
        <li><strong>What is expected:</strong> The IT and security teams will take steps to remove the threat, and employees may be asked to assist by following their instructions, such as running security scans or updating software.</li>
        <li><strong>Example:</strong> If malware was detected on your device, IT may ask you to run a specific antivirus tool to ensure it has been removed completely.</li>
    </ul>

    <h4>5. Recover and Restore Operations</h4>
    <ul>
        <li><strong>What this means:</strong> Once the threat is eliminated, the next step is to restore affected systems and data so that business operations can return to normal.</li>
        <li><strong>What is expected:</strong> Employees may need to assist with restoring data from backups or reconfiguring devices to ensure they are secure and fully functional.</li>
        <li><strong>Example:</strong> If your computer was compromised during a ransomware attack, IT may restore data from a secure backup and ensure that your system is safe to use again.</li>
    </ul>

    <h4>6. Conduct a Post-Incident Review</h4>
    <ul>
        <li><strong>What this means:</strong> After the incident is resolved, a review is conducted to understand what went wrong and how to prevent similar incidents in the future.</li>
        <li><strong>What is expected:</strong> Employees involved in the incident may be asked to participate in the review, share what happened, and help identify ways to improve security practices.</li>
        <li><strong>Example:</strong> If a phishing attack led to the breach, the post-incident review may identify the need for additional employee training on recognizing phishing attempts.</li>
    </ul>

    <hr></hr>

    <h3>Roles and Responsibilities</h3>
    <ul>
        <li><strong>Employees:</strong> Every employee is responsible for reporting suspicious activity, following IT guidance during an incident, and participating in post-incident reviews if necessary.</li>
        <li><strong>IT/Security Team:</strong> The IT and security teams are responsible for investigating, containing, and resolving the incident, as well as coordinating with other departments and external parties if needed.</li>
        <li><strong>Management:</strong> Senior management is responsible for overseeing the incident response process and ensuring the organization complies with legal and regulatory requirements.</li>
    </ul>

    <hr></hr>

    <h3>Consequences of Not Following the Incident Response Policy</h3>
    <p>If an employee fails to report a security incident or does not follow the proper steps, it can lead to serious consequences, such as:</p>
    <ul>
        <li>Prolonged downtime or data loss.</li>
        <li>Financial penalties or legal consequences if the organization fails to meet its regulatory requirements.</li>
        <li>Disciplinary action, depending on the severity of the oversight or neglect.</li>
    </ul>
    <p><strong>Example:</strong> If an employee fails to report a phishing email and it leads to a data breach, they may face disciplinary action for not following the Incident Response Policy.</p>

    <hr></hr>

    <h3>Why This Policy Matters</h3>
    <ul>
        <li><strong>Minimizes Damage:</strong> Quick action helps limit the impact of security incidents, reducing downtime and minimizing financial losses.</li>
        <li><strong>Protects Sensitive Data:</strong> The policy ensures that any breach of sensitive information is dealt with quickly, preventing further unauthorized access or theft.</li>
        <li><strong>Legal and Regulatory Compliance:</strong> Many industries have regulations that require organizations to respond to incidents within specific timeframes. Following this policy helps the organization meet these requirements.</li>
    </ul>

    <hr></hr>

    <h3>What You Should Do</h3>
    <ul>
        <li><strong>Be vigilant:</strong> Always watch for signs of security incidents, such as unusual emails, unauthorized access, or suspicious activity on your systems.</li>
        <li><strong>Report immediately:</strong> If you suspect or notice a security incident, report it to the IT or security department without delay.</li>
        <li><strong>Follow instructions:</strong> If you’re involved in an incident, follow the IT team’s instructions carefully to help contain and resolve the issue.</li>
        <li><strong>Learn from incidents:</strong> Participate in post-incident reviews and learn how to prevent similar incidents in the future.</li>
    </ul>

    <p>By following the <strong>Incident Response Policy</strong>, you help protect the organization from the potentially devastating effects of security breaches, ensure compliance with legal obligations, and contribute to a safer and more secure work environment for everyone.</p>


      

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
