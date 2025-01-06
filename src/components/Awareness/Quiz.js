import React, { useEffect, useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";  // Import Firestore config
// import { getAuth } from "firebase/auth";  // Import Firebase Auth


let FScore = 0;
const UID = localStorage.getItem("UID");

function Profile() {
  const [userDetails] = useState({});

  useEffect(() => {
    // Add any logic you want to run when the component mounts
  }, []);

  async function handleLogout() {
    window.location.href = "/login";
    console.log("User logged out successfully!");
  }

  return (
    <div>
      {userDetails ? (
        <>
          <header style={styles.header}>
            <div className="logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg__AzXw2m6KyNZ85Qu8F0PR5NXBcviPks7-bLZ9ZBu1Gj89A"
                alt="Logo"
                style={{ width: "50px" }}
              />
            </div>
            <nav>
              <ul style={styles.navList}>
                <li style={styles.navItem}>
                  <a href="./profile">Home</a>
                </li>
                <li style={styles.navItem}>
                  <a href="./Programs">Frameworks</a>
                </li>
                <li style={styles.navItem}>
                  <a href="./Policys">Security Policy</a>
                </li>
                <li style={styles.navItem}>
                  <a href="./Quiz">Quiz</a>
                </li>
                <li style={styles.navItem}>
                  <a href="./Dashboard">Dashboard</a>
                </li>
              </ul>
            </nav>
            <button
              className="btn btn-primary"
              onClick={handleLogout}
              style={styles.logoutBtn}
            >
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
  const [quizQuestions] = useState([
    {
      question:
        "What is the primary purpose of the Backup and Disaster Recovery Policy?",
      options: [
        "To ensure regular backups of personal devices",
        "To minimize data loss and enable quick recovery from system failures",
        "To allow employees to access their personal data",
        "To back up non-essential files only",
      ],
      correctAnswer:
        "To minimize data loss and enable quick recovery from system failures",
    },
    {
      question:
        "How often should backups be tested according to best practices in a Backup and Disaster Recovery Policy?",
      options: [
        "Never",
        "Monthly",
        "Every few years",
        "When a disaster happens",
      ],
      correctAnswer: "Monthly",
    },
    {
      question:
        "What should employees do in the event of a data loss or system failure?",
      options: [
        "Report the issue immediately to IT",
        "Attempt to recover data themselves",
        "Ignore the issue and continue working",
        "Contact external support without notifying IT",
      ],
      correctAnswer: "Report the issue immediately to IT",
    },
    {
      question: "What is the main role of antivirus software?",
      options: [
        "To delete all personal files",
        "To detect and remove malicious software like viruses and malware",
        "To increase internet speed",
        "To manage backups",
      ],
      correctAnswer:
        "To detect and remove malicious software like viruses and malware",
    },
    {
      question: "How often should antivirus software be updated?",
      options: [
        "Annually",
        "Once every five years",
        "Whenever new threats are identified",
        "Automatically, as frequently as updates are available",
      ],
      correctAnswer: "Automatically, as frequently as updates are available",
    },
    {
      question:
        "What should you do if you suspect your device has been infected with malware?",
      options: [
        "Run a manual antivirus scan and contact IT",
        "Ignore the issue",
        "Restart the device and continue working",
        "Disable antivirus software to fix the issue",
      ],
      correctAnswer: "Run a manual antivirus scan and contact IT",
    },
    {
      question:
        "What is the most secure way to access company systems remotely?",
      options: [
        "Use public Wi-Fi without any security measures",
        "Use the company’s Virtual Private Network (VPN) and Multi-Factor Authentication (MFA)",
        "Share login credentials with others",
        "Access systems through personal email accounts",
      ],
      correctAnswer:
        "Use the company’s Virtual Private Network (VPN) and Multi-Factor Authentication (MFA)",
    },
    {
      question:
        "How should you protect company data when using a public Wi-Fi network?",
      options: [
        "Use a VPN to encrypt your connection",
        "Use a public email service",
        "Disable all security settings on your device",
        "Use a friend’s device to access the data",
      ],
      correctAnswer: "Use a VPN to encrypt your connection",
    },
    {
      question:
        "Who should you contact if you suspect your remote connection to company data has been compromised?",
      options: [
        "Wait until the next business day",
        "Contact the IT department immediately",
        "Notify the marketing department",
        "Continue using the compromised connection",
      ],
      correctAnswer: "Contact the IT department immediately",
    },
    {
      question: "What does the Access Control Policy ensure?",
      options: [
        "That everyone in the company has access to all systems",
        "That access to sensitive data is restricted to authorized personnel only",
        "That passwords are optional",
        "That employees can access data using any device",
      ],
      correctAnswer:
        "That access to sensitive data is restricted to authorized personnel only",
    },
    {
      question:
        "What is the purpose of multi-factor authentication (MFA) in the Access Control Policy?",
      options: [
        "To ensure that users do not need passwords",
        "To provide an additional layer of security by requiring more than just a password",
        "To share login credentials with others",
        "To bypass security for faster access",
      ],
      correctAnswer:
        "To provide an additional layer of security by requiring more than just a password",
    },
    {
      question:
        "Why is it important to review and update access permissions regularly?",
      options: [
        "To reduce system performance",
        "To prevent unauthorized access to sensitive information",
        "To share data with competitors",
        "To give more employees unrestricted access",
      ],
      correctAnswer: "To prevent unauthorized access to sensitive information",
    },
    {
      question:
        "What is the main risk associated with using personal devices for work under a BYOD policy?",
      options: [
        "Faster processing speeds",
        "The risk of unauthorized access or loss of company data",
        "Increased social media use",
        "Better battery life",
      ],
      correctAnswer: "The risk of unauthorized access or loss of company data",
    },
    {
      question: "What is required to protect company data on personal devices?",
      options: [
        "A special case for the device",
        "Installing approved security software and enabling strong passwords",
        "Accessing unsecured websites",
        "Disabling device encryption",
      ],
      correctAnswer:
        "Installing approved security software and enabling strong passwords",
    },
    {
      question:
        "True or False: Employees must agree to allow the company to remotely wipe work-related data from personal devices if the device is lost or stolen.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      question:
        "What is the primary function of a firewall in network security?",
      options: [
        "To boost internet speeds",
        "To block unauthorized access to the network",
        "To increase download speeds",
        "To enable file sharing",
      ],
      correctAnswer: "To block unauthorized access to the network",
    },
    {
      question:
        "True or False: Employees should avoid connecting unauthorized devices to the company’s network.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      question:
        "What should employees do if they notice suspicious network activity?",
      options: [
        "Ignore it",
        "Report the activity to the IT department immediately",
        "Restart their computer",
        "Share their network credentials with others",
      ],
      correctAnswer: "Report the activity to the IT department immediately",
    },
    {
      question:
        "How often should employees change their passwords according to best practices?",
      options: [
        "Every day",
        "Whenever they feel like it",
        "Regularly, or immediately if a breach is suspected",
        "Never",
      ],
      correctAnswer: "Regularly, or immediately if a breach is suspected",
    },
    {
      question: "What is an example of a strong password?",
      options: [
        "Your name and birth year",
        "A random combination of letters, numbers, and symbols",
        "The word 'password'",
        "Your pet’s name",
      ],
      correctAnswer: "A random combination of letters, numbers, and symbols",
    },
    {
      question:
        "What should employees do if they believe their password has been compromised?",
      options: [
        "Share it with colleagues",
        "Continue using it",
        "Change the password immediately and report the incident",
        "Ignore the issue",
      ],
      correctAnswer: "Change the password immediately and report the incident",
    },
    {
      question:
        "What is the main purpose of a Data Protection and Privacy Policy?",
      options: [
        "To provide guidelines on protecting personal data and ensuring privacy rights",
        "To allow unrestricted access to all data",
        "To share personal information with third parties",
        "To encourage the collection of as much data as possible",
      ],
      correctAnswer:
        "To provide guidelines on protecting personal data and ensuring privacy rights",
    },
    {
      question: "How should sensitive personal data be handled?",
      options: [
        "Shared freely",
        "Stored securely and access limited to authorized personnel",
        "Uploaded to public servers",
        "Deleted without reason",
      ],
      correctAnswer:
        "Stored securely and access limited to authorized personnel",
    },
    {
      question:
        "What must be done if personal data is no longer needed for its original purpose?",
      options: [
        "Continue storing it indefinitely",
        "Securely delete or anonymize the data",
        "Transfer it to personal accounts",
        "Sell it to third parties",
      ],
      correctAnswer: "Securely delete or anonymize the data",
    },
    {
      question:
        "What is the first step employees should take if they identify a data breach?",
      options: [
        "Try to resolve the breach themselves",
        "Immediately report the breach to the IT department",
        "Ignore it and continue working",
        "Share the breach details on social media",
      ],
      correctAnswer: "Immediately report the breach to the IT department",
    },
    {
      question:
        "How long does GDPR allow an organization to notify authorities about a significant data breach?",
      options: ["24 hours", "72 hours", "One week", "One month"],
      correctAnswer: "72 hours",
    },
    {
      question:
        "Why is it important to regularly review and update the incident response plan?",
      options: [
        "To make it more complex",
        "To ensure it remains effective and addresses new threats",
        "To avoid using it",
        "To remove all security measures",
      ],
      correctAnswer: "To ensure it remains effective and addresses new threats",
    },
    // Add more questions here...
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerSelection = (option) => {
    if (!submitted) {
      setSelectedAnswer(option);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      const currentQuestion = quizQuestions[currentQuestionIndex];
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
      setSubmitted(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      FScore = score;
      console.log('Quiz: ',FScore);
      updateUserScore(UID, FScore);
    }
  };

  const updateUserScore = async (uid, FScore) => {
    try {
      const userRef = doc(db, "Users", uid);  // Reference to user's document in Firestore

      await setDoc(userRef, {
        FinalScore: FScore,  // Update FinalScore field
      }, { merge: true });  // Merge to avoid overwriting entire document

      console.log(`User ${uid}'s score updated successfully in Firestore`);
    } catch (error) {
      console.error("Error updating user score: ", error);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <Profile />
      <div style={styles.heroContent}>
        <h1>Final Quiz </h1>
        
        {isQuizCompleted ? (
          <div style={styles.quizCompleted}>
            <h2>Quiz Completed!</h2>

            <p>
              Your Score: {score}/{quizQuestions.length}
              
              
            </p>
          </div>
        ) : (
          <div style={styles.quizSection}>
            <h2>{quizQuestions[currentQuestionIndex].question}</h2>
            <ul style={styles.quizOptions}>
              {quizQuestions[currentQuestionIndex].options.map(
                (option, index) => (
                  <li
                    key={index}
                    onClick={() => handleAnswerSelection(option)}
                    style={{
                      ...styles.option,
                      backgroundColor:
                        submitted &&
                        option ===
                          quizQuestions[currentQuestionIndex].correctAnswer
                          ? "green"
                          : selectedAnswer === option
                          ? "#007bff"
                          : "#f4f4f4",
                      color:
                        submitted &&
                        option ===
                          quizQuestions[currentQuestionIndex].correctAnswer
                          ? "#fff"
                          : selectedAnswer === option
                          ? "#fff"
                          : "#000",
                    }}
                  >
                    {option}
                  </li>
                )
              )}
            </ul>
            {!submitted ? (
              <button onClick={handleSubmitAnswer} style={styles.submitBtn}>
                Submit Answer
              </button>
            ) : (
              <button onClick={handleNextQuestion} style={styles.nextBtn}>
                Next Question
              </button>
            )}
          </div>
        )}
      </div>
      <footer style={styles.footer}>
        <p>&copy; 2024 Information Security Frameworks. All rights reserved.</p>
      </footer>
    </div>
  );
}
// export const FinalScore = FScore;

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
  pageContainer: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  heroContent: {
    padding: "50px",
    backgroundColor: "#e0f7fa",
    height: "calc(100vh - 150px)",
  },
  quizSection: {
    marginTop: "20px",
  },
  quizOptions: {
    listStyle: "none",
    paddingLeft: 0,
  },
  option: {
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    cursor: "pointer",
  },
  submitBtn: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  nextBtn: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  quizCompleted: {
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
};

export default BlogHomepage;
