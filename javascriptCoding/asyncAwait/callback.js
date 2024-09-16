//CALLBACK
function orderPizza(callback)
{
    setTimeout(()=>{
        const pizza ='🍕🍕🍕🍕🍕';
        callback(pizza);
    },2000)
}
console.log("Order Pizza");
function  pizzaIsReady(pizza)
{
    console.log(`EAT the ${pizza} `);
}
orderPizza(pizzaIsReady);
console.log('Talk with your BF');