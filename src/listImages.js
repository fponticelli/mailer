const fs = require('node:fs')

async function list(stringify, project) {
    
    const directory = project
    
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