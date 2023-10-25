const shoppingList = [
    "caffe",
    "acqua",
    "the",
    "banane",
    "avocado",
    "pasta",
    'pane',
    "focaccia",
    "uova",
    "latte"
]

// console.log(shoppingList, shoppingList.length);

const listBlock = document.querySelector("ul");

// console.log(listBlock);

let result = "";
let i = 0;

while (i < shoppingList.length && i <= 10) {
    const curElem = shoppingList[i];
    
    result = `<li>${curElem}</li>`;
    listBlock.innerHTML += result;

    // console.log(result);
    // console.log("---");

    i++
}



// console.log(listBlock);

