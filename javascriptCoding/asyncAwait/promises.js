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

// working with apis
function doSomething()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://reqres.in/api/users/2")
                .then(res=>{
                    if(res.status === 200)
                    {
                       return res.json();
                    }
                    else
                    {
                        reject("Error: " + res.status);
                    }
                })
                .then(data=>resolve(data))
                .catch(err=>reject(err));
        }, 1000)
    })
}

doSomething()
    .then(res=>{
        const id = res.data.id;
        const email= res.data.email;
        console.log(res);
        console.log(id);
        console.log(email);
    })
