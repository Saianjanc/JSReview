console.log("Welcome to Employee Wage Computation");
let employeeDetails =[
    {
        eid:101,
        name:"SaiAnjan",
        workRecord:[]
    },
    {
        eid:102,
        name:"Yogesh",
        workRecord:[]
    },
    {
        eid:103,
        name:"Uday",
        workRecord:[]
    },
    {
        eid:104,
        name:"Madhu",
        workRecord:[]
    }
]

function attendanceCheck(emp){
        const attendance=Math.round(Math.random())
        if(attendance){return "Present"}
        else{return "Absent"}
}

function computePartTime(attendance){
    if(attendance=="Present"){
    let ran = Math.round(Math.random())
    if (ran) {return 8
    } else {return 4}
    }
    else{return 0}
}

function computeWage(){
    employeeDetails.forEach((ele)=>{
            ele.MonthlyWage=0
            let leave = 0
            let week = 0
            for (let i = 0; i < 30; i++) {
                week++
                let attendance=attendanceCheck(ele)
                let workHrs=computePartTime(attendance)
                
                if(week>7){
                leave=0
                week=0}
                if (attendance=="Absent" && leave<1) {
                    ele.workRecord.push({Day:i+1,workHrs:workHrs,wage:workHrs*20,attendance:attendance})
                    leave=1
                }
                else if(attendance=="Present" || leave==1){
                    attendance="Present"
                    workHrs=computePartTime(attendance)
                    ele.workRecord.push({Day:i+1,workHrs:workHrs,wage:workHrs*20,attendance:attendance})
                }
            ele.MonthlyWage=ele.workRecord.reduce((sum,ele)=>ele.wage+sum,0)
                }
    })
}

computeWage()

for(let i=0;i<30;i++){
console.log(employeeDetails[1].workRecord[i]);}

// can take only one leave in each week
// can have only 2 part time works in week