import fs from 'fs';

// Read files and encode
fs.readFile('content/content.txt', (err, data) => {
    if (err) throw err;


    // Encode and create new file
    const encodedData = data.toString('base64');
    fs.writeFile('content/encoded_content.txt', encodedData, (err) => {
        if (err) throw err;
    })
})