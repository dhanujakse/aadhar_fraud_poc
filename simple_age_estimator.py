import cv2
import numpy as np
import os

class SimpleFaceAgeEstimator:
    """
    POC Face Age Estimator
    Uses texture analysis
    Falls back to full-image ROI if no face detected
    """

    def __init__(self):
        self.face_cascade = cv2.CascadeClassifier(
            cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
        )

    def estimate_age(self, image_path):
        if not os.path.exists(image_path):
            return None, 0.0, {}

        img = cv2.imread(image_path)
        if img is None:
            return None, 0.0, {}

        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        faces = self.face_cascade.detectMultiScale(gray, 1.3, 5)

        # ✅ FIX: fallback ROI for POC
        if len(faces) > 0:
            x, y, w, h = max(faces, key=lambda f: f[2] * f[3])
            roi = gray[y:y+h, x:x+w]
        else:
            h, w = gray.shape
            roi = gray[int(h*0.2):int(h*0.8), int(w*0.2):int(w*0.8)]

        features = self._extract_features(roi)
        age = self._compute_age(features)

        return age, 0.85, features

    def _extract_features(self, roi):
        lap = cv2.Laplacian(roi, cv2.CV_64F)
        edges = cv2.Canny(roi, 50, 150)

        return {
            "texture": lap.var(),
            "edges": np.mean(edges),
            "contrast": roi.std()
        }

    def _compute_age(self, f):
        age = 20
        age += f["texture"] / 120
        age += f["edges"] / 3
        age += f["contrast"] / 8
        return round(np.clip(age, 5, 80), 1)


class SimpleIrisAgeEstimator:
    """
    POC Iris Age Estimator
    Assumes cropped iris image
    """

    def estimate_age(self, image_path):
        if not os.path.exists(image_path):
            return None, 0.0, {}

        img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
        if img is None:
            return None, 0.0, {}

        lap = cv2.Laplacian(img, cv2.CV_64F)
        blur = cv2.GaussianBlur(img, (5, 5), 0)

        features = {
            "texture": lap.var(),
            "smoothness": blur.std()
        }

        age = self._compute_age(features)
        return age, 0.82, features

    def _compute_age(self, f):
        age = 25
        age += f["texture"] / 60
        age += f["smoothness"] / 6
        return round(np.clip(age, 5, 80), 1)


class AgeConsistencyVerifier:
    """
    Core Fraud Detection Logic
    """

    def __init__(self, threshold=4.0):
        self.threshold = threshold

    def verify(self, face_age, iris_age, face_conf=0.85, iris_conf=0.82):
        age_diff = abs(face_age - iris_age)

        if age_diff <= self.threshold:
            age_score = 1 - (age_diff / self.threshold)
            consistency = "PASS"
        else:
            age_score = 0
            consistency = "FAIL"

        final_score = (
            0.25 * face_conf +
            0.25 * iris_conf +
            0.35 * age_score +
            0.15 * 0.5
        )

        if final_score >= 0.85:
            decision = "APPROVED"
            color = "success"
        elif final_score >= 0.65:
            decision = "MANUAL_REVIEW"
            color = "warning"
        else:
            decision = "FRAUD_DETECTED"
            color = "danger"

        return {
            "face_age": face_age,
            "iris_age": iris_age,
            "age_difference": age_diff,
            "age_score": age_score,
            "final_score": final_score,
            "decision": decision,
            "color": color,
            "consistency": consistency
        }


if __name__ == "__main__":
    verifier = AgeConsistencyVerifier()

    print(verifier.verify(28, 27))
    print(verifier.verify(34, 11))
    print(verifier.verify(28, 52))
