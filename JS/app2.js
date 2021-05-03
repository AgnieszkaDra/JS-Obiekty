let result3 = document.getElementById("result3");

let adam = 
{
     name: "Adam", age: 26,
     show()
        {
            return "Imię: " + this.name + ", wiek" + this.age + "<br>";
        }
};

result3.innerHTML += adam.show();  //// nie działa 
