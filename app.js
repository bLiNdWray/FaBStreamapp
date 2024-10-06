// List of Heroes to populate the dropdowns
const heroesList = [
    "Arakni", "Arakni, Huntsman", "Arakni, Solitary Confinement", "Aurora", "Aurora, Shooting Star", "Azalea",
    "Azalea, Ace in the Hole", "Benji, the Piercing Wind", "Betsy", "Besty, Skin in the Game", "Blaze, Firemind",
    "Boltyn", "Bravo", "Bravo, Showstopper", "Bravo, Star of the Show", "Brevant, Civic Protector", "Briar",
    "Briar, Warden of Thorns", "Brutus, Summa Rudis", "Chane", "Chane, Bound by Shadow", "Dash", "Dash I/O",
    "Dash, Database", "Dash, Inventor Extraordinaire", "Data Doll MKII", "Dorinthea", "Dorinthea Ironsong",
    "Dorinthea, Quicksilver Prodigy", "Dromai", "Dromai, Ash Artist", "Emperor, Dracai of Aesir", "Enigma",
    "Enigma, Ledger of Ancestry", "Enigma, New Moon", "Fai", "Fai, Rising Rebellion", "Florian", "Florian, Rotwood Harbinger",
    "Genis Wotchuneed", "Ira, Crimson Haze", "Ira, Scarlet Revenger", "Iyslander", "Iyslander, Stormbind", "Kano",
    "Kano, Dracai of Aether", "Kassai", "Kassai of the Golden Sand", "Kassai, Cintari Sellsword", "Katsu",
    "Katsu, the Wanderer", "Kavdaen, Trader of Skins", "Kayo", "Kayo, Armed and Dangerous", "Kayo, Berserker Runt",
    "Levia", "Levia, Shadowborn Abomination", "Lexi", "Lexi, Livewire", "Maxx ‘The Hype’ Nitro", "Maxx Nitro",
    "Melody, Sing-along", "Nuu", "Nuu, Alluring Desire", "Oldhim", "Oldhim, Grandfather of Eternity", "Olympia",
    "Olympia, Prized Fighter", "Oscilio", "Oscilio, Constella Intelligence", "Prism", "Prism, Advent of Thrones",
    "Prism, Awakener of Sol", "Prism, Sculptor of Arc Light", "Professor Teklovossen", "Rhinar", "Rhinar, Reckless Rampage",
    "Riptide", "Riptide, Lurker of the Deep", "Ruu’di, Gem Keeper", "Ser Boltyn, Breaker of Dawn", "Shiyana, Diamond Gemini",
    "Squizzy & Floor", "Taipanis, Dracai of Judgement", "Taylor", "Teklovossen", "Teklovossen, Esteemed Magnate",
    "Terra", "Theryon, Magister of Justice", "Uzuri", "Uzuri, Switchblade", "Valda Brightaxe", "Verdance",
    "Verdance, Thorn of the Rose", "Victor Goldmane", "Victor Goldmane, High and Mighty", "Viserai", "Viserai, Rune Blood",
    "Vynnset", "Vynnset, Iron Maiden", "Yoji, Royal Protector", "Yorick, Weaver of Tales", "Zen", "Zen, Tamer of Purpose"
];

// Populate hero dropdowns for both sections
function populateHeroDropdowns() {
    const counterHeroSelect = document.getElementById('counter-hero');
    const doorHeroSelect = document.getElementById('door-hero');
    
    // Clear previous options
    counterHeroSelect.innerHTML = '<option value="">Select a Hero</option>';
    doorHeroSelect.innerHTML = '<option value="">Select a Hero</option>';

    // Populate new options
    heroesList.forEach(hero => {
        const option = document.createElement('option');
        option.value = hero;
        option.textContent = hero;

        counterHeroSelect.appendChild(option.cloneNode(true));  // Add to counter
        doorHeroSelect.appendChild(option);  // Add to door
    });
}

// Call populateHeroDropdowns on page load
populateHeroDropdowns();

// Functionality for the reset button
document.getElementById('reset-button').addEventListener('click', function() {
    resetForm('counter');
    resetForm('door');
});

// Reset function for forms
function resetForm(section) {
    document.getElementById(`${section}-name`).value = '';
    document.getElementById(`${section}-wins`).value = '0';
    document.getElementById(`${section}-losses`).value = '0';
    document.getElementById(`${section}-draws`).value = '0';
    document.getElementById(`${section}-hero`).value = '';
    document.getElementById(`${section}-life-counter`).textContent = '40';
}

// Functionality for the swap button
document.getElementById('swap-button').addEventListener('click', function() {
    const sectionsContainer = document.getElementById('sections-container');
    const counterForm = document.getElementById('counter-form');
    const doorForm = document.getElementById('door-form');

    // Swap the positions of Counter and Door sections
    if (counterForm === sectionsContainer.firstElementChild) {
        sectionsContainer.appendChild(counterForm); // Move Counter to the end
        sectionsContainer.insertBefore(doorForm, sectionsContainer.firstElementChild); // Move Door to the beginning
    } else {
        sectionsContainer.appendChild(doorForm); // Move Door to the end
        sectionsContainer.insertBefore(counterForm, sectionsContainer.firstElementChild); // Move Counter to the beginning
    }

    // Adjust the alignment based on the current order
    if (counterForm === sectionsContainer.firstElementChild) {
        counterForm.style.alignItems = 'flex-start';
        doorForm.style.alignItems = 'flex-end';
    } else {
        counterForm.style.alignItems = 'flex-end';
        doorForm.style.alignItems = 'flex-start';
    }
});

// Event listeners for life counters
document.getElementById('plus-counter-life').addEventListener('click', function() {
    incrementLife('counter');
});
document.getElementById('minus-counter-life').addEventListener('click', function() {
    decrementLife('counter');
});
document.getElementById('plus-door-life').addEventListener('click', function() {
    incrementLife('door');
});
document.getElementById('minus-door-life').addEventListener('click', function() {
    decrementLife('door');
});

// Functions to increment and decrement life
function incrementLife(section) {
    const lifeCounter = document.getElementById(`${section}-life-counter`);
    lifeCounter.textContent = parseInt(lifeCounter.textContent) + 1;
}

function decrementLife(section) {
    const lifeCounter = document.getElementById(`${section}-life-counter`);
    if (parseInt(lifeCounter.textContent) > 0) {
        lifeCounter.textContent = parseInt(lifeCounter.textContent) - 1;
    }
}
