import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import templateRoutes from './routes/template.routes.js';

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', templateRoutes);

mongoose.connect(process.env.MONGODBURL).then(()=>{
    console.log("mongoDb is connected")
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
