<div align="center">
    <h1>😻 About this package 😼</h1>
    <p>Constantly supported Node.js module providing random emojis, including their names and categories. The module also offers random Japanese kaomojis.</p>
    <a href="https://www.npmjs.com/package/@sefinek/random-emoji" target="_blank" title="random-emoji - npm" style="text-decoration:none">
        <img src="https://img.shields.io/npm/dt/@sefinek/random-emoji.svg?maxAge=3600" alt="The number of downloads">
        <img src="https://img.shields.io/github/issues/sefinek/random-emoji" alt="Issues">
        <img src="https://img.shields.io/github/last-commit/sefinek/random-emoji" alt="Last commit">
        <img src="https://img.shields.io/github/commit-activity/w/sefinek/random-emoji" alt="Commit activity">
        <img src="https://img.shields.io/github/languages/code-size/sefinek/random-emoji" alt="Code size">
    </a>
</div>

Do you have any questions or want to receive notifications about important changes or new features in my repositories?
Join my [Discord server](https://discord.gg/S7NDzCzQTg)! If you don't use Discord, you can also open an issue on GitHub.

The project is released under the [MIT license](LICENSE) — you can do whatever you want with it.  
If you like this repository, leave a star ⭐. Thank you!


## 📥 • Installation
```bash
npm install @sefinek/random-emoji
```


## 😻 • Usage
| Function                                                                    | Description                                                 |
|-----------------------------------------------------------------------------|-------------------------------------------------------------|
| [unicode](https://github.com/sefinek/random-emoji/blob/main/example.js#L4)  | Get a single emoji                                          |
| [emojis](https://github.com/sefinek/random-emoji/blob/main/example.js#L7)   | Get a random emoji with its name and type                   |
| [cats](https://github.com/sefinek/random-emoji/blob/main/example.js#L11)    | Get a random cat emoji                                      |
| [hearts](https://github.com/sefinek/random-emoji/blob/main/example.js#L15)  | Get a random heart emoji                                    |
| [foods](https://github.com/sefinek/random-emoji/blob/main/example.js#L19)   | Get a random food emoji                                     |
| [circles](https://github.com/sefinek/random-emoji/blob/main/example.js#L23) | Get a random circle emoji                                   |
| [squares](https://github.com/sefinek/random-emoji/blob/main/example.js#L27) | Get a random square emoji                                   |
| [Kaomojis](#kaomoji-endpoints)                                              | Get random kaomojis from the [API](https://api.sefinek.net) |


## 😼 • Examples
```js
const random = require('@sefinek/random-emoji');

// 1. A single emoji
console.log(random.unicode()); // 🥰

// 2. Random emoji along with its visual representation, name, and category
const emoji = random.emojis();
console.log(`Emoji: ${emoji.content}; Name: ${emoji.name}; Type: ${emoji.type}`);
// Emoji: 🐶; Name: Dog Face; Type: animal

// 3. Random cat
const cat = random.cats();
console.log(`Emoji: ${cat.content}; Name: ${cat.name}`);
// Emoji: 😺; Name: smiley_cat
```


## ⛩️ • Kaomojis
### » Async/await example
```js
const random = require('@sefinek/random-emoji');

(async () => {
    const kaomoji = new random.Kaomojis();

    const uwu = await kaomoji.uwu();
    console.log('Random UwU:', uwu.message);
})();
```

### » Promise example
```js
const random = require('@sefinek/random-emoji');
const kaomoji = new random.Kaomojis();

kaomoji.uwu().then(data => console.log(data));
// or shorter
kaomoji.uwu().then(console.log);
```

### » The returned object from [API](https://api.sefinek.net)
```json
{
  "success": true,
  "status": 200,
  "info": {
    "category": "kaomoji",
    "endpoint": "uwu"
  },
  "message": "ＵｗＵ"
}
```


### <div id="kaomoji-endpoints">» Kaomoji endpoints</div>
| Function | Link to the API                                           | Version | Example   |
|----------|:----------------------------------------------------------|:--------|-----------|
| `cat()`  | [Click here](https://api.sefinek.net/api/v2/kaomoji/cat)  | v2      | (=^-ω-^=) |
| `dog()`  | [Click here](https://api.sefinek.net/api/v2/kaomoji/dog)  | v2      | ଘ(∪・ﻌ・∪)ଓ |
| `owo()`  | [Click here](https://api.sefinek.net/api/v2/kaomoji/owo)  | v2      | 𝓞𝔀𝓞    |
| `uwu()`  | [Click here](https://api.sefinek.net/api/v2/kaomoji/uwu)  | v2      | 𝕌𝕨𝕌    |
| `love()` | [Click here](https://api.sefinek.net/api/v2/kaomoji/love) | v2      | ヽ(♡‿♡)ノ   |

    
## 📝 • Changelog
[Click here](CHANGELOG.md)