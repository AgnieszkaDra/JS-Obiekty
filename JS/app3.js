let result4 = document.getElementById("result4");

function Person(name, age) //nazwa funkcji na rzecz obiektu z dużej litery
{
    this.name = name; ///this. oznacza, że tworzymy zmienna na rzecz całego obiektu
    
    this.age = age;
    this.show = function()

 {
    return "Imię: " + this.name + ", wiek" + this.age + "<br>";

 }
};

 let Bartek = new Person("Bartek", 19);
 result4.innerHTML += Bartek.show();