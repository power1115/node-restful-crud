var app = require("./app");

const dotenv = require("dotenv");
dotenv.config();
var port = process.env.PORT;
// console.log(`Your port is ${process.env.PORT}`);

app.listen(port, function () {
  console.log(`Express server listening on port ${port}`);
});
