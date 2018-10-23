const xmlParser = require('xml-js');
const fetch = require("node-fetch");

const JobService = {};

function fetchJobs() {
  return fetch('https://career.axelspringer.com/export/14/feed.xml')
    .then(response => {
      return response.text();
    })
    .then(xml => {
      let data = JSON.parse(xmlParser.xml2json(xml, {compact: true, spaces: 4}));

      let jobList = data.jobs.job;

      jobList = jobList.filter(job => {
        return job.brand._attributes.uid === '14';
      });
      return jobList;
    });
}

JobService.getJobs = () => {
  return new Promise(function (resolve, reject) {
    if (JobService.jobList) {
      resolve(JobService.jobList);
    } else {
      fetchJobs()
        .then(jobList => {
          JobService.jobList = jobList;
          resolve(JobService.jobList);
        })
    }
  });
};

JobService.getJobById = (jobId) => {
  return new Promise(function (resolve, reject) {
    JobService.getJobs()
      .then(jobList => {
        let jobById = jobList.filter(job => {
          return job._attributes.jobId === jobId;
        })[0];

        resolve(jobById);
      })
  })
};

JobService.getAllPositions = () => {
  return new Promise(function (resolve, reject) {
    JobService.getJobs()
      .then(jobList => {
        let positions = jobList.map(job => {
          return job.title._cdata;
        }).join(', ');

        resolve(positions);
      })
  })

};

exports.JobService = JobService;
