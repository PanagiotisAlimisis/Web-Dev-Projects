"use strict";

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
const appId = '8268b79c6118c5f5c576506e09e1318d&units=metric';

const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', handleGenerateButton);


const fetchWeather = async function (url) {
    let response = await fetch(url);
    try {
        let data = await response.json();
        return data;
    } catch (error) {
        console.log('wrong');
        console.log("Error: ", error);
    }
};

async function handleGenerateButton() {
    const city = document.getElementById('city');
    const sightseeings = document.getElementById('sightseeings');

    if (city.value.length === 0 || sightseeings.value.length === 0) {
        city.value = '';
        sightseeings.value = '';
        alert('Enter your answers please.')
        return;
    }

    const url = `${baseUrl}${city.value}&APPID=${appId}`;
    let weatherData = await fetchWeather(url);

    if (weatherData.message === 'city not found') {
        city.value = '';
        sightseeings.value = '';
        alert('City not found');
        return;
    }

    let date = new Date();
    date = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getUTCFullYear();

    let temp = weatherData.main.temp;
    
    let data = {
        city: city.value,
        date: date,
        temp: temp,
        content: sightseeings.value
    };

    await postData('/projectData', data);

    city.value = '';
    sightseeings.value = '';

    await updateUI();
}

const postData = async (url = '', data = {}) => {
    const respone = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await respone.json();
        return newData;
    } catch (error) {
        console.log("Error" + error);
    }
};

const updateUI = async () => {
    const request = await fetch('/projectData');
    try {
        const projectData = await request.json();

        document.getElementById('cityName').innerHTML = projectData.city;
        document.getElementById('date').innerHTML = projectData.date;
        document.getElementById('temp').innerHTML = projectData.temp+'C';
        document.getElementById('content').innerHTML = 'Sightseeing: ' + projectData.content;

        const entryHolder = document.getElementById('entryHolder');
        entryHolder.style.color = '#123454';
        entryHolder.style.fontSize = '2.3rem';
        entryHolder.style.textTransform = 'capitalize';
    } catch (error) {
        console.log('Error: ' + error);
    }
};
