const cart  = [];


function addToCart(item, quantity){
    for(let i = 0; i < item.length; i++){
    
    if(cart.includes(item[i])){
    cart.item[i] += quantity;
    }
    else
        cart.item[i] = quantity;
    
}
}

function removeFromCart(item, quantity){
    return item - quantity;
}

function calculateTotal(item, quantity) {
   

}

module.exports = {
    addToCart : addToCart,
    removeFromCart : removeFromCart,
    calculateTotal : calculateTotal,
}
