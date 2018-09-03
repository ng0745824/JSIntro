//Write a program that displays your name and age.
let name = "Natalena Groom";
let age = 22;
console.log("Name: " + name);
console.log("Age: " + age);

//Write a program that displays the result of adding, subtracting, mulitplying and dividing 6 by 3.
let num1 = 6;
let num2 = 3;
let result;
result = num1 + num2;
console.log(num1 + " + " + num2 + " = " + result);
result = num1 - num2;
console.log(num1 + " - " + num2 + " = " + result);
result = num1 * num2;
console.log(num1 + " * " + num2 + " = " + result);
result = num1 / num2;
console.log(num1 + " / " + num2 + " = " + result);

/*
    Observe the following program and try to predict the values it displays.

        console.log(4 + 5);
        console.log("4 + 5");
        console.log("4" + "5");

    Check your prediction by executing it.
*/
console.log(4 + 5); //prediction: number 9
console.log("4 + 5"); //prediction: string 4 + 5
console.log("4" + "5"); //prediction: string 45

//Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
let tempInCelsius = 32;
let tempInFahrenheit = tempInCelsius * 9/5 + 32;
console.log(tempInCelsius + " degrees celsius converts to " + tempInFahrenheit + " degrees fahrenheit.");