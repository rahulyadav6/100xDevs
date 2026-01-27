function myOwnSetTimeout(callback, duration){
    setTimeout(callback, duration);
}

function promisifiedmyOwnSetTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve(),duration);
    })
    return p;
}