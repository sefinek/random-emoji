## 📥・v2.2.0 (06.12.2025)

### ⚡ Performance
1. Optimized code with arrow functions and `for...of` loops.
2. Refactored Promise handling in `getContent()`.
3. Added `getRandomElement()` helper function.

### ✨ Changes
1. Updated to `node:https` protocol.
2. Improved error handling and JSON parsing.
3. Rewritten TypeScript definitions with proper CommonJS export structure.
4. Code quality improvements.

### 🧪 Testing
1. Added Jest test suite with 28 tests.


## 📥・v2.1.0 (20.12.2023)

### 🎉 Added
1. New function `<random>.squares` for retrieving random squares.
2. Added a new example ([examples/table.js](examples/table.js)) demonstrating the use of module functions in a table format.

### ✨ Changes
1. General code quality improvements.
2. Enhanced type definitions in [`index.d.ts`](index.d.ts) and expanded documentation.
3. Improved the emoji randomization mechanism.
4. Updated example files in the [`examples`](examples) directory.


## 📥・v2.0.2/v2.0.3 (08.11.2023)

### 🎉 Added
1. `<random>.version`

### ✨ Changes
1. Removed `README_PL.md`.
2. Updated add added new types to `index.d.ts` file.
3. Now this module uses only native module (like `https`).
4. Added new headers for better safety etc.

### 🌠 Migration
1. Changed `new random.kaomojis()` to `new random.Kaomojis()`.


## 📥・v1.4.6 (11.03.2023)
1. Updated to **v2** release of API.


## 📥・v1.4.5 (09.10.2022)
1. Fixed URLs.


## 📥・v1.4.4 (02.10.2022)
1. Fixed URLs.


## 📥・v1.4.3 (19.09.2022)
1. Small changes in `index.d.ts` etc.


## 📥・v1.4.2 (05.06.2022)
1. Added typings.
2. Small fixes in `README.md` and `README_PL.md`.


## 📥・v1.4.1 (02.06.2022)
1. Small changes.


## 📥・v1.4.0 (15.05.2022)
1. Added new function `foods()` with random foods.
2. Fixes in `new kaomojis()`.
3. Small fixes in README.md.
4. Added Poland version of README.md file.


## 📥・v1.3.0 (13.05.2022)
1. Updated README.md file.
2. Added `new kaomojis()` with random kaomoji from my [API](https://api.sefinek.net). See examples: [[1](https://github.com/sefinek/random-emoji/blob/main/test.js)] [[2](https://github.com/sefinek/random-emoji#%EF%B8%8F--kaomojis)]
3. Other changes to [index.js](https://github.com/sefinek/random-emoji/blob/main/index.js) file.


## 📥・v1.2.0 (12.05.2022)
1. Updated CHANGELOG.md, README.md and package.json.
2. Added new function `circles()` with random circles.
3. Removed `.slashes`.


## 📥・v1.1.1 (11.05.2022)
1. Added new function `hearts()` with random hearts.


## 📥・v1.0.1 (08.05.2022)
1. Added new function `cats()` with random cat emojis.
2. Added **CHANGELOG.md** file.
3. Changes:
    ```diff
    - emoji()
    + emojis()
    ```


## 📥・v0.1.0 (07.05.2022)
First release.