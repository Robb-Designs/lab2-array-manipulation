// TASK 1: ARRAY MANIPULATION

//declared an array to a variable
let shoppingList = [];

//function that takes an item as a parameter and adds it to the shoppingList array
// const addItem = (item) =>{
//     return shoppingList.push(item);
// }

//function called removeLastItem that removes the last item from the shoppingList array
const removeLastItem = ()=>{
    return shoppingList.pop();
}

//a function called displayList that logs all items in the shoppingList array to the console.
 const displayList = ()=>{
    console.log(shoppingList)
 }
 //clg testing
//  addItem("Apples");
//  addItem("Peaches");
//  addItem("Chocolate Milk");
//  removeLastItem()
//  displayList()

//  console.log(shoppingList);






 // TASK 2: FILTER AND SEARCH

 //Modify the addItem function to only add the item if it is not already in the shoppingList array.
 const addItem = (item) =>{
    if(!shoppingList.includes(item)){
    return shoppingList.push(item);
    }else{
        console.log(`${item} is already on your list`)
    }
}

// a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive)
const filterItems = (searchTerm) => {
    return shoppingList.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );
};


console.log(filterItems("milk"))