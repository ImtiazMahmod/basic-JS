// problem 03
//number negative 
function deliveryCost(tshirtQuantity){
    const first100tshirtDelivery = 100;
    const second100tshirtDelivery = 80;
    const restTshirtDelivery = 50;
    

   // error case check
    if(tshirtQuantity>0 && typeof tshirtQuantity == 'number'){
       
        if(tshirtQuantity <= 100){
            const deliveryCost = tshirtQuantity * 100;
            return deliveryCost;
        }

        else if(tshirtQuantity <= 200){        
            const first100tshirt = 100 * first100tshirtDelivery;
            const restTshirt = tshirtQuantity -100;
            const second100tshirt = restTshirt * second100tshirtDelivery;
            
            const deliveryCost = first100tshirt + second100tshirt;

            return deliveryCost;
        }

    else {       
        const first100tshirt = 100 * first100tshirtDelivery;
        const second100tshirt = 100 * second100tshirtDelivery;
        const restTshirt = tshirtQuantity - 200;
        const rest100sTshirt = restTshirt * restTshirtDelivery;

        const deliveryCost = first100tshirt + second100tshirt + rest100sTshirt;

        return deliveryCost;

        }
    }
    else if(tshirtQuantity < 0){
        return 'Error! Please input a positive value.';
    }
    else if(tshirtQuantity=0){
        return 'Error! Please input tshirt quantity.';
    }
    else {
        return 'Error! Please input only number.';
    }

}
const tshirt =260;
// function call
const getDeliveryCost = deliveryCost(tshirt);
console.log(getDeliveryCost);