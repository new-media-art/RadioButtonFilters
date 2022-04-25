// NEXT Add your import statements here.
import { getAverageSalaryByJob, getAverageSalaryByCompany, getSalaryAtCompany, getIndustryAverageSalary } from './modules/workAroundModule.js'
import { getJobs, getCompanies } from './modules/salaryData.js'
import salaryData from './modules/salaryData.js'

// NEXT Get the companies and roles using the salaryData module.
const companies = getCompanies();
const roles = getJobs();

// Create input buttons for every comp and job represented in the data.
renderInputButtons(companies, 'comp');
renderInputButtons(roles, 'job');

// This function will create a new <section> with radio
// inputs based on the data provided in the labels array.
function renderInputButtons(labels, groupName) {
  const container = document.createElement('section');
  container.setAttribute('id', `${groupName}Inputs`);

  let header = document.createElement('h3');
  header.innerText = `Select a ${groupName}`;
  container.appendChild(header);

  labels.forEach(label => { // For each label...
    // Create the radio input element.
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'option');

    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'radio');
    inputElement.setAttribute('name', groupName);
    inputElement.setAttribute('value', label);
    divElement.appendChild(inputElement);

    // Create a label for that radio input element.
    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);

    // Update the results when the input is selected.
    inputElement.addEventListener('click', updateResults);

    container.appendChild(divElement);
  });

  document.querySelector('main').prepend(container);
}

function updateResults(){
  // Get the current selected comp and job from the radio button inputs.
  const comp = document.querySelector("input[name='comp']:checked").value;
  const job = document.querySelector("input[name='job']:checked").value;
  

  // If either the comp or job is unselected, return.
  if (!comp || !job) { return; }

  // NEXT Use the workAroundModule functions to calculate the needed data.
  const averageSalaryByJob = getAverageSalaryByJob(job);
  const averageSalaryByCompany = getAverageSalaryByCompany(comp);
  const salary = getSalaryAtCompany(job, comp);
  const industryAverageSalary = getIndustryAverageSalary();

  

  // Render them to the screen.
  document.getElementById('salarySelected').innerText = `The salary for ${job}s at ${comp} is \$${salary}`;
  document.getElementById('salaryAverageByJob').innerText = `The industry average salary for ${job} positions is \$${averageSalaryByJob}`;
  document.getElementById('salaryAverageByCompany').innerText = `The average salary at ${comp} is \$${averageSalaryByCompany}`;
  document.getElementById('salaryAverageIndustry').innerText = `The average salary in the Tech industry is \$${industryAverageSalary}`;
}



