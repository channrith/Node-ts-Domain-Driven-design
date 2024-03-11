import express from 'express';
import { createUser } from './presentation/controller/UserController';

const app = express();
const port = 3000;

app.use(express.json());

// Define routes
app.post('/users', createUser);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
