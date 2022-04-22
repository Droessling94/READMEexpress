const inquirer = require('inquirer');
const fs = require('fs');

function askQuestions() {

  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: 'title',
        message: 'What is the name of your application?'
      },
      {
        type: "input",
        name: 'description',
        message: 'Please provide a brief summary of your application.'
      },
      {
        type: "input",
        name: 'installInfo',
        message: 'please provide any installation instructions or requirements.'
      },
      {
        type: "input",
        name: 'usageInfo',
        message: 'Please provide any information on the usage of the application.'
      },
      {
        type: "input",
        name: 'contributionGuidelines',
        message: 'Please provide any guidelines on contribution to the application.'
      },
      {
        type: "input",
        name: 'testInfo',
        message: 'Please provide any instructions on testing.'
      },
      {
        type: "list",
        name: 'license',
        message: 'Please provide any instructions on testing.',
        choices: ['Apache license 2.0', 'GNU General Public License v3.0',
          'MIT', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license',
          'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0',
          'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',
          'Mozilla Public License 2.0', 'The Unlicense',]
      },
      {
        type: "input",
        name: 'gitHubUserName',
        message: 'Please provide your gitHub username.'
      },
      {
        type: "input",
        name: 'email',
        message: 'Please provide your email.'
      },
    ])

    .then((answers) => {
      let title = answers.title
      let description = answers.description;
      let installInfo = answers.installInfo;
      let usageInfo = answers.usageInfo;
      let contributionGuidelines = answers.contributionGuidelines;
      let testInfo = answers.testInfo;
      let license = answers.license;
      let gitHubUserName = answers.gitHubUserName;
      let email = answers.email;
      let markDownFormat = `## ${title}

## Table of Contents

1.  [Documentation](#documentation)
1.  [Description](#description)
2.  [Installation](#installation)
2.  [Usage](#usage)
3.  [Contributing](#contributing)
2.  [Test](#test)
4.  [License](#license)
4.  [Contact](#contact)
    1. [GitHub](#gitHub)
    2. [Email](#email)
    



### Description

<a name="description"></a>

${description}


### Installation

<a name="installation"></a>

${installInfo}

### Usage

<a name="usage"></a>

${usageInfo}


## Contributing

<a name="contributing"></a>

${contributionGuidelines}

## License

<a name="license"></a>

${license}

## Test

<a name="test"></a>

${testInfo}

## Contact

<a name="gitHub"></a>

${gitHubUserName}

<a name="contact"></a>

${email}`;

      fs.writeFile('SAMPLEREADME.md', markDownFormat, (err) => { if (err) { console.log(err); } });
    })
    .catch((error) => {
      error ? console.log(error) : console.log('Answers Logged')
    }
    );
};


askQuestions();

