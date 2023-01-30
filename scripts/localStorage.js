function saveToLocalStorageByCity(city) {
    //get current values that are saved into local storage
    //create an array of values to store into local storage
    let favorites = getLocalStoage();

    //add new city to our favorites array
    favorites.push(city);

    //save updated array to Local storage
    localStorage.setItem('Favorites', JSON.stringify(favorites));

}

function getLocalStoage() {
    //get all of the values that are stored in Favorites in local storage
    let localStorageData = localStorage.getItem('Favorites');

    if(localStorageData == null){
        return [];
    }


    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(city) {
    let favorites = getLocalStoage();

    //find the index of the city in local storage
    let cityIndex = favorites.indexOf(city);

    //remove the city from the array using splice method
    favorites.splice(cityIndex,1);

    //save our updated array to local storage
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

export { saveToLocalStorageByCity, getLocalStoage, removeFromLocalStorage }