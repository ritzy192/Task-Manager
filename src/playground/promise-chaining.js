require("../db/mongoose");
const User = require("../models/user");

User.findByIdAndUpdate("624553622d32983a7071e76c", { age: 44 })
  .then(() => {
    console.log("reached");
    return User.find({ age: 44 });
  })
  .then((count) => {
    console.log("reached 2");
    console.log(count[0].age);
  })
  .catch((e) => {
    console.log("reached 3");
    console.log(e);
  });
