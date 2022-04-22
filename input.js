const inquirer = require('inquirer');


function askQuestions (){
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
        //  Use user feedback for...whatever!!
        console.log(answers);
    })
    .catch((error) => {
        err ? console.log(err) : console.log('Answers Logged')
    }
    );
};

module.exports = { askQuestions };
