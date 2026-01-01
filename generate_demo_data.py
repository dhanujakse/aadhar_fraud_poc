"""
Generate synthetic demo images for POC testing
"""

import cv2
import numpy as np
import os


def generate_demo_face(age, subject_id, output_dir):
    os.makedirs(output_dir, exist_ok=True)

    img = np.ones((224, 224, 3), dtype=np.uint8) * 200

    cv2.ellipse(img, (112, 112), (80, 100), 0, 0, 360, (220, 190, 180), -1)

    if age > 25:
        for _ in range(int((age - 25) * 2)):
            x = np.random.randint(50, 174)
            y = np.random.randint(60, 160)
            cv2.line(img, (x, y), (x + 5, y), (160, 140, 130), 1)

    cv2.circle(img, (80, 90), 8, (50, 50, 50), -1)
    cv2.circle(img, (144, 90), 8, (50, 50, 50), -1)

    if age > 30:
        noise = np.random.normal(0, age - 20, img.shape)
        img = np.clip(img + noise, 0, 255).astype(np.uint8)

    filename = f"{output_dir}/face_{subject_id}_age{age}.jpg"
    cv2.imwrite(filename, img)
    return filename


def generate_demo_iris(age, subject_id, output_dir):
    os.makedirs(output_dir, exist_ok=True)

    img = np.ones((64, 64), dtype=np.uint8) * 150
    center = (32, 32)

    for angle in range(0, 360, 15):
        rad = np.radians(angle)
        x = int(center[0] + 25 * np.cos(rad))
        y = int(center[1] + 25 * np.sin(rad))
        cv2.line(img, center, (x, y), 120, 1)

    if age > 30:
        for _ in range(int((age - 30) * 0.5)):
            x = np.random.randint(20, 44)
            y = np.random.randint(20, 44)
            cv2.circle(img, (x, y), 2, 100, -1)

    if age < 20:
        img = cv2.GaussianBlur(img, (3, 3), 0)
    else:
        noise = np.random.normal(0, age * 0.3, img.shape)
        img = np.clip(img + noise, 0, 255).astype(np.uint8)

    filename = f"{output_dir}/iris_{subject_id}_age{age}.jpg"
    cv2.imwrite(filename, img)
    return filename


def create_demo_dataset():
    output_dir = "data/samples"
    os.makedirs(output_dir, exist_ok=True)

    generate_demo_face(28, "legit", output_dir)
    generate_demo_iris(27, "legit", output_dir)

    generate_demo_face(34, "fraud_child_iris", output_dir)
    generate_demo_iris(11, "fraud_child_iris", output_dir)

    generate_demo_face(28, "fraud_old_iris", output_dir)
    generate_demo_iris(52, "fraud_old_iris", output_dir)

    print("Demo images generated in data/samples/")


if __name__ == "__main__":
    create_demo_dataset()
