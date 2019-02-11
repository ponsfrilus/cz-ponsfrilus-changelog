# cz-ponsfrilus-changelog

*This is a fork from [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog).*

Status:
[![npm version](https://img.shields.io/npm/v/cz-ponsfrilus-changelog.svg?style=flat-square)](https://www.npmjs.org/package/cz-ponsfrilus-changelog)
[![npm downloads](https://img.shields.io/npm/dm/cz-ponsfrilus-changelog.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cz-ponsfrilus-changelog&from=2019-01-01)
[![Build Status](https://img.shields.io/travis/commitizen/cz-ponsfrilus-changelog.svg?style=flat-square)](https://travis-ci.org/commitizen/cz-ponsfrilus-changelog)

Part of the [commitizen](https://github.com/commitizen/cz-cli) family. Prompts for [unconventional ponsfrilus's changelog](https://github.com/ponsfrilus/cz-ponsfrilus-changelog).


## Infos

* [cz-ponsfrilus-changelog](https://github.com/ponsfrilus/cz-ponsfrilus-changelog)
* [ponsfrilus-commit-types](https://github.com/ponsfrilus/ponsfrilus-commit-types)


## Installation

You will need [commitizen](https://www.npmjs.com/package/commitizen) and [cz-ponsfrilus-changelog](https://www.npmjs.com/package/cz-ponsfrilus-changelog), which will install [ponsfrilus-commit-types](https://www.npmjs.com/package/ponsfrilus-commit-types) as a dependency:  
```
commitizen
cz-ponsfrilus-changelog
└── ponsfrilus-commit-types
```

Run the following command to install them:  
`npm i -g commitizen cz-ponsfrilus-changelog`

Then, if you want to set the "ponsfrilus-commit-types" as default, you will have to create the [.czrc](https://github.com/commitizen/cz-cli#conventional-commit-messages-as-a-global-utility) file:
```
$ cat ~/.czrc
{ "path": "cz-ponsfrilus-changelog" }
``` 

You can run the following command to create it:  
`echo '{ "path": "cz-ponsfrilus-changelog" }' > ~/.czrc`


## ToDo

* Travis
* Changelog
  * https://github.com/conventional-changelog/conventional-changelog
* Better semantic-release / standard-version
  * https://github.com/conventional-changelog/standard-version
  * https://github.com/semantic-release/semantic-release