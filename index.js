
const listContainer = document.getElementById("itemList");
const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItem");
const markPurchasedButton = document.getElementById("markPurchased");
const clearListButton = document.getElementById("clearList");


let shoppingItems = [];


function renderItems() {
    
    listContainer.innerHTML = '';


    shoppingItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        if (item.isPurchased) {
            li.classList.add('marked');
        }
        listContainer.appendChild(li);
    });
}

addItemButton.addEventListener('click', function() {
    const itemName = itemInput.value.trim();
    if (itemName !== '') {
        shoppingItems.push({ name: itemName, isPurchased: false });
        itemInput.value = ''; 
        renderItems(); 
    }
});

markPurchasedButton.addEventListener('click', function() {
    shoppingItems.forEach(item => {
        item.isPurchased = true;
    });
    renderItems();
});


clearListButton.addEventListener('click', function() {
    shoppingItems = []; 
    renderItems(); 
});


renderItems();
