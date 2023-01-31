const getTheTitles = function(ar) {
  let titlesArray = [];
  for(let i = 0; i < ar.length; i ++){
    titlesArray.push(ar[i].title)
  }
  return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
