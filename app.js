const express=require("express");
const app=express();
app.use(express.json())
const connectdb=require('./config/db');
const auth=require('./routes/authRoute');
connectdb();

const regiserRoute=require('./routes/registerRoute');
app.use('/test',regiserRoute);
app.use('/test',auth);

const port=8000;
app.listen(port,()=>console.log(`server is run in ${port}`));