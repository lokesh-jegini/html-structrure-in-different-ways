var color=["green","#123abc" ,"rgba(255,0,0,0.5)","#f15025"]
var btn=document.querySelector(".btn");
var content=document.querySelector("span");
btn.addEventListener("click",function(){
    debugger
    var randomNo=getRandomNo();

    document.body.style.backgroundColor=color[randomNo];
    content.textContent=color[randomNo];
    console.log(randomNo);
});
function getRandomNo(){
    debugger
    return Math.floor(Math.random()*color.length);
}
var data=document.querySelector("h3");
data.innerText="hello";
document.write("hellojkjn");
