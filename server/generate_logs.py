import json
import random
from datetime import datetime, timedelta

# Sample data pools
users = ["griffin.techs", "anna.smith", "li.wei", "maria.gomez", "ahmed.khan", "sara.nilsen", "tom.jensen"]
kiosks = ["Berlin-12", "Oslo-04", "Madrid-03", "NewYork-07", "Shanghai-01", "Tokyo-08", "CapeTown-02"]
statuses = ["success", "failed"]

def generate_logs(num_entries=50):
    logs = []
    now = datetime.utcnow()

    for _ in range(num_entries):
        log = {
            "user": random.choice(users),
            "kiosk": random.choice(kiosks),
            "status": random.choices(statuses, weights=[0.8, 0.2])[0],  # 80% success, 20% fail
            "timestamp": (now - timedelta(minutes=random.randint(1, 1440))).isoformat() + "Z"
        }
        logs.append(log)

    return logs

# Generate and save
logs = generate_logs(50)

with open("data/logs.json", "w") as f:
    json.dump(logs, f, indent=2)

print("✅ logs.json updated with 50 simulated entries.")
