import http from 'http';

// Create an Http Server
const server = http.createServer((req, res) => {
    const { url } = req;

    // Set the response HTTP header
    res.writeHead(
        200,
        { 'Content-Type': 'text/plain' }
    )

    // Set the route logic
    if (url === '/') {
        res.end('Welcome to the Home Page!');
    } else if (url === '/about') {
        res.end('Welcome to the About Page!');
    } else if (url === '/blogs') {
        res.end('Welcome to the Blogs Page!');
    } else if (url.startsWith('/blogs/')) {
        const blogId = url.split('/')[2];
        res.end(`blogId: ${blogId}`);
    } else {
        res.end('404 Not Found');
    }
})

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})