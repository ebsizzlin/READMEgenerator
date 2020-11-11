// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title : ${data.title}

  ${data.license === "MIT License" ? "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)" : data.license === "Apache License" ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : data.license === "GPL License" ? "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)" : "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"}

  ## Project Description:
  ${data.description}

  ## Technology Used:
  ${data.tech}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributers](#contributers)
  * [Tests](#test)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## License
  ${data.license === "MIT License" ? "This application uses The MIT License" : data.license === "Apache License" ? "This application uses The Apache License" : data.license === "GPL License" ? "This application uses The GPL License" : "This application is unlicensed"}

  ## Contributers
  ${data.name}

  ## Test
  ${data.test}
  
  ## Questions
  Any questions? Contact [${data.username}]{https://github.com/${data.username}/) on GitHub or email [${data.email}](mailto:${data.email})

  `;
}

module.exports = generateMarkdown;
