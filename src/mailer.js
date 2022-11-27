const { prompt } = require('enquirer')
const parseHTML = require('./parseHTML.js')
const parseMail = require('./parseMail.js')
const parseMJML = require('./parseMJML.js')
const mailHTML = require('./mailHTML.js')
const serveStatic = require('./serveStatic.js')

async function getInput() {
    const {project, destinations} = await prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'destinations',
            message: 'What are the destination email addresses?'
        }
    ])

    return {project, destinations}
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

async function main() {
    const {project, destinations} = await getInput()

    parseHTML(project)
    parseMail(project)
    parseMJML(project)
    delay(1000).then(() => mailHTML(project, destinations))
    serveStatic()
}

main()