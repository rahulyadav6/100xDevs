let currentClock;
function serchBackend(){
    console.log("Request sent to backend");
}

function debouncedSearchBackend(){
    clearTimeout(currentClock);
    currentClock = setTimeout(() => {
        serchBackend
    }, 30);
}
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();