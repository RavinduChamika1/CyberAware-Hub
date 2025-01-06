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
          <h1>Remote Access Policy</h1>
          <br></br>
          <br></br>
          <p>The <strong>Remote Access Policy</strong> outlines the rules and guidelines for securely accessing the company’s systems and data from outside the office, such as when employees are working from home or traveling. This policy ensures that employees can access company resources remotely while protecting the network and sensitive information from unauthorized access or security threats.</p>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4403/4403212.png"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <br></br>
      <br></br>


    <h3>Purpose of the Remote Access Policy</h3>
    <ul>
        <li>Ensure that remote access to company systems and data is secure and follows best practices.</li>
        <li>Protect sensitive information and the company’s network from potential threats caused by unsecured remote connections.</li>
        <li>Provide clear guidelines for employees on how to safely access the company’s resources while working remotely.</li>
    </ul>

    <hr></hr>

    <h3>What Is Covered Under the Remote Access Policy?</h3>

    <h4>1. Who Can Use Remote Access?</h4>
    <ul>
        <li><strong>What this means:</strong> Not all employees may need or be allowed to access company systems remotely. Remote access should be granted based on job roles and responsibilities.</li>
        <li><strong>What is expected:</strong> Employees must receive authorization from their manager or IT department to access the company’s network remotely. Remote access should only be used for work-related tasks.</li>
        <li><strong>Example:</strong> If your job requires you to work from home occasionally or access company data while traveling, you will need to be authorized for remote access by your manager or IT.</li>
    </ul>

    <h4>2. Secure Remote Access Methods</h4>
    <ul>
        <li><strong>What this means:</strong> Remote access must be done using secure methods to ensure that company data is protected while being accessed from outside the office.</li>
        <li><strong>What is expected:</strong> Employees must use a <strong>Virtual Private Network (VPN)</strong> to access the company’s systems remotely. The VPN encrypts the data you send and receive, making it harder for unauthorized individuals to intercept it. In addition, <strong>Multi-Factor Authentication (MFA)</strong> must be enabled for all remote access.</li>
        <li><strong>Example:</strong> When logging in to the company’s network from home, you will first connect to the VPN and then provide a second form of authentication, such as a code sent to your phone, to complete the login process.</li>
    </ul>

    <h4>3. Device Security</h4>
    <ul>
        <li><strong>What this means:</strong> The security of the devices used to access the company’s network remotely is just as important as the security of the connection itself.</li>
        <li><strong>What is expected:</strong> Employees must ensure that their personal or company-issued devices (such as laptops, tablets, or smartphones) are secure. This includes keeping the device updated with the latest security patches, using antivirus software, and enabling strong passwords or biometric locks (such as fingerprint or facial recognition).</li>
        <li><strong>Example:</strong> If you use your personal laptop to work remotely, make sure that your operating system is up to date, antivirus software is installed, and your device is protected with a strong password or biometric authentication.</li>
    </ul>

    <h4>4. Public Wi-Fi and Unsecured Networks</h4>
    <ul>
        <li><strong>What this means:</strong> Using unsecured public Wi-Fi (such as in coffee shops, airports, or hotels) can expose the company’s data to hackers who may be monitoring the network.</li>
        <li><strong>What is expected:</strong> Employees must avoid using public Wi-Fi networks to access company systems unless they are connected to the company’s VPN. The VPN ensures that data is encrypted, even when using public or unsecured networks.</li>
        <li><strong>Example:</strong> If you need to work while at a coffee shop, always connect to the company’s VPN before accessing email or internal systems. This will protect your data from being intercepted on the public Wi-Fi.</li>
    </ul>

    <h4>5. Data Protection</h4>
    <ul>
        <li><strong>What this means:</strong> When accessing or transferring sensitive company data remotely, it’s important to ensure that the data remains protected at all times.</li>
        <li><strong>What is expected:</strong> Employees must follow the company’s <strong>Data Protection Policy</strong> when accessing or sharing sensitive information remotely. All data should be encrypted when transmitted, and employees should avoid downloading sensitive data to their personal devices whenever possible.</li>
        <li><strong>Example:</strong> If you need to send confidential documents to a colleague while working remotely, use secure file-sharing services that offer encryption, rather than sending the files over regular email.</li>
    </ul>

    <h4>6. Remote Work Environment</h4>
    <ul>
        <li><strong>What this means:</strong> The physical security of the environment where you work remotely is also important. If others around you can see or access your device, sensitive company information may be exposed.</li>
        <li><strong>What is expected:</strong> Employees must ensure that their remote workspace is secure. This includes locking the screen when stepping away from the device, avoiding working in public spaces where others can view sensitive data, and ensuring that unauthorized individuals do not have access to company systems.</li>
        <li><strong>Example:</strong> If you are working from home and need to step away from your laptop, make sure to lock your screen so that no one can access company data while you are away.</li>
    </ul>

    <h4>7. Reporting Security Incidents</h4>
    <ul>
        <li><strong>What this means:</strong> Security incidents, such as unauthorized access or a lost/stolen device, must be reported immediately to the IT department so they can take action to protect company systems and data.</li>
        <li><strong>What is expected:</strong> If you suspect that your device has been compromised or you notice unusual activity while working remotely, report the incident to the IT department as soon as possible. IT will investigate and take steps to secure the network.</li>
        <li><strong>Example:</strong> If your work laptop is stolen while you are traveling, notify IT immediately so they can remotely wipe sensitive data from the device and prevent unauthorized access to the company network.</li>
    </ul>

    <hr></hr>

    <h3>Consequences of Violating the Remote Access Policy</h3>
    <p>Failure to comply with this policy could result in security breaches, data loss, or unauthorized access to the company’s systems. Violating the Remote Access Policy may lead to:</p>
    <ul>
        <li>Loss of remote access privileges.</li>
        <li>Disciplinary action, ranging from a warning to termination, depending on the severity of the violation.</li>
        <li>Potential exposure of sensitive company data, which could result in financial losses or damage to the company’s reputation.</li>
    </ul>
    <p><strong>Example:</strong> If an employee accesses company systems from a public Wi-Fi network without using a VPN, this could expose company data to hackers and result in disciplinary action for violating the policy.</p>

    <hr></hr>

    <h3>Why This Policy Matters</h3>
    <ul>
        <li><strong>Protects Company Data:</strong> By following secure remote access practices, employees help protect sensitive company information from being exposed to unauthorized individuals or cyberattacks.</li>
        <li><strong>Reduces Security Risks:</strong> The policy minimizes the risks associated with remote work, such as the use of unsecured networks or unprotected devices.</li>
        <li><strong>Ensures Business Continuity:</strong> Secure remote access enables employees to work from anywhere without compromising the company’s security, ensuring business operations can continue smoothly.</li>
    </ul>

    <hr></hr>

    <h3>What You Should Do</h3>
    <ul>
        <li><strong>Use the VPN and Multi-Factor Authentication (MFA)</strong> whenever accessing the company’s systems or data remotely.</li>
        <li><strong>Keep your devices secure</strong> by updating them with the latest security patches and using antivirus software.</li>
        <li><strong>Avoid public Wi-Fi</strong> for work unless you are connected to the VPN to protect your data.</li>
        <li><strong>Follow data protection guidelines</strong> when accessing or transferring sensitive company information.</li>
        <li><strong>Ensure your workspace is secure</strong> by locking your screen when away and preventing unauthorized individuals from accessing your device.</li>
        <li><strong>Report any security incidents</strong> or suspicious activity to the IT department immediately.</li>
    </ul>

    <p>By following the <strong>Remote Access Policy</strong>, you help ensure that the company’s systems and data remain secure, even when working from outside the office. This policy protects both the organization and employees by reducing the risks associated with remote work and ensuring that business operations can continue safely and securely.</p>



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
