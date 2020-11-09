// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title : ${data.title}

  ## Project Description:
  ${data.desc}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributers](#contributers)
  * [Test](#test)
  * [License](#license)
  * [Repository] (#repository)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributers
  ${data.contributers}

  ## Test
  ${data.test}
  
  ## License
  MIT License
  
  ## Repository
  * [Project Repo](${data.repo})
  
  ## Questions
  Any questions? Find ${data.username} on GitHub or email ${data.email}!

  `;
}

module.exports = generateMarkdown;
