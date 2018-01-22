var countries = require('./lib/countries.json')

module.exports = {
    all: function() {
        var currencies = [];
        countries.map(function (country) {
            currencies.push(country.symbol)
        })
        return currencies;
    },
    symbol: function (name) {
        name = name.toLowerCase().trim();
        var currencySymbol;
        countries.map(function (country) {
            var countryArray = country.currency.split(" ");
            var currencyName = countryArray.pop().toLowerCase().trim();
            var currencyAbbr = country.abbreviation.toLowerCase();
            var countryName = countryArray.join(" ").toLowerCase().trim();
            if (name === currencyName || name === countryName || name === currencyAbbr){
                currencySymbol = country.symbol;
            }
        })
        return currencySymbol;
    },
  };