const express = require("express");
const app = express();
const path = require("path")
const PORT =  9000;

app.use(express.static(path.join(__dirname ,"app","build")));

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
});