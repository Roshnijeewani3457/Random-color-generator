const getcolor=()=>{

const randno=Math.floor(Math.random()*16777215);
const randcolor="#"+randno.toString(16);
document.body.style.backgroundColor=randcolor;
document.getElementById('r1').value=randcolor;

}
document.getElementById('b1').addEventListener('click',getcolor);
getcolor();
