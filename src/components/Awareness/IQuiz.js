import React, { useEffect, useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

let IScore = 0;
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
      IScore = score;
      console.log('Quiz: ',IScore);
      updateUserScore(UID, IScore);
    }
  };

  const updateUserScore = async (uid, IScore) => {
    try {
      const userRef = doc(db, "Users", uid);  // Reference to user's document in Firestore

      await setDoc(userRef, {
        InitialScore: IScore,  // Update FinalScore field
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
        <h1>Initial Quiz</h1>
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
