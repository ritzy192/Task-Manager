require("../db/mongoose");
const User = require("../models/user");

const updateAgeThenCount = async (id,age)=>{
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age });
  const details = {
    user,count
  }
  return details
}

updateAgeThenCount('624553622d32983a7071e76c',44).then((details) => {
    console.log(details)
  }).catch((e) => {
    console.log(e);
  });

// User.findByIdAndUpdate("624553622d32983a7071e76c", { age: 44 })
//   .then(() => {
//     console.log("reached");
//     return User.find({ age: 44 });
//   })
//   .then((count) => {
//     console.log("reached 2");
//     console.log(count[0].age);
//   })
//   .catch((e) => {
//     console.log("reached 3");
//     console.log(e);
//   });
