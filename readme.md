# Safe Code

a module made to protect your
enviroments variables from malicious codes ( and can also be uses for multiple processes )

### Installation
`npm i safe-code`
or
`yarn add safe-code`

## Usage
```js
//.env — TOKEN=my precious token

var sc = require("safe-code")
//loads the module

sc() // create a new Console

//new sc.console.runFile("fileName", "folderPath", options, consoleID)

new sc.console.runFile("./malicious.js", "./codes")
// Expected result: undefined

//if you want to let the env to continue in code use
sc({ aE: true })
//instead of
sc()
```

#### With aE(Actual Enviroments) option enabled
```js
//.env — TOKEN=my precious token

var sc = require("safe-code")

sc({ aE: true })

new sc.console.runFile("./malicious.js", "./codes")
// expected output: my precious token
```