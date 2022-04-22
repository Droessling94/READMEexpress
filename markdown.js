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

${email}

`

module.exports = { markDownFormat };