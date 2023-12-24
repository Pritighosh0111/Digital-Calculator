let flag=0;
function changeme(x){
    if(flag===0)
    document.getElementById("screen").innerHTML+=x;
    else
    document.getElementById("screen").innerHTML=x;
    flag=0
}
function clearit(){
    document.getElementById("screen").innerHTML="";
}
function result(){
    try{
    document.getElementById("screen").innerHTML=eval(document.getElementById("screen").innerHTML);
    }
    catch(err){
        document.getElementById("screen").innerHTML="Expression Error" 
        flag=1;
    }
}
function addsub(){
    result();
    document.getElementById("screen").innerHTML=
    -1* parseInt(document.getElementById("screen").innerHTML)
}