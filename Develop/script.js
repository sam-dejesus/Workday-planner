// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });
var hour = {
 9: document.getElementById('hour-9'),
10: document.getElementById('hour-10'),
11: document.getElementById('hour-11'),
12: document.getElementById('hour-12'),
13: document.getElementById('hour-13'),
14: document.getElementById('hour-14'),
15: document.getElementById('hour-15'),
16: document.getElementById('hour-16'),
17: document.getElementById('hour-17')
};
var today = dayjs();
var time = today.format('H')
$('#currentDay').text(today.format('dddd, MMMM d'));

timeBox = document.querySelectorAll('#hour').id.slice(5);
timeBox.forEach(function (element){
console.log(element.id);
})

if(time == pt){
  timeBox.classList.add('present')
} else if ( time > pt){
  timeBox.classList.add('past')
}else{
  timeBox.classList.add('future')
}
var test = 5;


