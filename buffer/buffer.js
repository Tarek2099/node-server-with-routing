const bufferData = Buffer.from('content/content.txt', 'utf-8');
console.log(bufferData.toString());
console.log(bufferData.length);
const base64 = bufferData.toString('base64')
console.log(base64);

// Decoding the base64 string backg to original content
const decodedData = Buffer.from(base64, 'base64');
const originalData = decodedData.toString('utf-8');
console.log(decodedData);
console.log(originalData);

