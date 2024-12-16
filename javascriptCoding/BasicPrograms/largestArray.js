
function largestArray(arr) {
    let number = arr[0];

    for (let num of arr) {
        if(num>number)
        {
            number = num;
        }
    }

    return number;
}


console.log(largestArray([1,45,12,679,245,2]));