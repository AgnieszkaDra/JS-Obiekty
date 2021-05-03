//2 /// gdy chcemy utworzyć wiele obiektów w JS
let result2 = document.getElementById("result2");
function Person(name, age) //nazwa funkcji na rzecz obiektu z dużej litery
{
    this.name = name; ///this. oznacza, że tworzymy zmienna na rzecz całego obiektu
    
    this.age = age;
//     this.show = function()
//  {
//      return "Imię: " + this.name + ", wiek" + this.age + "<br>";
//  }
}

let Bartek = new Person("Bartek", 19); // utworzenie nowego obiektu na bazie funkcji Person


 result2.innerHTML += Bartek.name + '<br>';

let Ola = new Person("Ola", 22);
result2.innerHTML += Ola.name + '<br>';




//funkcje na rzecz obiektu nazywamy metodami