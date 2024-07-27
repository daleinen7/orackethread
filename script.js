const equipment = {
  // "TX-6": ["recording medium", "effect"],
  // Reason: ["recording medium"],
  // "Ableton Live": ["recording medium"],
  'Jag-Stang - p-90': ['pad', 'rhythm', 'lead'],
  'Jag-Stang - Lipstick': ['pad', 'rhythm', 'lead'],
  'Acoustic Guitar': ['rhythm'],
  'Acoustic Guitar - pick': ['rhythm'],
  'Acoustic Guitar - finger pick': ['rhythm'],
  'Fender Jazz Bass - pick': ['bass'],
  'Fender Jazz Bass - finger': ['bass'],
  'Fender Jazz Bass - treble': ['bass'],
  'Fender Jazz Bass - bass': ['bass'],
  Glockenspiel: ['rhythm'],
  Bongos: ['drums'],
  'Arturia Drumbrute': ['drums'],
  'OP-1': ['lead', 'bass', 'pad', 'rhythm', 'drums'],
  'OP-1 - String': ['lead', 'bass', 'pad', 'rhythm'],
  'OP-1 - Cluster | Digital| Dimension | DNA': [
    'lead',
    'bass',
    'pad',
    'rhythm',
    'drums',
  ],
  'OP-1 - DR: Wave | DSYNTH': [
    'lead',
    'bass',
    'pad',
    'rhythm',
    'drums',
  ],
  'OP-1 - Voltage': ['lead', 'bass', 'pad', 'rhythm', 'drums'],
  'KO II': ['drums', 'ryhthm'],
  'SE-02': ['bass', 'lead', 'arp'],
  'SH-01a': ['pad', 'rhythm', 'lead', 'bass', 'arp'],
  'JU-06': ['pad', 'rhythm', 'lead', 'bass', 'arp'],
  'TR-08': ['drums'],
  'Yamaha CS': ['lead', 'bass', 'pad', 'rhythm'],
  'KAOSS PAD': ['lead'],
  'Echo Boy': ['effect'],
  Decapitator: ['effect'],
  Tremolator: ['effect'],
  Rift: ['effect'],
  'Spaced Out': ['effect'],
  Ruina: ['effect'],
  Crystalizer: ['effect'],
  'Devil-Loc': ['effect'],
  Crystaline: ['effect'],
  Plate: ['effect'],
  'Comeback Kid': ['effect'],
  REAMP: ['effect'],
  'Retro Color': ['effect'],
  'Coyboys from Sweden Sample': ['sample'],
  Antoka: ['effect'],
  Balloon: ['effect'],
  Bitfight83: ['effect'],
  Cloudmaster: ['effect'],
  Clusters: ['effect'],
  Eidolon: ['effect'],
  Fathoms: ['effect'],
  Flare: ['effect'],
  Fog: ['effect'],
  Fusia: ['effect'],
  Lore: ['effect'],
  MimikOD: ['effect'],
  Octavlord: ['effect'],
  Parallax: ['effect'],
  Parsec: ['effect'],
  Partikl: ['effect'],
  Pastfabric: ['effect'],
  Replicas: ['effect'],
  Rust: ['effect'],
  Shadow: ['effect'],
  Shrike: ['effect'],
  TheBarber: ['effect'],
  Timedream: ['effect'],
  Vanisher: ['effect'],
  Zerone: ['effect'],
  'Space Modulator': ['effect'],
  UberMod: ['effect'],
  VintageVerb: ['effect'],
  Supermassive: ['effect'],
  'Super VHS': ['effect'],
  'Alligator Filter': ['effect'],
  'Audiomatic Tretro Transformer': ['effect'],
  'Scream 4': ['effect'],
  'Sinc Vereor': ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  'Virt Vereor': ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  'BA-1': ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Mellotron: ['lead', 'rhythm', 'pad'],
  Thor: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  'Subtractor - Bass': ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Umpf: ['drums'],
  'Kong - Drum': ['drums'],
  'Scenic Hybrid': ['pad'],
  Parsec: ['lead', 'bass', 'arp', 'rhythm', 'pad'],
  'Grain Sample': ['sample'],
  Monotone: ['bass', 'lead'],
  Layers: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Malstrom: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Europa: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  'Complex-1': ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  'ARP 2600': ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  'CZ-V': ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  'DX7 V': ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  'Jup-8 V': ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  CMI: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  'Prophet V3': ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Solina: ['bass', 'lead', 'arp', 'rhythm', 'pad'],

  Arkinaut: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Darklands: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Ember: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Klome: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Nighthawk: ['pad'],
  Omniharp: ['arp', 'pad'],
  Paradigm: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Strom: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Swarm: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Verv: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Voga: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Xodoi: ['bass', 'lead', 'arp', 'rhythm', 'pad'],
  Wade: ['pad', 'rhythm', 'lead'],
  Electro: ['drums'],
  Tympo: ['drums'],
  Slammer: ['drums'],
  Vespertone: ['ryhthm'],
  'Golden Age Grand': ['rhythm'],
  'Postcard Piano': ['rhythm'],
  'Le Gibet': ['rhythm', 'pad', 'lead', 'bass', 'arp'],
  Scarbo: ['rhythm', 'pad', 'lead', 'bass', 'arp'],
  'Mod XP': ['effect'],
  Shigeharu: ['effect'],
  'Fender Blues Junior': ['effect'],
  'Strymon Amp': ['effect'],
  'Strymon El Capitan': ['effect'],
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
    equipment[key].includes('recording medium')
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
    'recording medium': false,
  };

  // Ensure the first track is a recording medium
  const recordingMedium = selectRecordingMedium(equipment);
  if (recordingMedium) {
    selectedTracks.push(recordingMedium);
    tagsUsed['recording medium'] = true;
  }

  while (selectedTracks.length < numTracks) {
    const randomIndex = getRandomInt(equipmentKeys.length);
    const track = equipmentKeys[randomIndex];
    if (
      !selectedTracks.includes(track) &&
      (!tagsUsed['recording medium'] ||
        !equipment[track].includes('recording medium')) &&
      !equipment[track].includes('effect')
    ) {
      selectedTracks.push(track);
    }
  }

  console.log('Selected tracks:', selectedTracks); // Debugging line

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
      equipment[track].includes('bass')
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
        equipment[key].includes('effect')
      );
      if (effects.length > 0) {
        const randomEffect = effects[getRandomInt(effects.length)];
        track.effect = randomEffect;
      }
    }
  });

  console.log('Generated track details:', trackList); // Debugging line

  return trackList;
}

function getRandomTag(tags) {
  const randomIndex = getRandomInt(tags.length);
  return tags[randomIndex];
}

function displayTracks(trackList) {
  const trackListDiv = document.getElementById('trackList');
  trackListDiv.innerHTML = ''; // Clear previous results

  trackList.forEach((track) => {
    const trackDiv = document.createElement('div');
    trackDiv.classList.add('track');

    const instrument = document.createElement('p');
    instrument.innerText = `Instrument: ${track.instrument}`;
    trackDiv.appendChild(instrument);

    const selectedTag = document.createElement('p');
    selectedTag.innerText = `Selected Tag: ${track.selectedTag}`;
    trackDiv.appendChild(selectedTag);

    if (track.effect) {
      const effect = document.createElement('p');
      effect.innerText = `Effect: ${track.effect}`;
      trackDiv.appendChild(effect);
    }

    if (track.bass) {
      const bass = document.createElement('p');
      trackDiv.appendChild(bass);
    }

    trackListDiv.appendChild(trackDiv);
  });
}

document
  .getElementById('generateBtn')
  .addEventListener('click', () => {
    const randomTracks = generateTracks(equipment, probabilities);
    displayTracks(randomTracks);
  });
