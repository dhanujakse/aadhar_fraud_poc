#  Aadhaar Fraud Detection POC  
## Cross-Modal Biometric Age Consistency Verification System

> **Domain:** Cybersecurity · Biometrics · Fraud Detection · Computer Vision · AI  
> **Type:** Proof of Concept (POC)  
> **Tech Stack:** Python, OpenCV, Flask, NumPy

---

##  Problem Statement

Most biometric authentication systems verify face, iris, or fingerprints individually. Fraudsters exploit this gap by mixing biometrics from different individuals, allowing impersonation and large-scale identity fraud.

### Common Fraud Patterns:
- Adult face combined with a child’s iris  
- Young face combined with stolen operator iris  
- Reuse of biometric credentials across multiple identities  

Existing systems do not verify whether multiple biometrics belong to the same biological individual.

---

##  Proposed Solution

This project introduces a Cross-Modal Age Consistency Verification layer.

The system estimates age independently from face and iris images and compares the results. If the age difference exceeds a safe biological threshold, the enrollment is flagged as fraudulent.

---

##  System Architecture

### 1️ Face Age Estimation
- Face detection using OpenCV Haar Cascade
- Feature extraction:
  - Texture variance
  - Edge density (wrinkles)
  - Contrast and histogram spread
- Age estimation using image-based heuristics

### 2️ Iris Age Estimation
- Iris texture analysis
- Feature extraction:
  - Crypt density
  - Smoothness degradation
  - Radial pattern variance
- Biological age estimation

### 3️ Age Consistency Verification Engine
- Absolute age difference calculation
- Threshold: 4 years
- Decision outcomes:
  -  APPROVED
  -  MANUAL_REVIEW
  -  FRAUD_DETECTED


##  Project Demo Preview

<p align="center">
  <a href="full_vid.mp4">
    <img src="Screenshot%202026-01-02%20165018.png" width="45%">
  </a>
  <a href="full_vid.mp4">
    <img src="Screenshot%202026-01-02%20165041.png" width="45%">
  </a>
</p>

 [Watch Full Video](full_vid.mp4)

---

##  Test Scenarios & Results

| Scenario | Face Age | Iris Age | Age Difference | Decision |
|--------|---------|---------|---------------|---------|
| Legitimate User | 28 | 27 | 1 year |  APPROVED |
| Rajasthan Fraud Case | 34 | 11 | 23 years |  FRAUD_DETECTED |
| UP Operator Fraud | 28 | 52 | 24 years |  FRAUD_DETECTED |
| Borderline Case | 32 | 26 | 6 years |  MANUAL_REVIEW |

- Fraud Detection Rate: 100% (demo cases)
- False Rejection Rate: 0%
- Processing Time: ~4–6 seconds

---

##  Web Application Features

- Flask-based web interface
- Upload face and iris images
- Real-time verification results:
  - Estimated ages
  - Age difference
  - Fraud decision
  - Verification score
- Preloaded demo cases for live testing

---

##  Technology Stack

**Programming & Frameworks**
- Python
- Flask

**Computer Vision & AI**
- OpenCV
- NumPy
- Pillow

**Frontend**
- HTML
- CSS
- JavaScript



##  Project Structure
  aadhar_fraud_poc/
  │
  ├── simple_age_estimator.py    
  ├── generate_demo_data.py       
  ├── app.py                      
  │
  ├── data/
  │   ├── samples/               
  │   └── uploads/               
  │
  ├── templates/
  │   └── index.html             
  │
  └── README.md



##  Installation & Execution

→ Install required dependencies
→ pip install numpy opencv-python pillow flask torch torchvision

→ Generate synthetic demo data
→ python generate_demo_data.py

→ Test face & iris age estimation
→ python simple_age_estimator.py

→ Start the web application
→ python app.py

→ Open browser and visit
→ http://localhost:5000


##  Key Skills Demonstrated

Cybersecurity and Fraud Detection

Biometric Authentication Systems

Computer Vision and Image Processing

OpenCV

Python Backend Development

Flask Web Applications

Identity Verification

Risk Analysis

Proof of Concept Development

##  Future Enhancements

Deep learning–based age estimation models

Liveness detection integration

Multi-factor biometric consistency checks

Fraud analytics dashboard

Scalability for national identity systems

##  Use Cases

Academic and final-year projects

Cybersecurity demonstrations

Hackathons

Biometric fraud detection research

Government identity systems (POC level)

##  Project Summary

This project is a cybersecurity-focused Proof of Concept (POC) that detects Aadhaar identity fraud by verifying biological age consistency between facial biometrics and iris biometrics.

The system identifies biologically impossible biometric combinations—such as an adult face paired with a child’s iris—which are commonly used in real-world Aadhaar fraud cases. By comparing age estimates derived from different biometric modalities, the system flags fraudulent enrollments that traditional biometric systems fail to detect.


##  Disclaimer

This project uses synthetic biometric data only.
No real Aadhaar data is used.
Created strictly for educational and research purposes.
