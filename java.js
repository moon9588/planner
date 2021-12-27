var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

function refreashTime () {
    const timeDisplay = document.getElementById("time")
    const datesring = new Date().toLocaleString();
    const formattedstring = datestring.replace(",","-")
    timeDisplay.textContent = formattedstring;
}

setInterval(refreashTime, 1000)

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.form(rows).forEach (row => {
    let
    rowIdString = row.id,
    rowHours;
    if (rowIdString){
        rowHours = parseInt (rowIdString);
    }

    if (rowHour) {
        // added row id and sets colors 
        if (currentHour === rowHour) {
            setColor (row, "red");
        } else if (( currentHour < rowHours) && (currentHour > rowHour - 6)){
            setColor (row, "green");
        } else if (( currentHour > rowHours) && (currentHour > rowHour + 6)){
            setColor (row, "lightgrey");
        } else  {
            setColor (row, "white");
        }