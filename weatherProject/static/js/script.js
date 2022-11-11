cardRightTop = document.querySelector('#card__right-top');
cardRightBot = document.querySelector('.card__right-bot');
cardLeft = document.querySelector('.card__left');
weatherIcon = document.querySelector('#weather-icon');
background = document.querySelector('.container');
cardBackground = document.querySelector('.weather__card');

function brokenClouds(timeDay) {
    // Broken clouds styles
    if (timeDay === 'day') {
        background.style.background = '#7393B3';
        cardBackground.style.backgroundImage = "url('static/images/weather/day/broken-clouds.jpg')";
    } else {
        background.style.background = '#7393B3';
        cardBackground.style.backgroundImage = "url('static/images/weather/night/broken-clouds.jpg')";
    }
}

function scatteredClouds(timeDay) {
    // Scattered clouds styles
    if (timeDay === 'day') {
        background.style.background = '#7393B3';
        cardBackground.style.backgroundImage = "url('static/images/weather/day/scattered-clouds.jpg')";
    } else {
        background.style.background = '#7393B3';
        cardBackground.style.backgroundImage = "url('static/images/weather/night/scattered-clouds.jpg')";
    }
}

function clearSky(timeDay) {
    // Clear sky styles
    if (timeDay === 'day') {
        cardRightTop.style.background = '#FFFF8F';
        cardRightBot.style.background = '#93C572';
        background.style.background = '#87CEEB';
        cardBackground.style.backgroundImage = "url('static/images/weather/day/clear-sky.jpg')";
    } else {
        cardRightBot.style.background = '#6082B6';
        background.style.background = '#6F8FAF';
        cardBackground.style.backgroundImage = "url('static/images/weather/night/clear-sky.jpg')";
    }
}

function fewClouds(timeDay) {
    // Few clouds styles
    if (timeDay === 'day') {
        background.style.background = '#87CEEB';
        cardBackground.style.backgroundImage = "url('static/images/weather/day/few-clouds.jpg')";
    } else {
        background.style.background = '#87CEEB';
        cardBackground.style.backgroundImage = "url('static/images/weather/night/few-clouds.jpg')";
    }
}

function rainWeather(timeDay) {
    // Rain styles
    if (timeDay === 'day') {
        background.style.background = '#7393B3';
        cardBackground.style.backgroundImage = "url('static/images/weather/day/rain.jpg')";
    } else {
        background.style.background = '#7393B3';
        cardBackground.style.backgroundImage = "url('static/images/weather/night/rain.jpg')";
    }
}

function snowWeather(timeDay) {
    // Snow styles
    if (timeDay === 'day') {
        background.style.background = '#7393B3';
        cardBackground.style.backgroundImage = "url('static/images/weather/day/snow.jpg')";
    } else {
        background.style.background = '#7393B3';
        cardBackground.style.backgroundImage = "url('static/images/weather/night/snow.jpg')";
    }
}


function changeBackground() {
    // Changes background styles depends on time of day
    const day = 'day';
    const night = 'night';

    if (weatherIcon.src.includes('01d.png')) {
        return clearSky(day);
    } else if (weatherIcon.src.includes('01n.png')) {
        return clearSky(night);
    }

    if (weatherIcon.src.includes('04d.png')) {
        return brokenClouds(day);
    } else if (weatherIcon.src.includes('04n.png')) {
        return brokenClouds(night);
    }

    if (weatherIcon.src.includes('03d.png')) {
        return scatteredClouds(day);
    } else if (weatherIcon.src.includes('03n.png'))  {
        return scatteredClouds(night);
    }

    if (weatherIcon.src.includes('02d.png')) {
        return fewClouds(day);
    } else if (weatherIcon.src.includes('02n.png')) {
        return fewClouds(night);
    }

    if (weatherIcon.src.includes('10d.png')) {
        return rainWeather(day);
    } else if (weatherIcon.src.includes('10n.png')) {
        return rainWeather(night);
    }

    if (weatherIcon.src.includes('13d.png')) {
        return snowWeather(day);
    } else if (weatherIcon.src.includes('13n.png'))  {
        return snowWeather(night);
    }
}
console.log(changeBackground())