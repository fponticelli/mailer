let dir = __dirname

dir = dir.split('\\')
newDir = ''

for (const index in dir) {
    if (index !== 7) {
        newDir += `${dir[index]}/`
    } else if (dir[index] === 'OneDrive - Valtech') {
        newDir += 'OneDrive\ -\ Valtech/'
    } else {
        newDir += `${dir[index]}`
    }
}

newDir = newDir.replace('/src/', '/')

module.exports = newDir