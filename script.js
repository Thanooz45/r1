let item=document.getElementById('clickMe');
function clicking(){
    item.style.backgroundColor="blue";
    item.textContent="button clicked";
    item.style.color="green";
};
let p1=1;
let p1info=document.getElementById("p1but");
let bids1=document.getElementById("divp1");
function p1button(){
    if(p1===1){
        bids1.style.backgroundColor="seagreen";
        p1info.textContent="Color changed, click again to go back."
        p1=0;
        p1info.style.backgroundColor="yellowgreen";
    }
    else{
        bids1.style.backgroundColor="bisque";
        p1=1;
        p1info.textContent="Click to Change the color of Page";
        p1info.style.backgroundColor="yellow";
    }
    
};
let p2info=document.getElementById("p2but");
let para2=document.getElementById("p2para");
let p2=1;
function p2button(){
    if(p2===1){
        para2.textContent="This is page2 of Task-01";
        para2.style.padding="10px";
        para2.style.backgroundColor="bisque";
        p2info.textContent="hide";
        p2=0;
    }
    else{
        p2info.textContent="Click to see the info";
        p2=1;
        para2.textContent="";
        para2.style.padding="0px";
        para2.style.backgroundColor=rgb(135, 235, 148);
           
    }
    
}
let p3info=document.getElementById("p3but");
let bids3=document.getElementById("bd3");
function p3button(){
    bids3.style.backgroundColor="yellow";
}
let p2head=document.getElementById("p3head");
let btnele=document.getElementById("p3but");
let p3=1;
function p3button(){
    if(p3===1){
        p2head.textContent="Last section of Task-01";
        p3=0;
        btnele.textContent="Go back";

    }
    else{
        p3=1;
        btnele.textContent="click to change heading";
        p2head.textContent="PAGE3";
    }
    

}
