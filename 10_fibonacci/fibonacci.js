const fibonacci = function(fib) {
  let fibArray = [1, 1]; // 1,1,2,3,5,8,13

  if(fib < 3){
    if(fib < 0){
      return "OOPS"
    }
    return 1;
  } else{
    for(let i = 3; i <= fib; i++){
      let nextItem = fibArray[i - 2] + fibArray[i - 3]
      fibArray.push(nextItem);
    }
  }
  return fibArray[fibArray.length -1];
};

// Do not edit below this line
module.exports = fibonacci;
