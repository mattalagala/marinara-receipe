// hi - I am a comment 

var x = 4;

// Part 2

var two = 2;
var oneFourth = "1/4";

// 2) Write out a function definition called marinaraSauce. Be sure to be mindful of your syntax!

function marinaraSauce (cookName) {

    console.log("Hey, " + cookName + "! This is my marinara sauce receipe!");
    console.log("Heat a medium-large saucepan over medium heat.");
    console.log("Add " + two + " tspns of oil and 5 carlic cloves, cook until golden, about " + two + " minutes.");
    console.log("Add " + oneFourth + " cup water, " + two + " cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log("Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log("Stir in " + oneFourth + " cup roughly chopped fresh basil, salt and pepper as needed");

}

marinaraSauce("Adam")

//Part 1 - Writing a Receipe

//3) Inside this function, write a series of console.log(); statements that will print the following marinara sauce recipe:

//1) In your function definition, change marinaraSauce to take one parameter called cookName

//2) Use cookName to print "Hey, cookName! This is my marinara sauce recipe!" before the recipe

//3) Change your function invocation to take "Adam" as a cookName

//4) When you run your script, you should see  "Hey, Adam! This is my marinara sauce recipe!", followed by the recipe

//1) A the very top of your function definition, define a variable called two, and set it equal to the number 2

//2) Define another variable called "oneFourth", set it equal to the string "1/4"

//5) Run your script with node script.js. You should see your recipe printed to the screen!

//Part 2- Using parameters

//1) In your function definition, change marinaraSauce to take one parameter called cookName

//2) Use cookName to print "Hey, cookName! This is my marinara sauce recipe!" before the recipe

//3) Change your function invocation to take "Adam" as a cookName

//4) When you run your script, you should see  "Hey, Adam! This is my marinara sauce recipe!", followed by the recipe

//Part 3- Using variables
//1) A the very top of your function definition, define a variable called two, and set it equal to the number 2

//2) Define another variable called "oneFourth", set it equal to the string "1/4"

//3) Use string concatenation (i.e. the "+" sign) to replace any instance of 2 or 1/4 that occurs in the recipe.