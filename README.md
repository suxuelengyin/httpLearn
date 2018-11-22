# httpLearn
ajax请求练习
***
ajaxServer是get，post请求接口文件，api中的每一个属性都是一个接口，可以自由增加接口。  
请求发送的数据都存放在了req.body里面  
***
staticServer是静态文件请求，可以不用管  
***
public是html文件，里面可以发起请求，目前写了三个例子，$.get $.Ajax fetch()  
***
src下的server用于扩展ajax请求api，需返回要发送的数据！！
*注意：public下的html文件，请求js，css等文件时，直接写相对目录，如，请求src下的index.js可以写成：src/index.js*