// const jwt = require("jsonwebtoken");
// const secret = "supersecret";

// let ans = jwt.sign({
//   username: "rahulyadav@gmail.com",
//   password: "rahul@123"
// }, secret);

// console.log(ans);

// jwt.verify(ans, secret, (err,originalString)=>{
//   console.log("After veriifing");
//   console.log(originalString);
// });

const array = [
    {
      name: "Rahul",
      age: 21,
    },
    {
      name: "Kaushal",
      age: 26,
    },
  ];
  
  let newArray = array.map((arr) => {
    return{
      name: arr.name,
      age: arr.age,
      isAllowed: arr.age > 25
    }
  });
  console.log(newArray);
  