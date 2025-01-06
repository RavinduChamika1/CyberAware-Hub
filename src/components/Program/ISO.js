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
          <h1>ISO 27001 and How It Can Strengthen Your Organisation’s Security</h1>
          <p>
          ISO/IEC 27001 is the international standard for information security management. Part of the ISO 27000 series, ISO 27001 sets out a framework for all organisations to establish, implement, operate, monitor, review, maintain and continually improve an ISMS (information security management system).
          </p>
        </div>
        <div style={styles.heroImage}>
          <img
            src="data:image/png;base64,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"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <div>
        <br></br>
    <p>With cyber threats becoming increasingly sophisticated, organisations must take proactive steps to protect their sensitive information. One effective approach is implementing the ISO 27001 standard. Let’s explore the significance of ISO 27001 and how this internationally recognised standard can fortify your organisation’s security practices.</p>

    <h2>In this Lecture, we’ll cover:</h2>
    <ul>
        <li>What is ISO 27001?</li>
        <li>Why is ISO 27001 highly respected worldwide?</li>
        <li>What does it mean to be ISO 27001 certified?</li>
        <li>What are the 3 principles of ISO 27001?</li>
        <li>What is the structure of ISO 27001 and what are the clauses?</li>
        <li>How can ISO 27001 help with your organisation’s day-to-day operation?</li>
        <li>What are the key benefits of getting ISO 27001 Certification?</li>
        <li>Is providing data security training to employees part of ISO 27001 requirements?</li>
        <li>How usecure can help you fulfil ISO 27001 requirements</li>
        <li>Start training your employees now to achieve better information security</li>
    </ul>

    <h2>What is ISO 27001?</h2>
    <p>Understanding the abbreviation and joint publication: While commonly known as ISO 27001, it is important to note that the official abbreviation for the International Standard on Requirements for information security management is ISO/IEC 27001.</p>
    <p>The official abbreviation means it is a joint publication by two renowned organisations: The International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC). The number signifies that it was published under the responsibility of Subcommittee 27 (on Information Security, Cybersecurity and Privacy Protection) of ISO’s and IEC’s Joint Technical Committee on Information Technology (ISO/IEC JTC 1).</p>
    <p>ISO 27001 is regularly updated to reflect the ever-changing landscape of technology and ISO 27001:2022 is the latest version.</p>

    <h2>Why is ISO 27001 highly respected worldwide?</h2>
    <p>Achieving certification to ISO 27001 serves as a powerful testament to your organisation's dedication to effectively managing information with utmost security and safety. This internationally recognised standard, widely adopted across the globe, holds significant value for stakeholders and customers.</p>
    <blockquote>
        <p>ISO 27001 is the world's best-known standard for information security management systems (ISMS). It defines the requirements an ISMS must meet.</p>
        <footer>– International Organization for Standardization</footer>
    </blockquote>
    <p>According to the ISO Survey 2021, over 50,000 certificates have been reported in more than 140 countries across diverse economic sectors. These statistics highlight the widespread adoption and relevance of ISO 27001 as a trusted framework for information security management.</p>

    <h2>What does it mean to be ISO 27001 certified?</h2>
    <p>The ISO 27001 standard offers a robust system to manage risks associated with data security. The ISO standard provides:</p>
    <ul>
        <li>Comprehensive guidance to companies on establishing, implementing, maintaining, and continuously improving an information security management system.</li>
        <li>A structured approach to managing sensitive information, identifying vulnerabilities, and implementing appropriate security controls.</li>
    </ul>
    <p>Compliance with ISO 27001 signifies that an organisation has pursued the highest standards and principles, ensuring that the organisation follow best practices for safeguarding the data it owns or handles.</p>
    <p>ISO 27001 plays a vital role in helping organisations cultivate a risk-aware culture, allowing them to strengthen their overall security posture. It is recommended that all organisations regardless of the size and industry, seek compliance with ISO 27001.</p>

    <h2>What are the 3 principles of ISO 27001?</h2>
    <p>Confidentiality, Integrity, and Availability, also known as The CIA Triad, are the fundamental concepts in ISO 27001. These principles serve as a framework for designing and evaluating information security measures and ensuring the protection of valuable data assets.</p>

    <h3>CIA Triad</h3>
    <p><strong>Confidentiality:</strong> Confidentiality refers to the assurance that information is accessible only to authorised individuals or entities.</p>
    <p><em>Example of how to implement security measures:</em> Train your staff on the importance of confidentiality, data handling procedures, and the risks associated with unauthorised disclosure.</p>

    <p><strong>Integrity:</strong> Integrity means the accuracy, completeness, and trustworthiness of information throughout its lifecycle.</p>
    <p><em>Example of how to implement security measures:</em> Regularly back up critical data and implement processes to verify the integrity of backups.</p>

    <p><strong>Availability:</strong> Availability refers to the accessibility and usability of information by authorised individuals whenever they need it.</p>
    <p><em>Example of how to implement security measures:</em> Ensure reliable and secure data restoration in case of incidents.</p>

    <p>There is an interdependent relationship among the three elements of the CIA Triad. For instance, when confidentiality is prioritised to an extremely high level, it can potentially result in reduced data availability. Therefore, finding the balance within the Triad while operating with limited resources becomes a critical consideration for organisations to ponder upon.</p>

    <h2>What is the structure of ISO 27001 and what are the clauses?</h2>
    <p>ISO 27001 encompasses 11 clauses and 93 controls from Annex A. These elements work together to facilitate the establishment and upkeep of an effective Information Security Management System (ISMS).</p>

    <p><strong>The ISO 27001 structure is broken down into two major components:</strong></p>
    <h3>Mandatory clauses</h3>
    <p>The first part of the ISO 27001 standard lists 11 clauses (0–10), with only 4–10 being the clauses a company must implement to be ISO 27001 compliant.</p>

    <h3>Annex A controls</h3>
    <p>The second part, called Annex A, provides guidelines for 93 security controls in 4 themes. Companies can select controls that apply to their specific operations and create relevant security risk assessments.</p>

    <h2>How can ISO 27001 help with your organisation’s day-to-day operation?</h2>
    <p>By adopting the guidance of ISO 27001 and establishing a strong foundation for safeguarding data and committing to information security, businesses can:</p>
    <ul>
        <li>identify and address vulnerabilities and weaknesses in their information security practices,</li>
        <li>minimise vulnerabilities,</li>
        <li>proactively fortify their security defences to mitigate potential risks, and</li>
        <li>safeguard against the potential consequences of information breaches and cyberattacks.</li>
    </ul>

    <h2>What are the key benefits of getting ISO 27001 Certification?</h2>
    <p>ISO 27001 certification offers numerous benefits for organisations. It helps achieve compliance with data protection regulations and proves the reliability of an organisation's information security management systems. By adopting ISO 27001, businesses can:</p>
    <ul>
        <li><strong>Achieve compliance:</strong> By implementing the necessary controls and processes, businesses can ensure they meet legal obligations and avoid potential penalties. Compliance with ISO 27001 demonstrates a commitment to protecting sensitive information and maintaining the privacy of customers' data.</li>
        <li><strong>Prove the reliability of your Infosec Management Systems:</strong> ISO 27001 certification provides independent verification that an organisation's information security management systems (ISMS) are reliable and effective. It demonstrates that the organisation has established a systematic approach to identifying and mitigating information security risks.</li>
        <li><strong>Win new business in the international market:</strong> ISO 27001 is an internationally recognised standard for information security management systems. For companies intending to expand into the international market, achieving ISO 27001 enables foreign customers to gain a clear understanding of the company's capabilities in managing and safeguarding their data. This not only instils confidence in potential clients but also positions the company as an internationally recognised and trustworthy partner.</li>
        <li><strong>Grow stakeholders' trust:</strong> ISO 27001 certification enhances stakeholders' trust in an organisation's information security practices. Customers and partners are increasingly concerned about the protection of their data and want to work with organisations that prioritise security. ISO 27001 certification provides third-party validation which helps organisations to foster stronger business relationships with stakeholders.</li>
        <li><strong>Gain a competitive edge:</strong> In a competitive marketplace, ISO 27001 certification sets organisations apart from their competitors. ISO 27001 certification can be a deciding factor for potential clients who prioritise data protection, providing a clear competitive advantage</li>
    </ul>
    </div>
      

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
  navItem: {
    marginRight: "20px",
    fontWeight: "bold",        // Make the text bolder
    letterSpacing: "0.05em",   // Slight spacing between letters
    textTransform: "uppercase",// Capitalize the text
    color: "#007bff",          // Blue text color
    textDecoration: "none",    // Remove underline
    cursor: "pointer",         // Pointer on hover
  },
  navItemHover: {
    textDecoration: "underline",  // Underline on hover
  },
};

export default BlogHomepage;
