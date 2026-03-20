// TASK 1: ARRAY MANIPULATION

//declared an array to a variable
let shoppingList = [];

//function that takes an item as a parameter and adds it to the shoppingList array
const addItem = (item) =>{
    return shoppingList.push(item);
}

//function called removeLastItem that removes the last item from the shoppingList array
const removeLastItem = ()=>{
    return shoppingList.pop();
}

//a function called displayList that logs all items in the shoppingList array to the console.
 const displayList = ()=>{
    console.log(shoppingList)
 }


 //clg testing
 addItem("Apples");
 addItem("Peaches");
 addItem("Chocolate Milk");
 removeLastItem()
 displayList()

 console.log(shoppingList);