const findTheOldest = function(ar) {
  let oldest = ar[0];
  for(let i = 0; i < ar.length; i ++){
    if(ar[i].yearOfDeath === undefined){
      ar[i].yearOfDeath = new Date().getFullYear();
    }
    let age = ar[i].yearOfDeath - ar[i].yearOfBirth;
    if(age > oldest.yearOfDeath - oldest.yearOfBirth){
      oldest = ar[i];
    }
  }
  return oldest;
   
};

// Do not edit below this line
module.exports = findTheOldest;
