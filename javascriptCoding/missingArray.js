

function missingArray(num) {
    let total;
    total=7;

    let expected= total*(total+1)/2;
    let num_sum=0;


    for(let i of num)
    {
        num_sum+=i;
    }

    return expected-num_sum;
}

console.log(missingArray([1,2,3,5,6,7]));