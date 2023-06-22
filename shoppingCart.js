function addToCart(item, quantity){
    return item * quantity;
}

function removeFromCart(item, quantity){
    return item - quantity;
}

function calculateTotal(item, quantity) {
   console.log(item, quantity);
}

module.exports = {
    addToCart : addToCart,
    removeFromCart : removeFromCart,
    calculateTotal : calculateTotal,
}
