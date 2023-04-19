function sumFibs(num) {
    let fiboNums = [1,1]
    let nextnum = fiboNums[fiboNums.length-2] + fiboNums[fiboNums.length-1]
      while(nextnum <= num){
        fiboNums.push(nextnum);
        nextnum = fiboNums[fiboNums.length-2] + fiboNums[fiboNums.length-1]
      }
    return fiboNums.filter(element => element % 2 !== 0).reduce((a,b) => a+b);
  }
  
  console.log(sumFibs(4));