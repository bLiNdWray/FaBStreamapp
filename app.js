// Firebase Configuration with provided credentials
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
var db = firebase.firestore();

// List of heroes to add to the hero dropdown
var heroesList = [
    // Add all the hero names here as in the previous example
];

// Populate Hero Dropdown
var heroSelect = document.getElementById('hero');
heroesList.forEach(function(hero) {
    var option = document.createElement('option');
    option.value = hero;
    option.textContent = hero;
    heroSelect.appendChild(option);
});

// Function to auto-submit data
function submitData() {
    var playerName = document.getElementById('player-name').value;
    var wins = document.getElementById('wins').value;
    var losses = document.getElementById('losses').value;
    var draws = document.getElementById('draws').value;
    var hero = document.getElementById('hero').value;
    var life = document.getElementById('life-counter').textContent;

    if (playerName) {
        // Save Data to Firebase
        db.collection('matches').add({
            playerName: playerName,
            wins: parseInt(wins),
            losses: parseInt(losses),
            draws: parseInt(draws),
            hero: hero,
            life: parseInt(life)
        }).then(function() {
            console.log('Data submitted successfully!');
        }).catch(function(error) {
            console.error('Error submitting data: ', error);
        });
    }
}

// Add event listeners to all the dropdowns and buttons
document.getElementById('wins').addEventListener('change', submitData);
document.getElementById('losses').addEventListener('change', submitData);
document.getElementById('draws').addEventListener('change', submitData);
document.getElementById('hero').addEventListener('change', submitData);

// Handle Life Counter Increment/Decrement
var lifeCounter = document.getElementById('life-counter');
document.getElementById('plus-life').addEventListener('click', function() {
    lifeCounter.textContent = parseInt(lifeCounter.textContent) + 1;
    submitData(); // Submit data after changing the life counter
});
document.getElementById('minus-life').addEventListener('click', function() {
    if (parseInt(lifeCounter.textContent) > 0) {
        lifeCounter.textContent = parseInt(lifeCounter.textContent) - 1;
        submitData(); // Submit data after changing the life counter
    }
});

// Optionally submit data when the player name changes
document.getElementById('player-name').addEventListener('input', submitData);
