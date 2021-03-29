"use strict"

const dayjs=require("dayjs")

function Task(id,descriprion,urgent,privating,deadline=undefined){

    this.id=id;
    this.descriprion=descriprion;
    this.urgent=urgent; 
    this.privating=privating;
    this.deadline=dayjs(deadline);
    

}

function tasklist(){

    this.taskslist1=[];
   
    this.add=(Task)=>{
        this.taskslist1.push(Task)
    };
    this.sortAndprint=()=>{

            this.taskslist1.sort((a,b)=>{
            var t=a.deadline;
            var j=b.deadline;

            if(t==undefined)
            return 1;
            if(j==undefined)
            return -1;

            else
            return t-j;
        })
    }

    this.filterPrint=()=>{

         this.fil=this.taskslist1.filter(a=>a.urgent==true);

    }
    
   
  

   
   
}
const task1=new Task(3,"cooking",true,true,'2028-10-29');
const task2=new Task(1,"cleaning",true,false,'2025-10-10');
const task3=new Task(2,"studying",false,true,'2023-10-15');
const task4=new Task(7,"sleeping",false,false);

const mytasks=new tasklist();
mytasks.add(task1)
mytasks.add(task2)
mytasks.add(task3)
mytasks.add(task4)

mytasks.sortAndprint();
mytasks.filterPrint();


   

//console.log(mytasks.taskslist1[0].deadline.getTime())
//mytasks.taskslist1.sort();

console.log(mytasks.taskslist1)
console.log(mytasks.fil)
//console.log(task1.deadline)
debugger;
