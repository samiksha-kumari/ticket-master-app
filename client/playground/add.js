//add() (5, 2) // 7


//take function   //Higher-Order function

function add() {  //add is returning function . that fuction is invoke
    return function() {  
        console.log('returned function called')
       
    }

}



function add( ) {
    const n3 = 30
    return function (n1, n2) {
        return n1 + n2 + n3
    }
}

const func = (add)
console.log(func(5, 7))
console.log(add() (5, 7))