// Your Firebase Config
var firebaseConfig = {
  apiKey: "AIzaSyDE_j_W3QHjIQBHsk7ndw8egg_LbBLK2m4",
  authDomain: "fab-live-life-counter.firebaseapp.com",
  projectId: "fab-live-life-counter",
  storageBucket: "fab-live-life-counter.appspot.com",
  messagingSenderId: "984871364923",
  appId: "1:984871364923:web:00b4bfa0b477231f7fef1e",
  measurementId: "G-N2F4JFVNRY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const playerNameInput = document.getElementById('playerName');
const recordSelect = document.getElementById('record');
const heroSelect = document.getElementById('heroSelect');
const lifeCountSpan = document.getElementById('lifeCount');
const increaseLifeButton = document.getElementById('increaseLife');
const decreaseLifeButton = document.getElementById('decreaseLife');
const submitButton = document.getElementById('submit');

let lifeCount = 40;  // Initial life count

// Populate Hero Dropdown
const heroes = ["Bravo", "Dorinthea", "Kano", "Rhinar", "Viserai", "Azalea"];  // Flesh and Blood Heroes
heroes.forEach(hero => {
    const option = document.createElement('option');
    option.value = hero;
    option.textContent = hero;
    heroSelect.appendChild(option);
});

// Life counter logic
increaseLifeButton.addEventListener('click', () => {
    lifeCount++;
    lifeCountSpan.textContent = lifeCount;
});

decreaseLifeButton.addEventListener('click', () => {
    if (lifeCount > 0) {
        lifeCount--;
        lifeCountSpan.textContent = lifeCount;
    }
});

// Submit button logic to store data in Firestore
submitButton.addEventListener('click', () => {
    const playerData = {
        name: playerNameInput.value,
        record: recordSelect.value,
        hero: heroSelect.value,
        life: lifeCount
    };

    db.collection('players').add(playerData)
        .then(() => {
            alert('Player data added!');
        })
        .catch(error => {
            console.error('Error adding document: ', error);
        });
});
