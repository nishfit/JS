const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function (accumulator,currentValue){
    console.log(`acc: ${accumulator} and Current Value ${currentValue}`);
    return accumulator + currentValue
},0)
console.log(myTotal);

//By Arrow func

const myTotal2 = myNums.reduce( (acc,curr) =>acc+curr,0 )
console.log(myTotal2);

const shoppingCart =[
        {
            itemName:"JS Course",
            price: 2999
        },
        {
            itemName:"Python Course",
            price: 5999
        },
        {
            itemName:"Java Course",
            price: 1999
        },
        {
            itemName:"Mobile Course",
            price: 4999
        }
]
const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(priceToPay);