const { get } = require('node:https');

const emojis = {
	emojis: require('./data/emoji/collection/big.json'),
	cats: require('./data/emoji/cat.json'),
	foods: require('./data/emoji/food.json'),
	hearts: require('./data/emoji/heart.json'),
	circles: require('./data/emoji/circle.json'),
	squares: require('./data/emoji/square.json'),
	unicode: require('./data/emoji/collection/single.json'),
};
const endpoints = require('./data/endpoints.json');
const { name, version, devDependencies } = require('./package.json');

const httpOptions = {
	method: 'GET',
	headers: {
		'User-Agent': `${name}/${version} (+https://github.com/sefinek/geoip2-api)${process.env.JEST_WORKER_ID && devDependencies?.jest ? ` jest/${devDependencies.jest.replace(/^[^0-9]*/, '')}` : ''}`,
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
		'DNT': '1',
	},
};


const getContent = url => new Promise((resolve, reject) => {
	const req = get(url, httpOptions, res => {
		if (res.statusCode !== 200) {
			res.resume();
			return reject(new Error(`Request failed with status code ${res.statusCode}`));
		}

		res.setEncoding('utf8');
		let rawData = '';

		res.on('data', chunk => {
			rawData += chunk;
		});

		res.on('end', () => {
			try {
				resolve(JSON.parse(rawData));
			} catch (err) {
				reject(new Error(`Failed to parse JSON: ${err.message}`));
			}
		});

		res.on('error', reject);
	});

	req.on('error', reject);
	req.end();
});

class SefinekAPI {
	constructor() {
		for (const [key, endpoint] of Object.entries(endpoints)) {
			this[key] = () => getContent(`https://api.sefinek.net/api/v2/random/${endpoint}`);
		}
	}
}

const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

const emojiGetters = {};
for (const [key, value] of Object.entries(emojis)) {
	emojiGetters[key] = () => getRandomElement(value);
}

module.exports = {
	...emojiGetters,
	Kaomojis: SefinekAPI,
	version,
};