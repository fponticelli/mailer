const fs = require('fs')
const list = require('./listImages.js')
const parser = require('node-html-parser')

async function writer(childHTML) {
    const leftRoot = '<html><body>'
    const rightRoot = '</body></html>'

    const html = leftRoot + childHTML + rightRoot

    finalHTML = html.replace(/" >/g, '" />')
    
    console.log('Writing:', finalHTML)
    fs.writeFileSync('./public/index.html', finalHTML)
}

list(true).then(html => writer(html))