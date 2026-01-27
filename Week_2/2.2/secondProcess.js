function callbackFn(result){
    result.json().then((jsonBody)=>{
        console.log(jsonBody);
    })
}
var sendObj = {
    method: "GET"
};

fetch("http://localhost:3000/handlesum?counter=10",sendObj).then(callbackFn)