//1. Maak een 'Zoek'-knop op de pagina en koppel deze aan een functie die de gegevens over België ophaalt en dit in de console logt.
const searchButton = document.getElementById("search-button");

// let countryInput = "";

async function fetchData() {
    try {

        // this.name = countryInput;
        // countryInput = {name};
        const result = await axios.get("https://restcountries.eu/rest/v2/name/Belgium");
        // getInput(name);
        // const result = await axios.get("https://restcountries.eu/rest/v2/name/{name}");
        const countryInfo = result.data[0];

        //log country data
        console.log(countryInfo);

        //2. log country name, region and population
        console.log(`${countryInfo.name} is situated in ${countryInfo.subregion}. It has a population of ${countryInfo.population} people.`);
        //3. log country capital
        console.log(`The capital is ${countryInfo.capital}`);

        //7. Zorg ervoor dat de opgehaalde data op de volgende manier wordt toegevoegd aan de DOM
        const countryname = document.createElement('p');
        countryname.textContent = `${countryInfo.name}`;
        namecountry.appendChild(countryname);

        const countrypop = document.createElement('p');
        countrypop.textContent = `${countryInfo.name} is situated in ${countryInfo.subregion}. It has a population of ${countryInfo.population} people.`;
        countrypops.appendChild(countrypop);

        const capital = document.createElement(`p`);
        capital.textContent = `The capital is ${countryInfo.capital} and you can pay with ${getCurrency(countryInfo.currencies)}'s.`;
        capitalcurrency.appendChild(capital);

        const languages = document.createElement('p');
        languages.textContent = `They speak ${getLanguages(countryInfo.languages)}`;
        countrylanguage.appendChild(languages);

    } catch(e) {
        console.error(e);
    }
}

searchButton.addEventListener('click', (event) => {
    getInput(event);
    fetchData(event);
});

//4. Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden
function getCurrency (currencies) {
    //log 1 or more currencies
    if (currencies.length === 1) {
        return currencies[0].name;
    } else if (currencies.length === 2) {
        return `${currencies[0].name} and ${currencies[1].name}`;
    }
}

//6. Maak een functie die ongeacht het aantal talen die in een land gesproken worden
function getLanguages(languages) {
    //log one or more languages
    if (languages.length === 1) {
        return languages[0].name;
    } else if (languages.length === 2) {
        return `${languages[0].name} and ${languages[1].name}`;
    } else if (languages.length === 3) {
        return `${languages[0].name}, ${languages[1].name} and ${languages[2].name}`;
    }
}

//8. Maak een inputveld op de pagina en zorg ervoor dat als de gebruiker op enter drukt, de functie wordt aangeroepen waarmee de gegevens over België worden opgehaald.

const field = document.getElementById("input-field");

function getInput (event) {
    const countryInput = (event.target.name, event.target.value);
    console.log(countryInput);
    return countryInput;
};

field.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        getInput(event);
        fetchData(event);
    }
});

//9 Zorg ervoor dat de waarde uit het input veld wordt gebruikt als query voor het GET request. Er moet alleen een request gedaan worden als de gebruiker op enter drukt, of op de zoek-knop klikt. Tip: gebruik een globale variabele.



