var request= new XMLHttpRequest();

request.open('GET','http://api.countrylayer.com/v2/currency/INR?access_key=38bc45981e524b10653ac2c89839a8c1')

request.send();

request.onload=function(){
var data=JSON.parse(this.response);
for(i=0;i<data.length;i++){
    console.log(data[i]);
}
}