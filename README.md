# Currencies symbol

[![npm version](https://badge.fury.io/js/currencies-symbol.svg)](https://www.npmjs.com/package/currencies-symbol)

A simple light package that returns a country currency numeric symbol and also list all countries currency with zero dependency.

### Installation

``` bash

npm install currencies-symbol

```

### Example

``` Javascript
//ES5
const currenciesSymbol = require('currencies-symbol');

// ES6
import currenciesSymbol from 'currencies-symbol';

console.log(currenciesSymbol.all());
// This will return all curriencies symbol

console.log(currenciesSymbol.symbol("United States")); //&#36;
// This will return '&#36;' which is $.

console.log(currenciesSymbol.symbol("USD")); //&#36;
// This will return '&#36;' which is $.

console.log(currenciesSymbol.symbol("Dollar")); //&#36;
// This will return '&#36;' which is $.

console.log(currenciesSymbol.symbol("Nigeria")); //&#8358;
// This will return '&#8358;' which is ₦.

console.log(currenciesSymbol.symbol("NGN")); //&#8358;
// This will return '&#8358;' which is ₦.

console.log(currenciesSymbol.symbol("Naira")); //&#8358;
// This will return '&#8358;' which is ₦.

console.log(currenciesSymbol.symbol("GHC")); //&#162;
// This will return '&#162;' which is ¢

console.log(currenciesSymbol.symbol("Ghana")); //&#162;
// This will also return '&#162;' which is ¢

console.log(currenciesSymbol.symbol("Cedis")); //&#162;
// This will also return '&#162;' which is ¢.

/***
* Note: the .symbol() function takes any of this arguments - Country Name, Currency Name and Currency Abbreviation and return the currency symbol.
***/

```

### Note

- When you render the numeric symbol in html it will display the symbol i.e when you render '&#162' it will display ¢.

## Functions

| function    | argument                                            | response                                            |   |   |
|-------------|-----------------------------------------------------|-----------------------------------------------------|---|---|
| .all()      | none                                                | it returns all currencies symbol          |   |   |
| .symbol(name)   | name(Country Name or Currency Name or Currency Abbreviation)                                                | it returns a symbol for a particular country or currency .                     |   |   |
| 
### Features
- It lists all symbols for all curriencies in the world.
- it returns symbol for a particular country/currency.
- It is lightweight and has zero dependency.

## Contributing

* Fork this repositry to your account.
* Clone your repositry: git clone git@github.com:your-username/currencies-symbol.git
* Create your feature branch: git checkout -b feature/feature-id/<3-4 word feature description>
* Commit your changes: git commit -m "feature(scope): (subject) <BLANK LINE> (body) <BLANK LINE> (footer)"
* Push to the remote branch: git push origin new-feature
* Open a pull request.

- Commit Message Convention
    - scope should be something specific to the commit change e.g logo
    - subject text should:
        - use present tense: "save" not "saved" or "saving"
        - not capitalize first letter i.e no "Carry to safety"
        - not end with a dot (.)
    - Message body (optional) If a body is to be written, it should:
      - written in present tense.
      - include reason for change and difference in the previous behaviour

    - Message Footer This should be used for referencing the issues using the following keywords: Start, Delivers, Fixes and Finishes. It should be written as:
      - [Start #345]
    
## License

This project is authored by Philips Blessing and is licensed 
for your use, modification and distribution under [the MIT license](https://en.wikipedia.org/wiki/MIT_License). 
