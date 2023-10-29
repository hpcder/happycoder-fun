function answerNo()
{
    document.getElementById("answer").innerHTML="i see , welp alright :'(((( ";
}

// var b = document.querySelector("#jump");
// b.addEventListener("click",change)

// function change()
// {
//     let i=Math.abs(Math.floor(Math.random()*windowWidth-55));
//     let j=Math.abs(Math.floor(Math.random()*windowHeight-21));
//     console.log('here',i,j,b.style.left,b.style.top);
//     b.style.left=i+'px';
//     b.style.top=j+'px';
// }


function move(){
    const c = document.querySelector(".container");
const b = document.querySelector("button");

function change(){
    const
    {width : cWidth, height: cHeight}=c.getBoundingClientRect(),
    {width : bWidth, height: bHeight}=b.getBoundingClientRect(),
    i= Math.floor(Math.random()*(cWidth - bWidth))+1,
    j = Math.floor(Math.random()*(cHeight - bHeight))+1;

    b.style.left=i+"px";
    b.style.top=j+"px";
}
b.addEventListener("click",change);
}
// const c = document.querySelector(".container");
// const b = document.querySelector("button");

// function change(){
//     const
//     {width : cWidth, height: cHeight}=c.getBoundingClientRect(),
//     {width : bWidth, height: bHeight}=b.getBoundingClientRect(),
//     i= Math.floor(Math.random()*(cWidth - bWidth))+1,
//     j = Math.floor(Math.random()*(cHeight - bHeight))+1;

//     b.style.left=i+"px";
//     b.style.top=j+"px";
// }
// b.addEventListener("click",change);