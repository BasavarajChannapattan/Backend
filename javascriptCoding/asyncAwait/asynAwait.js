function doSomethingAfterMin()
{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Resolved")
        },2000)
    });
}


async function asyncCall()
{
    console.log("calling");
    const res = await doSomethingAfterMin();
    console.log(res);
}

asyncCall();

const myself={
    name:"basava",
     async displayName(){
        console.log(this.name);
    }
}
console.log(myself);

