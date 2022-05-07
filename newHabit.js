var date            =   new Date();
var day             =   date.getDate();
var month           =   date.getMonth() + 1;
var year            =   date.getFullYear();
var StartDate       =   document.getElementById('today');


if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day; 
StartDate.value = today;