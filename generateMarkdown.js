// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title : ${data.title}

  ## Project Description:
  ${data.description}
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
  ${data.liscence}

  ## Contributers
  ${data.name}

  ## Test
  ${data.test}
  
  ## Questions
  Any questions? Find ${data.username} on GitHub or email ${data.email}!

  `;
}

module.exports = generateMarkdown;
