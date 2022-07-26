var app = require("./app");
const { port } = require("./config");
// var port = process.env.PORT;
// console.log(`Your port is ${process.env.PORT}`);

app.listen(port, function () {
  console.log(`Express server listening on port ${port}`);
});
