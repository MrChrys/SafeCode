

require("dotenv").config()

console.log(`[Do process.env in a folder has the variable "TOKEN" we want?]\n[${process.env.TOKEN=="We want this"?"yes":"no"}]`)