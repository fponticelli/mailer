const { exec } = require("child_process")

async function parseMJML(name) {
    const command = `mjml template/${name}.mjml -o build/${name}.html`
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`Finished parsing MJML's src attributes`);
    });
}

module.exports = parseMJML