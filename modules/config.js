global.prefa = ['','!','.',',','🐤','🗿']
global.falown = "NOT ACCES‼️"
global.falmurbug = "NOT ACCES‼️"
global.inputnum = "*Syntax Error!*\n\n"
global.falgrup = "ACCES NOT ACCEPTED‼️"
global.imagemenu = ["https://files.catbox.moe/fymz5j.jpeg", "https://files.catbox.moe/23r2wq.jpeg", "https://files.catbox.moe/7m1rdq.jpeg"];

global.owner = [
  "628565394116", //should start with country code
  "628565394116"  //second number if available
]


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})