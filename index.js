i=0



var { spawn } = require("child_process")

var { log } = require("./src/console.js")



module.exports = async function newConsole(CONSOLE_ID, options={}) {

	if (CONSOLE_ID instanceof Object) options=CONSOLE_ID;


	CONSOLE_ID||="Console_"+Math.floor(Math.random()*(900-0)+0)

	var env = {
		NODE_ENV: CONSOLE_ID
	}

	if (options["aE"] == true) Object.assign(env, process.env)


	var consoli = {
		CONSOLE_ID,
		env,
		log,
		runFile: function runFile(fileName, folderPath, options={}, cID) {
	cID||=CONSOLE_ID
			
	const a = spawn('node', [fileName], {cwd:folderPath})

		a.stdout.on("data", data => {
consoli.log(data.toString())
		})
}
	}


	if (options["addenv"] instanceof Object)


	Object.assign(env, options["addenv"])



	var newConsole = i==0?"console":`console${i}`

	module.exports[newConsole] = consoli
	i++
	return consoli
}

Object.assign(module.exports, {
	
})