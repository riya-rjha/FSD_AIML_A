const fs = require('fs/promises');

async function myReadFile() {
    try {
        const res = await fs.readFile('../backend/dummy.text', 'utf8');
        res.then(data => {
            console.log(data);
        }).catch(error => {
            console.error('Error reading file:', error);
        });
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

myReadFile();