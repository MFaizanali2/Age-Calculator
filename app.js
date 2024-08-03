
function age(){
    let d1 = document.getElementById("date").value;
    let m1 = document.getElementById("month").value;
    let y1 = document.getElementById("year").value;

    let date = new Date();

    let d2 = date.getDate();
    let m2 = date.getMonth() + 1;
    let y2 = date.getFullYear();

    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(d1 >d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(m1 > m2){
        m2 = m2 - 12;
        y2 = y2 - 1;
    }
    let age = y2 - y1;
    let monthDiff = m2 - m1;
    let dayDiff = d2 - d1;

    document.getElementById("age").innerHTML = `
    Your age is ${age} year ${monthDiff} and ${dayDiff} days`
}