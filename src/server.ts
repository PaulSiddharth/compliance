// Import the 'express' module
import express from 'express';
import { Request, Response } from 'express';
import { checkComplianceHandler } from './controller/checkComplianceHanlder';


// Create an Express application
const app = express();

// Set the port number for the server
const port = 3000;

// health check endpoint
app.get('/health-check', (req:Request, res: Response) => {
  // Send a response to the client
  res.send('Service running...!!!').status(200);
});

app.get('/compliance', checkComplianceHandler)
// Start the server and listen on the specified port

// middleware for undandled routes
app.use((req: Request, res: Response) => {
  res.status(404).json({data:'Route not found'});
});

app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});