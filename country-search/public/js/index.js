"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getCountry = (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const input = document.getElementById('country-name');
    const countryName = input.value.trim();
    const result = document.getElementById('result');
    if (!countryName) {
        result.innerHTML = '<p>Please, insert a country name.</p>';
        return;
    }
    try {
        const response = yield fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        if (!response.ok) {
            result.innerHTML = '<p>Country not found.</p>';
            return;
        }
        const data = yield response.json();
        let countryCards = '';
        data.forEach((country) => {
            countryCards += `
    <div class="country-card">
    <h2>${country.name.common}</h2>
    <p>Capital: ${country.capital[0]}</p>
    <p>Population: ${country.population.toLocaleString()}</p>
    <img class="flag" src="${country.flags.png}" alt="${country.name.common} flag">
    </div>`;
        });
        result.innerHTML = countryCards;
    }
    catch (e) {
        const error = e.message;
        result.innerHTML = `<p>error: ${error}</p>`;
    }
});
let searchBtn = document.getElementById('search');
searchBtn.addEventListener('click', getCountry);
//# sourceMappingURL=index.js.map