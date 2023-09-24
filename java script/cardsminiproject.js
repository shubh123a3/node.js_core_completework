function cc(card)
{
    count=0
    switch(card)
    {
        case 2 :
            case 3 :    

            case 4 :
                case 5 :
                    case 6 :
                        count++;
                        break
                        
            case 10:    

            case "j" :
                case "q" :
                    case "k" :
                    case "a" :
                        count--
                        break

    }
    var holdbet = "hold"
    if(count>0)
    {
        holdbet = "bet"
    }
    return count +" "+ holdbet
}
cc(2);
cc('6');
cc(10);
cc('k');
cc('a');
console.log(cc(4))

