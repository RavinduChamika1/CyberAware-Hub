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
          <h1>Backup and Disaster Recovery Policy</h1>
          <br></br>
          <br></br>
          <p>The <strong>Backup and Disaster Recovery Policy</strong> explains how the company protects its data and systems by regularly creating backups and having a plan in place to recover quickly from any unexpected incidents, such as data loss, system failures, or natural disasters. This policy ensures that important data can be restored, and business operations can continue with minimal disruption if something goes wrong.</p>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://www.shutterstock.com/image-vector/disaster-recovery-service-blue-concept-600nw-2264758889.jpg"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <br></br>
      <br></br>

    <h3>Purpose of the Backup and Disaster Recovery Policy</h3>
    <ul>
        <li>Ensure that critical data is regularly backed up and protected from loss or damage.</li>
        <li>Outline the steps the company will take to restore systems and data after an unexpected incident.</li>
        <li>Minimize downtime and disruption to business operations by having a clear recovery plan in place.</li>
    </ul>

    <hr></hr>

    <h3>What Is Covered Under the Backup and Disaster Recovery Policy?</h3>

    <h4>1. Data Backup</h4>
    <ul>
        <li><strong>What this means:</strong> Backups are copies of important data that are created and stored separately from the main system. This ensures that if the original data is lost, damaged, or compromised, it can be restored from the backup.</li>
        <li><strong>What is expected:</strong> The company’s critical data must be backed up regularly. This includes customer information, financial records, and internal documents. Employees should ensure that any work-related data they create or handle is saved in the company’s designated systems, where it can be backed up automatically.</li>
        <li><strong>Example:</strong> If you are working on important documents or client information, save them to the company’s secure servers or cloud systems so that they are included in the regular backups.</li>
    </ul>

    <h4>2. Types of Backups</h4>
    <ul>
        <li><strong>What this means:</strong> There are different types of backups, including <strong>full backups</strong> (where all data is copied) and <strong>incremental backups</strong> (where only new or changed data is copied since the last backup).</li>
        <li><strong>What is expected:</strong> The IT department is responsible for determining the best backup schedule and method for the company’s data. Employees should not manually copy data to personal devices for backup purposes, as this could lead to security issues.</li>
        <li><strong>Example:</strong> The IT department might perform full backups weekly and incremental backups daily to ensure that the company’s data is always protected.</li>
    </ul>

    <h4>3. Backup Storage</h4>
    <ul>
        <li><strong>What this means:</strong> Backups must be stored in a secure location, separate from the main systems, to protect them from incidents such as system failures, cyberattacks, or physical disasters.</li>
        <li><strong>What is expected:</strong> The IT department will store backups in secure, offsite locations or cloud environments to ensure they remain safe and accessible in the event of an emergency. Employees should avoid saving important work data only on local devices (like their laptop hard drives) because this data may not be included in the company’s backups.</li>
        <li><strong>Example:</strong> If you’re working on important data, save it to the company’s cloud storage or network drive, not just your local computer, so that it is included in the backup and can be recovered if needed.</li>
    </ul>

    <h4>4. Disaster Recovery Plan</h4>
    <ul>
        <li><strong>What this means:</strong> A disaster recovery plan (DRP) is a set of procedures that the company will follow to restore systems and data after an unexpected event, such as a cyberattack, system crash, or natural disaster.</li>
        <li><strong>What is expected:</strong> Employees should be familiar with their role in the disaster recovery plan and cooperate with IT to help restore operations as quickly as possible. In the event of a disaster, the IT department will communicate with employees about the steps they need to take to assist with recovery efforts.</li>
        <li><strong>Example:</strong> If a server failure disrupts your ability to access files, IT will follow the disaster recovery plan to restore data from backups, and you may be asked to follow specific instructions to resume work once systems are back online.</li>
    </ul>

    <h4>5. Testing and Updates</h4>
    <ul>
        <li><strong>What this means:</strong> It’s important to regularly test the backup and disaster recovery plan to ensure that it works as intended and that data can be successfully restored if needed.</li>
        <li><strong>What is expected:</strong> The IT department will periodically test the backup systems and recovery procedures to verify that they are effective. Employees may be asked to participate in these tests by verifying that they can access restored data or confirming that critical systems are working properly.</li>
        <li><strong>Example:</strong> During a scheduled test, IT might simulate a system failure and restore backed-up data, asking employees to confirm that they can access their files and continue working without issues.</li>
    </ul>

    <h4>6. Recovery Time Objective (RTO) and Recovery Point Objective (RPO)</h4>
    <ul>
        <li><strong>What this means:</strong> These terms define how quickly the company aims to recover after an incident (RTO) and how much data can be lost before it significantly impacts the business (RPO).</li>
        <li><strong>What is expected:</strong> The IT department will set realistic goals for recovery time and data loss in case of a disaster. Employees should follow any instructions from IT during the recovery process to ensure that operations are restored as quickly as possible.</li>
        <li><strong>Example:</strong> If the RTO is set at 4 hours, IT will aim to have the system restored and functional within 4 hours after a failure. If the RPO is set at 24 hours, this means that the company could lose up to 24 hours of data and still be able to continue operating.</li>
    </ul>

    <h4>7. Employee Responsibilities</h4>
    <ul>
        <li><strong>What this means:</strong> Employees play an important role in ensuring that the backup and disaster recovery plan works as intended by saving their work properly and reporting any issues that could affect backups or recovery.</li>
        <li><strong>What is expected:</strong> Employees must regularly save their work in the designated locations (such as company servers or cloud systems) and report any data loss, system failures, or issues with backups to the IT department immediately.</li>
        <li><strong>Example:</strong> If you notice that a file you were working on is missing or corrupted, notify IT so they can restore it from a recent backup.</li>
    </ul>

    <hr></hr>

    <h3>Consequences of Violating the Backup and Disaster Recovery Policy</h3>
    <p>Failure to follow this policy could lead to permanent data loss, extended downtime, or severe disruptions to business operations. Violating the Backup and Disaster Recovery Policy may result in:</p>
    <ul>
        <li>Loss of access to critical systems or data.</li>
        <li>Disciplinary action, depending on the severity of the violation.</li>
        <li>Increased risk of data loss or inability to recover systems after an incident, which could impact the company’s financial stability and reputation.</li>
    </ul>
    <p><strong>Example:</strong> If an employee consistently saves work on their personal device instead of the company’s designated storage system, and the data is lost or cannot be recovered, this could lead to disciplinary action and operational delays.</p>

    <hr></hr>

    <h3>Why This Policy Matters</h3>
    <ul>
        <li><strong>Data Protection:</strong> Regular backups ensure that important company data is not permanently lost in the event of a system failure or other disaster.</li>
        <li><strong>Business Continuity:</strong> The disaster recovery plan ensures that the company can recover from unexpected events quickly, minimizing downtime and allowing operations to continue smoothly.</li>
        <li><strong>Compliance:</strong> Many regulations require businesses to have proper backup and disaster recovery procedures in place to protect customer data and critical business information.</li>
    </ul>

    <hr></hr>

    <h3>What You Should Do</h3>
    <ul>
        <li><strong>Save your work in designated locations</strong> (e.g., company servers or cloud systems) so that it is included in regular backups.</li>
        <li><strong>Report any issues</strong> with lost data or system failures to the IT department immediately.</li>
        <li><strong>Follow IT’s instructions</strong> during disaster recovery efforts to help restore systems and data as quickly as possible.</li>
        <li><strong>Participate in disaster recovery tests</strong> if requested, and verify that you can access restored data and systems after a test.</li>
        <li><strong>Be aware of your role</strong> in the disaster recovery plan and cooperate with IT to ensure a smooth recovery if an incident occurs.</li>
    </ul>

    <p>By following the <strong>Backup and Disaster Recovery Policy</strong>, you help protect the company’s data and systems from loss or damage and ensure that the business can recover quickly and efficiently in the event of an unexpected disaster. This policy plays a critical role in keeping the company’s operations running smoothly and minimizing the impact of data loss or system failures.</p>

      

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
