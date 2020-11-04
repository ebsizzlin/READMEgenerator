// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title : ${data.title}

  ## Project Description:
  ${data.desc}

  ## Table of Contents

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributers
  ${data.contributers}

  ## Test
  ${data.test}

  ## Questions
  Any questions? Find ${data.username} on GitHub or email ${data.email}!

  ## License
  MIT License
`;
}

module.exports = generateMarkdown;
