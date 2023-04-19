function whatIsInAName(collection, source) {
    let sourcekeys = Object.keys(source)
    return collection.filter(function(obj){
      console.log(obj)
      for(let key of sourcekeys){
        console.log(key)
        console.log(obj[key])
        console.log(source[key])
        if(!obj.hasOwnProperty(key) || obj[key] !== source[key]){
          return false
        }
      }
      return true
    })
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });