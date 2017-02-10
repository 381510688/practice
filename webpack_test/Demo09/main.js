/**
 * Created by ligang on 16/9/18.
 */
document.write("<h1>Hello World</h1>");

// __DEV__通过webpack启动时配置
/*
 # Linux & Mac
 $ env DEBUG=true webpack-dev-server

 # Windows
 $ set DEBUG=true
 $ webpack-dev-server
 */
if(__DEV__){
    document.write(new Date());
}