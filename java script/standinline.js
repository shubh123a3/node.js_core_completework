function nexInLine(arr,item)
{
    arr.push(item)
    return arr.shift();
    
}
var setArray = [1,2,3,4,5]
console.log("before"+ JSON.stringify(setArray));
console.log(nexInLine(setArray,6));
console.log("after"+ JSON.stringify(setArray));

