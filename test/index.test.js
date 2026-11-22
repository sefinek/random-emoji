const { describe, it, before } = require('node:test');
const assert = require('node:assert/strict');
const random = require('../index.js');

describe('@sefinek/random-emoji', () => {
	describe('Module exports', () => {
		it('should export all required functions', () => {
			assert.equal(typeof random.unicode, 'function');
			assert.equal(typeof random.emojis, 'function');
			assert.equal(typeof random.cats, 'function');
			assert.equal(typeof random.hearts, 'function');
			assert.equal(typeof random.foods, 'function');
			assert.equal(typeof random.circles, 'function');
			assert.equal(typeof random.squares, 'function');
			assert.equal(typeof random.Kaomojis, 'function');
			assert.equal(typeof random.version, 'string');
		});

		it('should export correct version', () => {
			assert.match(random.version, /^\d+\.\d+\.\d+$/);
		});
	});

	describe('unicode()', () => {
		it('should return a string', () => {
			const result = random.unicode();
			assert.equal(typeof result, 'string');
		});

		it('should return different emojis on multiple calls', () => {
			const results = new Set();
			for (let i = 0; i < 50; i++) {
				results.add(random.unicode());
			}
			assert.ok(results.size > 1);
		});

		it('should return non-empty string', () => {
			const result = random.unicode();
			assert.ok(result.length > 0);
		});
	});

	describe('emojis()', () => {
		it('should return object with correct structure', () => {
			const result = random.emojis();
			assert.ok('content' in result);
			assert.ok('name' in result);
			assert.ok('type' in result);
		});

		it('should return valid emoji data', () => {
			const result = random.emojis();
			assert.equal(typeof result.content, 'string');
			assert.equal(typeof result.name, 'string');
			assert.equal(typeof result.type, 'string');
			assert.ok(result.content.length > 0);
			assert.ok(result.name.length > 0);
			assert.ok(result.type.length > 0);
		});

		it('should return different emojis on multiple calls', () => {
			const results = new Set();
			for (let i = 0; i < 50; i++) {
				results.add(random.emojis().content);
			}
			assert.ok(results.size > 1);
		});
	});

	describe('cats()', () => {
		it('should return object with correct structure', () => {
			const result = random.cats();
			assert.ok('content' in result);
			assert.ok('name' in result);
		});

		it('should return valid cat emoji data', () => {
			const result = random.cats();
			assert.equal(typeof result.content, 'string');
			assert.equal(typeof result.name, 'string');
			assert.ok(result.content.length > 0);
			assert.ok(result.name.length > 0);
		});

		it('should return different cat emojis on multiple calls', () => {
			const results = new Set();
			for (let i = 0; i < 20; i++) {
				results.add(random.cats().content);
			}
			assert.ok(results.size > 1);
		});
	});

	describe('hearts()', () => {
		it('should return object with correct structure', () => {
			const result = random.hearts();
			assert.ok('content' in result);
			assert.ok('name' in result);
		});

		it('should return valid heart emoji data', () => {
			const result = random.hearts();
			assert.equal(typeof result.content, 'string');
			assert.equal(typeof result.name, 'string');
			assert.ok(result.content.length > 0);
			assert.ok(result.name.length > 0);
		});
	});

	describe('foods()', () => {
		it('should return object with correct structure', () => {
			const result = random.foods();
			assert.ok('content' in result);
			assert.ok('name' in result);
		});

		it('should return valid food emoji data', () => {
			const result = random.foods();
			assert.equal(typeof result.content, 'string');
			assert.equal(typeof result.name, 'string');
			assert.ok(result.content.length > 0);
			assert.ok(result.name.length > 0);
		});
	});

	describe('circles()', () => {
		it('should return object with correct structure', () => {
			const result = random.circles();
			assert.ok('content' in result);
			assert.ok('name' in result);
		});

		it('should return valid circle emoji data', () => {
			const result = random.circles();
			assert.equal(typeof result.content, 'string');
			assert.equal(typeof result.name, 'string');
			assert.ok(result.content.length > 0);
			assert.ok(result.name.length > 0);
		});
	});

	describe('squares()', () => {
		it('should return object with correct structure', () => {
			const result = random.squares();
			assert.ok('content' in result);
			assert.ok('name' in result);
		});

		it('should return valid square emoji data', () => {
			const result = random.squares();
			assert.equal(typeof result.content, 'string');
			assert.equal(typeof result.name, 'string');
			assert.ok(result.content.length > 0);
			assert.ok(result.name.length > 0);
		});
	});

	describe('Kaomojis class', () => {
		let kaomojis;

		before(() => {
			kaomojis = new random.Kaomojis();
		});

		it('should create instance with expected methods', () => {
			assert.ok(kaomojis instanceof random.Kaomojis);
			assert.equal(typeof kaomojis.cat, 'function');
			assert.equal(typeof kaomojis.dog, 'function');
			assert.equal(typeof kaomojis.owo, 'function');
			assert.equal(typeof kaomojis.uwu, 'function');
			assert.equal(typeof kaomojis.love, 'function');
		});

		describe('API methods', () => {
			it('cat() should return valid response', async () => {
				const result = await kaomojis.cat();
				assert.ok('success' in result);
				assert.ok('status' in result);
				assert.ok('info' in result);
				assert.ok('message' in result);
				assert.equal(result.success, true);
				assert.equal(result.status, 200);
				assert.equal(typeof result.message, 'string');
				assert.ok(result.message.length > 0);
			}, 10000);

			it('dog() should return valid response', async () => {
				const result = await kaomojis.dog();
				assert.ok('success' in result);
				assert.ok('status' in result);
				assert.ok('info' in result);
				assert.ok('message' in result);
				assert.equal(result.success, true);
				assert.equal(result.status, 200);
				assert.equal(typeof result.message, 'string');
			}, 10000);

			it('uwu() should return valid response', async () => {
				const result = await kaomojis.uwu();
				assert.ok('success' in result);
				assert.ok('status' in result);
				assert.ok('info' in result);
				assert.ok('message' in result);
				assert.equal(result.success, true);
				assert.equal(result.status, 200);
				assert.equal(typeof result.message, 'string');
			}, 10000);

			it('owo() should return valid response', async () => {
				const result = await kaomojis.owo();
				assert.ok('success' in result);
				assert.ok('status' in result);
				assert.ok('info' in result);
				assert.ok('message' in result);
				assert.equal(result.success, true);
				assert.equal(result.status, 200);
				assert.equal(typeof result.message, 'string');
			}, 10000);

			it('love() should return valid response', async () => {
				const result = await kaomojis.love();
				assert.ok('success' in result);
				assert.ok('status' in result);
				assert.ok('info' in result);
				assert.ok('message' in result);
				assert.equal(result.success, true);
				assert.equal(result.status, 200);
				assert.equal(typeof result.message, 'string');
			}, 10000);

			it('should have correct info structure', async () => {
				const result = await kaomojis.cat();
				assert.ok('category' in result.info);
				assert.ok('endpoint' in result.info);
				assert.equal(typeof result.info.category, 'string');
				assert.equal(typeof result.info.endpoint, 'string');
			}, 10000);
		});
	});

	describe('Performance & Randomness', () => {
		it('should execute emoji functions quickly', () => {
			const start = Date.now();
			for (let i = 0; i < 1000; i++) {
				random.unicode();
				random.emojis();
				random.cats();
			}
			const duration = Date.now() - start;
			assert.ok(duration < 100);
		});

		it('should have good randomness distribution', () => {
			const distribution = {};
			for (let i = 0; i < 100; i++) {
				const emoji = random.cats().content;
				distribution[emoji] = (distribution[emoji] || 0) + 1;
			}
			const uniqueEmojis = Object.keys(distribution).length;
			assert.ok(uniqueEmojis > 3);
		});
	});
});
