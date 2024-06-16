import random

# Define your equipment and their associated tags
equipment = {
    "TX-6": ["recording medium", "effect"],
    "Reason": ["recording medium"],
    "Jag-Stang": ["pad", "rhythm", "lead"],
    "SH-01a": ["pad", "rhythm", "lead"],
    "Strymon Tape": ["effect"]
}

# Define probabilities for the selection rules
probabilities = {
    "bass": 0.60,
    "effect": 0.20,
    "num_tracks": {
        1: 1.00,
        2: 0.90,
        3: 0.70,
        4: 0.40,
        5: 0.20,
        6: 0.05
    }
}

# Function to determine the number of tracks
def determine_num_tracks(probabilities):
    for n, p in sorted(probabilities.items(), reverse=True):
        if random.random() <= p:
            return n
    return 1

# Function to generate a random list of tracks
def generate_tracks(equipment, probabilities):
    # Determine the number of tracks
    num_tracks = determine_num_tracks(probabilities["num_tracks"])
    
    # Randomly select the tracks
    selected_tracks = random.sample(list(equipment.keys()), num_tracks)
    track_list = []

    for track in selected_tracks:
        track_details = {
            "instrument": track,
            "tags": equipment[track]
        }
        # Apply effect rule
        track_details["effect"] = "effect" in equipment[track] and random.random() <= probabilities["effect"]

        # Apply bass rule
        track_details["bass"] = random.random() <= probabilities["bass"]

        track_list.append(track_details)

    return track_list

# Generate a random list of tracks
random_tracks = generate_tracks(equipment, probabilities)

# Display the generated tracks
for track in random_tracks:
    print(track)
