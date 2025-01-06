# CyberAware Hub

**CyberAware Hub** is a training application designed to enhance information security awareness for company employees. This application provides an interactive platform where employees can assess their knowledge, learn about important security frameworks, and track their progress.

## Features

- **User Authentication**: Secure login system using Firebase Authentication.
- **Initial Quiz**: Employees start with an initial quiz to measure baseline knowledge.
- **Framework Tutorials**: Includes training on compliance frameworks such as PCI-DSS, HIPAA, and NIST.
- **Final Quiz**: Users can attempt a final quiz and compare results with the initial assessment.
- **Dashboard**: Displays the comparison of quiz results and tracks user progress.
- **Data Storage**: All results are securely stored in Firebase Storage.

---

## Installation and Setup

Follow the steps below to set up and run the "CyberAware Hub" application:

### Prerequisites

- Node.js installed (no specific version required).

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/RavinduChamika1/CyberAware-Hub
   cd CyberAware-Hub
   ```

2. **Install Dependencies**
   Run the following commands to install the necessary Node.js packages:
   ```bash
   npm install
   npm install firebase
   npm install firebase @firebase/auth
   ```

3. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable **Firebase Authentication** and set up email/password authentication.
   - Add your Firebase configuration keys to the project. This can be done using a `.env` file or directly in your code as required.

4. **Run the Application**
   Start the development server:
   ```bash
   npm start
   ```

5. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Usage

1. Employees log in using their credentials.
2. Attempt the **Initial Quiz** to evaluate their current knowledge.
3. Learn key principles and requirements from compliance frameworks such as PCI-DSS, HIPAA, and NIST.
4. Complete the **Final Quiz** to measure progress.
5. View results and progress on the **Dashboard**.

---

## Contact

For questions or support, please contact [Ravindu Chamika](mailto:chamikar22@gmail.com).

---

