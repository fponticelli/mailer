const fs = require('node:fs')
const { prompt } = require('enquirer')

async function list(stringify) {
    const {directory} = await prompt([
        {
            type: 'input',
            name: 'directory',
            message: 'What email are we preparing to serve?'
        }
    ])
    
    const upperHalf = '<div>'
    const lowerHalf = '</div>'
    
    const imgFolder = `./public/images/${directory}`
    const strings = fs.readdirSync(imgFolder)

    if (!stringify) {
        return [strings, directory]
    }

    let imgString = ''
    for (let i = 0; i < strings.length; i++) {
        imgString += `<img src="./images/${directory}/${strings[i]}" max-width="100%" />`
    }

    html = upperHalf + imgString + lowerHalf

    return html
}

module.exports = list