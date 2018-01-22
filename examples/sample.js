const currenciesSymbol = require('../');

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
