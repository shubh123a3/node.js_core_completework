function switchStatment(num)
{
    var answer =""
    switch(num)
    {
        case 1 : 
        answer = 'alpha'
        break
        case 2 : 
        answer = 'beta'
        break
        case 3 : 
        answer = 'gama'
        break
        case 4 : 
        answer = 'varma'
        break
        case 5 : 
        answer = 'marna'
        break
        default : 
        answer= 'stuff'
        }
    return answer
}
console.log(switchStatment(4))