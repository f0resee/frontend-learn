var x = 16
var y = "Volvo"
var car = {
    name: "Fiat",
    model: 500,
    color: "white",
    fullName: function(){
        return this.name + " " + this.model
    }
}
console.log(x+y)
console.log(typeof x)
console.log(car)
console.log(car.color)
console.log(car.fullName())