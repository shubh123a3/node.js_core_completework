function multiplu (arr)
{
  var  product =1
  for(var i=0;i<arr.lenghth ;i++)
  {
    for( var j=0;j<arr[i].lenghth;j++)
    {
        product *=arr[i][j]
    }
  }
  return product
  

}
var product = multiplu([[1,2],[3,4],[5,6]]);
console.log(product);