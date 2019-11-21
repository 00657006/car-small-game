var position=0;
var L;
var C;
var M;
var Interval;
var inter;
var score=0;
var images;
var NN;
var CCC=1;
function start()
{
    b1=document.getElementById("summit");
    b1.addEventListener("click", into, false);
}
function into()
{  
    NN=document.getElementById("NN").value;
    console.log(NN);
    var location=document.getElementById("location").value;
    L=location;
    var car=document.getElementById("car").value;
    C=car;
    var bgm=document.getElementById("bgm").value;
    M=bgm;
    var d1=document.getElementById("d1");
    d1.innerHTML="載入中... 即將開始";
    var d2=document.getElementById("d2");
    d2.style.display="none";
    d2.removeAttribute("class");
    var BB=document.getElementById("body");
    BB.removeAttribute("class");
    var tmp=document.createElement("img");
    tmp.setAttribute("src", "tmp.jpg");
    tmp.setAttribute("style", "width:1527px;height:740px;")
    BB.appendChild(tmp);
    setTimeout(function ()
    {
        d1.innerHTML="遊戲開始!!";
        setTimeout(function(){d1.innerHTML="";d1.removeAttribute("class");}, 800)
        BB.removeChild(tmp);
        var Car=document.createElement("img");
        Car.setAttribute("src", car+".png");
        Car.setAttribute("id", car);
        BB.appendChild(Car);    
        Car.setAttribute("class", "original");
        var video=document.getElementById(location);
        video.addEventListener("ended", stop, false);
        video.style.display=null;
        video.play();
        document.getElementById("hr1").style.display=null;
        document.getElementById("hr2").style.display=null;
        document.getElementById("hr3").style.display=null;
        document.getElementById("hr4").style.display=null;
        document.getElementById(bgm).play();
        play(location);
    }, 2000);
}
function play(location)
{
    if(location=="l1")
    {
        setTimeout(Interval=setInterval(method, 3000), 3000);
        setTimeout(inter=setInterval(barrier, 5000), 5000);
    }
    else if(location=="l2")
    {
        setTimeout(Interval=setInterval(method, 3000), 3000);
        setTimeout(inter=setInterval(barrier, 5000), 5000);
    }
    else{
        setTimeout(Interval=setInterval(method, 3000), 3000);
        setTimeout(inter=setInterval(barrier, 5000), 5000);
    }
}
function method()
{
    var d1=document.getElementById("d1");
    var BB=document.getElementById("body");
    var dir=Math.floor(Math.random()*4);
    if(dir!=0)
    {
        var mm=document.createElement("img");    
        mm.setAttribute("src", "mm1.png");
        mm.setAttribute("class", "start"+dir);
        BB.appendChild(mm);
        setTimeout(function(){BB.removeChild(mm);}, 3000);
        setTimeout(function(){
        var name=document.getElementById(C).className;
        if(name=="original" && dir==1)
        { 
            d1.innerHTML="獲得金幣+20!!";
            d1.setAttribute("class", "Title")
            setTimeout(function(){d1.innerHTML="";d1.removeAttribute("class");}, 800);
            score+=20;
        }  
        else if(name=="l1" && dir==2) 
        { 
            d1.innerHTML="獲得金幣+20!!";
            d1.setAttribute("class", "Title")
            setTimeout(function(){d1.innerHTML="";d1.removeAttribute("class");}, 800);
            score+=20;
        }  
        else if(name=="r1" && dir==3) 
        { 
            d1.innerHTML="獲得金幣+20!!";
            d1.setAttribute("class", "Title")
            setTimeout(function(){d1.innerHTML="";d1.removeAttribute("class");}, 800);
            score+=20;
        }  
        else
        {
            d1.innerHTML="可惜了~~~!!";
            d1.setAttribute("class", "Title")
            setTimeout(function(){d1.innerHTML="";d1.removeAttribute("class");}, 800);
        }
        }, 3000);
    }
}
function barrier()
{
    var BB=document.getElementById("body");
    var dir=Math.floor(Math.random()*5);
    var ss=Math.floor(Math.random()*3)+1;
    if(dir!=0)
    {
        var bb=document.createElement("img");    
        bb.setAttribute("src", "barrier"+dir+".png");
        bb.setAttribute("class", "start"+ss);
        BB.appendChild(bb);
        setTimeout(function(){BB.removeChild(bb);}, 3000);
        setTimeout(function(){
        var name=document.getElementById(C).className;
        if((name=="original" && ss==1) || (name=="l1" && ss==2)||(name=="r1" && ss==3)) 
        {
            document.getElementById("lo").play();
            d1.innerHTML="挑戰失敗!!";
            d1.setAttribute("class", "Title")
            setTimeout(function(){d1.innerHTML="";d1.removeAttribute("class");}, 800);
            var BB=document.getElementById("body");
            var lose=document.getElementById(C+"lose");
            clearInterval(Interval);
            clearInterval(inter);
            document.getElementById(M).pause();
            BB.removeChild(document.getElementById(C));
            lose.style.display=null;
            lose.play();
            document.getElementById("hr1").style.display="none";
            document.getElementById("hr2").style.display="none";
            document.getElementById("hr3").style.display="none";
            document.getElementById("hr4").style.display="none";
            document.getElementById(L).pause();
            lose.addEventListener("ended", result2, false);
        } 
        }, 3000);
    }
}
function result2()
{
    var BB=document.getElementById("body");
    var lose=document.getElementById(C+"lose");
    lose.style.display="none";
    var loca=document.getElementById(L);
    loca.style.display="none";
    BB.setAttribute("class", "result");
    images=document.createElement("img");
    images.setAttribute("src", "images.jpg");
    BB.appendChild(images);
    images.setAttribute("class", "count");
    var result=document.getElementById("result");
    result.innerHTML="<h2>遊戲結果!!</h2>";  
    var now=document.getElementById("now");
    now.innerHTML="<h2>本局所得金幣:"+score+"個</h2>";  
    var keys = [];
    var U=0;
    var max=0; 
    var len = localStorage.length;
    for(var i=0;i< len;i++)
        keys[i] = localStorage.key(i);
    keys.sort();
    for(i=0;i<localStorage.length;i++)
    {
        if(keys[i]=="until"+NN)
        {
            U=localStorage.getItem(keys[i]);
        }
        else if(keys[i].startsWith("until"))
        {
            if(parseInt(localStorage.getItem(keys[i]))>max)
                max=parseInt(localStorage.getItem(keys[i]));
        }  
    }
    U=parseInt(U)+score;
    if(U>max)
        max=U;
    var until=document.getElementById("until");
    until.innerHTML="<h2>累積金幣:"+U+"個</h2>";  
    localStorage.setItem("until"+NN, U);
    var make=document.getElementById("make");
    make.style.display=null;
    make.addEventListener("click", Return, false);
    var PP=document.getElementById("PP");
    PP.innerHTML="<h2>玩家:<span style=color:blue;>"+NN+"</span></h2>"
    var rank=document.getElementById("rank");
    len = localStorage.length;
    for(var i=0;i< len;i++)
        keys[i] = localStorage.key(i);
    keys.sort();
    for(i=0;i<localStorage.length;i++)
    {
        if(parseInt(localStorage.getItem(keys[i]))==max)
        {
            rank.innerHTML="<h2>排行榜: "+"<span style=color:red;>"+keys[i].substring(5)+"</span>(<span style=color:green;>"+max+"</span>個)<h2>";
        }
    }
}
function Return()
{
    var make=document.getElementById("make");
    make.style.display="none";
    var BB=document.getElementById("body");
    BB.removeChild(images);
    BB.setAttribute("class", "BB");
    var result=document.getElementById("result");
    result.innerHTML="";  
    var now=document.getElementById("now");
    now.innerHTML="";  
    var until=document.getElementById("until");
    until.innerHTML=""; 
    var d1=document.getElementById("d1");
    d1.setAttribute("class", "Title");
    d1.innerHTML="<h1>車車小遊戲</h1>";
    var d2=document.getElementById("d2");
    d2.style.display=null;
    d2.setAttribute("class", "d2");
    var PP=document.getElementById("PP");
    PP.innerHTML="";
    var rank=document.getElementById("rank");
    rank.innerHTML="";
}
function stop()
{
    if(L=="l1")
    {
        d1.innerHTML="挑戰成功!! 獲得金幣+200";
        score+=200;
    }
    else if(L=="l2")
    {
        d1.innerHTML="挑戰成功!! 獲得金幣+600";
        score+=600;
    }
    else{
        d1.innerHTML="挑戰成功!! 獲得金幣+1000";
        score+=1000;
    }
    document.getElementById("wi").play();
    d1.setAttribute("class", "Title")
    setTimeout(function(){d1.innerHTML="";d1.removeAttribute("class");}, 2000);
    var BB=document.getElementById("body");
    var win=document.getElementById(C+"win");
    win.addEventListener("ended", result, false);
    document.getElementById(M).pause();
    clearInterval(Interval);
    clearInterval(inter);
    BB.removeChild(document.getElementById(C));
    win.style.display=null;
    win.play();
    document.getElementById("hr1").style.display="none";
    document.getElementById("hr2").style.display="none";
    document.getElementById("hr3").style.display="none";
    document.getElementById("hr4").style.display="none";
}
function result()
{
    var BB=document.getElementById("body");
    var win=document.getElementById(C+"win");
    win.style.display="none";
    var loca=document.getElementById(L);
    loca.style.display="none";
    BB.setAttribute("class", "result");
    images=document.createElement("img");
    images.setAttribute("src", "images.jpg");
    BB.appendChild(images);
    images.setAttribute("class", "count");
    var result=document.getElementById("result");
    result.innerHTML="<h2>遊戲結果!!</h2>"
    var now=document.getElementById("now");
    now.innerHTML="<h2>本局所得金幣:"+score+"個</h2>";  
    var keys = [];
    var U=0;
    var max=0; 
    var len = localStorage.length;
    for(var i=0;i< len;i++)
        keys[i] = localStorage.key(i);
    keys.sort();
    for(i=0;i<localStorage.length;i++)
    {
        if(keys[i]=="until"+NN)
        {
            U=localStorage.getItem(keys[i]);
        }
        else if(keys[i].startsWith("until"))
        {
            if(parseInt(localStorage.getItem(keys[i]))>max)
                max=parseInt(localStorage.getItem(keys[i]));
        }  
    }
    U=parseInt(U)+score;
    if(U>max)
        max=U;
    var until=document.getElementById("until");
    until.innerHTML="<h2>累積金幣:"+U+"個</h2>";  
    localStorage.setItem("until"+NN, U);
    var make=document.getElementById("make");
    make.style.display=null;
    make.addEventListener("click", Return, false);
    var PP=document.getElementById("PP");
    PP.innerHTML="<h2>玩家:"+NN+"</h2>"
    var rank=document.getElementById("rank");
    len = localStorage.length;
    for(var i=0;i< len;i++)
        keys[i] = localStorage.key(i);
    keys.sort();
    for(i=0;i<localStorage.length;i++)
    {
        if(parseInt(localStorage.getItem(keys[i]))==max)
        {
            rank.innerHTML="<h2>排行榜: "+keys[i].substring(5)+"("+max+"個)<h2>";
        }
    }
}
function move(){
ek=event.keyCode;
var car=C;
if (ek==37) 
{
    if(position==0)
    {
        position=-1;
        if(car=="c1")
            document.getElementById(car).setAttribute("src", car+"1.PNG");
        else
            document.getElementById(car).setAttribute("src", car+"1.png");
        document.getElementById(car).setAttribute("class", "movel1");
        setTimeout(function(){
            document.getElementById(car).removeAttribute("class");
            document.getElementById(car).setAttribute("src", car+".png");
            document.getElementById(car).setAttribute("class", "l1");
            }, 500);
    }
    else if(position==1)
    {
        position=0;
        if(car=="c1")
            document.getElementById(car).setAttribute("src", car+"1.PNG");
        else
            document.getElementById(car).setAttribute("src", car+"1.png");
        document.getElementById(car).setAttribute("class", "movel2");
        setTimeout(function(){
            document.getElementById(car).removeAttribute("class");
            document.getElementById(car).setAttribute("src", car+".png");
            document.getElementById(car).setAttribute("class", "original");
            }, 500);
    }
}
if (ek==39) 
{
    if(position==0)
    {
        position=1;
        if(car=="c1")
            document.getElementById(car).setAttribute("src", car+"2.PNG");
        else
            document.getElementById(car).setAttribute("src", car+"2.png");
        document.getElementById(car).setAttribute("class", "mover1");
        setTimeout(function(){
            document.getElementById(car).removeAttribute("class");
            document.getElementById(car).setAttribute("src", car+".png");
            document.getElementById(car).setAttribute("class", "r1");
            }, 500);
    }
    else if(position==-1)
    {
        position=0;
        if(car=="c1")
            document.getElementById(car).setAttribute("src", car+"2.PNG");
        else
            document.getElementById(car).setAttribute("src", car+"2.png");
        document.getElementById(car).setAttribute("class", "mover2");
        setTimeout(function(){
            document.getElementById(car).removeAttribute("class");
            document.getElementById(car).setAttribute("src", car+".png");
            document.getElementById(car).setAttribute("class", "original");
            }, 500);
    }
}
}
function ppt()
{
    if(CCC==1)
    {
         document.getElementById("power").style.display=null;
         CCC=0;
    }
    else
    {
        document.getElementById("power").style.display="none";
         CCC=1;
    }
}
window.addEventListener("load", start, false);