function makeClass()
{
    class Vegetable {
        constructor(name)//constructer
        {
            this.name=name;
        }
    }
    return Vegetable

}
const Vegetable = makeClass();//acessing and accining
const carrot =new Vegetable('carrat')
console.log(carrot.name)