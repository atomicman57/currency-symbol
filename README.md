# currency-symbol

[![NPM](https://nodei.co/npm/currency-symbol.png)](https://nodei.co/npm/currency-symbol/)

[![npm version](https://badge.fury.io/js/currency-symbol.svg)](https://www.npmjs.com/package/currency-symbol)


A simple lightweight zero dependency package that returns a country currency numeric symbol and can also list all countries currency.

### Installation

``` bash

npm install currency-symbol

```

### Example

``` Javascript
//ES5
const currencySymbol = require('currency-symbol');

// ES6
import currencySymbol from 'currency-symbol';

console.log(currencySymbol.all());
// This will return all curriencies symbol

console.log(currencySymbol.symbol("United States")); //&#36;
// This will return '&#36;' which is $.

console.log(currencySymbol.symbol("USD")); //&#36;
// This will return '&#36;' which is $.

console.log(currencySymbol.symbol("Dollar")); //&#36;
// This will return '&#36;' which is $.

console.log(currencySymbol.symbol("Nigeria")); //&#8358;
// This will return '&#8358;' which is ₦.

console.log(currencySymbol.symbol("NGN")); //&#8358;
// This will return '&#8358;' which is ₦.

console.log(currencySymbol.symbol("Naira")); //&#8358;
// This will return '&#8358;' which is ₦.

console.log(currencySymbol.symbol("GHC")); //&#162;
// This will return '&#162;' which is ¢

console.log(currencySymbol.symbol("Ghana")); //&#162;
// This will also return '&#162;' which is ¢

console.log(currencySymbol.symbol("Cedis")); //&#162;
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
| .all()      | none                                                | it returns all currency symbol          |   |   |
| .symbol(name)   | name(Country Name or Currency Name or Currency Abbreviation)                                                | it returns a symbol for a particular country or currency .
### Features
- It lists all symbols for all curriencies in the world.
- it returns symbol for a particular country/currency.
- It is lightweight and has zero dependency.

## Contributing

* Fork this repositry to your account.
* Clone your repositry: git clone git@github.com:your-username/currency-symbol.git
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
