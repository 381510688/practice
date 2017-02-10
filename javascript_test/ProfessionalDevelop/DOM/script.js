function loadScript(url){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}

function loadScriptString(code){
    var script = document.createElement("script");
    script.type = "text/javascript";
    try{
        script.appendChild(document.createTextNode(code));
    }catch (e){
        script.text = code; // 兼容IE
    }
    document.body.appendChild(script);
}

function loadStyle(url){
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.head.appendChild(link);
}

function loadStyleString(code){
    var style = document.createElement("style");
    style.type = "text/css";
    try{
        style.appendChild(document.createTextNode(code));
    }catch (e){
        style.stylesheet.cssText = code;
    }
    document.head.appendChild(style);
}