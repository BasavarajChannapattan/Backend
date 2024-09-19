function isPrime(num)
{
    let isBoolean =true;
    for (let i = 2; i <= num/2; ++i)
    {
        if(num%i === 0)
        {
            isBoolean=false;
            console.log("I'm prime")
            break;
        }
    }

    return isBoolean;
}
console.log(isPrime(4));

//