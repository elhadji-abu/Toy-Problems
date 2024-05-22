Salary Calculator
This is a simple JavaScript program that calculates the net salary of an employee based on their basic salary, benefits, and applicable tax, NHIF, and NSSF deductions.

Features
Calculates the gross salary by adding the basic salary and benefits.
Calculates the tax based on a progressive tax rate structure.
Calculates the NHIF deductions based on the salary range.
Calculates the NSSF deductions based on a fixed employee contribution rate.
Calculates the net salary by subtracting the tax, NHIF, and NSSF deductions from the gross salary.
Displays the detailed salary breakdown, including the gross salary, tax, NHIF deductions, NSSF deductions, and the net salary.
How to Use
Open the HTML file in your web browser.
When prompted, enter the basic salary and benefits.
The program will display the detailed salary breakdown.
Code Structure
The program consists of the following main components:

Constants:
TAX_RATES: An array of objects representing the progressive tax rates.
NHIF_RATES: An array of objects representing the NHIF deduction rates based on the salary range.
NSSF_RATE_EMPLOYEE: The NSSF contribution rate for the employee.
NSSF_RATE_EMPLOYER: The NSSF contribution rate for the employer.
Functions:
calculateTax(salary): Calculates the tax based on the progressive tax rates and the employee's salary.
calculateNHIF(salary): Calculates the NHIF deductions based on the employee's salary.
calculateNSSF(salary): Calculates the NSSF deductions based on the employee's salary.
calculateNetSalary(basicSalary, benefits): Calculates the net salary by subtracting the tax, NHIF, and NSSF deductions from the gross salary.
Example Usage:
The program prompts the user to enter the basic salary and benefits.
It then calls the calculateNetSalary() function with the provided inputs and displays the detailed salary breakdown.
Getting Started
To run the program, you'll need a web browser. You can open the HTML file directly in your browser, and the program will prompt you for input and display the salary breakdown.