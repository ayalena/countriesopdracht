//make a search button that fetches the country data when you click it
const searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', (event) => {
    fetchData();
});

//make a search bar that fetches the country data when pressing enter
const searchBar = document.getElementById('input-field');
searchBar.addEventListener('keyup', setQuery)

let query = '';

function setQuery(e) {
    query = e.target.value;
    if (e.keyCode === 13) {
        fetchData();
    }
}

//make a container for all the info about the country
const countryContainer = document.getElementById("countryInformation")

//asynchronous function for getting data about the country
async function fetchData() {
    searchBar.value = "";
    //make sure the previous result gets cleared
    // ????
    const previousResult = document.getElementById("countryAll");
    if (previousResult) {
        countryContainer.removeChild(previousResult);
    };
    try {
        //GET request
        const result = await axios.get(`https://restcountries.eu/rest/v2/name/${query}`);
        console.log(query);
        const country = result.data[0];

        //log country data, name, region, population and capital in the console
        console.log(country);
        console.log(`${country.name} is situated in ${country.subregion}. It has a population of ${country.population} people.`);
        console.log(`The capital is ${country.capital}`);

        //countryAll will hold all the requested data about the countries
        const countryAll = document.createElement("div");
        countryAll.setAttribute("div", "countryInformation");

        //put the requested country data in the DOM
        const countryName = document.createElement("h1");
        countryName.textContent = `${country.name}`;
        countryInformation.appendChild(countryName);

        const countryRegionPopulation = document.createElement("p");
        countryRegionPopulation.textContent = `${country.name} is situated in ${country.subregion}. It has a population of ${country.population} people.`;
        countryInformation.appendChild(countryRegionPopulation);

        const countryCapital = document.createElement("p");
        countryCapital.textContent = `The capital is ${country.capital} and you can pay with ${getCurrency(country.currencies)}'s.`;
        countryInformation.appendChild(countryCapital);

        const countryLanguages = document.createElement("p");
        countryLanguages.textContent = `They speak ${getLanguages(country.languages)}`;
        countryInformation.appendChild(countryLanguages);

        //put all the information about the countries in the container
        countryContainer.appendChild(countryAll);

        //get the ${country.flag} as an image in the DOM
        //???
        // const countryFlag = document.createElement("img");
        // countryFlag.setAttribute("img", `${country.flags}`);
        // countryInformation.appendChild(countryFlag);

    } catch (e) {
        console.error(e);
        //display the error message in the DOM
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `This country does not exist`;
        countryInformation.appendChild(errorMessage);
    }
}

//a function to get the countries currencies
function getCurrency(currencies) {
    if (currencies.length === 1) {
        return currencies[0].name;
    } else if (currencies.length === 2) {
        return `${currencies[0].name} and ${currencies[1].name}`;
    }
}

//a function to get the countries' spoken languages
function getLanguages(languages) {
    if (languages.length === 1) {
        return languages[0].name;
    } else if (languages.length === 2) {
        return `${languages[0].name} and ${languages[1].name}`;
    } else if (languages.length === 3) {
        return `${languages[0].name}, ${languages[1].name} and ${languages[2].name}`;
    }

}

// let countryInput = "";
// const field = document.getElementById("input-field");

// function getInput (event) {
//     const countryInput = (event.target.name, event.target.value);
//     // console.log(countryInput);
//     return countryInput;
// };

// field.addEventListener("keyup", function(event) {
//     if (event.code === 'Enter') {
//         getInput(event);
//         fetchData();
//         //10. Zorg ervoor dat de waarde van het input veld wordt leeggemaakt na elke zoekopdracht.
//         function clearThis(field) {
//             field.value= "";
//         }
//         clearThis(field);
//     }
// });
