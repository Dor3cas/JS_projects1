
const prices = [100,200,300];
function calculator(prices,tax){
    const subTotal = prices.reduce((sum , price) => sum + price, 0 );
    const finalTotal = subTotal*( 1 + tax);
    return finalTotal;
}
    console.log(calculator(prices,0.1));