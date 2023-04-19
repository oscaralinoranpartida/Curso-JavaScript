function steamrollArray(arr) {
    let answer = [].concat(...arr)
    console.log(answer)
    return answer.some(Array.isArray)? steamrollArray(answer) : answer;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);