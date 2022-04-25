// Add your imports here.
import { getDataByJob, getDataByCompany } from './salaryData.js'
import salaryData from './salaryData.js'
// Replace the empty array with the appropriate imported function/value
const getAverageSalaryByJob = job => {
    const roleData = getDataByJob(job);
    const salariesOfJob = roleData.map(obj => obj.salary);
    return calculateAverage(salariesOfJob);
  }
  
  // Replace the empty array with the appropriate imported function/value
  const getAverageSalaryByCompany = comp => {
    const companyData = getDataByCompany(comp);
    const salariesAtCompany = companyData.map(obj => obj.salary);
    return calculateAverage(salariesAtCompany);
  }
  
  // Replace the empty array with the appropriate imported function/value
  const getSalaryAtCompany = (job, comp) => {
    const companyData = getDataByCompany(comp);
    const roleAtCompany = companyData.find(obj => obj.job === job);
    return roleAtCompany.salary;
  }
  
  // Replace the empty array with the appropriate imported function/value
  const getIndustryAverageSalary = () => {
    const allSalaries = salaryData.map(obj => obj.salary);
    return calculateAverage(allSalaries);
  }
  
  
  // Helper Function. Do not edit.
  // Note: This function does not need to be exported since it is only used by the functions contained within this module.
  function calculateAverage(arrayOfNumbers) {
    let total = 0;
    arrayOfNumbers.forEach(number => total += number);
    return (total / arrayOfNumbers.length).toFixed(2);
  }

  export { getAverageSalaryByJob, getAverageSalaryByCompany, getSalaryAtCompany, getIndustryAverageSalary }