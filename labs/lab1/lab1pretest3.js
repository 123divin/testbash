"use strict"


const sqlite = require('sqlite3');

const db=new sqlite.Database('tasks.db',(err)=>{
    if(err) throw err;
});

let tasklist=[];


let checking='phone';

db.all('SELECT * FROM tasks',(err,rows)=>{


    if(err) throw(err);
    else{


        tasklist=rows;
        console.log("");
        console.log("this is the list of all the tasks in the database");
        console.log(tasklist);
       


        console.log("----------------------------------")
        console.log("after date 15/03/2021 we had these tasks")
        console.log(tasklist.filter(a=>a.deadline < '2021-03-15')); //this is the easiest and quickest way
        


            console.log("___________________________________")
            console.log("the tasks with word PHONE IS ")
       tasklist.filter((a)=>{
           if(a.description.toString().includes('phone'))
                console.log(a);
       });
    }
})


db.close();
debugger;