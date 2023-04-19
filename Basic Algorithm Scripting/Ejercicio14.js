function getIndexToIns(arr, num) {
    arr = arr.sort(function(a , b){
      return a - b;
    })
    for(let element of arr){
      if (element >= num) return arr.indexOf (element)
    }
    return arr.length;
  }
  
  getIndexToIns([40, 60], 50);