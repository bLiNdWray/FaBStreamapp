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
    "Arakni",
    "Arakni, Huntsman",
    "Arakni, Solitary Confinement",
    "Aurora",
    "Aurora, Shooting Star",
    "Azalea",
    "Azalea, Ace in the Hole",
    "Benji, the Piercing Wind",
    "Betsy",
    "Besty, Skin in the Game",
    "Blaze, Firemind",
    "Boltyn",
    "Bravo",
    "Bravo, Showstopper",
    "Bravo, Star of the Show",
    "Brevant, Civic Protector",
    "Briar",
    "Briar, Warden of Thorns",
    "Brutus, Summa Rudis",
    "Chane",
    "Chane, Bound by Shadow",
    "Dash",
    "Dash I/O",
    "Dash, Database",
    "Dash, Inventor Extraordinaire",
    "Data Doll MKII",
    "Dorinthea",
    "Dorinthea Ironsong",
    "Dorinthea, Quicksilver Prodigy",
    "Dromai",
    "Dromai, Ash Artist",
    "Emperor, Dracai of Aesir",
    "Enigma",
    "Enigma, Ledger of Ancestry",
    "Enigma, New Moon",
    "Fai",
    "Fai, Rising Rebellion",
    "Florian",
    "Florian, Rotwood Harbinger",
    "Genis Wotchuneed",
    "Ira, Crimson Haze",
    "Ira, Scarlet Revenger",
    "Iyslander",
    "Iyslander, Stormbind",
    "Kano",
    "Kano, Dracai of Aether",
    "Kassai",
    "Kassai of the Golden Sand",
    "Kassai, Cintari Sellsword",
    "Katsu",
    "Katsu, the Wanderer",
    "Kavdaen, Trader of Skins",
    "Kayo",
    "Kayo, Armed and Dangerous",
    "Kayo, Berserker Runt",
    "Levia",
    "Levia, Shadowborn Abomination",
    "Lexi",
    "Lexi, Livewire",
    "Maxx ‘The Hype’ Nitro",
    "Maxx Nitro",
    "Melody, Sing-along",
    "Nuu",
    "Nuu, Alluring Desire",
    "Oldhim",
    "Oldhim, Grandfather of Eternity",
    "Olympia",
    "Olympia, Prized Fighter",
    "Oscilio",
    "Oscilio, Constella Intelligence",
    "Prism",
    "Prism, Advent of Thrones",
    "Prism, Awakener of Sol",
    "Prism, Sculptor of Arc Light",
    "Professor Teklovossen",
    "Rhinar",
    "Rhinar, Reckless Rampage",
    "Riptide",
    "Riptide, Lurker of the Deep",
    "Ruu’di, Gem Keeper",
    "Ser Boltyn, Breaker of Dawn",
    "Shiyana, Diamond Gemini",
    "Squizzy & Floor",
    "Taipanis, Dracai of Judgement",
    "Taylor",
    "Teklovossen",
    "Teklovossen, Esteemed Magnate",
    "Terra",
    "Theryon, Magister of Justice",
    "Uzuri",
    "Uzuri, Switchblade",
    "Valda Brightaxe",
    "Verdance",
    "Verdance, Thorn of the Rose",
    "Victor Goldmane",
    "Victor Goldmane, High and Mighty",
    "Viserai",
    "Viserai, Rune Blood",
    "Vynnset",
    "Vynnset, Iron Maiden",
    "Yoji, Royal Protector",
    "Yorick, Weaver of Tales",
    "Zen",
    "Zen, Tamer of Purpose"
];

// Populate Hero Dropdown
var heroSelect = document.getElementById('hero');
heroesList.forEach(function(hero) {
    var option = document.createElement('option');
    option.value = hero;
    option.textContent = hero;
    heroSelect.appendChild(option);
});

// Handle Life Counter Increment/Decrement
var lifeCounter = document.getElementById('life-counter');
document.getElementById('plus-life').addEventListener('click', function() {
    lifeCounter.value = parseInt(lifeCounter.value) + 1;
});
document.getElementById('minus-life').addEventListener('click', function() {
    lifeCounter.value = parseInt(lifeCounter.value) - 1;
});

// Handle Form Submission
document.getElementById('fab-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var playerName = document.getElementById('player-name').value;
    var wins = document.getElementById('wins').value;
    var losses = document.getElementById('losses').value;
    var draws = document.getElementById('draws').value;
    var hero = document.getElementById('hero').value;
    var life = lifeCounter.value;

    // Save Data to Firebase
    db.collection('matches').add({
        playerName: playerName,
        wins: parseInt(wins),
        losses: parseInt(losses),
        draws: parseInt(draws),
        hero: hero,
        life: parseInt(life)
    }).then(function() {
        alert('Data submitted successfully!');
    }).catch(function(error) {
        console.error('Error submitting data: ', error);
    });
});
