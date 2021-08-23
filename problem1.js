//problem 1
function  seerToMon(seer){
    if(typeof seer == 'number' && seer >=0){
        const mon = seer / 40;
        return mon;
    }
    
    else if(typeof seer == 'string') {
       return 'Error! This is string.Please input a Number';
    }

    else if(seer < 0) {
        return 'Error! Please input only positive value';
    }

    else{
       return 'Error! Please input only Number.';
    }
}
const seer = true;

//function call
const getMon = seerToMon(seer);
console.log(getMon); 
