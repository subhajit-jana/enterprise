const firstnav=document.getElementById('closebuttonfirstnav');
const fristnavclose=document.getElementById('fullclose');
const roundnavbar=document.getElementById("roundnavbar");
const roundnavbar3=document.getElementById("roundnavbar_3");
const roundnavbar_3_a=document.getElementById('roundnavbar_3_a');
const roundnavbar_3_b=document.getElementById('roundnavbar_3_b');
const roundnavbar_2=document.getElementById('roundnavbar_2');




setInterval(()=>{
    firstnav.classList.remove('pagestartmenu');
    roundnavbar.classList.add('margintiopassremove');


},2000);
fristnavclose.addEventListener('click',()=>{
    firstnav.style.display='none';
    roundnavbar.style.marginTop='20px';
    setInterval(()=>{
        roundnavbar.style.transition='none'  })

},2000);

//drop down remove//
// roundnavbar_2.style.display='none';



let a=0;

    roundnavbar3.addEventListener('click',()=>{
        
        if(a===0){
            roundnavbar_3_a.style.display='none ';

            roundnavbar_3_b.style.display='block';
           
            roundnavbar_2.classList.add('d-none')
            roundnavbar_2.classList.add('d-md-flex')

            a=1;} else
            {
                roundnavbar_3_a.style.display='block';
                roundnavbar_3_b.style.display='none';
                roundnavbar_2.classList.remove('d-none')
                roundnavbar_2.classList.remove('d-lg-flex')
            
                a=0;

            };


    })

const arrowbtn=document.getElementById("arowrotate");
const icona=document.getElementById('arowrotate_a')
let aro=0;
arrowbtn.addEventListener('click',()=>{
 if(aro==0){
    icona.classList.add("rotateclass");
    aro=1;

 }else{
    icona.classList.remove("rotateclass");
    icona.classList.add("rotateclassa");
    aro=0;
 }
})


const arrowbtn1=document.getElementById("arowrotate1");
const icona1=document.getElementById('arowrotate_a1')
let aro1=0;
arrowbtn1.addEventListener('click',()=>{
 if(aro1==0){
    icona1.classList.add("rotateclass");
    aro1=1;

 }else{
    icona1.classList.remove("rotateclass");
    icona1.classList.add("rotateclassa");
    aro1=0;
 }
})


const arrowbtn2=document.getElementById("arowrotate2");
const icona2=document.getElementById('arowrotate_a2')
let aro2=0;
arrowbtn2.addEventListener('click',()=>{
 if(aro2==0){
    icona2.classList.add("rotateclass");
    aro2=1;

 }else{
    icona2.classList.remove("rotateclass");
    icona2.classList.add("rotateclassa");
    aro2=0;
 }
})


const arrowbtn3=document.getElementById("arowrotate3");
const icona3=document.getElementById('arowrotate_a3')
let aro3=0;
arrowbtn3.addEventListener('click',()=>{
 if(aro3==0){
    icona3.classList.add("rotateclass");
    aro3=1;

 }else{
    icona3.classList.remove("rotateclass");
    icona3.classList.add("rotateclassa");
    aro3=0;
 }
})

const arrowbtn4=document.getElementById("arowrotate4");
const icona4=document.getElementById('arowrotate_a4')
let aro4=0;
arrowbtn4.addEventListener('click',()=>{
 if(aro4==0){
    icona4.classList.add("rotateclass");
    aro4=1;

 }else{
    icona4.classList.remove("rotateclass");
    icona4.classList.add("rotateclassa");
    aro4=0;
 }
})

// const border1=document.getElementById('hedsf1');
// const border12=document.getElementById('hedsf12');
// const border122=document.getElementById('hedsf31');

// border1.addEventListener('click',()=>{
//    border1.style.border='2px solid green'
// })