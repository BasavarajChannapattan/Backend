const express = require('express');
const app = express();
const port =3000;
app.use(express.json());

let foodData=[];
let nextId=1;

//add a new food
app.post('/food',(req,res)=>{
    const {name, price} = req.body;
    const newFood ={id:nextId++,name,price}
    foodData.push(newFood);
    res.status(201).send(newFood);
})

//get all foods
app.get("/food", (req,res)=>{
    res.status(200).send(foodData)
})


//get particular id
app.get("/food/:id", (req,res)=>{
  const food =foodData.find(t=>t.id === parseInt(req.params.id))
    if(!food)
    {
        return res.status(404).send("Food Not Found");
    }

    res.status(200).send(food);
})

//update food
app.put("/food/:id", (req,res)=>{
    const food =foodData.find(t=>t.id === parseInt(req.params.id))
    if(!food)
    {
        return res.status(404).send("Food Not Found");
    }

    const {name, price} = req.body;
    food.name=name;
    food.price=price;
    res.status(200).send(food);
})

//delete food

app.delete("/food/:id", (req,res)=>{
    const index =foodData.findIndex(t=>t.id === parseInt(req.params.id))

    if(index===-1)
    {
        return res.status(404).send("Food Not Found");
    }

    foodData.splice(index,1);
    return res.status(204).send("deleted")
})



app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})