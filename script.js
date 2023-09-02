function spanchanging(spanclass){
    const value=document.getElementsByClassName(spanclass);
    value.style.display="block";
    value.style.position="absolute"
    value.style.bottom="-10px";
    console.log("1");
}
let sign1=0;
let sign2=0;
let sign3=0;
let sign4=0;
// const value=document.getElementsByClassName("cvv-error");
// value.style.bottom="5px";
// value.style.display="block"
function spanretain(spanclass){
    const value=document.getElementsByClassName(spanclass);
    value.style.position="absolute"
    value.style.marginTop="0px"
    value.style.bottom="0px";
    value.style.display="none";
}
const firstn=document.querySelector(".name")
 
// const value=document.getElementsByClassName("cvv-error");
// value.style.bottom="-5px"
// value.style.display="block"
const uname=document.querySelector(".cardnumber")
const row2=document.querySelector(".idnumber")
const row1name=document.querySelector(".user-name")
const row1date=document.querySelector(".user-date")
firstn.addEventListener('keyup',()=>{
    if(firstn.value==null||firstn.value=="")
        row1name.innerHTML="Name"
    else
    row1name.innerHTML=firstn.value;
})

uname.addEventListener('keyup',cardalter)
//    const mod=document.querySelector(".number-error");
//    row2.innerHTML=uname.value;
//    row2.style.color="white";
//    let txt=uname.value
//    if(txt.length==4||txt.length==9||txt.length==14){
//       uname.value=uname.value+" ";
//    }
//    if(uname.value==""||uname.value==null){
//     mod.style.opacity="1";
//     uname.style.border="2px solid hsl(0, 100%, 66%)"
//     mod.innerHTML="Can't be blank"
//     row2.innerHTML="0000 0000 0000 0000";
//     row2.style.color="white";
//     mod.style.transform="translateY(0px)";
//     spanchanging(number-error);
//     sign=1
//     }
//    else if(!uname.value.match(/^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/)){
//     mod.style.opacity="1";
//        mod.innerHTML="Wrong format,numbers only"
//        mod.style.transform="translateY(0px)";
//        uname.style.border="2px solid hsl(0, 100%, 66%)";
//        spanchanging(number-error);
//        sign=1
//    }
//    else{
//     mod.style.opacity="0";
//     mod.style.transform="translateY(-10px)";
//        uname.style.border="2px solid transparent";
//        spanretain(number-error);
//        sign=0
//    }
// })
function cardalter(){
const mod=document.querySelector(".number-error");
   let txt=uname.value
   let output=""
   if(txt.length==16){
      for(let i=0;i<16;i=i+4){
        
        let sep=txt.slice(i,i+4)
        if(i!=12){
        output=output+sep+" ";
        }
        else
        output+=sep;
        
        console.log(output);
      }
      uname.value=output;
   }
   row2.innerHTML=uname.value;
   row2.style.color="white";
   if(uname.value==""||uname.value==null){
    mod.style.opacity="1";
    uname.style.border="2px solid hsl(0, 100%, 66%)"
    mod.innerHTML="Can't be blank"
    row2.innerHTML="0000 0000 0000 0000";
    row2.style.color="white";
    mod.style.transform="translateY(0px)";
    // spanchanging(number-error);
    sign1=1
    return ;
    }
   else if(!uname.value.match(/^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/)){
    mod.style.opacity="1";
       mod.innerHTML="Wrong format,numbers only"
       mod.style.transform="translateY(0px)";
       uname.style.border="2px solid hsl(0, 100%, 66%)";
    //    spanchanging(number-error);
       sign1=1
       return ;
   }
   else{
    mod.style.opacity="0";
    mod.style.transform="translateY(-10px)";
       uname.style.border="2px solid transparent";
    //    spanretain(number-error);
      
       sign1=0
       return ;
   }
}
const udate1=document.querySelector(".dated")
const udate2=document.querySelector(".date2")
udate1.addEventListener('keyup',datealter);
udate2.addEventListener('keyup',datealter);
function datealter(){
    // console.log("button called")
    const mod=document.querySelector(".date-error");
    // if(udate1.value==""||udate1.value==null||udate2.value==""||udate2.value==null)
    // row1date.innerHTML="00"+"/"+"00";
    if((udate1.value==""||udate1.value==null)&&(udate2.value!=""&&udate2.value!=null)){
        row1date.innerHTML="00"+"/"+udate2.value;
    }
    else if((udate2.value==""||udate2.value==null)&&(udate1.value!=""&&udate1.value!=null)){
        row1date.innerHTML=udate1.value+"/"+"00";
    }
    else if(udate1.value==""||udate1.value==null||udate2.value==""||udate2.value==null)
    row1date.innerHTML="00"+"/"+"00";
    else
    row1date.innerHTML=udate1.value+"/"+udate2.value
    if(udate1.value==""||udate1.value==null||udate2.value==""||udate2.value==null){
        sign2=1
        console.log(udate1.value)
        console.log(udate2.value)
        mod.style.opacity="1";
        mod.innerHTML="Can't be blank"
        mod.style.transform="translateY(0px)";
        udate1.style.border="2px solid hsl(0, 100%, 66%)";
        udate2.style.border="2px solid hsl(0, 100%, 66%)";
        // spanchanging(date-error);
    }
    else if(((!udate1.value.match(/^[0-2]{1}[0-9]{1}$/))&&(!udate1.value.match(/^[0-3]{1}[0-1]{1}$/)))||(!udate2.value.match(/^[0-9]{2}$/))){
        console.log(!udate1.value.match(/^[0-2]{1}[0-9]{1}$/))
        console.log(!udate1.value.match(/^[0-3]{1}[0-9]{1}$/))

        mod.style.opacity="1";
        // console.log(123)
        // console.log(udate2.value)
        mod.innerHTML="Wrong format,numbers only"
        mod.style.transform="translateY(0px)";
      
        udate1.style.border="2px solid hsl(0, 100%, 66%)";
        udate2.style.border="2px solid hsl(0, 100%, 66%)";
        // spanchanging(date-error);
        sign2=1
    }
   
    else{
        mod.style.opacity="0";
        mod.style.transform="translateY(-10px)";
        udate1.style.border="2px solid transparent";
        udate2.style.border="2px solid transparent";
        // spanretain(date-error);
        
        sign2=0
    }
}

// const ucvv=document.querySelector(".cvc")
// ucvv.addEventListener('input',()=>{
//     const mod=document.querySelector(".cvv-error")
//     if(!ucvv.value.match(/^[0-9]{3}$/)){
//         ucvv.style.border="2px solid red"
//         mod.innerHTML="Wrong format,numbers only"
//     }
//     else if(ucvv.value==""||ucvv.value==null){
//         ucvv.style.border="2px solid red"
//         mod.innerHTML="Can't be blank"
//     }
//     else{
//         mod.style.display="none"
//         ucvv.style.border="2px solid black";
//     }
// })
const userv=document.querySelector(".three2")
// userv.innerHTML="0"
function cvvalter(){
    const ucvv=document.querySelector(".cvc")
    const mod=document.querySelector(".cvv-error")
    userv.innerHTML=ucvv.value;
    userv.style.color="white"
    // if(ucvv.value==""||ucvv.value==null){
    //     userv.innerHTML="000";
    //     userv.style.color="white"
    // }
         if(ucvv.value==""||ucvv.value==null){
        mod.style.opacity="1";
        ucvv.style.border="2px solid hsl(0, 100%, 66%)"
        mod.innerHTML="Can't be blank"
        userv.innerHTML="000";
        mod.style.transform="translateY(0px)";
        userv.style.color="white"
        // spanchanging("cvv-error");
        sign3=1
        return ;
        }
        else if(!ucvv.value.match(/^[0-9]{3}$/)){
            mod.style.opacity="1";
            ucvv.style.border="2px solid hsl(0, 100%, 66%)"
            mod.style.transform="translateY(0px)";
            mod.innerHTML="Wrong format,numbers only"
            
            // spanchanging("cvv-error");
            // userv.innerHTML=ucvv.value;
            // userv.style.color="white"
            sign3=1
            return ;
        }
        
        else{
            mod.style.opacity="0";
            mod.style.transform="translateY(-10px)";
            ucvv.style.border="2px solid transparent";
            // spanretain("cvv-error");
            sign3=0
            return ;
        }
}
const stname=document.querySelector(".name");
stname.addEventListener("keyup",namealter);
function namealter(){
    let mod=document.querySelector(".name-error");
    if(stname.value==""||stname.value==null)
    {
        sign4=1;
        mod.innerHTML="Can't be blank";
        mod.style.opacity="1";
        stname.style.border="2px solid hsl(0, 100%, 66%)"
        mod.style.transform="translateY(0px)";
    }
    else{
        sign4=0;
        // mod.innerHTML="Can't be blank";
        mod.style.opacity="0";
        stname.style.border="2px solid transparent"
        mod.style.transform="translateY(-10px)";
    }
}
const ucvv=document.querySelector(".cvc")
const datan=document.querySelector(".name")
const donewith=document.querySelector(".end")
donewith.addEventListener("click",validateshow);
function validateshow(){
    cardalter();
    datealter();
    cvvalter();
    namealter();
    if(sign1==0&&sign2==0&&sign3==0&&sign4==0){
        const fin=document.querySelector(".thanks")
        fin.style.transform="translateY(0%)"
        fin.style.zIndex="20";
        fin.style.opacity="1";
    }
}


