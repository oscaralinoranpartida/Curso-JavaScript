function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr.filter(element => !arr1.includes(element) || !arr2.includes(element));
    }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));