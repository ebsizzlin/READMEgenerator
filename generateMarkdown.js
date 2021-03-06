// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title : ${data.title}

  ${data.license === "MIT" ? "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)" : data.license === "Apache" ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : data.license === "GPL" ? "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)" : "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"}

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
  ${data.license}

  ## Contributers
  ${data.name}

  ## Test
  ${data.test}
  
  ## Questions
  Any questions? Contact [${data.username}](https://github.com/${data.username}) on GitHub or email [${data.email}](mailto:${data.email})

  ## Walkthrough
  https://drive.google.com/file/d/17BNf5yC6m0vQ4rxyv64TAFIUL7N3Vkgt/view?usp=sharing

  `;
}

module.exports = generateMarkdown;
