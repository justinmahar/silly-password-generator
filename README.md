<h2 align="center">
  🔑 Silly Password Generator
</h2>
<h3 align="center">
  An opinionated but fun password generator. Generate silly passwords that are easy to remember.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/silly-password-generator" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/silly-password-generator.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/silly-password-generator/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/silly-password-generator/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/silly-password-generator/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>&nbsp;
  <a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/silly-password-generator/)**.

### [→Generate Silly Passwords Here ←](https://justinmahar.github.io/silly-password-generator/?path=/story/stories-sillypasswordgenerator--generator)

## Overview

Generate fun and silly passwords that are easy to remember.

Would you rather use the password [`Tr0ub5dor&3`](https://xkcd.com/936/) or `exciting creepy macho tiger`? 

The first would take 10 seconds to crack, the second would take centuries. 

'Nuff said. Exciting creepy macho tigers for the win.

### Features include:

- **💩 Fun passwords are better than boring ones**
  - Why use lame and hard to remember passwords, when you can use fun ones... that are also secure?
- **👨‍🔬 Password analysis**
  - Leverage the brainpower of at least a dozens nerds. This library makes sure your password is secure using [zxcvbn](https://www.npmjs.com/package/zxcvbn).
- **🔐 Secure**
  - Have I mentioned that they're secure? Well, they are!
- **🔢 Customizable**
  - Choose from a set of options to customize your password.

[lock:donate]::🚫---------------------------------------

## Donate 

I hope this project makes your life a little easier! If it does and you'd like to show your appreciation, consider supporting the project with a coffee or sponsorship. 

Your support helps keep the project going and will earn you some serious virtual high fives. Maybe even a virtual fist bump if you're feeling extra cool.

<a href="https://github.com/sponsors/justinmahar">
  <img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/5">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/15">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/25">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" />
</a>

[/lock:donate]::---------------------------------------🚫

## Table of Contents 

- [Documentation](#documentation)
  - [→Generate Silly Passwords Here ←](#generate-silly-passwords-here-)
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

Go here: [Silly Password Generator](https://justinmahar.github.io/silly-password-generator/?path=/story/stories-sillypasswordgenerator--generator)

### Via npm

```js
import { generateSillyPassword } from 'silly-password-generator';
```

```js
// Use with no options to generate a 4-word silly password
generateSillyPassword(); // `thorough loud annoying penguin`
// Provide a custom word count if you'd like
generateSillyPassword({ wordCount: 7 }); // `glamorous large powerful fast black noisy clam`
```

> Captain obvious here. The `wordCount` must be at least `1`.

### Analyzing Password Strength

This library uses [zxcvbn](https://www.npmjs.com/package/zxcvbn) to analyze password strength. This was written by a bunch of nerds, so you know it's legit.

```js
import { analyzePassword } from 'silly-password-generator';
```

```js
// Returns an object telling you how awesome or crappy your password is.
analyzePassword(sillyPassword); 
```

See the [zxcvbn Usage section](https://www.npmjs.com/package/zxcvbn#usage) for the properties available.

[lock:typescript]::🚫---------------------------------------

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

[/lock:typescript]::---------------------------------------🚫

[lock:icon]::🚫---------------------------------------

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

[/lock:icon]::---------------------------------------🚫

[lock:contributing]::🚫---------------------------------------

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

[/lock:contributing]::---------------------------------------🚫

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/silly-password-generator/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/silly-password-generator/stargazers): [👉⭐](https://github.com/justinmahar/silly-password-generator/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/silly-password-generator/?path=/story/license--page).