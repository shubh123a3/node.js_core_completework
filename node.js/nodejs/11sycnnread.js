const {readFileSync,writeFileSync}= require('fs')
const first =readFileSync('./content/test2.txt','utf-8')
console.log(first)
writeFileSync('./content/result.txt',`here is your  ff file`)
{
    {flag:'a'}
}