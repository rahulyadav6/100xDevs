function identity<T>(arg: T){
    return arg
}

let output1 = identity<string>("mystirng");
let output2 = identity<number>(100);

console.log(output1.toUpperCase())