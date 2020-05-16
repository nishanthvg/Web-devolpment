// This js is used to send html files to the website from the server created
const express = require("express")
const app = express();
app.use(express.static(__dirname + "/public"))
app.listen(3009);