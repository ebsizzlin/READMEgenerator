// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title : ${data.title}

  ## Project Description:
  ${data.desc}

`;
}

module.exports = generateMarkdown;
