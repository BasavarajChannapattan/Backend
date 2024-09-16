function isPrime(num)
{

    if(num==0||num==1){
        return false
    }


    for(let i=0;i<Math.sqrt(num);i++)
    {
        if(num%i===0)
        {
            return false;
        }
    }

    return true
}

const num=2;

if(isPrime(num))
{
    console.log(`${num} is prime`);
}
else
{
    console.log(`${num} is not prime`);
}