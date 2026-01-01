🔐 Aadhaar Fraud Detection POC
Cross-Modal Age Consistency Verification System
📌 Overview

This project is a Proof of Concept (POC) that demonstrates how Aadhaar identity fraud can be detected by checking biological age consistency between facial images and iris images.

Many Aadhaar fraud cases happen when criminals mix biometrics:

An adult face with a child’s iris

A young face with an older operator’s iris

Current systems often verify biometrics individually, but do not check if they belong to the same person biologically.
This project solves that gap using cross-modal age verification.

🚨 Real-World Problem

In recent years, multiple Aadhaar fraud cases were reported in India:

-> Rajasthan (2024):
    School children’s iris scans were misused to create fake Aadhaar cards for adults.

-> Uttar Pradesh (2024):
    Aadhaar operators’ biometric credentials were stolen and reused with fake faces.

These frauds are biologically impossible if checked correctly — because face age and iris age cannot differ drastically for the same person.

💡 Solution Approach

This system:

Estimates age from face image

Estimates age from iris image

Compares both ages

Flags fraud if the age difference crosses a safe biological threshold

🧠 How the System Works
1️⃣ Face Age Estimation

Uses OpenCV Haar Cascade to detect face

Extracts texture, wrinkles, edges, contrast

Estimates age using image characteristics

2️⃣ Iris Age Estimation

Analyzes iris texture patterns

Measures smoothness, crypts, radial variation

Estimates biological age

3️⃣ Age Consistency Verification

Computes absolute age difference

Threshold used: 4 years

Produces final decision:

✅ APPROVED

⚠ MANUAL_REVIEW

❌ FRAUD_DETECTED

🧪 Demo Test Cases Included
Case	Face Age	Iris Age	Result
Legitimate User	28	27	✅ APPROVED
Rajasthan Fraud	34	11	❌ FRAUD_DETECTED
UP Operator Fraud	28	52	❌ FRAUD_DETECTED
Borderline Case	32	26	⚠ MANUAL_REVIEW
🌐 Web Interface

Built using Flask

Upload face & iris images

Instantly get:

Estimated ages

Age difference

Fraud decision

Verification score

Includes pre-generated demo cases

📂 Project Structure
aadhar_fraud_poc/
│
├── simple_age_estimator.py     # Face & iris age estimation logic
├── generate_demo_data.py       # Synthetic demo data generator
├── app.py                      # Flask web application
│
├── data/
│   ├── samples/               # Generated demo images
│   └── uploads/               # Uploaded test images
│
├── templates/
│   └── index.html             # Web UI
│
└── README.md

⚙️ Installation & Setup
1️⃣ Install Dependencies
pip install numpy opencv-python pillow flask torch torchvision

2️⃣ Generate Demo Data
python generate_demo_data.py

3️⃣ Test Age Estimation Logic
python simple_age_estimator.py

4️⃣ Run Web Application
python app.py


Visit 👉 http://localhost:5000

📊 Performance (POC Level)

Fraud Detection Rate: ~100% for demo cases

Processing Time: 4–6 seconds

False Rejection: Very low

Dataset: Synthetic (for demonstration)

⚠️ Note:
This is a demonstration POC, not a production-ready biometric system.

🔬 Why This Project Matters

Protects children from identity theft

Prevents large-scale Aadhaar fraud

Adds an extra security layer to biometric systems

Can be integrated into existing Aadhaar workflows

🚀 Future Improvements

Replace heuristic age estimation with deep learning models

Add liveness detection

Include soft biometrics (gender, ethnicity)

Log repeated fraud attempts

Integrate with real Aadhaar enrollment pipelines

🧑‍💻 Intended Use

Academic project

Cybersecurity demonstration

Hackathons

Proof-of-concept for biometric fraud detection

Research & learning

⚠️ Disclaimer

This project uses synthetic data only.
No real Aadhaar data is used.
Created strictly for educational and research purposes.
