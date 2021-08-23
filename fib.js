///fibonacci series
//using loop
//0,1,1,2,3,5,8,13,21,34,55......n
//nth = (n-1)th + (n-2)th

function fib(n){
    const fib = [];
     fib[0] = 0;
     fib[1] = 1;

    for(let i =2 ; i<n ; i++ )
    {
     fib[i] = fib[i-1] + fib[i-2];
   
    }
    return fib;
}
const getFib = fib(8);
// console.log(getFib);

// fibonacci element using recursion

function fibElement(n){
    if ( n==0){
        return 0;
    }
    else if ( n==1){
        return 1;
    }
    else{
        return fibElement(n-1)+fibElement(n-2);
    }
}

const getFibElement = fibElement(8);
// console.log(getFibElement);

// fibonacci series using recursion

