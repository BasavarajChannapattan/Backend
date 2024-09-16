function getWeather()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sunny");
        },100)
    })
}

function getWeatherIcon(weather)
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            switch (weather)
            {
                case 'Sunny':
                    resolve("☀");
                    break;
                case 'Cloudy':
                    resolve("☁");
                    break;
                case "Rain":
                    resolve("🌧");
                    break;
                default:
                    reject("ICON NOT FOUND");
            }

        })
    })
}

function onSuccess(data)
{
    console.log(`Success:  ${data}`);
}
function onError(err)
{
    console.log(`Error: ${err}`);
}

 function onFinally(finshed)
 {
     console.log(`Finally Done with the flow`);
 }


getWeather()
    .then(getWeatherIcon)
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally);

