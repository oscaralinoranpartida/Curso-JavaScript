var array1 = [23, 65, 98, 5, 13]
var array2 = ["naomi", "quincy", "camperbot"]
var array3 = [1, 1, 2, 5, 2]

Array.prototype.myMap = function(callback){
var newArray = [];
// Add your code below this line
for(let i = 0; i < this.length ; i++ ){
// callback(this[i], i)
newArray.push(callback(this[i], i, this));
}
// Add your code above this line
return newArray;
};

var new_s = array1.myMap(function(item){
return item * 2;
});

var new_s2 = array2.myMap(function(item){
return item.toUpperCase();
});
var new_s3 = array3.myMap(function(itens, index, array){
return array[index + 1] || array[0];
});