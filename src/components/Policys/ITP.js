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
          <h1>What is IT Policie?</h1>
          
          <br></br>
          <br></br>
          <p><strong>IT policies</strong> are formal, written guidelines that define how an organization and its employees should use and manage information technology (IT) resources. These policies outline the rules and best practices that help protect the organization’s data, systems, and infrastructure from cybersecurity threats, data breaches, and other risks. They ensure that everyone in the organization understands their role in maintaining security and using IT resources responsibly.</p>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://t4.ftcdn.net/jpg/03/26/48/67/360_F_326486798_3qv1acjIrOn57hWgvYEH2g0qT1Y1F9b9.jpg"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <p></p>      

    <h2>Purpose of IT Policies in an Organization:</h2>

    <ul>
        <li><strong>Establish Security Standards:</strong>  
            IT policies set <strong>clear rules</strong> for protecting the organization’s digital assets, such as sensitive data, networks, and systems. They define security practices like using strong passwords, controlling who can access certain systems, and protecting devices from malware.</li>

        <li><strong>Reduce Cybersecurity Risks:</strong>  
            Cyber threats, such as phishing, ransomware, or data breaches, can seriously harm an organization. IT policies help <strong>reduce these risks</strong> by establishing preventative measures, such as encrypting data, using firewalls, and educating employees on how to spot suspicious activity.</li>

        <li><strong>Ensure Compliance with Laws and Regulations:</strong>  
            Many organizations must comply with specific laws and industry standards, such as the <strong>General Data Protection Regulation (GDPR)</strong> or <strong>Health Insurance Portability and Accountability Act (HIPAA)</strong>. IT policies help organizations meet these legal requirements by setting guidelines for how data is stored, protected, and shared.</li>

        <li><strong>Define Roles and Responsibilities:</strong>  
            IT policies make it clear <strong>who is responsible</strong> for what in terms of security. For example, IT staff might manage technical security controls like firewalls and software updates, while employees are responsible for following rules around email use, password security, and reporting suspicious activity.</li>

        <li><strong>Promote Consistency:</strong>  
            With an IT policy in place, everyone follows the <strong>same rules and procedures</strong>, ensuring a consistent approach to cybersecurity and IT management across the entire organization. This helps prevent confusion and ensures that security practices are applied uniformly.</li>

        <li><strong>Support Business Continuity:</strong>  
            IT policies often include plans for responding to security incidents or system failures, such as backup and disaster recovery policies. These help ensure that the organization can <strong>continue operating smoothly</strong> after an issue, minimizing downtime and data loss.</li>
    </ul>

    <h3>Why IT Policies Matter to Everyone</h3>
    <p>IT policies affect every employee, not just IT staff. Whether it’s protecting sensitive data, using secure passwords, or reporting suspicious activity, everyone plays a role in keeping the organization secure. Understanding and following IT policies helps ensure that systems run smoothly, and that the organization remains protected from cybersecurity threats.</p>

    <h1>2. Importance and Benefits of IT Policies</h1>
    <p>IT policies play a critical role in ensuring the smooth, secure, and compliant operation of an organization’s information technology systems. They provide clear guidelines for employees on how to interact with technology and protect sensitive data. Understanding the <strong>importance and benefits</strong> of IT policies helps everyone appreciate why these rules matter in daily operations.</p>

    <hr></hr>

    <h2>1. Role in Compliance</h2>

    <h3>What is compliance?</h3>
    <p>Compliance refers to adhering to laws, regulations, and industry standards that govern how organizations must handle data and technology. Many industries, such as healthcare, finance, and retail, have strict regulations in place to protect sensitive data.</p>

    <h3>How IT policies help with compliance:</h3>
    <p>IT policies ensure that an organization’s practices align with legal and regulatory requirements. For example, if an organization handles personal data, an <strong>IT policy</strong> might include specific rules on data encryption and access control to comply with laws like the <strong>General Data Protection Regulation (GDPR)</strong> or <strong>Health Insurance Portability and Accountability Act (HIPAA)</strong>.</p>

    <h3>Benefits:</h3>
    <ul>
        <li><strong>Avoid penalties:</strong> Failing to comply with regulations can result in legal penalties, fines, or reputational damage. IT policies help avoid these risks.</li>
        <li><strong>Build customer trust:</strong> When customers know their data is handled securely, they are more likely to trust the organization with their information.</li>
    </ul>

    <p><strong>Example:</strong> A healthcare provider must follow HIPAA rules for protecting patient data. A well-defined <strong>Data Protection Policy</strong> ensures all employees know how to secure and handle sensitive health information, helping the organization stay compliant.</p>

    <hr></hr>

    <h2>2. Role in Security</h2>

    <h3>What is security in IT?</h3>
    <p>IT security involves protecting systems, data, and networks from cyber threats like hacking, malware, and data breaches.</p>

    <h3>How IT policies help with security:</h3>
    <p>IT policies establish clear guidelines for using secure practices, such as creating strong passwords, updating software regularly, and recognizing phishing attempts. These policies also define how to respond to security incidents, ensuring a quick and coordinated response to minimize damage.</p>

    <h3>Benefits:</h3>
    <ul>
        <li><strong>Reduce security risks:</strong> By enforcing security best practices, IT policies help prevent common cyber threats like data breaches, unauthorized access, and malware infections.</li>
        <li><strong>Safeguard sensitive data:</strong> IT policies ensure that important information—such as financial data, customer records, and intellectual property—is protected from unauthorized access or theft.</li>
    </ul>

    <p><strong>Example:</strong> A <strong>Password Management Policy</strong> requires employees to use complex, unique passwords and update them regularly. This reduces the risk of hackers gaining access to company systems through weak or compromised passwords.</p>

    <hr></hr>

    <h2>3. Role in Process Improvements</h2>

    <h3>What are process improvements?</h3>
    <p>Process improvements involve optimizing how tasks are carried out within an organization, making operations more efficient, consistent, and reliable.</p>

    <h3>How IT policies help with process improvements:</h3>
    <p>IT policies standardize procedures across the organization, ensuring that all employees follow the same guidelines for using technology. This reduces confusion, improves productivity, and makes processes more efficient by eliminating unnecessary steps.</p>

    <h3>Benefits:</h3>
    <ul>
        <li><strong>Consistency across the organization:</strong> When everyone follows the same procedures, tasks are completed more efficiently, and the risk of errors is reduced.</li>
        <li><strong>Streamlined operations:</strong> IT policies can help identify and eliminate inefficiencies, making processes like data management or system maintenance smoother.</li>
    </ul>

    <p><strong>Example:</strong> A <strong>Software Update and Patch Management Policy</strong> ensures that all devices are updated regularly to prevent vulnerabilities. This reduces downtime and keeps systems running smoothly.</p>

    <hr></hr>

    <h2>4. Role in Crisis Management</h2>

    <h3>What is crisis management?</h3>
    <p>Crisis management refers to how an organization responds to and recovers from unexpected events, such as a cyberattack, data breach, or system failure.</p>

    <h3>How IT policies help with crisis management:</h3>
    <p>IT policies, such as the <strong>Incident Response Policy</strong> and <strong>Disaster Recovery Policy</strong>, provide a step-by-step plan for responding to security incidents or system failures. They outline the roles and responsibilities of employees during a crisis and ensure that the organization can recover quickly and effectively.</p>

    <h3>Benefits:</h3>
    <ul>
        <li><strong>Faster response to incidents:</strong> When a crisis occurs, having clear policies in place helps the organization respond quickly, minimizing the impact.</li>
        <li><strong>Better recovery from disasters:</strong> IT policies ensure that critical data is backed up and that systems can be restored after a major incident, reducing downtime and financial losses.</li>
    </ul>

    <p><strong>Example:</strong> In the event of a ransomware attack, an <strong>Incident Response Policy</strong> guides the organization in isolating infected systems, notifying the appropriate personnel, and recovering from the attack with minimal disruption to operations.</p>

      

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
