const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("<h1>Welcome to the API</h1>");
});

app.listen(5555, () => {
  console.log(`Server is running on port 5555`);
});