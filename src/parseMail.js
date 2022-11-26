const fs = require('fs')
const list = require('./listImages.js')

async function readAndReplace(array) {

    const [list, name] = array

    let mjml = fs.readFileSync(`./template/${name}.mjml`, 'utf-8')
    for (let i = 0; i < list.length; i++) {
        const search = `./img/${list[i]}`
        const replacer = new RegExp(search, 'g')

        console.log(list[i], replacer, `http://localhost:3001/images/${name}/${list[i]}`)
        mjml = mjml.replace(replacer, `http://localhost:3001/images/${name}/${list[i]}`)
    }
    fs.writeFileSync(`./template/${name}.mjml`, mjml)
}

list(false).then(array => readAndReplace(array))