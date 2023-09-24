var collection  ={
    "2584": {
        "album": "slippery when wet",
        "artist": "bon jovi",
        "tracks":[
            "let it rock",
            "you givee love"
        ]


    },
    "2784": {
        "album": "1999",
        "artist": "prince",
        "tracks":[
            "1999",
            "littile red colvet"
        ]


    },
    "1245": {
        "artist": "robert",
        "tracks":[ ]
    },
    "10245": {
            "artist": "robert",
            



    },
}; 
// tp make a copy of string

var collectionCopy =JSON.parse(JSON.stringify(collection))
//only changes the code of beloow line
function updateRecords(id,prop,value)
{
    if(value==="")
    {
        delete collection([id][prop])

    }
    else if(prop==="tracks")
    {
      collection[id][prop]=collection[id][prop]||[];
      collection[id][prop].push(value)
    }
    else{
        collection[id][prop]=value;
    }
    return collection;

    }
    //after value
    console.log(updateRecords(2784,"tracks","test"))
    console.log(updateRecords(1245,"artist","kanye"))

