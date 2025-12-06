const random = require('../index.js'); // Change to @sefinek/random-emoji

// Get a single random Unicode emoji.
console.log(`Single Emoji     : ${random.unicode()}`);

// Retrieves a random emoji with its name, visual representation, and type
const emoji = random.emojis();
console.log(`Random Emoji     : ${emoji.content}; ${emoji.name}; ${emoji.type}`);

// Get a random cat emoji
const cat = random.cats();
console.log(`Cat Emoji        : ${cat.content}; ${cat.name}`);

// Get a random heart emoji
const heart = random.hearts();
console.log(`Heart Emoji      : ${heart.content}; ${heart.name}`);

// Retrieves a random food emoji
const food = random.foods();
console.log(`Food Emoji       : ${food.content}; ${food.name}`);

// Gets a random circle emoji
const circle = random.circles();
console.log(`Circle Emoji     : ${circle.content}; ${circle.name}`);

// Gets a random squares emoji
const squares = random.squares();
console.log(`Square Emoji     : ${squares.content}; ${squares.name}`);

// Fetches and displays random kaomojis using async/await syntax
(async () => {
	const kaomojis = new random.Kaomojis();

	// Retrieves and displays a cat face kaomoji
	const kaoCat = await kaomojis.cat();
	console.log(`Kaomoji Cat Face : ${kaoCat.message}`);

	// Fetches and displays a random UwU kaomoji
	const uwu = await kaomojis.uwu();
	console.log(`Kaomoji UwU      : ${uwu.message}`);
})();

// Displays the current version of the module
console.log(`Module version   : v${random.version}`);
