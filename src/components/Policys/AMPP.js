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
          <h1>Antivirus and Malware Protection Policy</h1>
          <br></br>
          <br></br>
          <p>The <strong>Antivirus and Malware Protection Policy</strong> ensures that all company systems and devices are protected from viruses, malware, and other malicious software that can harm the organization’s data, network, and security. Following this policy helps prevent cyberattacks, data breaches, and disruptions to business operations by providing clear guidelines on how employees should protect their devices and data.</p>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2333/2333316.png"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <br></br>
      <br></br>

    <h3>Purpose of the Antivirus and Malware Protection Policy</h3>
    <ul>
        <li>Protect company systems, devices, and data from viruses, malware, and other cyber threats.</li>
        <li>Ensure that all employees follow best practices for preventing and addressing malware infections.</li>
        <li>Provide guidelines for installing, updating, and using antivirus software on company devices.</li>
    </ul>

    <hr></hr>

    <h3>What Is Covered Under the Antivirus and Malware Protection Policy?</h3>

    <h4>1. Antivirus Software Installation</h4>
    <ul>
        <li><strong>What this means:</strong> Antivirus software is essential for detecting and removing malware, viruses, and other threats that can compromise the company’s systems.</li>
        <li><strong>What is expected:</strong> All company devices (including desktops, laptops, and mobile devices) must have approved antivirus software installed. Employees should not install any unapproved antivirus programs or disable the software without permission from the IT department.</li>
        <li><strong>Example:</strong> When using a company-issued laptop, ensure that the antivirus software provided by the IT department is installed and running at all times.</li>
    </ul>

    <h4>2. Antivirus Software Updates</h4>
    <ul>
        <li><strong>What this means:</strong> Regular updates are necessary to ensure that antivirus software can detect the latest threats and protect against newly discovered vulnerabilities.</li>
        <li><strong>What is expected:</strong> Employees must allow automatic updates of antivirus software and should not delay or disable these updates. The IT department will manage updates, but employees should notify IT if they notice any issues with their antivirus software.</li>
        <li><strong>Example:</strong> If your antivirus software prompts you to update, make sure the update completes successfully to keep your system protected.</li>
    </ul>

    <h4>3. Regular Scanning</h4>
    <ul>
        <li><strong>What this means:</strong> Regular system scans help detect malware, viruses, and other threats that may have bypassed the initial security protections.</li>
        <li><strong>What is expected:</strong> Employees must ensure that regular antivirus scans are scheduled and completed. The IT department may set up automatic scans, but employees should perform manual scans if they suspect a problem with their device.</li>
        <li><strong>Example:</strong> If your computer begins running slowly or behaves strangely, run a manual antivirus scan to check for malware, and report any findings to IT.</li>
    </ul>

    <h4>4. Safe Internet and Email Practices</h4>
    <ul>
        <li><strong>What this means:</strong> Malware and viruses often spread through unsafe websites, email attachments, or downloads. Safe browsing and email practices help prevent these threats from entering the company’s network.</li>
        <li><strong>What is expected:</strong> Employees should avoid downloading files from untrusted sources, clicking on suspicious links in emails, or opening attachments from unknown senders. If an employee receives a suspicious email or message, they should report it to IT immediately.</li>
        <li><strong>Example:</strong> If you receive an email with an unfamiliar attachment from an unknown sender, do not open it. Instead, forward it to IT for review.</li>
    </ul>

    <h4>5. Prohibited Software and Applications</h4>
    <ul>
        <li><strong>What this means:</strong> Unapproved or unauthorized software can introduce security risks, such as malware or spyware, to the company’s network.</li>
        <li><strong>What is expected:</strong> Employees must not download or install any software, applications, or extensions on their devices without approval from the IT department. Only approved software should be used to reduce the risk of malware infections.</li>
        <li><strong>Example:</strong> If you need a new tool for a project, request approval from IT before downloading or installing it to ensure it meets the company’s security standards.</li>
    </ul>

    <h4>6. Responding to Malware Infections</h4>
    <ul>
        <li><strong>What this means:</strong> If a device becomes infected with malware, immediate action is required to prevent the spread of the infection and protect the company’s data.</li>
        <li><strong>What is expected:</strong> Employees should report any signs of malware (such as slow system performance, unusual pop-ups, or strange activity) to IT immediately. IT will then investigate the issue and take steps to remove the malware and protect other systems.</li>
        <li><strong>Example:</strong> If your computer starts displaying unusual pop-ups or behaves abnormally, contact the IT department so they can run a malware scan and address the issue before it spreads.</li>
    </ul>

    <h4>7. Network Security and Firewalls</h4>
    <ul>
        <li><strong>What this means:</strong> Firewalls help prevent unauthorized access to the company’s network and protect against external threats.</li>
        <li><strong>What is expected:</strong> Employees must ensure that firewalls are enabled on all company devices and must not attempt to disable them. The IT department will configure firewalls to provide the highest level of protection while allowing necessary business operations.</li>
        <li><strong>Example:</strong> If you’re working remotely on a company laptop, make sure the firewall is enabled to protect your connection from potential cyber threats.</li>
    </ul>

    <h4>8. Mobile Device Security</h4>
    <ul>
        <li><strong>What this means:</strong> Mobile devices, such as smartphones and tablets, can be vulnerable to malware and viruses if not properly protected.</li>
        <li><strong>What is expected:</strong> Employees who use mobile devices for work purposes must install antivirus software and keep their devices updated. They should also follow security best practices, such as avoiding untrusted apps and enabling security features like passwords and encryption.</li>
        <li><strong>Example:</strong> If you use a smartphone to access company emails or data, make sure antivirus software is installed and regularly updated to protect against mobile malware.</li>
    </ul>

    <hr></hr>

    <h3>Consequences of Violating the Antivirus and Malware Protection Policy</h3>
    <p>Failure to follow this policy could result in malware infections, data breaches, and compromised security. Violating the Antivirus and Malware Protection Policy may lead to:</p>
    <ul>
        <li>Loss of access to company systems or data.</li>
        <li>Disciplinary action, ranging from a warning to termination, depending on the severity of the violation.</li>
        <li>Increased risk of malware spreading across the company’s network, potentially causing data loss or system outages.</li>
    </ul>
    <p><strong>Example:</strong> If an employee disables antivirus software on their company-issued device and the device becomes infected with malware, this could result in disciplinary action for violating the policy and exposing the company to security risks.</p>

    <hr></hr>

    <h3>Why This Policy Matters</h3>
    <ul>
        <li><strong>Protects Company Data:</strong> By ensuring that antivirus software is installed and updated on all devices, the policy helps protect sensitive company data from malware attacks.</li>
        <li><strong>Prevents Cyberattacks:</strong> Following safe internet, email, and software practices reduces the risk of malware infections and cyberattacks that could disrupt business operations.</li>
        <li><strong>Ensures Network Security:</strong> Antivirus software, firewalls, and regular scans help keep the company’s network secure and protect against both internal and external threats.</li>
    </ul>

    <hr></hr>

    <h3>What You Should Do</h3>
    <ul>
        <li><strong>Ensure that antivirus software</strong> is installed and updated on all company devices you use.</li>
        <li><strong>Allow automatic updates</strong> of antivirus software and do not disable any security features.</li>
        <li><strong>Run regular scans</strong> on your devices to detect and remove any potential threats.</li>
        <li><strong>Avoid clicking on suspicious links</strong>, downloading untrusted files, or installing unauthorized software.</li>
        <li><strong>Report any signs of malware</strong> or unusual device behavior to the IT department immediately.</li>
        <li><strong>Follow safe practices</strong> when using mobile devices, such as installing antivirus software and avoiding untrusted apps.</li>
    </ul>

    <p>By following the <strong>Antivirus and Malware Protection Policy</strong>, you help protect the company’s devices, data, and systems from malware infections and other cyber threats. This policy ensures that all employees contribute to maintaining a secure and safe digital environment for the organization.</p>

      

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
