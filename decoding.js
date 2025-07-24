import fs from 'fs';

// Read files and decode
fs.readFile('content/encoded_content.txt', (err, data) => {
    if (err) throw err;

    // Decode and create new file
    const decodedData = Buffer.from(data.toString(), 'base64');
    const originalData = decodedData.toString('utf-8');
    console.log(originalData);
    fs.writeFile('content/decoded_content.txt', originalData, (err) => {
        if (err) throw err;

    })
})