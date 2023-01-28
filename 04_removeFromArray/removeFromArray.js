const removeFromArray = function(ar, ...args) {
  // for (let i = 0; i < args.length; i++) {
  //   let index = ar.indexOf(args[i]);// find the index of the element
  //   if (index > -1) { // if the element is in the array
  //     ar.splice(index, 1); // remove it
  //   }
  // }

  // return ar;
  return ar.filter((item) => !args.includes(item))
};


// Do not edit below this line
module.exports = removeFromArray;
