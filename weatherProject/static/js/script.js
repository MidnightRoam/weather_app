cardRightTop = document.querySelector('#card__right-top');
cardRightBot = document.querySelector('.card__right-bot');
cardLeft = document.querySelector('.card__left');
weatherIcon = document.querySelector('#weather-icon');
background = document.querySelector('.container');
cardBackground = document.querySelector('.weather__card');

array = ['04n.png', '04d.png']

function changeBackground () {
    // Broken clouds styles
    if (weatherIcon.src.includes('04n.png') ||
    weatherIcon.src.includes('04d.png'))  {
        background.style.background = '#7393B3';
        cardBackground.style.backgroundImage = "url('static/images/broken-clouds.jpg')";
    // Scattered clouds styles
    } else if (weatherIcon.src.includes('03n.png') ||
    weatherIcon.src.includes('03d.png')) {
        background.style.background = '#7393B3';
        cardBackground.style.backgroundImage = "url('static/images/scattered-clouds.jpg')";
    // Clear sky styles
    } else if (weatherIcon.src.includes('01n.png') ||
    weatherIcon.src.includes('01d.png')) {
        cardRightTop.style.background = '#FFFF8F';
        cardRightBot.style.background = '#93C572';
        background.style.background = '#87CEEB';
        cardBackground.style.backgroundImage = "url('static/images/clear-sky.jpg')";
    // Few clouds styles
    } else if (weatherIcon.src.includes('02n.png') ||
    weatherIcon.src.includes('02d.png')) {
        background.style.background = '#87CEEB';
        cardBackground.style.backgroundImage = "url('static/images/few-clouds.jpg')";
    // Rain styles
    } else if (weatherIcon.src.includes('10n.png') ||
    weatherIcon.src.includes('10d.png')) {
        background.style.background = '#7393B3';
        cardBackground.style.backgroundImage = "url('https://www.vmcdn.ca/f/files/via/images/weather/raindrop-umbrella.jpg;w=960')";
    }
    // Snow styles
    else if (weatherIcon.src.includes('13n.png') ||
    weatherIcon.src.includes('13d.png')) {
        background.style.background = '#7393B3';
        cardBackground.style.backgroundImage = "url('static/images/snow.jpg')";
    }
}

console.log(changeBackground())

