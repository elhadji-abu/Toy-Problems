#Speed Demerit Points Calculator
This is a simple program that calculates the demerit points a driver receives based on their vehicle's speed. It was created as a learning exercise for beginners in JavaScript.

##How it Works
The program prompts the user to enter the speed of their car in kilometers per hour (km/h).
It then calculates the demerit points based on the following rules:
If the speed is less than or equal to the speed limit of 70 km/h, the program prints "Ok".
If the speed is more than 70 km/h, the program calculates the demerit points by subtracting 70 from the speed, dividing the result by 5, and rounding down to the nearest integer.
If the driver has more than 12 demerit points, the program prints "License suspended".
The program then displays the calculated demerit points (if any) to the user.
##Usage
Open the HTML file in a web browser.
When prompted, enter the speed of your car in kilometers per hour (km/h).
The program will display the calculated demerit points (if any) and whether your license has been suspended.
Code Explanation
The program consists of two main functions:

calculateDemeritPoints(speed): This function takes the speed of the car as an argument and calculates the demerit points based on the rules mentioned earlier.
main(): This function prompts the user for the speed, calls the calculateDemeritPoints() function, and then displays the results.
The program uses the following JavaScript concepts:

Functions
Conditional statements (if-else)
Math operations (-, /, Math.floor())
User input (prompt())
Console output (console.log())
Getting Started
To run the program, you'll need a web browser. You can open the HTML file directly in your browser, and the program will prompt you for input and display the results.