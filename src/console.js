





var { spawn } = require("child_process")

module.exports = {
	log: function log(before="",content="") {
		const a = spawn('node', ["./log.js"], {cwd:"./src", env: { CONTENT: content }})

		a.stdout.on("data", data => {
			process.stdout.write(before+data)
		})
	}
}