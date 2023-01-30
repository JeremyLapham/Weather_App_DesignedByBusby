import { saveToLocalStorageByCity, getLocalStoage, removeFromLocalStorage } from './localStorage.js';
import { prod, dev } from './environment.js';

let apiKey = '&appid=';

if (prod.isLive) {
    apiKey += prod.apiKey;
}
else {
    apiKey += dev.apiKey;
}

let cityDisplay = document.getElementById('cityDisplay');
let todayHigh = document.getElementById('todayHigh');
let todayLow = document.getElementById('todayLow');

let cityDisplay2 = document.getElementById('cityDisplay2');
let todayHigh2 = document.getElementById('todayHigh2');
let todayLow2 = document.getElementById('todayLow2');
let currentDay2 = document.getElementById('currentDay2')

let city = document.getElementById('city');
let currentWeather = document.getElementById('currentWeather');

let showDay = document.getElementById('showDay');
let showDay2 = document.getElementById('showDay2');
let showDay3 = document.getElementById('showDay3');
let showDay4 = document.getElementById('showDay4');
let showDay5 = document.getElementById('showDay5');
let currentDay = document.getElementById('currentDay');

let day1HL = document.getElementById('day1HL');
let day2HL = document.getElementById('day2HL');
let day3HL = document.getElementById('day3HL');
let day4HL = document.getElementById('day4HL');
let day5HL = document.getElementById('day5HL');

let searchBtn = document.getElementById('searchBtn');
let fiveDayBtns = document.getElementById('fiveDayBtns');
let replaceWithSearch = document.getElementById('replaceWithSearch');
let homeBtn = document.getElementById('homeBtn');
let homeBtn2 = document.getElementById('homeBtn2');
let searchBar = document.getElementById('searchBar');
let searchedInfo = document.getElementById('searchedInfo');

let timeWeather = document.getElementById('timeWeather');
let earlyMorningWeather = document.getElementById('earlyMorningWeather');
let morningWeather = document.getElementById('morningWeather');
let afternoonWeather = document.getElementById('afternoonWeather');
let eveningWeather = document.getElementById('eveningWeather');

let day1BtnInfo = document.getElementById('day1BtnInfo');
let day2BtnInfo = document.getElementById('day2BtnInfo');
let day3BtnInfo = document.getElementById('day3BtnInfo');
let day4BtnInfo = document.getElementById('day4BtnInfo');
let day5BtnInfo = document.getElementById('day5BtnInfo');

let searchedDayOne = document.getElementById('searchedDayOne');
let searchedDayTwo = document.getElementById('searchedDayTwo');
let searchedDayThree = document.getElementById('searchedDayThree');
let searchedDayFour = document.getElementById('searchedDayFour');
let searchedDayFive = document.getElementById('searchedDayFive');
let fiveDaySearchy = document.getElementById('fiveDaySearchy');

let currentInfoHide = document.getElementById('currentInfoHide');

let articleImg = document.getElementById('articleImg');
let favoriteButton = document.getElementById('favoriteButton');
let favHide = document.getElementById('favHide');

let cityName = '';
let long;
let lat;
let state;
let country;

let injectHere = document.getElementById('injectHere');

favoriteButton.addEventListener('click', function () {
    saveToLocalStorageByCity(city.value)
});

articleImg.addEventListener('click', function () {
    //get LocalStorage 
    let localStorageData = getLocalStoage();
    console.log(localStorageData);
    CreateElements()
});

function CreateElements() {
    let favorites = getLocalStoage();

    while (injectHere.firstChild) {
        injectHere.removeChild(injectHere.firstChild);
    }

    if (injectHere.childElementCount === 0) {
        favorites.map(person => {
            let p = document.createElement('p');
            p.textContent = person;

            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger';
            deleteBtn.textContent = 'Unfavorite';
            deleteBtn.type = 'button';
            deleteBtn.addEventListener('click', function () {
                removeFromLocalStorage(person);
            })

            injectHere.appendChild(p);
            injectHere.appendChild(deleteBtn);
        })
    }
}

let characters = /^[a-zA-Z\s]+$/;
let numbers = /^[0-9\s]+$/;
city.addEventListener('keydown', function (event) {
    cityName = city.value;
    if (event.key === 'Enter') {
        if (cityName.match(characters)) {
            WeatherGetData(cityName);
            timeWeather.classList.remove('hide');
            searchedInfo.classList.remove('searchedMargining');
            fiveDaySearchy.classList.remove('hide');
        }
        else if (cityName.match(numbers)) {
            WeatherGetData(cityName);
            timeWeather.classList.remove('hide');
            searchedInfo.classList.remove('searchedMargining');
            fiveDaySearchy.classList.remove('hide');
        }
    }
});

searchBtn.addEventListener('click', function () {
    fiveDayBtns.classList.add('hide');
    replaceWithSearch.classList.add('hide');
    searchBar.classList.remove('hide');
    homeBtn.classList.remove('hide');
    searchedInfo.classList.remove('hide');
    timeWeather.classList.add('hide');
    articleImg.classList.add('articleImg');
    articleImg.classList.remove('hide');
    favHide.classList.remove('hide');
});

homeBtn.addEventListener('click', function () {
    location.reload();
});

homeBtn2.addEventListener('click', function () {
    location.reload();
});

day1BtnInfo.addEventListener('click', function () {
    currentInfoHide.classList.add('hide');
    homeBtn2.classList.remove('hide');
    fiveDayBtns.classList.add('hide');
    timeWeather.classList.remove('hide');
    timeWeather.classList.add('paddingForEachDayTemps');
    articleImg.classList.add('articleImg');
    articleImg.classList.remove('hide');
    WeatherGetData2();
});
day2BtnInfo.addEventListener('click', function () {
    currentInfoHide.classList.add('hide');
    homeBtn2.classList.remove('hide');
    fiveDayBtns.classList.add('hide');
    timeWeather.classList.remove('hide');
    timeWeather.classList.add('paddingForEachDayTemps');
    articleImg.classList.add('articleImg');
    articleImg.classList.remove('hide');
    WeatherGetData3()
});
day3BtnInfo.addEventListener('click', function () {
    currentInfoHide.classList.add('hide');
    homeBtn2.classList.remove('hide');
    fiveDayBtns.classList.add('hide');
    timeWeather.classList.remove('hide');
    timeWeather.classList.add('paddingForEachDayTemps');
    articleImg.classList.add('articleImg');
    articleImg.classList.remove('hide');
    WeatherGetData4()
});
day4BtnInfo.addEventListener('click', function () {
    currentInfoHide.classList.add('hide');
    homeBtn2.classList.remove('hide');
    fiveDayBtns.classList.add('hide');
    timeWeather.classList.remove('hide');
    timeWeather.classList.add('paddingForEachDayTemps');
    articleImg.classList.add('articleImg');
    articleImg.classList.remove('hide');
    WeatherGetData5()
});
day5BtnInfo.addEventListener('click', function () {
    currentInfoHide.classList.add('hide');
    homeBtn2.classList.remove('hide');
    fiveDayBtns.classList.add('hide');
    timeWeather.classList.remove('hide');
    timeWeather.classList.add('paddingForEachDayTemps');
    articleImg.classList.add('articleImg');
    articleImg.classList.remove('hide');
    WeatherGetData6()
});



async function WeatherGetData(cityName) {
    //Search function

    if (cityName.match(numbers)) {
        const promise = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${cityName}${apiKey}&units=imperial`);
        const data = await promise.json();

        long = data.lon;
        lat = data.lat;
        country = data.country;
    }
    else if (cityName.match(characters)) {
        const promise = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}${apiKey}&units=imperial`);
        const data = await promise.json();

        long = data[0].lon;
        lat = data[0].lat;
        state = data[0].state;
        country = data[0].country;
    }


    function GetData() {
        let dataThings;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}${apiKey}&units=imperial`).then(
            response => response.json()
        ).then(
            data => {
                dataThings = data
                let date = new Date(dataThings.list[6].dt_txt)
                let options = { weekday: 'long' };
                let day = new Intl.DateTimeFormat('en-US', options).format(date);
                let dayAsString = String(day);
                showDay.textContent = dayAsString + ':';

                let date2 = new Date(dataThings.list[14].dt_txt)
                let options2 = { weekday: 'long' };
                let day2 = new Intl.DateTimeFormat('en-US', options2).format(date2);
                let dayAsString2 = String(day2);
                showDay2.textContent = dayAsString2 + ':';

                let date3 = new Date(dataThings.list[22].dt_txt)
                let options3 = { weekday: 'long' };
                let day3 = new Intl.DateTimeFormat('en-US', options3).format(date3);
                let dayAsString3 = String(day3);
                showDay3.textContent = dayAsString3 + ':';

                let date4 = new Date(dataThings.list[30].dt_txt)
                let options4 = { weekday: 'long' };
                let day4 = new Intl.DateTimeFormat('en-US', options4).format(date4);
                let dayAsString4 = String(day4);
                showDay4.textContent = dayAsString4 + ':';

                let date5 = new Date(dataThings.list[38].dt_txt)
                let options5 = { weekday: 'long' };
                let day5 = new Intl.DateTimeFormat('en-US', options5).format(date5);
                let dayAsString5 = String(day5);
                showDay5.textContent = dayAsString5 + ':';

                day1HL.textContent = 'High: ' + Math.round(dataThings.list[0].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[0].main.temp_min) + '°F';
                day2HL.textContent = 'High: ' + Math.round(dataThings.list[8].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[8].main.temp_min) + '°F';
                day3HL.textContent = 'High: ' + Math.round(dataThings.list[16].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[16].main.temp_min) + '°F';
                day4HL.textContent = 'High: ' + Math.round(dataThings.list[24].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[24].main.temp_min) + '°F';
                day5HL.textContent = 'High: ' + Math.round(dataThings.list[32].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[32].main.temp_min) + '°F';

                searchedDayOne.textContent = dayAsString + ':' + '\n' + '\n' + 'High: ' + Math.round(dataThings.list[0].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[0].main.temp_min) + '°F';
                searchedDayTwo.textContent = dayAsString2 + ':' + '\n' + '\n' + 'High: ' + Math.round(dataThings.list[8].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[8].main.temp_min) + '°F';
                searchedDayThree.textContent = dayAsString3 + ':' + '\n' + '\n' + 'High: ' + Math.round(dataThings.list[16].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[16].main.temp_min) + '°F';
                searchedDayFour.textContent = dayAsString4 + ':' + '\n' + '\n' + 'High: ' + Math.round(dataThings.list[24].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[24].main.temp_min) + '°F';
                searchedDayFive.textContent = dayAsString5 + ':' + '\n' + '\n' + 'High: ' + Math.round(dataThings.list[32].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[32].main.temp_min) + '°F';

                earlyMorningWeather.textContent = '12am: ' + Math.round(dataThings.list[0].main.temp) + '°F ' + ' | ' + ' 3am: ' + Math.round(dataThings.list[1].main.temp) + '°F';
                morningWeather.textContent = '6am: ' + Math.round(dataThings.list[2].main.temp) + '°F ' + ' | ' + ' 9am: ' + Math.round(dataThings.list[3].main.temp) + '°F';
                afternoonWeather.textContent = '12pm: ' + Math.round(dataThings.list[4].main.temp) + '°F ' + ' | ' + ' 3pm: ' + Math.round(dataThings.list[5].main.temp) + '°F';
                eveningWeather.textContent = '6pm: ' + Math.round(dataThings.list[6].main.temp) + '°F ' + ' | ' + ' 9pm: ' + Math.round(dataThings.list[7].main.temp) + '°F';
            }
        )
    }
    function TodayWeather() {
        let todayW;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}${apiKey}&units=imperial`).then(
            response => response.json()
        ).then(
            data => {
                todayW = data;

                let timestamp = todayW.dt;
                let date = new Date(timestamp * 1000);

                currentDay2.textContent = Math.round(todayW.main['temp']) + '°F';
                cityDisplay2.textContent = todayW.name + ', ' + state + ', ' + country;
                todayHigh2.textContent = 'High: ' + Math.round(todayW.main['temp_max']) + '°F';
                todayLow2.textContent = 'Low: ' + Math.round(todayW.main['temp_min']) + ' °F';
            }
        )
    }
    GetData()
    TodayWeather()
}


async function WeatherGetData1() {
    //hardcoded just for now units changed to freedom units
    const promise = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=sacramento${apiKey}&units=imperial`);
    const data = await promise.json();

    long = data[0].lon;
    lat = data[0].lat;
    state = data[0].state;
    country = data[0].country;
    function GetData() {
        let dataThings;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}${apiKey}&units=imperial`).then(
            response => response.json()
        ).then(
            data => {
                dataThings = data
                let date = new Date(dataThings.list[6].dt_txt)
                let options = { weekday: 'long' };
                let day = new Intl.DateTimeFormat('en-US', options).format(date);
                let dayAsString = String(day);
                showDay.textContent = dayAsString + ':';

                let date2 = new Date(dataThings.list[14].dt_txt)
                let options2 = { weekday: 'long' };
                let day2 = new Intl.DateTimeFormat('en-US', options2).format(date2);
                let dayAsString2 = String(day2);
                showDay2.textContent = dayAsString2 + ':';

                let date3 = new Date(dataThings.list[22].dt_txt)
                let options3 = { weekday: 'long' };
                let day3 = new Intl.DateTimeFormat('en-US', options3).format(date3);
                let dayAsString3 = String(day3);
                showDay3.textContent = dayAsString3 + ':';

                let date4 = new Date(dataThings.list[30].dt_txt)
                let options4 = { weekday: 'long' };
                let day4 = new Intl.DateTimeFormat('en-US', options4).format(date4);
                let dayAsString4 = String(day4);
                showDay4.textContent = dayAsString4 + ':';

                let date5 = new Date(dataThings.list[38].dt_txt)
                let options5 = { weekday: 'long' };
                let day5 = new Intl.DateTimeFormat('en-US', options5).format(date5);
                let dayAsString5 = String(day5);
                showDay5.textContent = dayAsString5 + ':';

                day1HL.textContent = 'High: ' + Math.round(dataThings.list[1].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[0].main.temp_min) + '°F';
                day2HL.textContent = 'High: ' + Math.round(dataThings.list[8].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[9].main.temp_min) + '°F';
                day3HL.textContent = 'High: ' + Math.round(dataThings.list[16].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[17].main.temp_min) + '°F';
                day4HL.textContent = 'High: ' + Math.round(dataThings.list[24].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[25].main.temp_min) + '°F';
                day5HL.textContent = 'High: ' + Math.round(dataThings.list[32].main.temp_max) + '°F' + '\n' + 'Low: ' + Math.round(dataThings.list[33].main.temp_min) + '°F';
            }
        )
    }
    function TodayWeather() {
        let todayW;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}${apiKey}&units=imperial`).then(
            response => response.json()
        ).then(
            data => {
                todayW = data;
                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

                let dt = todayW.dt;
                let date = new Date(dt * 1000); // convert seconds to milliseconds
                let dayOfWeek = date.getDay();
                currentDay.textContent = 'Today: ' + days[dayOfWeek];
                todayHigh.textContent = 'High: ' + Math.round(todayW.main['temp_max']) + '°F';
                todayLow.textContent = 'Low: ' + Math.round(todayW.main['temp_min']) + '°F';
                cityDisplay.textContent = todayW.name + ', ' + state + ', ' + country; //tried to get the state code with .substring(0, 2)
            }
        )
    } GetData()
    TodayWeather()
}
WeatherGetData1()









async function WeatherGetData2() {
    //hardcoded units changed to freedom units
    const promise = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=stockton${apiKey}&units=imperial`);
    const data = await promise.json();

    long = data[0].lon;
    lat = data[0].lat;
    function GetData() {
        let dataThings;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}${apiKey}&units=imperial`).then(
            response => response.json()
        ).then(
            data => {
                dataThings = data
                let date = new Date(dataThings.list[6].dt_txt)
                let options = { weekday: 'long' };
                let day = new Intl.DateTimeFormat('en-US', options).format(date);
                let dayAsString = String(day);
                currentDay.textContent = dayAsString;
                earlyMorningWeather.textContent = '12am: ' + Math.round(dataThings.list[0].main.temp) + '°F ' + ' | ' + ' 3am: ' + Math.round(dataThings.list[1].main.temp) + '°F';
                morningWeather.textContent = '6am: ' + Math.round(dataThings.list[2].main.temp) + '°F ' + ' | ' + ' 9am: ' + Math.round(dataThings.list[3].main.temp) + '°F';
                afternoonWeather.textContent = '12pm: ' + Math.round(dataThings.list[4].main.temp) + '°F ' + ' | ' + ' 3pm: ' + Math.round(dataThings.list[5].main.temp) + '°F';
                eveningWeather.textContent = '6pm: ' + Math.round(dataThings.list[6].main.temp) + '°F ' + ' | ' + ' 9pm: ' + Math.round(dataThings.list[7].main.temp) + '°F';
            }
        )
    } GetData()
}
async function WeatherGetData3() {
    //hardcoded units changed to freedom units
    const promise = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=stockton${apiKey}&units=imperial`);
    const data = await promise.json();
    long = data[0].lon;
    lat = data[0].lat;
    function GetData() {
        let dataThings;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}${apiKey}&units=imperial`).then(
            response => response.json()
        ).then(
            data => {
                dataThings = data
                let date = new Date(dataThings.list[14].dt_txt)
                let options = { weekday: 'long' };
                let day = new Intl.DateTimeFormat('en-US', options).format(date);
                let dayAsString = String(day);

                currentDay.textContent = dayAsString;
                earlyMorningWeather.textContent = '12am: ' + Math.round(dataThings.list[8].main.temp) + '°F ' + ' | ' + ' 3am: ' + Math.round(dataThings.list[9].main.temp) + '°F';
                morningWeather.textContent = '6am: ' + Math.round(dataThings.list[10].main.temp) + '°F ' + ' | ' + ' 9am: ' + Math.round(dataThings.list[11].main.temp) + '°F';
                afternoonWeather.textContent = '12pm: ' + Math.round(dataThings.list[12].main.temp) + '°F ' + ' | ' + ' 3pm: ' + Math.round(dataThings.list[13].main.temp) + '°F';
                eveningWeather.textContent = '6pm: ' + Math.round(dataThings.list[14].main.temp) + '°F ' + ' | ' + ' 9pm: ' + Math.round(dataThings.list[15].main.temp) + '°F';
            }
        )
    } GetData()
}
async function WeatherGetData4() {
    //hardcoded units changed to freedom units
    const promise = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=stockton${apiKey}&units=imperial`);
    const data = await promise.json();
    long = data[0].lon;
    lat = data[0].lat;
    function GetData() {
        let dataThings;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}${apiKey}&units=imperial`).then(
            response => response.json()
        ).then(
            data => {
                dataThings = data
                let date = new Date(dataThings.list[22].dt_txt)
                let options = { weekday: 'long' };
                let day = new Intl.DateTimeFormat('en-US', options).format(date);
                let dayAsString = String(day);

                currentDay.textContent = dayAsString;
                earlyMorningWeather.textContent = '12am: ' + Math.round(dataThings.list[16].main.temp) + '°F ' + ' | ' + ' 3am: ' + Math.round(dataThings.list[17].main.temp) + '°F';
                morningWeather.textContent = '6am: ' + Math.round(dataThings.list[18].main.temp) + '°F ' + ' | ' + ' 9am: ' + Math.round(dataThings.list[19].main.temp) + '°F';
                afternoonWeather.textContent = '12pm: ' + Math.round(dataThings.list[20].main.temp) + '°F ' + ' | ' + ' 3pm: ' + Math.round(dataThings.list[21].main.temp) + '°F';
                eveningWeather.textContent = '6pm: ' + Math.round(dataThings.list[22].main.temp) + '°F ' + ' | ' + ' 9pm: ' + Math.round(dataThings.list[23].main.temp) + '°F';
            }
        )
    } GetData()
}
async function WeatherGetData5() {
    //hardcoded units changed to freedom units
    const promise = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=stockton${apiKey}&units=imperial`);
    const data = await promise.json();
    long = data[0].lon;
    lat = data[0].lat;
    function GetData() {
        let dataThings;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}${apiKey}&units=imperial`).then(
            response => response.json()
        ).then(
            data => {
                dataThings = data
                let date = new Date(dataThings.list[28].dt_txt)
                let options = { weekday: 'long' };
                let day = new Intl.DateTimeFormat('en-US', options).format(date);
                let dayAsString = String(day);

                currentDay.textContent = dayAsString;
                earlyMorningWeather.textContent = '12am: ' + Math.round(dataThings.list[24].main.temp) + '°F ' + ' | ' + ' 3am: ' + Math.round(dataThings.list[25].main.temp) + '°F';
                morningWeather.textContent = '6am: ' + Math.round(dataThings.list[26].main.temp) + '°F ' + ' | ' + ' 9am: ' + Math.round(dataThings.list[27].main.temp) + '°F';
                afternoonWeather.textContent = '12pm: ' + Math.round(dataThings.list[28].main.temp) + '°F ' + ' | ' + ' 3pm: ' + Math.round(dataThings.list[29].main.temp) + '°F';
                eveningWeather.textContent = '6pm: ' + Math.round(dataThings.list[30].main.temp) + '°F ' + ' | ' + ' 9pm: ' + Math.round(dataThings.list[31].main.temp) + '°F';
            }
        )
    } GetData()
}
async function WeatherGetData6() {
    //hardcoded units changed to freedom units
    const promise = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=stockton${apiKey}&units=imperial`);
    const data = await promise.json();
    long = data[0].lon;
    lat = data[0].lat;
    function GetData() {
        let dataThings;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}${apiKey}&units=imperial`).then(
            response => response.json()
        ).then(
            data => {
                dataThings = data
                let date = new Date(dataThings.list[38].dt_txt)
                let options = { weekday: 'long' };
                let day = new Intl.DateTimeFormat('en-US', options).format(date);
                let dayAsString = String(day);

                currentDay.textContent = dayAsString;
                earlyMorningWeather.textContent = '12am: ' + Math.round(dataThings.list[32].main.temp) + '°F ' + ' | ' + ' 3am: ' + Math.round(dataThings.list[33].main.temp) + '°F';
                morningWeather.textContent = '6am: ' + Math.round(dataThings.list[34].main.temp) + '°F ' + ' | ' + ' 9am: ' + Math.round(dataThings.list[35].main.temp) + '°F';
                afternoonWeather.textContent = '12pm: ' + Math.round(dataThings.list[36].main.temp) + '°F ' + ' | ' + ' 3pm: ' + Math.round(dataThings.list[37].main.temp) + '°F';
                eveningWeather.textContent = '6pm: ' + Math.round(dataThings.list[38].main.temp) + '°F ' + ' | ' + ' 9pm: ' + Math.round(dataThings.list[39].main.temp) + '°F';
            }
        )
    } GetData()
}