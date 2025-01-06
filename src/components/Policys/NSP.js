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
          <h1>Network Security Policy
          Learn more</h1>
          <br></br>
          <br></br>
          <p>The <strong>Network Security Policy</strong> is designed to protect the company’s network infrastructure, which includes all systems, devices, and data that are connected to the network. It outlines the guidelines for securing the network from unauthorized access, cyberattacks, and data breaches. Following this policy ensures the integrity and availability of company resources and sensitive information.</p>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8948/8948469.png"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <br></br>
      <br></br>


<h3>Purpose of the Network Security Policy</h3>
<ul>
    <li>Protect the company’s network from unauthorized access and cyber threats.</li>
    <li>Ensure the confidentiality, integrity, and availability of data on the network.</li>
    <li>Define employee responsibilities for using the company’s network securely.</li>
</ul>

<hr></hr>

<h3>What Is Covered Under the Network Security Policy?</h3>

<h4>1. Network Access Control</h4>
<ul>
    <li><strong>What this means:</strong> Access to the company’s network should be restricted to authorized individuals only, ensuring that outsiders or unauthorized personnel cannot gain access.</li>
    <li><strong>What is expected:</strong> Employees must use secure login credentials to access the network. Access is granted based on job roles and responsibilities. Unauthorized devices are not allowed to connect to the company network without approval from IT.</li>
    <li><strong>Example:</strong> Only employees with the necessary permissions should access internal systems, and visitors or contractors must use a separate guest network if available.</li>
</ul>

<h4>2. Network Monitoring</h4>
<ul>
    <li><strong>What this means:</strong> The company’s IT department will continuously monitor the network for suspicious activity or unauthorized access. This helps detect potential security threats early.</li>
    <li><strong>What is expected:</strong> Employees should be aware that their activity on the network may be monitored to ensure compliance with security policies. Any unusual network behavior, such as slowdowns or system errors, should be reported to IT immediately.</li>
    <li><strong>Example:</strong> If you notice that your system is running slowly or if you see unexpected pop-up messages, report this to IT so they can check for security issues on the network.</li>
</ul>

<h4>3. Firewall and Antivirus Protection</h4>
<ul>
    <li><strong>What this means:</strong> Firewalls and antivirus software are critical defenses that protect the network from external threats like hackers, viruses, and malware.</li>
    <li><strong>What is expected:</strong> Firewalls must be enabled on all company devices connected to the network. Employees should ensure their devices have up-to-date antivirus software to prevent malware infections.</li>
    <li><strong>Example:</strong> If you connect your work laptop to the company’s network, ensure that your antivirus software is up to date and that the firewall is enabled to protect against external attacks.</li>
</ul>

<h4>4. Wi-Fi Security</h4>
<ul>
    <li><strong>What this means:</strong> The company’s Wi-Fi network must be protected from unauthorized access, which could allow outsiders to intercept company data or gain access to internal systems.</li>
    <li><strong>What is expected:</strong> Employees must only connect to the company’s Wi-Fi network using secure login credentials. Public Wi-Fi or personal hotspots should not be used for accessing sensitive company data without the use of a <strong>Virtual Private Network (VPN)</strong>.</li>
    <li><strong>Example:</strong> When working remotely, ensure that you connect to the company’s network using the VPN instead of public Wi-Fi, as public networks are less secure and may expose company data to hackers.</li>
</ul>

<h4>5. Data Encryption</h4>
<ul>
    <li><strong>What this means:</strong> Encryption is the process of encoding data to prevent unauthorized access. All sensitive data transmitted over the network should be encrypted to ensure its security.</li>
    <li><strong>What is expected:</strong> Employees must ensure that sensitive data, such as financial information or confidential business documents, is encrypted when sent over the network, especially when sharing data externally or accessing it remotely.</li>
    <li><strong>Example:</strong> If you need to send confidential business reports to a partner, use encryption tools or secure file-sharing platforms to protect the data during transmission.</li>
</ul>

<h4>6. Remote Access Security</h4>
<ul>
    <li><strong>What this means:</strong> Employees who need to access the company’s network remotely (e.g., from home or while traveling) must do so securely to prevent unauthorized individuals from intercepting data or accessing systems.</li>
    <li><strong>What is expected:</strong> Employees must use the company’s VPN for remote access and enable Multi-Factor Authentication (MFA) to add an extra layer of security.</li>
    <li><strong>Example:</strong> When working from home, always connect to the company’s network through the VPN and use MFA to ensure that your connection is secure and that no unauthorized users can gain access.</li>
</ul>

<h4>7. Network Maintenance and Updates</h4>
<ul>
    <li><strong>What this means:</strong> The company’s IT department is responsible for maintaining and updating the network infrastructure, including applying security patches and upgrading hardware or software as needed.</li>
    <li><strong>What is expected:</strong> Employees should allow IT to perform necessary updates and maintenance on their devices. These updates often include security patches that protect against newly discovered vulnerabilities.</li>
    <li><strong>Example:</strong> If IT schedules a system update to install critical security patches, make sure your device is available for the update and follow any instructions from the IT team.</li>
</ul>

<h4>8. Incident Reporting and Response</h4>
<ul>
    <li><strong>What this means:</strong> If a security incident occurs, such as unauthorized access to the network or a malware infection, it must be reported immediately so the IT department can take action to minimize damage.</li>
    <li><strong>What is expected:</strong> Employees must report any suspicious activity, such as strange emails, sudden system malfunctions, or unauthorized attempts to access the network, to IT as soon as possible. IT will investigate and respond to the incident.</li>
    <li><strong>Example:</strong> If you receive an email asking for your network credentials or notice an unfamiliar device connected to the network, report it to IT right away so they can investigate and prevent any potential threats.</li>
</ul>

<hr></hr>

<h3>Consequences of Violating the Network Security Policy</h3>
<p>Failure to follow the Network Security Policy could result in serious security breaches, exposing the company to cyberattacks, data loss, or regulatory violations. Consequences may include:</p>
<ul>
    <li>Restricted access to the company’s network or systems.</li>
    <li>Disciplinary action, ranging from a warning to termination, depending on the severity of the violation.</li>
    <li>Legal or regulatory consequences if the company suffers a data breach due to non-compliance.</li>
</ul>
<p><strong>Example:</strong> If an employee connects an unsecured device to the network and it leads to a data breach, they could face disciplinary action for violating the Network Security Policy.</p>

<hr></hr>

<h3>Why This Policy Matters</h3>
<ul>
    <li><strong>Prevents Cyberattacks:</strong> Following the Network Security Policy helps protect the company’s systems and data from unauthorized access, cyberattacks, and malware.</li>
    <li><strong>Ensures Data Confidentiality:</strong> Encrypting data and using secure methods to access the network ensures that sensitive information is not exposed to outsiders.</li>
    <li><strong>Maintains Business Continuity:</strong> By securing the network and responding quickly to potential threats, the company can avoid costly downtime or disruptions to operations.</li>
    <li><strong>Supports Compliance:</strong> Many industries are subject to regulations requiring strong network security measures. Following this policy ensures compliance with laws such as <strong>GDPR</strong>, <strong>HIPAA</strong>, or <strong>PCI DSS</strong>.</li>
</ul>

<hr></hr>

<h3>What You Should Do</h3>
<ul>
    <li><strong>Use secure login credentials</strong> to access the company network and ensure that unauthorized devices are not connected.</li>
    <li><strong>Keep your antivirus software and firewall</strong> enabled and up to date to protect your device and the network from malware or viruses.</li>
    <li><strong>Connect to the company’s Wi-Fi securely</strong> and avoid using public Wi-Fi for sensitive work without a VPN.</li>
    <li><strong>Encrypt sensitive data</strong> when transmitting it over the network, especially when sharing it with external parties.</li>
    <li><strong>Use the VPN and Multi-Factor Authentication (MFA)</strong> when accessing the company’s network remotely.</li>
    <li><strong>Report any suspicious activity</strong> or unauthorized access attempts to the IT department immediately.</li>
</ul>

<p>By following the <strong>Network Security Policy</strong>, you help protect the organization from cyber threats, ensure the security of sensitive data, and contribute to a safe and reliable network environment for all employees.</p>
      

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
