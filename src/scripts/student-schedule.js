let calendar = document.getElementById("calendar");
let todayDate = new Date("12/05/2023");
let todayMonth = parseInt(todayDate.getMonth()+1);
let todayYear = parseInt(todayDate.getFullYear());
let todayNextMonth, todayPrevMonth;

if(todayMonth==12){
    todayNextMonth = 1;
}
else{
    todayNextMonth = todayMonth+1;
}
  
if(todayMonth==1){
    todayPrevMonth = 12;
}
else{
    todayPrevMonth = todayMonth-1;
}

let calendarShow = todayMonth;
console.log("\nYEEEES  "+calendarShow+"year:   "+todayYear);

let settingDate = (date, day) =>{
    date = new Date(date);
    date.setDate(day);
    date.setHours(23);
    return date;
}

let getDatesBetween = (date1, date2) => {
    let range1 = new Date(date1);
    let range2 = new Date(date2);
    date1 = settingDate(date1, 31); //date1 31st jan 2023
    date2 = settingDate(date2, 31); //date1 31st jan 2024
    let temp;
    let dates = [];
    while(date1<=date2){
        //check if end of month is equal to 31 or not...
        //...if it is last day of month isn't 31, it'll give a date of (31-(lastday)) days after the last day of that month
        //... else it is last day of month then add that day directly
        if(date1.getDate()!=31){
            temp=settingDate(date1,0); // 0 gives last day of previous month
            if(temp>=range1 && temp<=range2) 
                dates.push(temp); 
            date1=settingDate(date1,31); //increment date to last day of same month
        }else{
            temp= new Date(date1);
            if(temp>=range1 && temp<=range2)
                dates.push(temp);
            date1.setMonth(date1.getMonth() + 1); //increment date to next month
        }
    }
    console.log(dates);
    let content = "";
    if(todayPrevMonth==parseInt(range1.getMonth()+1) && todayYear==parseInt(range1.getFullYear())){
        content += "<div class='calendar-btns'><button onclick='callprev()' id='calendar-prev' disabled>Prev</button> <span>|</span> <button onclick='callnext()' id='calendar-next'>Next</button> </div>";
    }
    else if (todayNextMonth==parseInt((range2.getMonth()+1)) && todayYear==parseInt(range2.getFullYear()+1)){
        content += "<div class='calendar-btns'><button onclick='callprev()' id='calendar-prev'>Prev</button> <span>|</span> <button onclick='callnext()' id='calendar-next' disabled>Next</button> </div>";
    }
    else{
        console.log("youssef");
        content += "<div class='calendar-btns'><button onclick='callprev()' id='calendar-prev'>Prev</button> <span>|</span> <button onclick='callnext()' id='calendar-next'>Next</button> </div>";
    } 
        let weekDays = [
        { shortDay: 'Mon', fullDay: 'Monday' },
        { shortDay: 'Tue', fullDay: 'Tuesday' },
        { shortDay: 'Wed', fullDay: 'Wednesday' },
        { shortDay: 'Thurs', fullDay: 'Thursday' },
        { shortDay: 'Fri', fullDay: 'Friday' },
        { shortDay: 'Sat', fullDay: 'Saturday' },
        { shortDay: 'Sun', fullDay: 'Sunday' }
    ];
    let lastDate, firstDate;
    for(let i=0; i<dates.length; i++){
        lastDate=dates[i];
        firstDate = new Date(dates[i].getFullYear(), dates[i].getMonth(), 1);
        content += "<div class='calendar-div' id='calendar-table_" + (i+1)+"'>";
        content += "<h2>" + firstDate.toString().split(" ")[1]+"-"+firstDate.getFullYear()+"</h2>";
        content += "<table class='calendar-table'>";
        content += "<thead>";
        weekDays.map(item=>{
            content += "<th>" + item.fullDay + "</th>";
        });
        content += "</thead>";
        content += "<tbody>";
        let j=1;
        let displayNum, idMonth;
        while(j<=lastDate.getDate()){
            content += "<tr>";
                for(let k=0; k<7; k++){
                    if(j<10) {displayNum="0"+j;}
                    else {displayNum=j;}
                    if(j==1){
                        if(firstDate.toString().split(" ")[0] == weekDays[k].shortDay){
                            content += "<td>" + displayNum + "</td>";
                            j++;
                        }else{
                            content += "<td></td>";
                        }                          
                    }else if(j>lastDate.getDate()){
                        content += "<td></td>"; 
                    }else{
                        content += "<td>" + displayNum + "</td>";
                        j++;
                    }
                }
            content += "</tr>";
            j++;
        }
        content += "</tbody>";
        content += "</table>";
        content += "</div>";
    }
    return content;
}

let callnext = () =>{
    let alltable= document.getElementsByClassName('calendar-div');
    document.getElementById('calendar-prev').disabled = false;
    calendarShow ++;
    
    if(calendarShow<=alltable.length){
        for(let i=0; i<alltable.length; i++){
            alltable[i].style.display="none";
        }
        document.getElementById('calendar-table_'+calendarShow).style.display="block";    
        if(calendarShow==alltable.length){
            document.getElementById('calendar-next').disabled = true;
        }
    }
}

let callprev = () =>{
    let alltable= document.getElementsByClassName('calendar-div');
    document.getElementById('calendar-next').disabled = false;
    calendarShow --;
    
    if(calendarShow >= 1){
        for(let i=0; i<alltable.length; i++){
            alltable[i].style.display="none"
        }
        document.getElementById('calendar-table_'+calendarShow).style.display="block";
        if(calendarShow==1){
            document.getElementById('calendar-prev').disabled = true;
        }
    }
}

//MAKE SURE TO ALWAYS CHOOSE SECOND RANGE AS 1st MONTH OF A YEAR (or else functions need to be changed)
let content = getDatesBetween("01/01/2023","01/01/2025");  //(month,day,year)
calendar.innerHTML = content;

document.getElementById('calendar-table_'+calendarShow).style.display="block";

