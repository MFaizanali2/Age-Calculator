
function age(){
    let d1 = document.getElementById("date").value;
    let m1 = document.getElementById("month").value;
    let y1 = document.getElementById("year").value;

    let date = new Date();

    let d2 = date.getDate();
    let m2 = date.getMonth() + 1;
    let y2 = date.getFullYear();

    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}