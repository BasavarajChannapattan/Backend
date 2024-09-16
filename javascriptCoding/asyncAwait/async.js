const Burger ="🍔🍔🍔🍔🍔";
console.log(Burger);

let pizza;
function orderPizza() {
    console.log("Order Pizza");
  setTimeout(()=>{
      pizza="🍕🍕🍕🍕🍕";
      console.log(`${pizza} is ready`)
  },2000)

    console.log(`pizza was ordered`);
}

orderPizza();
console.log("so do some lundry");
console.log(`EAT ${pizza}`);

