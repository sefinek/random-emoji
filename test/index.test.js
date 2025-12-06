const { describe, expect, it, beforeAll } = require('@jest/globals');
const random = require('../index.js');

describe('@sefinek/random-emoji', () => {
	describe('Module exports', () => {
		it('should export all required functions', () => {
			expect(typeof random.unicode).toBe('function');
			expect(typeof random.emojis).toBe('function');
			expect(typeof random.cats).toBe('function');
			expect(typeof random.hearts).toBe('function');
			expect(typeof random.foods).toBe('function');
			expect(typeof random.circles).toBe('function');
			expect(typeof random.squares).toBe('function');
			expect(typeof random.Kaomojis).toBe('function');
			expect(typeof random.version).toBe('string');
		});

		it('should export correct version', () => {
			expect(random.version).toMatch(/^\d+\.\d+\.\d+$/);
		});
	});

	describe('unicode()', () => {
		it('should return a string', () => {
			const result = random.unicode();
			expect(typeof result).toBe('string');
		});

		it('should return different emojis on multiple calls', () => {
			const results = new Set();
			for (let i = 0; i < 50; i++) {
				results.add(random.unicode());
			}
			expect(results.size).toBeGreaterThan(1);
		});

		it('should return non-empty string', () => {
			const result = random.unicode();
			expect(result.length).toBeGreaterThan(0);
		});
	});

	describe('emojis()', () => {
		it('should return object with correct structure', () => {
			const result = random.emojis();
			expect(result).toHaveProperty('content');
			expect(result).toHaveProperty('name');
			expect(result).toHaveProperty('type');
		});

		it('should return valid emoji data', () => {
			const result = random.emojis();
			expect(typeof result.content).toBe('string');
			expect(typeof result.name).toBe('string');
			expect(typeof result.type).toBe('string');
			expect(result.content.length).toBeGreaterThan(0);
			expect(result.name.length).toBeGreaterThan(0);
			expect(result.type.length).toBeGreaterThan(0);
		});

		it('should return different emojis on multiple calls', () => {
			const results = new Set();
			for (let i = 0; i < 50; i++) {
				results.add(random.emojis().content);
			}
			expect(results.size).toBeGreaterThan(1);
		});
	});

	describe('cats()', () => {
		it('should return object with correct structure', () => {
			const result = random.cats();
			expect(result).toHaveProperty('content');
			expect(result).toHaveProperty('name');
		});

		it('should return valid cat emoji data', () => {
			const result = random.cats();
			expect(typeof result.content).toBe('string');
			expect(typeof result.name).toBe('string');
			expect(result.content.length).toBeGreaterThan(0);
			expect(result.name.length).toBeGreaterThan(0);
		});

		it('should return different cat emojis on multiple calls', () => {
			const results = new Set();
			for (let i = 0; i < 20; i++) {
				results.add(random.cats().content);
			}
			expect(results.size).toBeGreaterThan(1);
		});
	});

	describe('hearts()', () => {
		it('should return object with correct structure', () => {
			const result = random.hearts();
			expect(result).toHaveProperty('content');
			expect(result).toHaveProperty('name');
		});

		it('should return valid heart emoji data', () => {
			const result = random.hearts();
			expect(typeof result.content).toBe('string');
			expect(typeof result.name).toBe('string');
			expect(result.content.length).toBeGreaterThan(0);
			expect(result.name.length).toBeGreaterThan(0);
		});
	});

	describe('foods()', () => {
		it('should return object with correct structure', () => {
			const result = random.foods();
			expect(result).toHaveProperty('content');
			expect(result).toHaveProperty('name');
		});

		it('should return valid food emoji data', () => {
			const result = random.foods();
			expect(typeof result.content).toBe('string');
			expect(typeof result.name).toBe('string');
			expect(result.content.length).toBeGreaterThan(0);
			expect(result.name.length).toBeGreaterThan(0);
		});
	});

	describe('circles()', () => {
		it('should return object with correct structure', () => {
			const result = random.circles();
			expect(result).toHaveProperty('content');
			expect(result).toHaveProperty('name');
		});

		it('should return valid circle emoji data', () => {
			const result = random.circles();
			expect(typeof result.content).toBe('string');
			expect(typeof result.name).toBe('string');
			expect(result.content.length).toBeGreaterThan(0);
			expect(result.name.length).toBeGreaterThan(0);
		});
	});

	describe('squares()', () => {
		it('should return object with correct structure', () => {
			const result = random.squares();
			expect(result).toHaveProperty('content');
			expect(result).toHaveProperty('name');
		});

		it('should return valid square emoji data', () => {
			const result = random.squares();
			expect(typeof result.content).toBe('string');
			expect(typeof result.name).toBe('string');
			expect(result.content.length).toBeGreaterThan(0);
			expect(result.name.length).toBeGreaterThan(0);
		});
	});

	describe('Kaomojis class', () => {
		let kaomojis;

		beforeAll(() => {
			kaomojis = new random.Kaomojis();
		});

		it('should create instance with expected methods', () => {
			expect(kaomojis).toBeInstanceOf(random.Kaomojis);
			expect(typeof kaomojis.cat).toBe('function');
			expect(typeof kaomojis.dog).toBe('function');
			expect(typeof kaomojis.owo).toBe('function');
			expect(typeof kaomojis.uwu).toBe('function');
			expect(typeof kaomojis.love).toBe('function');
		});

		describe('API methods', () => {
			it('cat() should return valid response', async () => {
				const result = await kaomojis.cat();
				expect(result).toHaveProperty('success');
				expect(result).toHaveProperty('status');
				expect(result).toHaveProperty('info');
				expect(result).toHaveProperty('message');
				expect(result.success).toBe(true);
				expect(result.status).toBe(200);
				expect(typeof result.message).toBe('string');
				expect(result.message.length).toBeGreaterThan(0);
			}, 10000);

			it('dog() should return valid response', async () => {
				const result = await kaomojis.dog();
				expect(result).toHaveProperty('success');
				expect(result).toHaveProperty('status');
				expect(result).toHaveProperty('info');
				expect(result).toHaveProperty('message');
				expect(result.success).toBe(true);
				expect(result.status).toBe(200);
				expect(typeof result.message).toBe('string');
			}, 10000);

			it('uwu() should return valid response', async () => {
				const result = await kaomojis.uwu();
				expect(result).toHaveProperty('success');
				expect(result).toHaveProperty('status');
				expect(result).toHaveProperty('info');
				expect(result).toHaveProperty('message');
				expect(result.success).toBe(true);
				expect(result.status).toBe(200);
				expect(typeof result.message).toBe('string');
			}, 10000);

			it('owo() should return valid response', async () => {
				const result = await kaomojis.owo();
				expect(result).toHaveProperty('success');
				expect(result).toHaveProperty('status');
				expect(result).toHaveProperty('info');
				expect(result).toHaveProperty('message');
				expect(result.success).toBe(true);
				expect(result.status).toBe(200);
				expect(typeof result.message).toBe('string');
			}, 10000);

			it('love() should return valid response', async () => {
				const result = await kaomojis.love();
				expect(result).toHaveProperty('success');
				expect(result).toHaveProperty('status');
				expect(result).toHaveProperty('info');
				expect(result).toHaveProperty('message');
				expect(result.success).toBe(true);
				expect(result.status).toBe(200);
				expect(typeof result.message).toBe('string');
			}, 10000);

			it('should have correct info structure', async () => {
				const result = await kaomojis.cat();
				expect(result.info).toHaveProperty('category');
				expect(result.info).toHaveProperty('endpoint');
				expect(typeof result.info.category).toBe('string');
				expect(typeof result.info.endpoint).toBe('string');
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
			expect(duration).toBeLessThan(100);
		});

		it('should have good randomness distribution', () => {
			const distribution = {};
			for (let i = 0; i < 100; i++) {
				const emoji = random.cats().content;
				distribution[emoji] = (distribution[emoji] || 0) + 1;
			}
			const uniqueEmojis = Object.keys(distribution).length;
			expect(uniqueEmojis).toBeGreaterThan(3);
		});
	});
});
