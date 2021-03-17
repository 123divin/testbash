"use strict"

let strings=["spring","guesswhat","ins","check","h sdw"];
console.log(strings);
let c
let d;
let j=strings.map((a,x=0)=>{
     c=a.substring(0,2);
     d=a.substring(a.length,a.length-2);
    a=c+d;
    strings.splice(x,1,a);

    
});
console.log(strings)

/*
let a,b,c,d=-1;
for(a of strings){
    d++;
    if(a.length<4){
        strings.splice(d,1,"");
    }
        
    else{
        b=a.substring(0,2);
        // console.log(b)
         c=a.substring(a.length,a.length-2);
         //console.log(c)
         a=b+c;
         
    }
         

}
*/
//console.log(j)
