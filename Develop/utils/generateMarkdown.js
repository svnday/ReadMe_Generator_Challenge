// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(chosenLicense) {
  let licenseType = chosenLicense.license;
  let generatedLicense = ''
  if (licenseType === 'Apache 2.0') {
    generatedLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType === 'Boost') {
    generatedLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (licenseType === 'Eclipse') {
    generatedLicense = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (licenseType === 'GNU') {
    generatedLicense = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (licenseType === 'The Hippocratic License') {
    generatedLicense = '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)'
  } else if (licenseType === 'IBM') {
    generatedLicense = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else if (licenseType === 'ISC') {
    generatedLicense = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (licenseType === 'MIT') {
    generatedLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (licenseType === 'Mozilla') {
    generatedLicense = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (licenseType === 'Open Database License') {
    generatedLicense = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'
  } else if (licenseType === 'Perl') {
    generatedLicense = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
  } else {
    generatedLicense = ''
  };
  return generatedLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(chosenLicense) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(chosenLicense) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}
# Description
${data.Description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#Contributors)
* [Tests](#tests)
* [Inquiries](#inquiries)

# Installation
To install this program, please install the following dependencies and follow these instructions:
${data.installation}

# Usage
Instructions for use: ${data.usage}

# License
${renderLicenseBadge.generatedLicense}

# Contributors
${data.contributors}

# Tests
To test this program:
${data.tests}

# Inquiries
If you would like to make an inquiry or if you have questions, please contact ${data.username} via email at ${data.email}.


`;
}

module.exports = generateMarkdown;
