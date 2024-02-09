<h2 align="center">
  🔑 Silly Password Generator
</h2>
<h3 align="center">
  Generate silly passwords that are secure and easy to use. Inspired by <a href="https://xkcd.com/936/" target="_blank" rel="noopener noreferrer">xkcd</a>.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/silly-password-generator" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/silly-password-generator.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/silly-password-generator/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/silly-password-generator/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/silly-password-generator/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>
</p>
<!-- [lock:donate-badges] 🚫--------------------------------------- -->
<p align="center">
  <a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>
<!-- [/lock:donate-badges] ---------------------------------------🚫 -->

## Documentation

Read the **[official documentation](https://justinmahar.github.io/silly-password-generator/)**.

### [→ Generate Silly Passwords ←](https://justinmahar.github.io/silly-password-generator/?path=/story/tools--silly-password-generator)

## Overview

Generate fun and silly passwords that are secure, easy to type, and easy to remember. Inspired by [xkcd](https://xkcd.com/936/).

Would you rather use the password [`Tr0ub4dor&3`](https://xkcd.com/936/) or `exciting creepy macho tiger`? 

Using an unrestricted brute-force attack, the first would take 3 seconds to crack, and the second would take 1 month. Exciting creepy macho tigers for the win!

### Features include:

- **💩 Fun passwords are better than boring ones**
  - Why use lame and hard to remember passwords, when you can use fun ones... that are also secure?
- **👨‍🔬 Password analysis**
  - Leverage the brainpower of at least a dozen nerds. This library makes sure your password is secure using [zxcvbn](https://www.npmjs.com/package/zxcvbn).
- **🔐 Secure**
  - Have I mentioned that they're secure? Well, they are!
- **🔢 Customizable**
  - Choose from a set of options to customize your password.

<!-- [lock:donate] 🚫--------------------------------------- -->

## Donate 

If this project helped you, please consider buying me a coffee or sponsoring me. Your support is much appreciated!

<a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>

<!-- [/lock:donate] ---------------------------------------🚫 -->

## Table of Contents 

- [Documentation](#documentation)
  - [→ Generate Silly Passwords ←](#-generate-silly-passwords-)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
  - [Via Website](#via-website)
  - [Via npm](#via-npm)
  - [Analyzing Password Strength](#analyzing-password-strength)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i silly-password-generator
```

## Quick Start

### Via Website

Go here: [Silly Password Generator](https://justinmahar.github.io/silly-password-generator/?path=/story/tools--silly-password-generator)

### Via npm

```js
import { generateSillyPassword } from 'silly-password-generator';
```

```js
// Use with no options to generate a 4-word silly password
generateSillyPassword(); // `thorough loud annoying penguin`

// Provide a custom word count if you'd like
generateSillyPassword({ wordCount: 7 }); // `glamorous large powerful fast black noisy clam`

// Capitalize the first letter of the resulting password
generateSillyPassword({ capitalize: true }); // `Curious fluffy excited copperhead`

// You can provide salt to strengthen your passwords, too. Salt is appended to the end.
generateSillyPassword({ salt: "!?!?" }); // `damned important envious pangolin!?!?`
```

> Combine options as you see fit. The `wordCount` must be at least `1`.

### Analyzing Password Strength

This library uses [zxcvbn](https://www.npmjs.com/package/zxcvbn) to analyze password strength. This was written by a bunch of nerds, so you know it's legit.

```js
import { analyzePassword } from 'silly-password-generator';
```

```js
// Returns an object telling you how awesome or crappy your password is.
const results = analyzePassword(sillyPassword); 
```

See the [zxcvbn Usage section](https://www.npmjs.com/package/zxcvbn#usage) for the properties available.

<!-- [lock:typescript] 🚫--------------------------------------- -->

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

<!-- [/lock:typescript] ---------------------------------------🚫 -->

<!-- [lock:icon] 🚫--------------------------------------- -->

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

<!-- [/lock:icon] ---------------------------------------🚫 -->

<!-- [lock:contributing] 🚫--------------------------------------- -->

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

<!-- [/lock:contributing] --------------------------------------🚫 -->

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/silly-password-generator/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/silly-password-generator/stargazers): [👉⭐](https://github.com/justinmahar/silly-password-generator/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/silly-password-generator/?path=/docs/license--docs).