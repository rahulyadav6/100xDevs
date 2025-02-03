interface User{
    firstName: string;
    lastName: string;
    age: number
    email?:string /* optional parameter */
};

function isLegal(user: User){
    if(user.age > 18){
         return true;
    }else{
        return false;
    }
}
console.log(isLegal({
    firstName:"Rahul",
    lastName: "Yadav",
    age:22
}));
