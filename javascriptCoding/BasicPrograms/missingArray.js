

function missingArray(num) {
    let total;
    total=6;

    let expected= total*(total+1)/2;
    let num_sum=0;

    for(let i of num)
    {
        num_sum+=i;//21-18
    }

    return expected-num_sum;
}

console.log(missingArray([1,2,4,5,6]));