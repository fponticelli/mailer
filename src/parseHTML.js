const fs = require('fs')
const list = require('./listImages.js')

async function writer(childHTML) {
    const leftRoot = '<html><body>'
    const rightRoot = '</body></html>'

    const html = leftRoot + childHTML + rightRoot

    finalHTML = html.replace(/" >/g, '" />')
    
    console.log('Writing:', finalHTML)
    fs.writeFileSync('./public/index.html', finalHTML)
}

function parseHTML(project) {
    list(true, project).then(html => writer(html))
}

module.exports = parseHTML