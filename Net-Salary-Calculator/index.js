// Constants for tax rates, NHIF rates, and NSSF rates
const TAX_RATES = [
    { min: 0, max: 24000, rate: 0.1 },
    { min: 24001, max: 32333, rate: 0.25 },
    { min: 32334, max: 40333, rate: 0.3 },
    { min: 40334, max: Infinity, rate: 0.35 }
  ];
  
  const NHIF_RATES = [
    { min: 0, max: 5999, rate: 150 },
    { min: 6000, max: 7999, rate: 300 },
    // ... rest of the NHIF rates
    { min: 500000, max: Infinity, rate: 3800 }
  ];
  
  const NSSF_RATE_EMPLOYEE = 0.06;
  const NSSF_RATE_EMPLOYER = 0.06;
  
  // Function to calculate tax based on salary
  function calculateTax(salary) {
    let tax = 0;
    for (const rate of TAX_RATES) {
      if (salary > rate.min) {
        const taxableAmount = Math.min(salary, rate.max) - rate.min;
        tax += taxableAmount * rate.rate;
      }
    }
    return tax;
  }
  
  // Function to calculate NHIF deductions based on salary
  function calculateNHIF(salary) {
    for (const rate of NHIF_RATES) {
      if (salary >= rate.min && salary <= rate.max) {
        return rate.rate;
      }
    }
    return 0;
  }
  
  // Function to calculate NSSF deductions based on salary
  function calculateNSSF(salary) {
    return salary * NSSF_RATE_EMPLOYEE;
  }
  
  // Function to calculate net salary
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const tax = calculateTax(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(basicSalary);
    const netSalary = grossSalary - tax - nhif - nssf;
    return {
      grossSalary,
      tax,
      nhif,
      nssf,
      netSalary
    };
  }
  
  // Example usage:
  const basicSalary = parseFloat(prompt("Enter basic salary: "));
  const benefits = parseFloat(prompt("Enter benefits: "));
  
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("Payee (Tax):", salaryDetails.tax);
  console.log("NHIF Deductions:", salaryDetails.nhif);
  console.log("NSSF Deductions:", salaryDetails.nssf);
  console.log("Net Salary:", salaryDetails.netSalary);