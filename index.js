
const listContainer = document.getElementById("itemList");
const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItem");
const markPurchasedButton = document.getElementById("markPurchased");
const clearListButton = document.getElementById("clearList");


let shoppingItems = [];


function renderItems() {
    
    listContainer.innerHTML = '';

    
    shoppingItems.forEach((item, index) => {
        
        const li = document.createElement('li');
        li.textContent = item.name;

        
        if (item.isPurchased) {
            li.classList.add('marked');
        }

        
        const purchaseButton = document.createElement('button');
        purchaseButton.textContent = 'Mark Purchased';
        purchaseButton.addEventListener('click', () => {
            markItemAsPurchased(index);
        });
        li.appendChild(purchaseButton);

        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeItem(index);
        });
        li.appendChild(removeButton);

        
        listContainer.appendChild(li);
    });
}


function markItemAsPurchased(index) {
    shoppingItems[index].isPurchased = true;
    renderItems();
}


function removeItem(index) {
    shoppingItems.splice(index, 1);
    renderItems();
}


addItemButton.addEventListener('click', () => {
    const itemName = itemInput.value.trim();
    if (itemName !== '') {
        shoppingItems.push({ name: itemName, isPurchased: false });
        itemInput.value = '';
        renderItems();
    }
});

markPurchasedButton.addEventListener('click', () => {
    shoppingItems.forEach((item, index) => {
        if (!item.isPurchased) {
            markItemAsPurchased(index);
        }
    })
});



clearListButton.addEventListener('click', () => {
    shoppingItems = [];
    renderItems();
});


renderItems();
