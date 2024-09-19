//is palindrome with string

function isPalindrome(name)
{
    let cleanedName= name.toLowerCase().replace(/[^a-z0-9]/g,'');
    let reversedName= cleanedName.split("").reverse().join('');
    return reversedName ===cleanedName;

}
console.log(isPalindrome("Palindrome"));
console.log(isPalindrome("madam"));

function doSomething(num)
{
   let  r, sum=0, temp;
   temp=num;
   while (num>0)
   {
    r=num%10;
    sum=(sum*10)+r;
    num=Math.floor(num/10);
   }
   if(temp===sum)
   {
  console.log(temp + "I'm palindorme")
   }
   else
   {
       console.log(temp + "I'm not palindorme")
   }
}

doSomething(454);