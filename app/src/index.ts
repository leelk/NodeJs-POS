import express = require("express");
import router from "./main-dispatcher";

const app = express();
app.listen(5050, ()=>console.log("Server has been started and "));

app.use(router)




