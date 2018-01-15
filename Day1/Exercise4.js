const applyCoupon = category => discount => item => {
    if(item.category === category){
        var correctPrice = item.price - item.price * discount;
    }   
    return {
        price: correctPrice
    };      
}

const item = {
    "name": "Biscuit",
    "type": "regular",
    "category": "food",
    "price": 2.0
}

console.log(applyCoupon("food")(0.1)(item).price);