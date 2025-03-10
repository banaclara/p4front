interface CountryData {
  name: { common: string };
  capital: string;
  population: number;
  flags: { png: string };
}

const getCountry = async (event: Event) => {
  event.preventDefault();
  const input = document.getElementById('country-name') as HTMLInputElement;
  const countryName = input.value.trim();
  const result = document.getElementById('result') as HTMLDivElement;

  if (!countryName) {
    result.innerHTML = '<p>Please, insert a country name.</p>';
    return;
  }

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    if (!response.ok) {
      result.innerHTML = '<p>Country not found.</p>';
      return;
    }

    const data: CountryData[] = await response.json();

    let countryCards = '';

    data.forEach((country) => {
      countryCards += `
        <div class="country-card">
          <h2>${country.name.common}</h2>
          <p>Capital: ${country.capital[0]}</p>
          <p>Population: ${country.population.toLocaleString()}</p>
          <img class="flag" src="${country.flags.png}"
            alt="${country.name.common} flag">
        </div>`;
    });

    result.innerHTML = countryCards;
  } catch (e) {
    const error = (e as Error).message;
    result.innerHTML = `<p>error: ${error}</p>`;
  }
};

let searchBtn = document.getElementById('search') as HTMLElement;

searchBtn.addEventListener('click', getCountry);
