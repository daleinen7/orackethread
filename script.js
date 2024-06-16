const equipment = {
  "TX-6": ["recording medium", "effect"],
  Reason: ["recording medium"],
  "Ableton Live": ["recording medium"],
  "Jag-Stang": ["pad", "rhythm", "lead"],
  "Acoustic Guitar": ["rhythm"],
  "Fender Jazz Bass": ["bass"],
  "OP-1": ["lead", "bass", "pad", "rhythm", "drums"],
  "Arturia Drumbrute": ["drums"],
  "SE-02": ["bass", "lead", "arp"],
  "Echo Boy": ["effect"],
  Decapitator: ["effect"],
  Tremolator: ["effect"],
  Rift: ["effect"],
  Shigeharu: ["effect"],
  "Yamaha CS01": ["lead", "bass", "pad", "rhythm"],
  "SH-01a": ["pad", "rhythm", "lead", "bass", "arp"],
  "JU-06": ["pad", "rhythm", "lead", "bass", "arp"],
  "TR-08": ["drums"],
  "KAOSS PAD": ["lead"],
  "BA-1": ["bass", "lead", "arp", "rhythm", "pad"],
  Glockenspiel: ["rhythm"],
  Crystaline: ["effect"],
  "Super VHS": ["effect"],
  Wade: ["pad", "rhythm", "lead"],
  Electro: ["drums"],
  Tympo: ["drums"],
  Vespertone: ["ryhthm"],
  "Golden Age Grand": ["rhythm"],
  "Postcard Piano": ["rhythm"],
  "Le Gibet": ["rhythm", "pad", "lead", "bass", "arp"],
  Scarbo: ["rhythm", "pad", "lead", "bass", "arp"],
  Slammer: ["drums"],
  "Mod XP": ["effect"],
  "Strymon Amp": ["effect"],
  "Strymon Tape": ["effect"],
};

const probabilities = {
  bass: 0.6,
  effect: 0.2,
  numTracks: {
    1: 1.0,
    2: 0.9,
    3: 0.7,
    4: 0.6,
    5: 0.4,
    6: 0.3,
    7: 0.2,
  },
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function determineNumTracks(numTracksProbabilities) {
  for (let n = 6; n >= 1; n--) {
    if (Math.random() <= numTracksProbabilities[n]) {
      return n;
    }
  }
  return 1;
}

function selectRecordingMedium(equipment) {
  const recordingMediums = Object.keys(equipment).filter((key) =>
    equipment[key].includes("recording medium")
  );
  if (recordingMediums.length === 0) {
    return null;
  }
  const randomIndex = getRandomInt(recordingMediums.length);
  return recordingMediums[randomIndex];
}

function generateTracks(equipment, probabilities) {
  const numTracks = determineNumTracks(probabilities.numTracks);
  const equipmentKeys = Object.keys(equipment);
  const selectedTracks = [];
  const tagsUsed = {
    bass: false,
    "recording medium": false,
  };

  // Ensure the first track is a recording medium
  const recordingMedium = selectRecordingMedium(equipment);
  if (recordingMedium) {
    selectedTracks.push(recordingMedium);
    tagsUsed["recording medium"] = true;
  }

  while (selectedTracks.length < numTracks) {
    const randomIndex = getRandomInt(equipmentKeys.length);
    const track = equipmentKeys[randomIndex];
    if (
      !selectedTracks.includes(track) &&
      (!tagsUsed["recording medium"] ||
        !equipment[track].includes("recording medium")) &&
      !equipment[track].includes("effect")
    ) {
      selectedTracks.push(track);
    }
  }

  console.log("Selected tracks:", selectedTracks); // Debugging line

  const trackList = selectedTracks.map((track, index) => {
    const trackDetails = {
      instrument: track,
      selectedTag: getRandomTag(equipment[track]),
      effect: false,
      bass: false,
    };

    // 60% chance to have bass, ensuring only one track has bass
    if (
      !tagsUsed.bass &&
      Math.random() <= probabilities.bass &&
      equipment[track].includes("bass")
    ) {
      trackDetails.bass = true;
      tagsUsed.bass = true;
    }

    tagsUsed[trackDetails.selectedTag] = true;

    return trackDetails;
  });

  // Apply effects to some tracks
  trackList.forEach((track) => {
    if (Math.random() <= probabilities.effect) {
      const effects = Object.keys(equipment).filter((key) =>
        equipment[key].includes("effect")
      );
      if (effects.length > 0) {
        const randomEffect = effects[getRandomInt(effects.length)];
        track.effect = randomEffect;
      }
    }
  });

  console.log("Generated track details:", trackList); // Debugging line

  return trackList;
}

function getRandomTag(tags) {
  const randomIndex = getRandomInt(tags.length);
  return tags[randomIndex];
}

function displayTracks(trackList) {
  const trackListDiv = document.getElementById("trackList");
  trackListDiv.innerHTML = ""; // Clear previous results

  trackList.forEach((track) => {
    const trackDiv = document.createElement("div");
    trackDiv.classList.add("track");

    const instrument = document.createElement("p");
    instrument.innerText = `Instrument: ${track.instrument}`;
    trackDiv.appendChild(instrument);

    const selectedTag = document.createElement("p");
    selectedTag.innerText = `Selected Tag: ${track.selectedTag}`;
    trackDiv.appendChild(selectedTag);

    if (track.effect) {
      const effect = document.createElement("p");
      effect.innerText = `Effect: ${track.effect}`;
      trackDiv.appendChild(effect);
    }

    if (track.bass) {
      const bass = document.createElement("p");
      trackDiv.appendChild(bass);
    }

    trackListDiv.appendChild(trackDiv);
  });
}

document.getElementById("generateBtn").addEventListener("click", () => {
  const randomTracks = generateTracks(equipment, probabilities);
  displayTracks(randomTracks);
});
