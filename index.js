var Habits          =   document.getElementsByClassName('habit-records');
var HabitSection    =   document.getElementById('habit-section');
var HabitNewPage    =   document.getElementById('HabitNewPage');
// Get the modal
var modal           =   document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

if(Habits==null || Habits.length<1){
    HabitNewPage.style.display='block';
    HabitSection.style.display='none';
}else{
    HabitSection.style.display='block';
    HabitNewPage.style.display='none';
}


