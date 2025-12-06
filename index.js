const { get } = require('https');
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
		'User-Agent': `${name}/${version} (+https://github.com/sefinek/geoip2-api)${process.env.JEST_WORKER_ID ? ` jest/${devDependencies.jest.replace(/^[^0-9]*/, '')}` : ''}`,
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
		'DNT': '1',
	},
};


async function getContent(url) {
	const res = await new Promise((resolve, reject) => {
		const req = get(url, httpOptions, resolve);
		req.on('error', reject);
		req.end();
	});

	if (res.statusCode !== 200) {
		throw new Error(`Request failed with status code ${res.statusCode}`);
	}

	res.setEncoding('utf8');
	let rawData = '';
	for await (const chunk of res) {
		rawData += chunk;
	}

	return JSON.parse(rawData);
}

class SefinekAPI {
	constructor() {
		Object.entries(endpoints).forEach(([key, endpoint]) => {
			this[key] = () => getContent(`https://api.sefinek.net/api/v2/random/${endpoint}`);
		});
	}
}

module.exports = {
	...Object.fromEntries(Object.entries(emojis).map(([key, value]) => [
		key, () => value[Math.floor(Math.random() * value.length)],
	])),
	Kaomojis: SefinekAPI,
	version,
};