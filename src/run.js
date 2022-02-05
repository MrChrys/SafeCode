var fs = require("fs")

var { spawn } = require("child_process")

function RunFile(fileName, folderPath, options={}, consoli) {
		var err;
		if (!fileName)err=new Error("First argument must be the name of a file")

		if (err) throw err;

		if(!folderPath)err=new Error("You must provide the folder path")


		if (err) throw err;


		const a = spawn('node', [fileName], {cwd:folderPath})

		a.stdout.on("data", data => {
			consoli.log(data.toString())
		})
}

RunFile(process.env.fileName, process.env.folderPath, process.env.options, process.env.console)