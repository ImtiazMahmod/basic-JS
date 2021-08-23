 //problem 02
function totalSales(tshirtQuantity,pantQuantity,shoeQuantity){
    const tshirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;  
    
    
    // error case check
    
    // if(typeof tshirtQuantity == 'number'&& typeof pantQuantity == 'number'&& typeof shoeQuantity == 'number')    
    if((tshirtQuantity >= 0 &&  pantQuantity >= 0  && shoeQuantity >= 0) && (typeof tshirtQuantity == 'number'&& typeof pantQuantity == 'number'&& typeof shoeQuantity == 'number'))    
    {
        // tshirt sales
    const tshirtSales = tshirtPrice * tshirtQuantity;

        // pant sales
    const pantSales = pantPrice * pantQuantity;

         // shoe sales
    const shoeSales = shoePrice * shoeQuantity;

         // total sales
    const totalSales = tshirtSales + pantSales + shoeSales;
        return totalSales;
    }

    else if (tshirtQuantity < 0 ||  pantQuantity < 0  || shoeQuantity < 0){
        return 'Error! Please input only positive value.';
    }

    else{
        return 'Error! Please input only Number.';
    }
}

// function call
const getTotalSales = totalSales(5,true,2);
console.log(getTotalSales);

