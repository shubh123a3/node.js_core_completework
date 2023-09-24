 var propities ={

name: "sayaji",
age : 14,
sex : 'm',
relationship : 'single',



 };
 function hasOwn()
{

}
 function chexkObject(checkProp)
 {
    if (propities.hasOwn(checkProp))
    {
        return propities[checkProp]

    }
    else{
        return "not found"
    }
    

 }
 console.log(chexkObject(''))
