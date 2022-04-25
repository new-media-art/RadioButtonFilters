const salaryData = [
    { job: 'CTO', comp: 'Big Data Inc.', salary: 320000},
    { job: 'Technical Lead', comp: 'Big Data Inc.', salary: 230000},
    { job: 'Software Engineer II', comp: 'Big Data Inc.', salary: 180000},
    { job: 'Software Engineer I', comp: 'Big Data Inc.', salary: 140000},
    { job: 'CTO', comp: 'SuperData Inc.', salary: 215000},
    { job: 'Technical Lead', comp: 'SuperData Inc.', salary: 165000},
    { job: 'Software Engineer II', comp: 'SuperData Inc.', salary: 140000},
    { job: 'Software Engineer I', comp: 'SuperData Inc.', salary: 115000},
    { job: 'CTO', comp: 'Small Data Inc.', salary: 175000},
    { job: 'Technical Lead', comp: 'Small Data Inc.', salary: 135000},
    { job: 'Software Engineer II', comp: 'Small Data Inc.', salary: 115000},
    { job: 'Software Engineer I', comp: 'Small Data Inc.', salary: 95000},
  ];
  
  const getJobs = () => {
    return ['CTO', 'Technical Lead', 'Software Engineer II', 'Software Engineer I'];
  }
  
  const getCompanies = () => {
    return ['Big Data Inc.', 'SuperData Inc.', 'Small Data Inc.'];
  }
  
  const getDataByJob = job => {
    return salaryData.filter(obj => obj.job === job);
  }
  
  const getDataByCompany = comp => {
    return salaryData.filter(obj => obj.comp === comp);
  }
  
export {  getJobs, getCompanies, getDataByJob, getDataByCompany };
export default salaryData;