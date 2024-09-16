
function largestArray(arr) {

    let largestArr=arr[0];

    for(let num of arr)
    {
        if(num>largestArr)
        {
            largestArr=num;
        }
    }

    return largestArr;
}


console.log(largestArray([1,2,3,5,7,9]));
