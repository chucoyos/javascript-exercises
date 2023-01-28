const sumAll = function(a, b) {

  let sum = 0;
  if(a < 0 || b < 0){
    return "ERROR"
  } else if(isNaN(a) || isNaN(b)){
    return "ERROR"
  } else if(typeof(a) === "string" || typeof(b) === "string"){
    return "ERROR"
  } else
  if(a < b){
      for(let i = a; i <= b; i++){
        sum += i;
    }
  } else if(b < a){
    for(let i = b; i <= a; i++){
      sum += i
    }
  }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
