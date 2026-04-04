function showVariables(){

    var city = "Attock";

    let age = 22;

    const country = "Pakistan";

    document.getElementById("output").textContent =
    "CityName: " + city + " | Age: " + age + " | Country: " + country;
}

function sayHello(){

    let message = "Hello Students! Welcome to JavaScript.";
    document.getElementById("output").textContent = message;
}


function showName(){

    let name = document.getElementById("username").value;

    if(name === ""){
        document.getElementById("output").textContent = "Please enter your name!";
    }
    else{
        document.getElementById("output").textContent = "Hello " + name;
    }

}

