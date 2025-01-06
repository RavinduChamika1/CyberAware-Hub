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
          <h1>BYOD Policy</h1>
          <br></br>
          <br></br>
          <p>The <strong>Bring Your Own Device (BYOD) Policy</strong> allows employees to use their personal devices—such as smartphones, laptops, or tablets—for work purposes. While this can offer flexibility and convenience, it’s important to follow certain guidelines to ensure that personal devices are used securely and do not pose a risk to the company’s data or systems.</p>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/195/323/non_2x/byod-tour-icon-style-vector.jpg"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <br></br>
      <br></br>

    <h3>Purpose of the BYOD Policy</h3>
    <ul>
        <li>Provide guidelines for the secure use of personal devices for work-related tasks.</li>
        <li>Protect company data and systems from security threats posed by personal devices.</li>
        <li>Ensure that personal devices meet the company’s security requirements before being used for work.</li>
    </ul>

    <hr></hr>

    <h3>What Is Covered Under the BYOD Policy?</h3>

    <h4>1. Device Requirements</h4>
    <ul>
        <li><strong>What this means:</strong> Not all personal devices may be suitable for accessing company data or systems. Devices must meet certain security and compatibility standards to ensure they can protect company information.</li>
        <li><strong>What is expected:</strong> Employees must ensure that their personal devices are up to date and meet security standards, including having the latest operating system updates, antivirus software, and security patches.</li>
        <li><strong>Example:</strong> If you want to use your personal laptop for work, you must ensure that it is running the latest version of the operating system and has up-to-date antivirus software installed.</li>
    </ul>

    <h4>2. Secure Access to Company Data</h4>
    <ul>
        <li><strong>What this means:</strong> When using personal devices to access company data, employees must follow secure practices to protect sensitive information.</li>
        <li><strong>What is expected:</strong> Employees must use <strong>secure methods</strong> (such as a Virtual Private Network, or VPN) to access company systems and data. In addition, Multi-Factor Authentication (MFA) must be enabled where required.</li>
        <li><strong>Example:</strong> When accessing company emails or internal systems from your smartphone, you must log in through the company’s VPN and use MFA to verify your identity.</li>
    </ul>

    <h4>3. Data Protection</h4>
    <ul>
        <li><strong>What this means:</strong> Protecting company data on personal devices is crucial to prevent unauthorized access or loss of sensitive information.</li>
        <li><strong>What is expected:</strong> Employees must ensure that any company data stored on their personal devices is encrypted and that strong passwords or biometric authentication (such as fingerprint or facial recognition) are used to protect access.</li>
        <li><strong>Example:</strong> If you store work-related files on your personal tablet, make sure those files are encrypted, and your device is secured with a password or fingerprint lock.</li>
    </ul>

    <h4>4. Remote Wipe Capability</h4>
    <ul>
        <li><strong>What this means:</strong> In the event that a personal device is lost or stolen, it is important to ensure that company data stored on the device cannot be accessed by unauthorized individuals.</li>
        <li><strong>What is expected:</strong> Employees must agree to allow the company to remotely wipe any work-related data from their personal device if it is lost, stolen, or compromised. This ensures that sensitive company information is not exposed.</li>
        <li><strong>Example:</strong> If your smartphone is stolen, the IT department may remotely wipe all company data from your device to protect the organization’s information.</li>
    </ul>

    <h4>5. Appropriate Use of Personal Devices</h4>
    <ul>
        <li><strong>What this means:</strong> While personal devices may be used for work, they should only be used for <strong>authorized, work-related tasks</strong> when accessing company systems and data.</li>
        <li><strong>What is expected:</strong> Employees must not use their personal devices to access or store inappropriate content, and they should avoid using unsecured or public Wi-Fi networks for work purposes.</li>
        <li><strong>Example:</strong> Avoid accessing company systems from a public coffee shop’s Wi-Fi unless you are using a VPN, as public networks are less secure.</li>
    </ul>

    <h4>6. Monitoring and Privacy</h4>
    <ul>
        <li><strong>What this means:</strong> While the company may need to monitor the use of personal devices for work-related purposes, this monitoring will only cover activities related to company data and systems, not personal data.</li>
        <li><strong>What is expected:</strong> Employees should understand that while the company will not access personal information (like private photos or text messages), work-related activities conducted on personal devices may be subject to monitoring to ensure compliance with security policies.</li>
        <li><strong>Example:</strong> The company may monitor work emails or VPN usage on your personal device to ensure that security protocols are being followed, but it will not access your personal files or apps.</li>
    </ul>

    <h4>7. Support and Responsibilities</h4>
    <ul>
        <li><strong>What this means:</strong> Employees are responsible for the security and maintenance of their personal devices, including keeping them updated with the latest security patches and reporting any issues that may affect their ability to work securely.</li>
        <li><strong>What is expected:</strong> Employees must ensure their devices are secure and report any problems, such as a lost device or malware infection, to the IT department immediately. The company may provide limited technical support for work-related issues on personal devices, but general device maintenance is the employee’s responsibility.</li>
        <li><strong>Example:</strong> If your laptop becomes infected with malware, report it to IT so they can help ensure no company data has been compromised, but you will need to handle repairs or updates for your personal use.</li>
    </ul>

    <hr></hr>

    <h3>Consequences of Violating the BYOD Policy</h3>
    <p>Failure to follow this policy can expose the company to serious security risks, such as data breaches or unauthorized access to company systems. Violating the BYOD policy may result in:</p>
    <ul>
        <li>Loss of access to company systems or data on your personal device.</li>
        <li>Disciplinary action, ranging from a warning to termination, depending on the severity of the violation.</li>
        <li>Increased risk of personal data being compromised if the device is not adequately protected.</li>
    </ul>
    <p><strong>Example:</strong> If an employee fails to secure their personal smartphone and it is stolen, leading to a data breach, the employee could face disciplinary action for not following the BYOD policy.</p>

    <hr></hr>

    <h3>Why This Policy Matters</h3>
    <ul>
        <li><strong>Security:</strong> Allowing personal devices to access company data increases the risk of cyber threats. This policy ensures that devices meet security standards and company data is protected.</li>
        <li><strong>Convenience:</strong> The policy provides guidelines that allow employees to use their own devices for work in a secure and compliant way, offering flexibility without sacrificing security.</li>
        <li><strong>Data Protection:</strong> By following the policy, employees help ensure that sensitive company data is protected, even if personal devices are lost, stolen, or compromised.</li>
    </ul>

    <hr></hr>

    <h3>What You Should Do</h3>
    <ul>
        <li><strong>Keep your personal device secure:</strong> Ensure that your device is updated with the latest operating system and security patches, and that it has antivirus software installed.</li>
        <li><strong>Use secure methods for accessing company data:</strong> Always use the company’s VPN and Multi-Factor Authentication (MFA) when accessing internal systems or sensitive data.</li>
        <li><strong>Encrypt work-related data:</strong> Make sure any company data stored on your personal device is encrypted, and use strong passwords or biometric locks.</li>
        <li><strong>Agree to remote wipe capability:</strong> Understand that the company may remotely wipe work data if your device is lost or stolen, and report any issues immediately.</li>
        <li><strong>Be mindful of appropriate use:</strong> Only use your personal device for authorized, work-related tasks, and avoid using unsecured Wi-Fi networks when working.</li>
    </ul>

    <p>By following the <strong>BYOD Policy</strong>, you can enjoy the flexibility of using your personal devices for work while helping to protect company data and systems from potential security risks. This policy ensures that personal devices are used securely and responsibly, safeguarding both the organization and its employees.</p>



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
