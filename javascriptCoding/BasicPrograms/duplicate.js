//Write a program to remove all the duplicates from an array
function  removeDuplicateArr(arr)
{
    const uniqueArr = [];
    for(const item of arr)
    {
        if(!uniqueArr.includes(item))
        {
            uniqueArr.push(item);
        }
    }

    return uniqueArr;

}
const array=[1,2,3,4,6,7,7,7,7,8,9,10];
const uniqueArray= removeDuplicateArr(array);
console.log(uniqueArray);