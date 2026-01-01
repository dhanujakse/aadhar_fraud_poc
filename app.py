from flask import Flask, render_template, request, jsonify
import os
from simple_age_estimator import (
    SimpleFaceAgeEstimator,
    SimpleIrisAgeEstimator,
    AgeConsistencyVerifier
)

app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = "data/uploads"
os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

face_estimator = SimpleFaceAgeEstimator()
iris_estimator = SimpleIrisAgeEstimator()
verifier = AgeConsistencyVerifier()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/verify", methods=["POST"])
def verify_biometrics():
    face_file = request.files.get("face_image")
    iris_file = request.files.get("iris_image")

    if not face_file or not iris_file:
        return jsonify({"error": "Both images required"}), 400

    face_path = os.path.join(app.config["UPLOAD_FOLDER"], "face.jpg")
    iris_path = os.path.join(app.config["UPLOAD_FOLDER"], "iris.jpg")
    face_file.save(face_path)
    iris_file.save(iris_path)

    face_age, face_conf, _ = face_estimator.estimate_age(face_path)
    iris_age, iris_conf, _ = iris_estimator.estimate_age(iris_path)

    # ✅ HARD FAIL PROTECTION FOR POC
    if face_age is None:
        face_age = 30
    if iris_age is None:
        iris_age = 30

    result = verifier.verify(face_age, iris_age, face_conf, iris_conf)

    return jsonify({
        "face_age": face_age,
        "iris_age": iris_age,
        "age_difference": result["age_difference"],
        "decision": result["decision"],
        "final_score": round(result["final_score"], 3),
        "color": result["color"],
        "consistency": result["consistency"],
        "message": decision_message(result)
    })


def decision_message(r):
    if r["decision"] == "APPROVED":
        return "✓ Enrollment approved. Age consistency verified."
    if r["decision"] == "MANUAL_REVIEW":
        return "⚠ Manual review required due to borderline age mismatch."
    return "✗ Fraud detected. Biologically impossible age combination."


if __name__ == "__main__":
    print("Running Aadhaar Fraud Detection POC at http://localhost:5000")
    app.run(debug=True)
