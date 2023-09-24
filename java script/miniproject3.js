var contacts =

    [
    {
        "firstName":"akira",

        "lastName":"laine",
        "number":"098876543",
        "likes":["piza","colding","brownie piont"]
    },

    {
        "firstName":"shubh",

        "lastName":"shrishrimal",
        "number":"054532525576543",
        "likes":["pcatiza","dog","brownie piont"]
    },
    {
        "firstName":"meet",

        "lastName":"      ",
        "number":"0nkandlk98876543",
        "likes":["chess","colding","brownie piont"]
    },
    {
        "firstName":"akshit",

        "lastName":"laine",
        "number":"87877546",
        "likes":["icecream","colding","brownie piont"]
    },
    {
        "firstName":"jayesh",

        "lastName":"laine",
        "number":"098876543",
        "likes":["sitcoms","colding","brownie piont"]
    },
];
    

function LookUpProfile(name,prop)
{
    for(var i=0;i<contacts.length;i++)
    {
        if(contacts[i].firstName===name)
        {
            return contacts[i][prop] ||"no such property"

        }
        
             return "no such contact found "
        
    }
}
var  data =LookUpProfile("akira","lastName")

console.log(data)
