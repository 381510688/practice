window.addEventListener("error", function(e){
    var stackInfo = e.error.stack,
        messageJson = {
            message: e.error.message,
            stack: (stackInfo ? stackInfo : ""),
            date: new Date().toTimeString()
        };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:8899/log', true);
    xhr.setRequestHeader("Content-Type","application/json");
    console.log(JSON.stringify(messageJson));
    xhr.send(JSON.stringify(messageJson));
});