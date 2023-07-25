const colors=["#991844","#FF8C00","#FFFF00","#00FF00","#800080","#FF00CC"];
const lyrics=["When I Saw You","In That Dress","Looking So Beautiful","I Don't Deserve This","Darling,You Look","Perfect Tonight..!"];

const title=document.querySelector(".heading");
console.log(title);
const bg=document.querySelector(".container");
console.log(bg);
//  bg.setAttribute("style",`background:${colors[0]}; opacity:0.8;`)
let count=0;
setInterval(()=>{
    switch(count){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:{
            title.innerText = lyrics[count];
            bg.style.background=`${colors[count]}`;
            count++;
            break;
        }
        default:{
            count=0;
        }

    }
},333);
