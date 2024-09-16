//CALLBACK HELL: Callback hell occurs when callbacks are nested within other callbacks in a way that makes the code difficult to understand and maintain. Here's an example of callback hell:
function getWeather(callback) {
    setTimeout(() => {
        callback(null, "Sunny"); // Simulating weather retrieval
    }, 100);
}

function getWeatherIcon(weather, callback) {
    setTimeout(() => {
        switch (weather) {
            case 'Sunny':
                callback(null, "☀");
                break;
            case 'Cloudy':
                callback(null, "☁");
                break;
            case "Rain":
                callback(null, "🌧");
                break;
            default:
                callback("ICON NOT FOUND");
        }
    });
}

function onSuccess(data) {
    console.log(`Success: ${data}`);
}

function onError(err) {
    console.log(`Error: ${err}`);
}

// Nested callbacks (callback hell version)
getWeather((weatherErr, weather) => {
    if (weatherErr) {
        onError(weatherErr);
    } else {
        getWeatherIcon(weather, (iconErr, icon) => {
            if (iconErr) {
                onError(iconErr);
            } else {
                onSuccess(icon);
            }
        });
    }
});